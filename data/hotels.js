// 苗場・越後湯沢エリアの実在する宿泊施設データ
// フジロック向け（苗場スキー場周辺 + 越後湯沢駅周辺）
const hotels = [
  // ========================================
  // 苗場エリア（会場至近）
  // ========================================
  {
    id: 1,
    name: "苗場プリンスホテル",
    nameEn: "Naeba Prince Hotel",
    area: "苗場",
    areaDetail: "苗場スキー場直結",
    distanceToVenue: "徒歩0分（会場隣接）",
    address: "新潟県南魚沼郡湯沢町三国202",
    phone: "025-789-2211",
    description: "フジロック会場に最も近い大型リゾートホテル。会場まで徒歩圏内で、フジロック期間中は特別プランあり。温泉大浴場、複数レストラン完備。",
    amenities: ["温泉", "レストラン", "駐車場", "Wi-Fi", "コンビニ", "ランドリー", "送迎バス"],
    roomTypes: [
      { type: "ツインルーム", capacity: 2, pricePerNight: 25000, totalRooms: 50, bookedRooms: 48 },
      { type: "トリプルルーム", capacity: 3, pricePerNight: 35000, totalRooms: 30, bookedRooms: 29 },
      { type: "ファミリールーム", capacity: 4, pricePerNight: 45000, totalRooms: 20, bookedRooms: 18 },
      { type: "デラックスルーム（6名）", capacity: 6, pricePerNight: 65000, totalRooms: 10, bookedRooms: 8 },
      { type: "スイートルーム（8名）", capacity: 8, pricePerNight: 120000, totalRooms: 5, bookedRooms: 4 }
    ],
    rating: 4.2,
    reviewCount: 1856,
    imageUrl: "https://placehold.co/400x250/2d5016/white?text=苗場プリンスホテル",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/6498/6498.html",
      jalan: "https://www.jalan.net/yad325498/",
      official: "https://www.princehotels.co.jp/naeba/"
    },
    tags: ["会場至近", "大型", "温泉", "人気"]
  },
  {
    id: 2,
    name: "ロッヂ丘",
    nameEn: "Lodge Oka",
    area: "苗場",
    areaDetail: "苗場スキー場周辺",
    distanceToVenue: "徒歩約10分",
    address: "新潟県南魚沼郡湯沢町三国478-4",
    phone: "025-789-2545",
    description: "苗場エリアのアットホームなロッジ。リーズナブルな料金設定で、グループ利用に最適。自炊可能なキッチンも完備。",
    amenities: ["駐車場", "Wi-Fi", "自炊キッチン", "乾燥室"],
    roomTypes: [
      { type: "和室8畳（4名）", capacity: 4, pricePerNight: 8000, totalRooms: 6, bookedRooms: 5 },
      { type: "和室12畳（6名）", capacity: 6, pricePerNight: 12000, totalRooms: 4, bookedRooms: 3 },
      { type: "大部屋（10名）", capacity: 10, pricePerNight: 20000, totalRooms: 2, bookedRooms: 1 }
    ],
    rating: 3.8,
    reviewCount: 234,
    imageUrl: "https://placehold.co/400x250/4a6741/white?text=ロッヂ丘",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/",
      jalan: "https://www.jalan.net/",
      official: ""
    },
    tags: ["リーズナブル", "グループ向け", "自炊可"]
  },
  {
    id: 3,
    name: "苗場ホワイトパレス",
    nameEn: "Naeba White Palace",
    area: "苗場",
    areaDetail: "苗場スキー場周辺",
    distanceToVenue: "徒歩約15分",
    address: "新潟県南魚沼郡湯沢町三国",
    phone: "025-789-3232",
    description: "苗場の老舗宿泊施設。フジロック期間中はリピーターに支持される穴場的存在。グループ向けの大部屋あり。",
    amenities: ["駐車場", "Wi-Fi", "大浴場", "食堂"],
    roomTypes: [
      { type: "和室8畳", capacity: 4, pricePerNight: 9500, totalRooms: 8, bookedRooms: 7 },
      { type: "和室10畳", capacity: 5, pricePerNight: 12000, totalRooms: 5, bookedRooms: 5 },
      { type: "和洋室（8名）", capacity: 8, pricePerNight: 22000, totalRooms: 3, bookedRooms: 2 }
    ],
    rating: 3.6,
    reviewCount: 187,
    imageUrl: "https://placehold.co/400x250/5a7a50/white?text=苗場ホワイトパレス",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/",
      jalan: "https://www.jalan.net/",
      official: ""
    },
    tags: ["グループ向け", "大浴場"]
  },
  {
    id: 4,
    name: "ペンション もみの木",
    nameEn: "Pension Mominoki",
    area: "苗場",
    areaDetail: "苗場スキー場周辺",
    distanceToVenue: "車約5分",
    address: "新潟県南魚沼郡湯沢町三国",
    phone: "025-789-4411",
    description: "自然に囲まれた静かなペンション。手作り料理が好評。少人数グループに最適。",
    amenities: ["駐車場", "Wi-Fi", "朝食付き", "BBQ設備"],
    roomTypes: [
      { type: "ツインルーム", capacity: 2, pricePerNight: 7500, totalRooms: 5, bookedRooms: 4 },
      { type: "4人部屋", capacity: 4, pricePerNight: 14000, totalRooms: 3, bookedRooms: 2 },
      { type: "6人部屋", capacity: 6, pricePerNight: 20000, totalRooms: 2, bookedRooms: 1 }
    ],
    rating: 4.3,
    reviewCount: 145,
    imageUrl: "https://placehold.co/400x250/6b8f5e/white?text=ペンション+もみの木",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/",
      jalan: "https://www.jalan.net/",
      official: ""
    },
    tags: ["ペンション", "食事付き", "静か"]
  },
  {
    id: 5,
    name: "ロッジ ふじや",
    nameEn: "Lodge Fujiya",
    area: "苗場",
    areaDetail: "苗場スキー場周辺",
    distanceToVenue: "徒歩約20分",
    address: "新潟県南魚沼郡湯沢町三国",
    phone: "025-789-5500",
    description: "フジロックファンに人気のロッジ。大人数向けプランが充実。共用リビングでの交流も魅力。",
    amenities: ["駐車場", "Wi-Fi", "共用キッチン", "共用リビング", "乾燥室"],
    roomTypes: [
      { type: "ドミトリー（1名）", capacity: 1, pricePerNight: 4500, totalRooms: 20, bookedRooms: 18 },
      { type: "和室6畳（3名）", capacity: 3, pricePerNight: 9000, totalRooms: 5, bookedRooms: 4 },
      { type: "大部屋（10名）", capacity: 10, pricePerNight: 25000, totalRooms: 2, bookedRooms: 0 },
      { type: "貸切（15名）", capacity: 15, pricePerNight: 45000, totalRooms: 1, bookedRooms: 0 }
    ],
    rating: 4.0,
    reviewCount: 312,
    imageUrl: "https://placehold.co/400x250/3d6b35/white?text=ロッジ+ふじや",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/",
      jalan: "https://www.jalan.net/",
      official: ""
    },
    tags: ["グループ向け", "リーズナブル", "ドミトリー", "貸切可"]
  },

  // ========================================
  // 越後湯沢駅周辺エリア
  // ========================================
  {
    id: 6,
    name: "越後湯沢 HATAGO井仙",
    nameEn: "Echigo Yuzawa HATAGO Isen",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅西口徒歩1分",
    distanceToVenue: "シャトルバス約40分",
    address: "新潟県南魚沼郡湯沢町湯沢2455",
    phone: "025-784-3361",
    description: "越後湯沢駅から徒歩1分の好立地。地元食材を活かした料理と天然温泉が自慢。フジロックへのシャトルバス乗り場も近い。",
    amenities: ["温泉", "レストラン", "駐車場", "Wi-Fi", "駅近"],
    roomTypes: [
      { type: "和室（2名）", capacity: 2, pricePerNight: 18000, totalRooms: 8, bookedRooms: 7 },
      { type: "和洋室（4名）", capacity: 4, pricePerNight: 32000, totalRooms: 5, bookedRooms: 4 },
      { type: "特別室（6名）", capacity: 6, pricePerNight: 50000, totalRooms: 2, bookedRooms: 1 }
    ],
    rating: 4.5,
    reviewCount: 687,
    imageUrl: "https://placehold.co/400x250/8b6914/white?text=HATAGO井仙",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/8078/8078.html",
      jalan: "https://www.jalan.net/yad302578/",
      official: "https://hatago-isen.jp/"
    },
    tags: ["駅近", "温泉", "高評価", "料理自慢"]
  },
  {
    id: 7,
    name: "NASPAニューオータニ",
    nameEn: "NASPA New Otani",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅から送迎バス3分",
    distanceToVenue: "シャトルバス約45分",
    address: "新潟県南魚沼郡湯沢町湯沢2117-9",
    phone: "025-780-6111",
    description: "ニューオータニグループの大型リゾートホテル。充実した温泉施設とプール、多彩なレストランが魅力。グループ向けの広い部屋あり。",
    amenities: ["温泉", "プール", "レストラン", "駐車場", "Wi-Fi", "送迎バス", "エステ"],
    roomTypes: [
      { type: "スタンダードツイン", capacity: 2, pricePerNight: 22000, totalRooms: 40, bookedRooms: 37 },
      { type: "デラックスツイン", capacity: 3, pricePerNight: 30000, totalRooms: 20, bookedRooms: 18 },
      { type: "ファミリールーム", capacity: 5, pricePerNight: 45000, totalRooms: 10, bookedRooms: 8 },
      { type: "和洋スイート（8名）", capacity: 8, pricePerNight: 95000, totalRooms: 3, bookedRooms: 2 }
    ],
    rating: 4.3,
    reviewCount: 1243,
    imageUrl: "https://placehold.co/400x250/1a4a6b/white?text=NASPAニューオータニ",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/6631/6631.html",
      jalan: "https://www.jalan.net/yad315631/",
      official: "https://www.naspa.co.jp/"
    },
    tags: ["大型", "温泉", "プール", "高級"]
  },
  {
    id: 8,
    name: "湯沢グランドホテル",
    nameEn: "Yuzawa Grand Hotel",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅西口徒歩3分",
    distanceToVenue: "シャトルバス約40分",
    address: "新潟県南魚沼郡湯沢町湯沢2494",
    phone: "025-785-5511",
    description: "越後湯沢駅から徒歩3分。28種の温泉が楽しめる大浴場が自慢。バイキングスタイルの食事も人気。",
    amenities: ["温泉", "レストラン", "駐車場", "Wi-Fi", "駅近", "売店"],
    roomTypes: [
      { type: "和室8畳（3名）", capacity: 3, pricePerNight: 14000, totalRooms: 25, bookedRooms: 23 },
      { type: "和室12畳（5名）", capacity: 5, pricePerNight: 22000, totalRooms: 15, bookedRooms: 13 },
      { type: "和洋室（6名）", capacity: 6, pricePerNight: 30000, totalRooms: 8, bookedRooms: 6 },
      { type: "特別和室（10名）", capacity: 10, pricePerNight: 55000, totalRooms: 3, bookedRooms: 1 }
    ],
    rating: 4.1,
    reviewCount: 932,
    imageUrl: "https://placehold.co/400x250/2a5a7a/white?text=湯沢グランドホテル",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/7063/7063.html",
      jalan: "https://www.jalan.net/yad312063/",
      official: "https://www.yuzawa-grand.com/"
    },
    tags: ["駅近", "温泉充実", "バイキング", "グループ向け"]
  },
  {
    id: 9,
    name: "越後のお宿 いなもと",
    nameEn: "Echigo no Oyado Inamoto",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅東口徒歩1分",
    distanceToVenue: "シャトルバス約40分",
    address: "新潟県南魚沼郡湯沢町湯沢2497",
    phone: "025-785-2001",
    description: "駅直結の老舗温泉旅館。源泉かけ流しの温泉と、越後の旬を活かした懐石料理が堪能できる。",
    amenities: ["温泉（源泉かけ流し）", "レストラン", "駐車場", "Wi-Fi", "駅直結"],
    roomTypes: [
      { type: "和室8畳（2名）", capacity: 2, pricePerNight: 16000, totalRooms: 15, bookedRooms: 14 },
      { type: "和室10畳（4名）", capacity: 4, pricePerNight: 28000, totalRooms: 10, bookedRooms: 9 },
      { type: "和室12畳（5名）", capacity: 5, pricePerNight: 35000, totalRooms: 5, bookedRooms: 4 },
      { type: "特別室（8名）", capacity: 8, pricePerNight: 75000, totalRooms: 2, bookedRooms: 1 }
    ],
    rating: 4.4,
    reviewCount: 756,
    imageUrl: "https://placehold.co/400x250/7a4a2a/white?text=いなもと",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/7045/7045.html",
      jalan: "https://www.jalan.net/yad322045/",
      official: "https://www.inamoto.co.jp/"
    },
    tags: ["駅直結", "源泉かけ流し", "懐石料理", "老舗"]
  },
  {
    id: 10,
    name: "松泉閣 花月",
    nameEn: "Shosenkan Kagetsu",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅西口徒歩5分",
    distanceToVenue: "シャトルバス約40分",
    address: "新潟県南魚沼郡湯沢町湯沢318-5",
    phone: "025-784-2540",
    description: "純和風の温泉旅館。庭園露天風呂と創作和食が評判。落ち着いた雰囲気でゆったり過ごせる。",
    amenities: ["温泉（露天風呂）", "レストラン", "駐車場", "Wi-Fi", "庭園"],
    roomTypes: [
      { type: "和室8畳", capacity: 3, pricePerNight: 20000, totalRooms: 10, bookedRooms: 9 },
      { type: "和室10畳", capacity: 4, pricePerNight: 28000, totalRooms: 8, bookedRooms: 7 },
      { type: "特別和室（6名）", capacity: 6, pricePerNight: 48000, totalRooms: 3, bookedRooms: 2 }
    ],
    rating: 4.6,
    reviewCount: 523,
    imageUrl: "https://placehold.co/400x250/6b4a14/white?text=松泉閣+花月",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/7070/7070.html",
      jalan: "https://www.jalan.net/yad332070/",
      official: "https://www.kagetsu-yuzawa.jp/"
    },
    tags: ["露天風呂", "高評価", "和風旅館", "料理自慢"]
  },
  {
    id: 11,
    name: "ホテルスポーリア湯沢",
    nameEn: "Hotel Sporlia Yuzawa",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅西口徒歩3分",
    distanceToVenue: "シャトルバス約40分",
    address: "新潟県南魚沼郡湯沢町湯沢2442",
    phone: "025-785-5511",
    description: "駅チカでリーズナブルなビジネスホテルタイプ。シンプルで清潔な客室。コンビニも近く利便性が高い。",
    amenities: ["大浴場", "駐車場", "Wi-Fi", "駅近", "自販機"],
    roomTypes: [
      { type: "シングル", capacity: 1, pricePerNight: 7000, totalRooms: 20, bookedRooms: 18 },
      { type: "ツイン", capacity: 2, pricePerNight: 12000, totalRooms: 15, bookedRooms: 13 },
      { type: "トリプル", capacity: 3, pricePerNight: 16000, totalRooms: 8, bookedRooms: 6 },
      { type: "和室（5名）", capacity: 5, pricePerNight: 22000, totalRooms: 5, bookedRooms: 3 }
    ],
    rating: 3.7,
    reviewCount: 445,
    imageUrl: "https://placehold.co/400x250/3a5a8a/white?text=スポーリア湯沢",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/",
      jalan: "https://www.jalan.net/",
      official: ""
    },
    tags: ["駅近", "リーズナブル", "ビジネスホテル"]
  },
  {
    id: 12,
    name: "湯沢東映ホテル",
    nameEn: "Yuzawa Toei Hotel",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅から車5分",
    distanceToVenue: "シャトルバス約45分",
    address: "新潟県南魚沼郡湯沢町湯沢3459",
    phone: "025-784-3511",
    description: "広い敷地に建つリゾートホテル。大宴会場もあり、団体・グループ利用にも対応。温泉とバイキングが人気。",
    amenities: ["温泉", "レストラン", "駐車場", "Wi-Fi", "宴会場", "カラオケ"],
    roomTypes: [
      { type: "和室10畳（4名）", capacity: 4, pricePerNight: 15000, totalRooms: 20, bookedRooms: 17 },
      { type: "和室12畳（6名）", capacity: 6, pricePerNight: 24000, totalRooms: 10, bookedRooms: 8 },
      { type: "和室16畳（8名）", capacity: 8, pricePerNight: 35000, totalRooms: 5, bookedRooms: 3 },
      { type: "大広間（15名）", capacity: 15, pricePerNight: 60000, totalRooms: 2, bookedRooms: 1 }
    ],
    rating: 3.9,
    reviewCount: 678,
    imageUrl: "https://placehold.co/400x250/4a3a7a/white?text=湯沢東映ホテル",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/",
      jalan: "https://www.jalan.net/",
      official: ""
    },
    tags: ["グループ向け", "温泉", "バイキング", "宴会場"]
  },
  {
    id: 13,
    name: "湯沢ニューオーシャン",
    nameEn: "Yuzawa New Ocean",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅西口徒歩2分",
    distanceToVenue: "シャトルバス約40分",
    address: "新潟県南魚沼郡湯沢町湯沢2521",
    phone: "025-784-2911",
    description: "駅近の温泉旅館。コスパが良く、グループでの利用に向いている。展望風呂から湯沢の街並みを一望。",
    amenities: ["温泉（展望風呂）", "レストラン", "駐車場", "Wi-Fi", "駅近"],
    roomTypes: [
      { type: "和室8畳（3名）", capacity: 3, pricePerNight: 11000, totalRooms: 12, bookedRooms: 10 },
      { type: "和室10畳（5名）", capacity: 5, pricePerNight: 18000, totalRooms: 8, bookedRooms: 6 },
      { type: "和室14畳（7名）", capacity: 7, pricePerNight: 28000, totalRooms: 4, bookedRooms: 2 },
      { type: "特別和室（10名）", capacity: 10, pricePerNight: 42000, totalRooms: 2, bookedRooms: 0 }
    ],
    rating: 3.8,
    reviewCount: 389,
    imageUrl: "https://placehold.co/400x250/5a6a8a/white?text=湯沢ニューオーシャン",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/",
      jalan: "https://www.jalan.net/",
      official: ""
    },
    tags: ["駅近", "コスパ良好", "展望風呂", "グループ向け"]
  },
  {
    id: 14,
    name: "雪国の宿 高半",
    nameEn: "Yukiguni no Yado Takahan",
    area: "越後湯沢",
    areaDetail: "越後湯沢駅から徒歩7分",
    distanceToVenue: "シャトルバス約45分",
    address: "新潟県南魚沼郡湯沢町湯沢923",
    phone: "025-784-3333",
    description: "川端康成「雪国」執筆の宿として有名な歴史ある温泉旅館。かけ流しの名湯「卵の湯」は必体験。",
    amenities: ["温泉（かけ流し）", "レストラン", "駐車場", "Wi-Fi", "歴史的建造物"],
    roomTypes: [
      { type: "和室8畳（2名）", capacity: 2, pricePerNight: 22000, totalRooms: 8, bookedRooms: 7 },
      { type: "和室10畳（4名）", capacity: 4, pricePerNight: 35000, totalRooms: 6, bookedRooms: 5 },
      { type: "和室12畳（5名）", capacity: 5, pricePerNight: 42000, totalRooms: 4, bookedRooms: 3 },
      { type: "特別室（6名）", capacity: 6, pricePerNight: 60000, totalRooms: 2, bookedRooms: 2 }
    ],
    rating: 4.5,
    reviewCount: 812,
    imageUrl: "https://placehold.co/400x250/5a4a2a/white?text=雪国の宿+高半",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/7091/7091.html",
      jalan: "https://www.jalan.net/yad322091/",
      official: "https://www.takahan.co.jp/"
    },
    tags: ["歴史", "源泉かけ流し", "文学の宿", "高評価"]
  },
  {
    id: 15,
    name: "エンゼルグランディア越後中里",
    nameEn: "Angel Grandia Echigo Nakazato",
    area: "越後湯沢",
    areaDetail: "越後中里駅直結",
    distanceToVenue: "車約30分",
    address: "新潟県南魚沼郡湯沢町土樽4707-1",
    phone: "025-787-2811",
    description: "全室スイート仕様のリゾートマンション型ホテル。キッチン付きで長期滞在に最適。温泉プールも完備でファミリーにも人気。",
    amenities: ["温泉", "プール", "キッチン付き", "駐車場", "Wi-Fi", "コインランドリー", "売店"],
    roomTypes: [
      { type: "1LDK（4名）", capacity: 4, pricePerNight: 18000, totalRooms: 30, bookedRooms: 26 },
      { type: "2LDK（6名）", capacity: 6, pricePerNight: 28000, totalRooms: 20, bookedRooms: 16 },
      { type: "3LDK（10名）", capacity: 10, pricePerNight: 42000, totalRooms: 8, bookedRooms: 5 }
    ],
    rating: 4.1,
    reviewCount: 1356,
    imageUrl: "https://placehold.co/400x250/2a7a5a/white?text=エンゼルグランディア",
    bookingUrls: {
      rakuten: "https://travel.rakuten.co.jp/HOTEL/15281/15281.html",
      jalan: "https://www.jalan.net/yad375281/",
      official: "https://www.angel-g.co.jp/"
    },
    tags: ["キッチン付き", "長期滞在", "プール", "グループ向け", "温泉"]
  }
];

module.exports = hotels;
