var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',function(req,res,next) {
  res.json([
    "TOKYO",
    "JAKARTA",
    "New York",
    "SEOUL",
    "MANILA",
    "Mumbai",
    "Sao Paulo",
    "MEXICO CITY",
    "Delhi",
    "Osaka",
    "CAIRO",
    "Kolkata",
    "Los Angeles",
    "Shanghai",
    "MOSCOW",
    "BEIJING",
    "BUENOS AIRES",
    "Guangzhou",
    "Shenzhen",
    "Istanbul",
    "Rio de Janeiro",
    "PARIS",
    "Karachi",
    "Nagoya",
    "Chicago",
    "Lagos",
    "LONDON",
    "BANGKOK",
    "KINSHASA",
    "TEHRAN",
    "LIMA",
    "Dongguan",
    "BOGOTA",
    "Chennai",
    "DHAKA",
    "Essen",
    "Tianjin",
    "HONG KONG",
    "Taipei",
    "Lahore",
    "Ho Chi Minh City",
    "Bangalore",
    "Hyderabad",
    "Johannesburg",
    "BAGHDAD",
    "Toronto",
    "SANTIAGO",
    "KUALA LUMPUR",
    "San Francisco",
    "Philadelphia",
    "Wuhan",
    "Miami",
    "Dallas",
    "MADRID",
    "Ahmedabad",
    "Boston",
    "Belo Horizonte",
    "KHARTOUM",
    "Saint Petersburg",
    "Shenyang",
    "Houston",
    "Pune",
    "RIYADH",
    "SINGAPORE",
    "WASHINGTON",
    "Yangon",
    "Milan",
    "Atlanta",
    "Chongqing",
    "Alexandria",
    "Nanjing",
    "Guadalajara",
    "Barcelona",
    "Chengdu",
    "Detroit",
    "ANKARA",
    "Abidjan",
    "ATHENS",
    "BERLIN",
    "Sydney",
    "Monterrey",
    "Phoenix",
    "Busan",
    "Recife",
    "Bandung",
    "Porto Alegre",
    "Melbourne",
    "LUANDA",
    "Hangzhou",
    "ALGIERS",
    "Hà Noi",
    "Montréal",
    "Xi'an",
    "PYONGYANG",
    "Qingdao",
    "Surat",
    "Fortaleza",
    "Medellín",
    "Durban",
    "Kanpur",
    "ADDIS ABABA",
    "NAIROBI",
    "Jeddah",
    "Naples",
    "KABUL",
    "Salvador",
    "Harbin",
    "Kano",
    "Casablanca",
    "CAPE TOWN",
    "Curitiba",
    "Surabaya",
    "San Diego",
    "Seattle",
    "ROME",
    "Dar es Salaam",
    "Taichung",
    "Jaipur",
    "CARACAS",
    "DAKAR",
    "Kaohsiung",
    "Minneapolis",
    "Lucknow",
    "AMMAN",
    "Tel Aviv-Yafo",
    "Guayaquil",
    "KIEV",
    "Faisalabad",
    "Mashhad",
    "Izmir",
    "Rawalpindi",
    "TASHKENT",
    "Katowice",
    "Changchun",
    "Campinas",
    "Daegu",
    "Changsha",
    "Nagpur",
    "San Juan",
    "Aleppo",
    "LISBON",
    "Frankfurt am Main",
    "Nanchang",
    "Birmingham",
    "Tampa",
    "Medan",
    "Dalian",
    "TUNIS",
    "Shijiazhuang",
    "Manchester",
    "PORT-AU-PRINCE",
    "DAMASCUS",
    "Ji'nan",
    "Fukuoka",
    "SANTO DOMINGO",
    "HAVANA",
    "Cali",
    "Denver",
    "St. Louis",
    "Colombo",
    "Dubai",
    "Baltimore",
    "Sapporo",
    "Rotterdam",
    "Vancouver",
    "Preston",
    "Patna",
    "SANA'A",
    "WARSAW",
    "Bonn",
    "ACCRA",
    "BUCHAREST",
    "Yokohama",
    "Kunming",
    "Guiyang",
    "Zibo",
    "Incheon",
    "Zhengzhou",
    "Taiyuan",
    "Chaoyang",
    "BRASILIA",
    "Zhongshan",
    "West Midlands",
    "Giza",
    "Quezon City",
    "Nanhai",
    "Fuzhou",
    "Lanzhou",
    "Xiamen",
    "Chittagong",
    "Zaozhuang",
    "Jilin",
    "Linyi",
    "Wenzhou",
    "STOCKHOLM",
    "Puebla de Zaragoza",
    "Puning",
    "BAKU",
    "Ibadan",
    "Brisbane",
    "MINSK",
    "Sikasso",
    "Nanchong",
    "Nanning",
    "Urumqi",
    "Yantai",
    "Fuyang",
    "Tangshan",
    "Maracaibo",
    "Hamburg",
    "BUDAPEST",
    "Shunde",
    "Manaus",
    "Xuzhou",
    "Ségou",
    "Baotou",
    "Hefei",
    "VIENNA",
    "Indore",
    "ASUNCION",
    "Tianmen",
    "BELGRADE",
    "Suzhou",
    "Suizhou",
    "Nanyang",
    "Nakuru",
    "Koulikoro",
    "Ningbo",
    "Liuan",
    "Anshan",
    "Tengzhou",
    "Qiqihaer",
    "Pizhou",
    "Taian",
    "Datong",
    "Kobe",
    "Hama",
    "Esfahan",
    "TRIPOLI",
    "West Yorkshire",
    "Vadodara",
    "Taizhou",
    "Luoyang",
    "QUITO",
    "Jinjiang",
    "Mopti",
    "Perth",
    "Daejeon",
    "Kyoto",
    "Xiantao",
    "Tangerang",
    "Bhopal",
    "Coimbatore",
    "Kharkiv",
    "Gwangju",
    "Xinghua",
    "HARARE",
    "Fushun",
    "Shangqiu",
    "Belém",
    "Wuxi",
    "Hechuan",
    "Wujin",
    "Guigang",
    "Jianyang",
    "Huhehaote",
    "Santa Cruz",
    "Semarang",
    "Ludhiana",
    "Novosibirsk",
    "Neijiang",
    "MAPUTO",
    "Nan'an",
    "Douala",
    "Weifang",
    "Daqing",
    "Kayes",
    "Tongzhou",
    "Tabriz",
    "Homs",
    "Rugao",
    "Guiping",
    "Huainan",
    "Kochi",
    "Suining",
    "Bozhou",
    "Zhanjiang",
    "Changde",
    "MONTEVIDEO",
    "Suzhou",
    "Xintai",
    "Ekaterinoburg",
    "Juárez",
    "Handan",
    "Visakhapatnam",
    "Kawasaki",
    "Jiangjin",
    "Pingdu",
    "Agra",
    "Jiangyin",
    "Tijuana",
    "Liuyang",
    "Bursa",
    "Al-Hasakeh",
    "Makkah",
    "YAOUNDE",
    "Xuanwei",
    "Dengzhou",
    "Palembang",
    "Nizhny Novgorod",
    "León",
    "Guarulhos",
    "Heze",
    "Auckland",
    "Omdurman",
    "Shantou",
    "Leizhou",
    "Yongcheng",
    "Valencia",
    "Thane",
    "San Antonio",
    "Xinyang",
    "Luzhou",
    "Almaty",
    "Changshu",
    "Taixing",
    "PHNOM PENH",
    "Laiwu",
    "Xiaoshan",
    "Yiyang",
    "Goiânia",
    "Liuzhou",
    "Gaozhou",
    "Fengcheng",
    "Cixi",
    "Karaj",
    "MOGADISHU",
    "Varanasi",
    "Córdoba",
    "KAMPALA",
    "Ruian",
    "Lianjiang",
    "Huaian",
    "Shiraz",
    "Multan",
    "Madurai",
    "München",
    "Kalyan",
    "Quanzhou",
    "Adana",
    "Bazhong",
    "Fès",
    "OUAGADOUGOU",
    "Haicheng",
    "Xishan",
    "Leiyang",
    "Caloocan",
    "Kalookan",
    "Jingzhou",
    "Saitama",
    "PRAGUE",
    "Fuqing",
    "Kumasi",
    "Meerut",
    "Hyderabad",
    "Lufeng",
    "Dongtai",
    "Yixing",
    "Mianyang",
    "Wenling",
    "Leqing",
    "OTTAWA",
    "Yushu",
    "Barranquilla",
    "Hiroshima",
    "Chifeng",
    "Nashik",
    "Makasar",
    "SOFIA",
    "Rizhao",
    "Davao",
    "Tianshui",
    "Huzhou",
    "Samara",
    "Omsk",
    "Gujranwala",
    "Adelaide",
    "Macheng",
    "Wuxian",
    "Bijie",
    "Yuzhou",
    "Leshan",
    "La Matanza",
    "Rosario",
    "Jabalpur",
    "Kazan",
    "Jimo",
    "Dingzhou",
    "Calgary",
    "YEREVAN",
    "El-Jadida",
    "Jamshedpur",
    "Zürich",
    "Zoucheng",
    "Pikine-Guediawaye",
    "Anqiu",
    "Guang'an",
    "Chelyabinsk",
    "CONAKRY",
    "Asansol",
    "Shouguang",
    "Changzhou",
    "Ulsan",
    "Zhuji",
    "Toluca",
    "Marrakech",
    "Dhanbad",
    "TBILISI",
    "Hanchuan",
    "LUSAKA",
    "Qidong",
    "Faridabad",
    "Zaoyang",
    "Zhucheng",
    "Rostov-na-Donu",
    "Jiangdu",
    "Xiangcheng",
    "Zigong",
    "Jining",
    "Edmonton",
    "Allahabad",
    "Beiliu",
    "Dnipropetrovsk",
    "Gongzhuling",
    "Qinzhou",
    "Ufa",
    "Sendai",
    "Volgograd",
    "Ezhou",
    "GUATEMALA CITY",
    "Zhongxiang",
    "AMSTERDAM",
    "BRUSSELS",
    "BAMAKO",
    "Ziyang",
    "ANTANANARIVO",
    "Mudanjiang",
    "Amritsar",
    "Vijayawada",
    "Haora",
    "Donetsk",
    "Huazhou",
    "Fuzhou",
    "Pimpri Chinchwad",
    "DUBLIN",
    "Rajkot",
    "Sao Luís",
    "Béni-Mellal",
    "Lianyuan",
    "Liupanshui",
    "Kaduna",
    "Kitakyushu",
    "Qianjiang",
    "Perm",
    "Odessa",
    "Qom",
    "Yongchuan",
    "Peshawar",
    "Linzhou",
    "Benxi",
    "ULAANBAATAR",
    "Zhangqiu",
    "Yongzhou",
    "Sao Gonçalo",
    "Srinagar",
    "Ghaziabad",
    "Xinyi",
    "Köln",
    "Zhangjiagang",
    "Wafangdian",
    "Xianyang",
    "Liaocheng",
    "Ahwaz",
    "Taishan",
    "Linhai",
    "Feicheng",
    "Suwon",
    "Wuwei",
    "Haimen",
    "San Luis Potosí",
    "Liling",
    "Xinhui",
    "Gaziantep",
    "Krasnoyarsk",
    "Chiba",
    "Voronezh",
    "Durg-Bhilai Nagar",
    "Ruzhou",
    "Maceió",
    "Yichun",
    "Al-Madinah",
    "Yulin",
    "Seongnam",
    "Yueyang",
    "Yiwu",
    "San Jose",
    "Jixi",
    "MANAGUA",
    "Xinyi",
    "Safi",
    "Guangyuan",
    "Soweto",
    "Zhangjiakou",
    "Baoding",
    "Cartagena",
    "Huludao",
    "Pingdingshan",
    "Torino",
    "Zengcheng",
    "Laiyang",
    "Qingzhou",
    "Aurangabad",
    "Lattakia",
    "Mérida",
    "Laizhou",
    "Thiruvananthapuram",
    "Weinan",
    "Wuchang",
    "Guangshui",
    "Gaizhou",
    "Göteborg",
    "Xiaogan",
    "Torreón",
    "Jiaxing",
    "Kozhikode",
    "Salé",
    "Zhuzhou",
    "Tyneside",
    "Hengyang",
    "Dehui",
    "Honghu",
    "Danyang",
    "Daye",
    "Solapur",
    "Xingning",
    "Xiangfan",
    "Shubra-El-Khema",
    "Luoding",
    "Gwalior",
    "Ranchi",
    "Huiyang",
    "Mombasa",
    "Jinzhou",
    "Jiangyan",
    "Chenghai",
    "Jiamusi",
    "Songzi",
    "TEGUCIGALPA",
    "Wujiang",
    "Jodhpur",
    "Duque de Caxias",
    "Xi'ning",
    "Yuyao",
    "Hezhou",
    "Jiangyou",
    "Tiruchchirappalli",
    "Baoshan",
    "Saratov",
    "Nova Iguaçu",
    "Ankang",
    "Gaomi",
    "Yangchun",
    "Santiago de los Caballeros",
    "Danzhou",
    "LA PAZ",
    "Zhuanghe",
    "Zhuhai",
    "Zhaodong",
    "Sakai",
    "Haikou",
    "Jiaonan",
    "El Alto",
    "Xuancheng",
    "Wuchuan",
    "Yuhang",
    "Qinhuangdao",
    "Bogor",
    "Kermanshah",
    "Longhai",
    "Liverpool",
    "Yanshi",
    "Guwahati",
    "Yichun",
    "Konya",
    "Barquisimeto",
    "Yingde",
    "Bengbu",
    "Yibin",
    "Chandigarh",
    "Xiangxiang",
    "Yinchuan",
    "Valencia",
    "Guilin",
    "Hamamatsu",
    "Sao Bernardo do Campo",
    "Deir El-Zor",
    "BISHKEK",
    "Teresina",
    "Suihua",
    "BENGHAZI",
    "Jiutai",
    "Meishan",
    "Zaporizhya",
    "Gaoyou",
    "Marseille",
    "Kaifeng",
    "Changning",
    "Tongliao",
    "Natal",
    "Bandar Lampung",
    "Dongying",
    "Gaoan",
    "Langzhong",
    "Lichuan",
    "Hubli-Dharwad",
    "Mysore",
    "Niigata",
    "Indianapolis",
    "Jiaozhou",
    "Pingxiang",
    "Haiphong",
    "Arequipa",
    "Jacksonville",
    "Tanger",
    "Dandong",
    "KISHINEV",
    "Krasnodar",
    "ZAGREB",
    "Xinmi",
    "Chaohu",
    "Xinyu",
    "Gongyi",
    "Huixian",
    "Xinxiang",
    "Port Elizabeth",
    "Mendoza",
    "Nantong",
    "Pengzhou",
    "Khulna",
    "Malang",
    "Padang",
    "Anyang",
    "Renqiu",
    "Foshan",
    "Anshun",
    "Chihuahua",
    "Campo Grande",
    "Lódz",
    "Goyang",
    "Benin City",
    "Bucheon",
    "Gaocheng",
    "Pulandian",
    "Hejian",
    "Dafeng",
    "Kraków",
    "Enshi",
    "Dongyang",
    "Lviv",
    "Kunshan",
    "Shuangcheng",
    "Salem",
    "Jiaozuo",
    "Ad-Dammam",
    "Huaibei",
    "Liyang",
    "Samut Prakan",
    "Rongcheng",
    "Cenxi",
    "Nampho",
    "Columbus",
    "Bareilly",
    "Leping",
    "Laixi",
    "Liaoyang",
    "Zhaotong",
    "JERUSALEM",
    "Tainan",
    "Cuernavaca",
    "RIGA",
    "Linfen",
    "Québec",
    "Lingbao",
    "Shangyu",
    "Wuan",
    "Hailun",
    "Xingyi",
    "Wuxue",
    "Cebu",
    "Aguascalientes",
    "Tolyatti",
    "Hamilton",
    "Zhoushan",
    "Langfang",
    "Osasco",
    "Nonthaburi",
    "Dashiqiao",
    "Tongxiang",
    "Yichang",
    "Yangzhou",
    "Blantyre City",
    "Hamhung",
    "Jalandhar",
    "Al-Rakka",
    "NIAMEY",
    "Xiangtan",
    "Winnipeg",
    "Oran",
    "Kota",
    "Sevilla",
    "Navi Mumbai",
    "Port Harcourt",
    "Saltillo",
    "Khartoum North",
    "Shizuoka",
    "Yuanjiang",
    "Raipur",
    "Kryviy Rig",
    "Yingkou",
    "Wuhu",
    "Zhenjiang",
    "Querétaro",
    "Nankang",
    "Wugang",
    "Hegang",
    "Linqing",
    "PRETORIA",
    "Zunyi",
    "Panzhihua",
    "Austin",
    "Changle",
    "Lianyungang",
    "Yancheng",
    "Zunhua",
    "Changyi",
    "Meknès",
    "Qiongshan",
    "Bulawayo",
    "Wendeng",
    "Okayama",
    "Santo André",
    "RABAT",
    "Pakanbaru",
    "Nehe",
    "Memphis",
    "Joao Pessoa",
    "KATHMANDU",
    "Longkou",
    "Shengzhou",
    "Antalya",
    "Kumamoto",
    "LILONGWE",
    "Mexicali",
    "Kaiping",
    "Palermo",
    "Aligarh",
    "Nottingham",
    "Haining",
    "Mosul",
    "Hermosillo",
    "Tongcheng",
    "Shulan",
    "Miluo",
    "Bhubaneswar",
    "Yangquan",
    "Chenzhou",
    "Haiyang",
    "Morelia",
    "Huangshi",
    "Xinmin",
    "Tétouan",
    "Barnaul",
    "Qixia",
    "Jaboatao dos Guarapes",
    "Chongzhou",
    "Cotonou",
    "Yingcheng",
    "Zaragoza",
    "Changzhi",
    "Qujing",
    "Linghai",
    "Changge",
    "Trujillo",
    "Tampico",
    "Maoming",
    "Morón",
    "La Plata",
    "Ciudad Guayana",
    "Moradabad",
    "Jieshou",
    "Sheffield",
    "Donggang",
    "Jingjiang",
    "Acheng",
    "Acapulco",
    "Veracruz",
    "Ulyanovsk",
    "Wroclaw",
    "Jieyang",
    "Shaoxing",
    "Qian'an",
    "Nanchuan",
    "Qionglai",
    "Deyang",
    "Sagamihara",
    "Fuyang",
    "Fuxin",
    "Jiyuan",
    "Puente Alto",
    "Qufu",
    "Gaoyao",
    "Gorakhpur",
    "Fort Worth",
    "Xinji",
    "San Miguel de Tucumán",
    "Dujiangyan",
    "The Hague",
    "Bhiwandi",
    "Culiacán Rosales",
    "Lingyuan",
    "Xingyang",
    "Maiduguri",
    "Genova",
    "Meihekou",
    "Izhevsk",
    "Jeonju",
    "Leling",
    "Xichang",
    "COLOMBO",
    "Zaria",
    "Anlu",
    "Sao José dos Campos",
    "Charlotte",
    "Yizheng",
    "Malmö",
    "Weihai",
    "Xinzheng",
    "Dengfeng",
    "Vladivostok",
    "Shaoyang",
    "Taizhou",
    "Jammu",
    "Lanxi",
    "Yuncheng",
    "Kagoshima",
    "Yaroslave",
    "Contagem",
    "Shishou",
    "Panjin",
    "Zamboanga",
    "Orumiyeh",
    "Binzhou",
    "Kisumu",
    "Baoji",
    "Uberlândia",
    "El Paso",
    "Yunzhou",
    "Kénitra",
    "Diyarbakir",
    "Jurong",
    "Cúcuta",
    "Zhaoyuan",
    "Huizhou",
    "Tianchang",
    "Dortmund",
    "Shihezi",
    "Shiyan",
    "Cuttack",
    "Cochabamba",
    "Cheongju",
    "Jingmen",
    "Shangzhi",
    "Anqing",
    "Chongjin",
    "Stuttgart",
    "Rushan",
    "KINGSTON",
    "Milwaukee",
    "Sorocaba",
    "Glasgow",
    "Khabarovsk",
    "Guanghan",
    "Warangal",
    "Irkutsk",
    "Tyumen",
    "Lomas de Zamora",
    "Beipiao",
    "Funabashi",
    "Mingguang",
    "Düsseldorf",
    "Shenzhou",
    "Içel",
    "Zhangzhou",
    "Xianning",
    "Maanshan",
    "Bandjarmasin",
    "Callao",
    "Poznan",
    "Kayseri",
    "Chon Buri",
    "Quetta",
    "Shuozhou",
    "Samarinda",
    "HELSINKI",
    "Akesu",
    "Novokuznetsk",
    "Málaga",
    "Fengcheng",
    "Hachioji",
    "Ribeirao Prêto",
    "Beihai",
    "Jamnagar",
    "NOUAKCHOTT",
    "Bazhou",
    "Yongkang",
    "Louisville",
    "Chizhou",
    "Huaiyin",
    "Fuan",
    "Bhilai Nagar",
    "Dezhou",
    "Makhachkala",
    "Xingping",
    "Jiujiang",
    "Bristol",
    "Botou",
    "Fengnan",
    "ASTANA",
    "Yizhou",
    "Amravati",
    "Nashville-Davidson",
    "Batam",
    "Orenburg",
    "Zhuozhou",
    "Las Vegas",
    "Cancun",
    "Longyan",
    "OSLO",
    "Cuiabá",
    "Tiruppur",
    "VILNIUS",
    "Bremen",
    "Gold Coast-Tweed",
    "Gaobeidian",
    "Mangalore",
    "Songyuan",
    "Yangjiang",
    "Wanyuan",
    "Jiangmen",
    "Xingtai",
    "Shaoguan",
    "Feira de Santana",
    "Guixi",
    "Ruijin",
    "Zahedan",
    "Jinzhong",
    "Portland",
    "Jintan",
    "Reynosa",
    "Ilorin",
    "Oklahoma City",
    "Nakhon Ratchasima",
    "N'DJAMENA",
    "Shangzhou",
    "Panshi",
    "Kerman",
    "Kaiyuan",
    "ISLAMABAD",
    "SARAJEVO",
    "Bikaner",
    "DUSHANBE",
    "VIENTIANE",
    "Dehradun",
    "Zhangshu",
    "Beining",
    "ABU DHABI",
    "Shimkent",
    "Xingcheng",
    "Imbaba",
    "Yicheng",
    "SKOPLJE",
    "Kadhimain",
    "At-Ta'if",
    "Dali",
    "Fuding",
    "Jinzhou",
    "Renhuai",
    "Mira-Bhayandar",
    "Kemerovo",
    "Duisburg",
    "Rasht",
  ])
});

module.exports = router;
