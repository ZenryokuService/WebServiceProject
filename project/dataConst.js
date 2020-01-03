/*****************
 * 定数などのデータ *
 ******************/

/** 1. 表示メッセージJSON */
const ENGLISH_MESSAGE = {
    welcomeMessage: "Welcome to PG Box.",
    firstMessage: "~Here is programing play gound. Let's play wuth programing.~",
    secondMessage: "Testing English",
    thirdMessage: "aaa",
    fourthMessage: "fourth",
    usage_top: "<How to use>",
    usage1: "1. click header category like 'Network'",
    usage2: "2. click campany name at sidebar."
};

const JAPANESE_MESSAGE = {
    welcomeMessage: "PGボックスへようこそ",
    firstMessage: "プログラミングして遊びましょう",
    secondMessage: "日本語です",
    thirdMessage: "あああ",
    fourthMessage: "4番目",
    usage_top: "<使い方>",
    usage1: "1. ヘッダーのカテゴリをクリック",
    usage2: "2. サイドバーの会社名をクリック"
};

/** 最新技術カテゴリ一覧 */
const ENGLISH_CATEGORIES = [
    {id: 0, categName: "Infomation Technology", url: "", disable: true},
    {id: 1, categName: "Network", url: "network", disable: true},
    {id: 2, categName: "Sensor", url: "sensor", disable: true},
    {id: 3, categName: "Iternet Of Things", url: "iot", disable: true},
    {id: 4, categName: "Transport", url: "", disable: false},
    {id: 5, categName: "Energy", url: "", disable: false},
    {id: 6, categName: "Agriculture", url: "", disable: false},
    {id: 7, categName: "Architecture", url: "", disable: false},
    {id: 8, categName: "Entertaiment & Media", url: "", disable: false},
    {id: 9, categName: "Art & Music", url: "", disable: false},
    {id: 10, categName: "Appliance", url: "", disable: false},
    {id: 11, categName: "Industrial Machine", url: "", disable: false},
    {id: 12, categName: "Clothing & Accesorries", url: "", disable: false},
    {id: 13, categName: "Medical Technology", url: "", disable: false},
    {id: 14, categName: "Assistive Technology", url: "", disable: false},
    {id: 15, categName: "Science", url: "", disable: false},
    {id: 16, categName: "Space", url: "", disable: false},
    {id: 17, categName: "Robotics", url: "", disable: false},
    {id: 18, categName: "ArtificalIntelligence", url: "", disable: false},
    {id: 19, categName: "Superintelligence", url: "", disable: false}
];

const JAPANESE_CATEGORIES = [
    {id: 0, categName: "情報技術", url: "", disable: true},
    {id: 1, categName: "通信網", url: "network", disable: true},
    {id: 2, categName: "センサー", url: "sensor", disable: true},
    {id: 3, categName: "IoT", url: "iot", disable: true},
    {id: 4, categName: "輸送", url: "", disable: false},
    {id: 5, categName: "エネルギー", url: "", disable: false},
    {id: 6, categName: "農業", url: "", disable: false},
    {id: 7, categName: "建築", url: "", disable: false},
    {id: 8, categName: "エンターテイメント＆メディア", url: "", disable: false},
    {id: 9, categName: "アート＆ミュージック", url: "", disable: false},
    {id: 10, categName: "専用機器", url: "", disable: false},
    {id: 11, categName: "産業機械", url: "", disable: false},
    {id: 12, categName: "服とアクセサリー", url: "", disable: false},
    {id: 13, categName: "医療技術", url: "", disable: false},
    {id: 14, categName: "支援技術", url: "", disable: false},
    {id: 15, categName: "科学", url: "", disable: false},
    {id: 16, categName: "宇宙", url: "", disable: false},
    {id: 17, categName: "ロボット", url: "", disable: false},
    {id: 18, categName: "人工知能", url: "", disable: false},
    {id: 19, categName: "スーパーインテリジェンス", url: "", disable: false}
];

/** ヘッダーメニュー */
const linkCompanies_JA = [
    {id: 0, categName: "PGボックス", url:"#!pgbox"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 98, categName: "ロンドン", url:"#!london"},
    {id: 99, categName: "パリ", url:"#!paris"}
];

