require('dotenv').config();
const express = require('express');
const path = require('path');
const hotels = require('./data/hotels');

const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ===========================
// API: ホテル検索
// ===========================

// 全ホテル一覧取得
app.get('/api/hotels', (req, res) => {
  const {
    area,        // "苗場" | "越後湯沢" | "all"
    guests,      // 宿泊人数
    checkin,     // チェックイン日 (YYYY-MM-DD)
    checkout,    // チェックアウト日 (YYYY-MM-DD)
    budget,      // 1泊あたりの予算上限
    sort,        // "price" | "rating" | "distance"
    tags,        // タグフィルター（カンマ区切り）
    onlyAvailable // "true" で空室のみ表示
  } = req.query;

  let results = JSON.parse(JSON.stringify(hotels)); // deep copy

  const guestCount = parseInt(guests) || 10;
  const maxBudget = parseInt(budget) || Infinity;

  // エリアフィルター
  if (area && area !== 'all') {
    results = results.filter(h => h.area === area);
  }

  // 各ホテルの空室状況を計算
  results = results.map(hotel => {
    // 宿泊人数を収容できる部屋の組み合わせを検索
    const availableRooms = hotel.roomTypes
      .filter(rt => rt.bookedRooms < rt.totalRooms)
      .map(rt => ({
        ...rt,
        availableCount: rt.totalRooms - rt.bookedRooms
      }));

    // 10名を収容できる組み合わせを見つける
    const combinations = findRoomCombinations(availableRooms, guestCount, maxBudget);

    return {
      ...hotel,
      availableRooms,
      combinations,
      hasAvailability: combinations.length > 0,
      cheapestCombination: combinations.length > 0
        ? combinations.reduce((min, c) => c.totalPrice < min.totalPrice ? c : min, combinations[0])
        : null
    };
  });

  // 空室のみフィルター
  if (onlyAvailable === 'true') {
    results = results.filter(h => h.hasAvailability);
  }

  // タグフィルター
  if (tags) {
    const tagList = tags.split(',');
    results = results.filter(h => tagList.some(t => h.tags.includes(t)));
  }

  // ソート
  if (sort === 'price') {
    results.sort((a, b) => {
      const priceA = a.cheapestCombination ? a.cheapestCombination.totalPrice : Infinity;
      const priceB = b.cheapestCombination ? b.cheapestCombination.totalPrice : Infinity;
      return priceA - priceB;
    });
  } else if (sort === 'rating') {
    results.sort((a, b) => b.rating - a.rating);
  }

  // チェックイン・チェックアウトから宿泊数を計算
  let nights = 4; // デフォルト: 7/23-7/27 = 4泊
  if (checkin && checkout) {
    const ci = new Date(checkin);
    const co = new Date(checkout);
    nights = Math.ceil((co - ci) / (1000 * 60 * 60 * 24));
  }

  res.json({
    searchParams: {
      area: area || 'all',
      guests: guestCount,
      checkin: checkin || '2026-07-23',
      checkout: checkout || '2026-07-27',
      nights,
      budget: maxBudget === Infinity ? null : maxBudget
    },
    totalResults: results.length,
    availableCount: results.filter(h => h.hasAvailability).length,
    hotels: results.map(h => ({
      ...h,
      // 宿泊数を反映した料金計算
      combinations: h.combinations.map(c => ({
        ...c,
        totalPriceAllNights: c.totalPrice * nights,
        pricePerPersonPerNight: Math.ceil(c.totalPrice / guestCount)
      })),
      cheapestCombination: h.cheapestCombination ? {
        ...h.cheapestCombination,
        totalPriceAllNights: h.cheapestCombination.totalPrice * nights,
        pricePerPersonPerNight: Math.ceil(h.cheapestCombination.totalPrice / guestCount)
      } : null
    }))
  });
});

// 個別ホテル詳細
app.get('/api/hotels/:id', (req, res) => {
  const hotel = hotels.find(h => h.id === parseInt(req.params.id));
  if (!hotel) {
    return res.status(404).json({ error: 'ホテルが見つかりません' });
  }
  res.json(hotel);
});

// ===========================
// ヘルパー: 部屋の組み合わせ検索
// ===========================
function findRoomCombinations(availableRooms, targetGuests, maxBudget) {
  const combinations = [];

  // シンプルなアプローチ: 各部屋タイプで何室必要か計算
  // 1部屋で全員収容できるケース
  for (const room of availableRooms) {
    if (room.capacity >= targetGuests && room.availableCount >= 1) {
      const combo = {
        rooms: [{ ...room, useCount: 1 }],
        totalCapacity: room.capacity,
        totalPrice: room.pricePerNight,
        roomSummary: `${room.type} × 1室`
      };
      if (combo.totalPrice <= maxBudget) {
        combinations.push(combo);
      }
    }
  }

  // 同じ部屋タイプを複数室使うケース
  for (const room of availableRooms) {
    const roomsNeeded = Math.ceil(targetGuests / room.capacity);
    if (roomsNeeded > 1 && roomsNeeded <= room.availableCount) {
      const combo = {
        rooms: [{ ...room, useCount: roomsNeeded }],
        totalCapacity: room.capacity * roomsNeeded,
        totalPrice: room.pricePerNight * roomsNeeded,
        roomSummary: `${room.type} × ${roomsNeeded}室`
      };
      if (combo.totalPrice <= maxBudget) {
        combinations.push(combo);
      }
    }
  }

  // 2種類の部屋を組み合わせるケース
  for (let i = 0; i < availableRooms.length; i++) {
    for (let j = i + 1; j < availableRooms.length; j++) {
      const room1 = availableRooms[i];
      const room2 = availableRooms[j];

      // room1を1室 + room2を必要数
      for (let r1Count = 1; r1Count <= room1.availableCount; r1Count++) {
        const remaining = targetGuests - (room1.capacity * r1Count);
        if (remaining <= 0) break;

        const r2Count = Math.ceil(remaining / room2.capacity);
        if (r2Count <= room2.availableCount && r2Count > 0) {
          const combo = {
            rooms: [
              { ...room1, useCount: r1Count },
              { ...room2, useCount: r2Count }
            ],
            totalCapacity: (room1.capacity * r1Count) + (room2.capacity * r2Count),
            totalPrice: (room1.pricePerNight * r1Count) + (room2.pricePerNight * r2Count),
            roomSummary: `${room1.type} × ${r1Count}室 + ${room2.type} × ${r2Count}室`
          };
          if (combo.totalCapacity >= targetGuests && combo.totalPrice <= maxBudget) {
            combinations.push(combo);
          }
        }
      }
    }
  }

  // 重複除去 & 安い順ソート
  const unique = [];
  const seen = new Set();
  for (const c of combinations) {
    if (!seen.has(c.roomSummary)) {
      seen.add(c.roomSummary);
      unique.push(c);
    }
  }

  return unique.sort((a, b) => a.totalPrice - b.totalPrice);
}

// ===========================
// フォールバック: SPAルーティング
// ===========================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🏔️  フジロック宿泊検索アプリが起動しました！`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`\n検索対象: 苗場エリア・越後湯沢駅周辺`);
  console.log(`デフォルト: 7/23チェックイン〜7/27チェックアウト（4泊）, 10名\n`);
});