const linkCompanies_campany = [
{id: 0, catObjArr: [
    {name: "Microsoft", url: "https://news.microsoft.com/ja-jp/tag/technology/"},
    {name: "IBM", url: "https://newsroom.ibm.com/explore-IBM"},
    {name: "Oracle.", url: "https://www.oracle.com/technetwork/jp/index.html"},
    {name: "Accenture.", url: "https://newsroom.accenture.com/subjects/technology/"},
    {name: "HPE.", url: "https://www.hpe.com/us/en/newsroom.html"},
    {name: "SAP.", url: "https://www.sap.com/products.html"},
    {name: "TCS.", url: "https://tech.economictimes.indiatimes.com/news/technology"},
    {name: "Capgemini.", url: "https://www.capgemini.com/service/invent/future-of-technology/"}
]},
{id: 1, catObjArr: [
    {name: "Cisco", url: "https://newsroom.cisco.com/"},
    {name: "HPE/Aruba", url: "https://www.hpe.com/us/en/newsroom.html"},
    {name: "Juniper", url: "ttps://securelink.net/en-be/partners/juniper-networks/"},
    {name: "Huawei", url: "https://economictimes.indiatimes.com/topic/Huawei-Technologies/news"},
    {name: "Arista", url: "https://www.arista.com/jp/company/news/in-the-news"},
    {name: "VMWare", url: "https://www.vmware.com/jp/company/news.html"},
    {name: "Riverbed", url: "https://www.crunchbase.com/organization/riverbed-technology/timeline/timeline#section-recent-news-activity"},
    {name: "Netscout", url: "https://www.netscout.com/news"},
    {name: "Extreme Networks", url: "https://eu.techdata.com/Intouch/MVC/Microsite/Public?categorypageid=1133&amp;msmenuid=2419&amp;corpregionid=50&amp;Purpose=Microsite"},
    {name: "Dell / EMC", url: "https://www.delltechnologies.com/ja-jp/index.htm"}
]},
{id: 2, catObjArr: [
    {name: "Heat Inverse", url: "https://www.heatinverse.com/"},
    {name: "Skydio", url: "https://www.skydio.com/"},
    {name: "Volatile", url: "https://www.volatileusa.com/blogs/news"},
    {name: "visual ARise", url: "https://www.facebook.com/AriseVisualStudio/"}
]},
{id: 3, catObjArr: [
    {name: "Very", url: "https://www.verypossible.com/"},
    {name: "R-Style Lab", url: "https://r-stylelab.com/"},
    {name: "Stanfy", url: "https://www.linkedin.com/company/stanfy"},
    {name: "Indeema", url: "https://indeema.com/"},
    {name: "PLVision", url: "https://plvision.eu/"},
    {name: "Lemberg", url: "https://lembergsolutions.com/"},
    {name: "Waverlay", url: ""},
    {name: "Logiticks", url: ""}
]},
{id: 4, catObjArr: [
    {name: "Barnhart Crane & Rigging", url: ""},
    {name: "Bennett Motor Express", url: ""},
    {name: "ATS Specialized", url: ""},
    {name: "Daseke", url: ""},
    {name: "All Erection & Crane Rental", url: ""},
    {name: "Landstar", url: ""},
    {name: "Fagioli", url: ""},
    {name: "Sarens", url: ""},
    {name: "ALE", url: ""},
    {name: "Mammoet", url: ""}
]},
{id: 5, catObjArr: [
    {name: "Siemens Gamesa", url: ""},
    {name: "GE Renewable Energy", url: ""},
    {name: "Berkshire Hathaway Energy", url: ""},
    {name: "Cypress Creek Renewables", url: ""},
    {name: "NextEra Energy Resources", url: ""}
]},
{id: 6, catObjArr: [
    {name: "Arable.", url: ""},
    {name: "Ceres Imaging.", url: ""},
    {name: "Gamaya.", url: ""},
    {name: "AgriData.", url: ""},
    {name: "Agrowatcher.", url: ""},
    {name: "AgEagle.", url: ""},
    {name: "PrecisionHawk.", url: ""},
    {name: "Aker Technologies.", url: ""},
    {name: "Aker Technologies Inc", url: ""}
]},
{id: 7, catObjArr: [
    {name: "Mitsubishi Jisho Sekkei.", url: ""},
    {name: "HOK.", url: ""},
    {name: "Samoo Architects & Engineers.", url: ""},
    {name: "HDR Architecture.", url: ""},
    {name: "Gensler.", url: ""},
    {name: "Nikken Sekkei.", url: ""},
    {name: "Aecom.", url: ""},
    {name: "RSP Architects.", url: ""}
]},
{id: 8, catObjArr: [
    {name: "AT&T (ATT)", url: ""},
    {name: "Walt Disney (DIS)", url: ""},
    {name: "Comcast Corp (CMCSA)", url: ""},
    {name: "Charter Communications (CHTR)", url: ""},
    {name: "Twenty-First Century Fox Inc. (FOX)", url: ""},
    {name: "Thomson Reuters (TRI)", url: ""},
    {name: "CBS Corporation (CBS)", url: ""},
    {name: "WPP Plc. (WPPGY)", url: ""},
    {name: "DISH Network Corporation (DISH)", url: ""},
    {name: "Viacom Inc. (VIAB)", url: ""},
    {name: "The Bottom Line", url: ""}
]},
{id: 9, catObjArr: [
    {name: "Juilliard School, New York", url: ""},
    {name: "University of Music and Performing Arts, Vienna", url: ""},
    {name: "Royal College of Music, London United Kingdom", url: ""},
    {name: "Royal Academy of Music, London United Kingdom", url: ""},
    {name: "Curtis Institute of Music, Pennsylvania United States", url: ""},
    {name: "The Royal Conservatoire of Scotland, Glasgow United Kingdom", url: ""},
    {name: "Sibelius Academy at University of the Arts, Helsinki", url: ""},
    {name: "Conservatoire de Paris France", url: ""},
    {name: "National School of Drama (or NSD)", url: ""}
]},
{id: 10, catObjArr: [
    {name: "Whirlpool", url: ""},
    {name: "LG", url: ""},
    {name: "Samsung", url: ""},
    {name: "Frigidaire", url: ""},
    {name: "KitchenAid", url: ""}
]}, 
{id: 11, catObjArr: [
    {name: "THERMO FISHER SCIENTIFIC INC", url: ""},
    {name: "AIRBUS", url: ""},
    {name: "DANAHER CORPORATION", url: ""},
    {name: "SIEMENS AG: https", url: ""},
    {name: "CATERPILLAR IN", url: ""},
    {name: "SAFRAN", url: ""},
    {name: "NORTHROP GRUMMAN CORPORATION", url: ""},
    {name: "DEERE & COMPANY", url: ""},
    {name: "ILLINOIS TOOL WORKS INC", url: ""},
    {name: "RAYTHEON COMPANY", url: ""}
]},
{id: 12, catObjArr: [
    {name: "ARMANI", url: ""},
    {name: "FENDI", url: ""},
    {name: "HOUSE OF VERSACE", url: ""},
    {name: "BURBERY", url: ""},
    {name: "RALPH LAUREN", url: ""},
    {name: "CHANEL", url: ""},
    {name: "PRADA", url: ""},
    {name: "HERMES", url: ""},
    {name: "GUCCI", url: ""},
    {name: "LOUIS VUITTON", url: ""}
]},
{id: 13, catObjArr: [
    {name: "Medtronic plc", url: ""},
    {name: "Johnson & Johnson", url: ""},
    {name: "Philips Healthcare", url: ""},
    {name: "GE Healthcare", url: ""},
    {name: "Siemens Healthineers", url: ""},
    {name: "Fresenius Medical Care", url: ""},
    {name: "Abbott Laboratories", url: ""},
    {name: "Becton Dickinson", url: ""},
    {name: "Cardinal Health", url: ""},
    {name: "Stryker", url: ""}
]},
{id: 14, catObjArr: [
    {name: "Apple", url: ""},
    {name: "Microsoft", url: ""},
    {name: "Amazon", url: ""},
    {name: "Alphabet", url: ""},
    {name: "Berkshire Hathaway", url: ""},
    {name: "Facebook", url: ""},
    {name: "Alibaba", url: ""},
    {name: "Tencent Holdings", url: ""},
    {name: "JPMorgan Chase", url: ""},
    {name: "Johnson & Johnson", url: ""}
]},
{id: 15, catObjArr: [
    {name: "Harvard University", url: ""},
    {name: "University of Cambridge", url: ""},
    {name: "University of Oxford", url: ""},
    {name: "Massachusetts Institute of Technology", url: ""},
    {name: "Stanford University", url: ""},
    {name: "Johns Hopkins University", url: ""},
    {name: "Yale University", url: ""},
    {name: "California Institute of Technology", url: ""},
    {name: "Princeton University", url: ""}
]},
{id: 16, catObjArr: [
    {name: "Amazon", url: ""},
    {name: "Boston Dynamics", url: ""},
    {name: "Cruise Automation", url: ""},
    {name: "Facebook", url: ""},
    {name: "Microsoft", url: ""},
    {name: "NVIDIA", url: ""},
    {name: "UBTech", url: ""},
    {name: "Universal Robots", url: ""}
]},
{id: 17, catObjArr: [
    {name: "Rocket Lab", url: ""},
    {name: "Rocket Lab", url: ""},
    {name: "Virgin Galactic", url: ""},
    {name: "Spire Global", url: ""},
    {name: "Iceye", url: ""},
    {name: "Analytical Space", url: ""},
    {name: "Relativity Space", url: ""},
    {name: "Audacy", url: ""},
    {name: "Accion Systems", url: ""},
    {name: "SpacePharma", url: ""},
    {name: "For All Moonkind", url: ""}
]},
{id: 18, catObjArr: [
    {name: "Addepto", url: ""},
    {name: "Azilen Technologies Pvt. Ltd.", url: ""},
    {name: "S-PRO", url: ""},
    {name: "SumatoSoft", url: ""},
    {name: "BotsCrew", url: ""},
    {name: "Achievion Solutions", url: ""},
    {name: "Caserta", url: ""},
    {name: "Flatlogic", url: ""},
    {name: "Neoteric", url: ""},
    {name: "Cubix", url: ""}
]},
{id: 19, catObjArr: [
    {name: "Accubits", url: ""},
    {name: "Azati", url: ""},
    {name: "Master of Code", url: ""},
    {name: "ThirdEye", url: ""},
    {name: "Infopulse", url: ""},
    {name: "Hedgehog Lab", url: ""},
    {name: "azilen", url: ""},
    {name: "Waverley", url: ""},
    {name: "CIS", url: ""},
    {name: "Achievion", url: ""}
]}
];
