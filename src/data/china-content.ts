export const themeOrder = [
  "civilization",
  "dynasties",
  "century-of-humiliation",
  "wars-and-revolutions",
  "science-and-innovation",
  "modern-transformation",
] as const;

export type ThemeSlug = (typeof themeOrder)[number];

export const heroStats = [
  { label: "Written record", value: "3,000+ years" },
  { label: "Territory", value: "9.6 million km²" },
  { label: "Recognized ethnic groups", value: "56" },
  { label: "UNESCO World Heritage sites", value: "50+" },
];

export const siteTimeline = [
  {
    era: "Early Worlds",
    span: "c. 7000 BCE - 1046 BCE",
    description:
      "Millet and rice villages, ritual centers, and the bronze-age kingdoms that left the first large written archives.",
  },
  {
    era: "Classical Formation",
    span: "1046 BCE - 220 CE",
    description:
      "Zhou political ideas, the Warring States crucible, and Qin-Han institutions that defined the imperial state.",
  },
  {
    era: "High Imperial China",
    span: "220 - 1644",
    description:
      "Reunification, Buddhism, Tang cosmopolitanism, Song commercialization, Mongol rule, and Ming restoration.",
  },
  {
    era: "Imperial Crisis",
    span: "1644 - 1949",
    description:
      "Qing expansion, foreign pressure, rebellion, revolution, anti-Japanese resistance, and civil war.",
  },
  {
    era: "Reform and Reinvention",
    span: "1949 - present",
    description:
      "State-building, reform and opening, urban transformation, digital industry, and renewed scientific ambition.",
  },
];

export const imageCatalog = {
  "great-wall-jinshanling": {
    src: "/images/china/great-wall-jinshanling.jpg",
    alt: "The Great Wall winding across the ridges at Jinshanling.",
    creditLabel: "Great Wall at Jinshanling",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:20090529_Great_Wall_8185.jpg",
  },
  "terracotta-army": {
    src: "/images/china/terracotta-army.jpg",
    alt: "Rows of Qin terracotta warriors in Pit 1.",
    creditLabel: "Qin Shihuang Terracotta Army, Pit 1",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Qin_Shihuang_Terracotta_Army,_Pit_1.jpg",
  },
  "hall-of-supreme-harmony": {
    src: "/images/china/hall-of-supreme-harmony.jpg",
    alt: "The Hall of Supreme Harmony inside the Forbidden City in Beijing.",
    creditLabel: "Hall of Supreme Harmony",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Hall_of_Supreme_Harmony_2010.jpg",
  },
  "dunhuang-mural": {
    src: "/images/china/dunhuang-mural.jpg",
    alt: "A Dunhuang cave mural showing the monk Xuanzang returning from India.",
    creditLabel: "Dunhuang cave mural",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Eighth_century_Dunhuang_cave_mural_depicting_Xuanzang_returning_from_India.jpg",
  },
  "sanxingdui-statues": {
    src: "/images/china/sanxingdui-statues.jpg",
    alt: "Bronze statues from the Sanxingdui archaeological site.",
    creditLabel: "Sanxingdui bronze statues",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sanxingdui_Bronze_Statues_(9951432484).jpg",
  },
  "treaty-of-nanking-signing": {
    src: "/images/china/treaty-of-nanking-signing.jpg",
    alt: "Painting of the signing of the Treaty of Nanking in 1842.",
    creditLabel: "The Signing of the Treaty of Nanking",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:The_Signing_of_the_Treaty_of_Nanking.jpg",
  },
  "opium-war-junks": {
    src: "/images/china/opium-war-junks.jpg",
    alt: "Nineteenth-century depiction of British forces destroying Chinese war junks during the Opium War.",
    creditLabel: "Destroying Chinese war junks, by E. Duncan",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Destroying_Chinese_war_junks,_by_E._Duncan_(1843).jpg",
  },
  "xinhai-revolution": {
    src: "/images/china/xinhai-revolution.jpg",
    alt: "Historic image associated with the Xinhai Revolution in Shanghai.",
    creditLabel: "Xinhai Revolution in Shanghai",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Xinhai_Revolution_in_Shanghai.jpg",
  },
  "marco-polo-bridge": {
    src: "/images/china/marco-polo-bridge.png",
    alt: "Air view of the Marco Polo Bridge and surrounding area.",
    creditLabel: "Marco Polo Bridge air view",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Marco_Polo_Bridge_air_view.PNG",
  },
  "taiping-regaining-jinling": {
    src: "/images/china/taiping-regaining-jinling.jpg",
    alt: "Painting of Qing forces retaking Jinling during the Taiping civil war.",
    creditLabel: "Regaining Jinling",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Regaining_Jinling.jpg",
  },
  "battle-of-shanghai-1937": {
    src: "/images/china/battle-of-shanghai-1937.jpg",
    alt: "Japanese Special Naval Landing Forces during the Battle of Shanghai in 1937.",
    creditLabel: "Battle of Shanghai, 1937",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Japanese_Special_Naval_Landing_Forces_in_Battle_of_Shanghai_1937.jpg",
  },
  "triangle-hill-infantry": {
    src: "/images/china/triangle-hill-infantry.jpg",
    alt: "Chinese infantrymen during the Battle of Triangle Hill in the Korean War.",
    creditLabel: "Battle of Triangle Hill Chinese Infantrymen",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Battle_of_Triangle_Hill_Chinese_Infantrymen.jpg",
  },
  "chinese-korean-war-poster": {
    src: "/images/china/chinese-korean-war-poster.jpg",
    alt: "Chinese propaganda poster related to the Korean War.",
    creditLabel: "Chinese Korean War Poster",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:ChineseKoreanWarPoster.jpg",
  },
  "bombing-of-chongqing": {
    src: "/images/china/bombing-of-chongqing.jpg",
    alt: "Historic image of the bombing of Chongqing during the war against Japan.",
    creditLabel: "Bombing of Chongqing",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E8%BD%9F%E7%82%B8%E9%87%8D%E6%85%B6.jpg",
  },
  tiangong: {
    src: "/images/china/tiangong-space-station.jpg",
    alt: "Rendered image of the Chinese Tiangong space station.",
    creditLabel: "Chinese Tiangong Space Station",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Chinese_Tiangong_Space_Station.jpg",
  },
  fast: {
    src: "/images/china/fast-telescope.jpg",
    alt: "The Five-hundred-meter Aperture Spherical Telescope set into the Guizhou landscape.",
    creditLabel: "FAST at National Museum of China display",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:FAST_at_NMC_02.jpg",
  },
  cr400af: {
    src: "/images/china/cr400af-train.jpg",
    alt: "CR400AF Fuxing high-speed train in motion.",
    creditLabel: "Line scan photo of CR400AF",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Line_scan_photo_of_CR400AF_ZES206400_dllu.jpg",
  },
  pudong: {
    src: "/images/china/pudong-shanghai-panorama.jpg",
    alt: "Panoramic skyline of Shanghai's Pudong district.",
    creditLabel: "Pudong Shanghai panorama",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pudong_Shanghai_November_2017_panorama.jpg",
  },
  shenzhen: {
    src: "/images/china/shenzhen-skyline.jpg",
    alt: "Shenzhen skyline seen across the border from Hong Kong.",
    creditLabel: "Skyline of Shenzhen from Hong Kong",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Skyline_of_Shenzhen_from_Hong_Kong.jpg",
  },
  "liangzhu-site": {
    src: "/images/china/liangzhu-site.jpg",
    alt: "Archaeological landscape at the ruins of Liangzhu City.",
    creditLabel: "Archaeological ruins of Liangzhu City",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E6%9D%AD%E5%B7%9E%E8%89%AF%E6%B8%9A%E9%81%97%E5%9D%80%E5%85%AC%E5%9B%AD,_2022-11-12_03.jpg",
  },
  "liangzhu-jade-cong": {
    src: "/images/china/liangzhu-jade-cong.jpg",
    alt: "Liangzhu culture jade cong ritual object.",
    creditLabel: "Liangzhu Culture Jade Cong",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Liangzhu_Culture_Jade_Cong_08.jpg",
  },
  "yinxu-site": {
    src: "/images/china/yinxu-site.jpg",
    alt: "Excavated ruins and museum landscape at Yinxu in Anyang.",
    creditLabel: "Yinxu archaeological site in Anyang",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:26120-Anyang_(49086436522).jpg",
  },
  "oracle-bone": {
    src: "/images/china/oracle-bone-inscription.jpg",
    alt: "Oracle bone inscription from Yinxu used for divination.",
    creditLabel: "Yinxu Oracle Bone Inscriptions for Divination",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Yinxu_Oracle_Bone_Inscriptions_for_Divination_(10185440455)_cropped.jpg",
  },
  "banpo-museum": {
    src: "/images/china/banpo-museum.jpg",
    alt: "Banpo Museum preserving the remains of the Neolithic Banpo settlement.",
    creditLabel: "Banpo Museum",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Banpo_Museus.JPG",
  },
  "bamboo-slips": {
    src: "/images/china/bamboo-slips.jpg",
    alt: "Ancient Chinese writing on Warring States bamboo slips.",
    creditLabel: "Ancient Chinese Writing on Warring States Bamboo Slips",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ancient_Chinese_Writing_on_Warring_States_Bamboo_Slips_3.jpg",
  },
  "confucius-temple": {
    src: "/images/china/confucius-temple-qufu.jpg",
    alt: "Temple of Confucius in Qufu.",
    creditLabel: "Temple of Confucius, Qufu",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Temple_of_Confucius,_Qufu,_China_(29942258465).jpg",
  },
  "xian-city-wall": {
    src: "/images/china/xian-city-wall.jpg",
    alt: "The fortifications of Xi'an tracing the historic capital landscape.",
    creditLabel: "Fortifications of Xi'an",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:City_wall_of_Xi%27an_51550-Xian_(27959363326).jpg",
  },
  "mogao-caves": {
    src: "/images/china/mogao-caves.jpg",
    alt: "Cliffside facades and cave openings at the Mogao Caves in Dunhuang.",
    creditLabel: "Mogao Caves",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Mogao_Caves_(54376969262).jpg",
  },
  "longmen-grottoes": {
    src: "/images/china/longmen-grottoes.jpg",
    alt: "The Longmen Grottoes carved into the limestone cliffs near Luoyang.",
    creditLabel: "Longmen Grottoes",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:27427-Luoyang_(49067744628).jpg",
  },
  "suzhou-grand-canal": {
    src: "/images/china/suzhou-grand-canal.jpg",
    alt: "View of the Grand Canal in Suzhou.",
    creditLabel: "Suzhou Grand Canal",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Suzhou_Grand_Canal_1984_A.jpg",
  },
  "mount-tai": {
    src: "/images/china/mount-tai.jpg",
    alt: "Stone steps and pilgrims ascending through the South Gate of Heaven on Mount Tai.",
    creditLabel: "Mount Tai South Gate of Heaven",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E6%B3%B0%E5%B1%B1_%E5%8D%97%E5%A4%A9%E9%97%A8.jpg",
  },
  "west-lake": {
    src: "/images/china/west-lake.jpg",
    alt: "Boats and tree-lined water at West Lake in Hangzhou.",
    creditLabel: "West Lake, Hangzhou",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:West_Lake,_Hangzhou_2025.jpg",
  },
  "longjing-tea-fields": {
    src: "/images/china/longjing-tea-fields.jpg",
    alt: "Tea plantations in Longjing near Hangzhou.",
    creditLabel: "Tea plantations in Longjing, Hangzhou",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Tea_plantations_in_Longjing,_Hangzhou.jpg",
  },
  "the-bund": {
    src: "/images/china/the-bund.jpg",
    alt: "Historic waterfront buildings along the Bund in Shanghai.",
    creditLabel: "The Bund",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:The_Bund_2.jpg",
  },
  "nanjing-massacre-memorial": {
    src: "/images/china/nanjing-massacre-memorial.jpg",
    alt: "Memorial Hall of the Victims in Nanjing Massacre by Japanese Invaders.",
    creditLabel: "Nanjing Massacre Memorial Hall",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E7%BA%AA%E5%BF%B5%E9%A6%86%E5%A4%A7%E5%B1%A0%E6%9D%80%E5%8D%81%E5%AD%97%E6%9E%B6.jpg",
  },
  "shang-bronze-ding": {
    src: "/images/china/shang-bronze-ding.jpg",
    alt: "A Shang dynasty bronze tripod ding vessel.",
    creditLabel: "Shang Bronze Tripod Ding",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Shang_Bronze_Tripod_Ding_03.jpg",
  },
  "tang-sancai-camel": {
    src: "/images/china/tang-sancai-camel.jpg",
    alt: "Tang sancai glazed ceramic camel.",
    creditLabel: "Tang Sancai Camel",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Tang_Sancai_Camel.jpg",
  },
  "qingming-scroll": {
    src: "/images/china/qingming-festival-scroll.jpg",
    alt: "Section from Along the River During the Qingming Festival.",
    creditLabel: "Along the River During the Qingming Festival Section 1",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Along_the_River_During_the_Qingming_Festival_Section_1.jpg",
  },
  "kublai-khan": {
    src: "/images/china/kublai-khan-portrait.jpg",
    alt: "Portrait of Kublai Khan from a Yuan imperial album.",
    creditLabel: "Yuan Emperor Album Kublai Portrait",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumKhubilaiPortrait.jpg",
  },
  "qing-map": {
    src: "/images/china/qing-dynasty-map.jpg",
    alt: "Historical map of the Qing dynasty.",
    creditLabel: "Map of the Qing Dynasty",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Map_of_the_Qing_Dynasty.jpg",
  },
  "ming-porcelain": {
    src: "/images/china/ming-porcelain-vase.jpg",
    alt: "Ming dynasty porcelain vase.",
    creditLabel: "Ming Dynasty Porcelain Vase",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ming_Dynasty_Porcelain_Vase.jpg",
  },
  papermaking: {
    src: "/images/china/papermaking-bamboo-boiling.jpg",
    alt: "Traditional papermaking process showing bamboo boiling.",
    creditLabel: "Five Steps of Papermaking - Step 2",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Five_Steps_of_Papermaking_-_Step_2_-_Boiling_the_Bamboo_-_As_described_by_Cai_Lun_in_105_CE.jpg",
  },
  seismoscope: {
    src: "/images/china/zhang-heng-seismoscope.jpg",
    alt: "Model of Zhang Heng's seismoscope.",
    creditLabel: "Zhang Heng's seismoscope",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Zhang_Heng%27s_seismoscope.jpg",
  },
  "su-song-clock": {
    src: "/images/china/su-song-clock-tower.jpg",
    alt: "Illustration of Su Song's clock tower mechanism.",
    creditLabel: "Clock Tower from Su Song's Book",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Clock_Tower_from_Su_Song%27s_Book.JPG",
  },
  beidou: {
    src: "/images/china/beidou-satellite-mockup.jpg",
    alt: "Mockup of a BeiDou-3 satellite.",
    creditLabel: "BeiDou-3 Satellite Mockup",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Beidou-3_Satellite_Mockup.jpg",
  },
  "long-march": {
    src: "/images/china/long-march-launch.jpg",
    alt: "Launch of a Long March 3B rocket.",
    creditLabel: "The Launch of Long March 3B Rocket",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:The_Launch_of_Long_March_3B_Rocket.jpg",
  },
  "long-march-map": {
    src: "/images/china/long-march-map.png",
    alt: "Map tracing the route of the Long March from 1934 to 1935.",
    creditLabel: "The Long March 1934-1935",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:The_Long_March_1934_-_1935.PNG",
  },
  "first-train-of-oil-daqing": {
    src: "/images/china/first-train-of-oil-daqing.jpg",
    alt: "Historic image of the first train carrying oil from Daqing.",
    creditLabel: "First train of oil in Daqing",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:First_train_of_oil_in_Daqing.jpg",
  },
  "yangshan-deepwater-port": {
    src: "/images/china/yangshan-deepwater-port.jpg",
    alt: "Container terminals at Yangshan Deepwater Port near Shanghai.",
    creditLabel: "Yangshan Deepwater Port",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Yangshan_Deepwater_Port.jpg",
  },
  "longyangxia-solar": {
    src: "/images/china/longyangxia-solar.jpg",
    alt: "Solar installations at Longyangxia in Qinghai.",
    creditLabel: "Longyangxia solar 2017",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Longyangxia_solar_2017.jpg",
  },
} as const;

export type ImageKey = keyof typeof imageCatalog;

export type Theme = {
  slug: ThemeSlug;
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  preview: string;
  periodLabel: string;
  accent: string;
  heroImage: ImageKey;
  intro: string[];
  quickFacts: Array<{ label: string; value: string }>;
  insightCards: Array<{ title: string; body: string }>;
  timeline: Array<{ year: string; title: string; detail: string }>;
  sections: Array<{
    title: string;
    body: string[];
    bullets?: string[];
  }>;
  gallery: ImageKey[];
  relatedThemes: ThemeSlug[];
};

const civilizationTheme: Theme = {
  slug: "civilization",
  navLabel: "Civilization",
  eyebrow: "Origins and Continuities",
  title: "Civilization in Many Landscapes",
  subtitle:
    "China's civilization emerged from several ecological zones at once: millet north, rice south, steppe frontiers, mountain basins, and long coastlines. Its continuity comes less from an unbroken dynasty than from durable habits of writing, ritual, family organization, and statecraft.",
  preview:
    "Trace how rivers, scripts, religions, trade routes, and regional cultures built a civilization larger than any single court.",
  periodLabel: "c. 7000 BCE - present",
  accent: "#c35a2b",
  heroImage: "sanxingdui-statues",
  intro: [
    "China's past is often described as a single continuous civilization, but it is better understood as a mosaic that repeatedly learned how to integrate difference. The Yellow River plain, the Yangtze basin, the Sichuan Basin, the southeast coast, Inner Asian corridors, and the southwest highlands all produced their own rhythms of farming, exchange, and belief.",
    "What bound those worlds together over time was not uniformity. It was the spread of writing, state institutions, canonized texts, pilgrimage routes, and transport systems such as canals and caravan corridors. The result was a civilization capable of absorbing conquest dynasties, foreign religions, and new technologies while still presenting itself as a coherent cultural sphere.",
  ],
  quickFacts: [
    { label: "Time span", value: "From Neolithic villages to the digital age" },
    {
      label: "Anchor spaces",
      value: "Yellow River, Yangtze, Sichuan, coast, steppe frontiers",
    },
    {
      label: "Binding threads",
      value: "Script, canon, family lineage, market networks, ritual",
    },
    {
      label: "Key tension",
      value: "Regional diversity inside a shared civilizational frame",
    },
  ],
  insightCards: [
    {
      title: "More than one cradle",
      body: "Northern millet cultures and southern rice cultures developed in parallel, and later courts had to govern both ecological systems at scale.",
    },
    {
      title: "Writing created memory",
      body: "Oracle bones, bamboo slips, printed books, and archives allowed rulers and scholars to project authority across space and time.",
    },
    {
      title: "Belief remained plural",
      body: "Confucian ethics, Daoist practices, Buddhist institutions, ancestral rites, Islam, and local cults coexisted rather than replacing one another cleanly.",
    },
    {
      title: "Connectivity mattered",
      body: "Silk routes, maritime trade, and the Grand Canal reshaped what counted as the center of China and what counted as its frontier.",
    },
  ],
  timeline: [
    {
      year: "c. 7000-5000 BCE",
      title: "Early farming communities",
      detail:
        "Millet and rice cultivation support long-settled villages in several parts of what is now China.",
    },
    {
      year: "c. 3300-2300 BCE",
      title: "Regional ritual cultures",
      detail:
        "Longshan, Liangzhu, Hongshan, and other centers show social hierarchy, walls, and ceremonial craft traditions.",
    },
    {
      year: "c. 1600 BCE",
      title: "Shang writing and bronze",
      detail:
        "Oracle bone inscriptions and large bronze foundries anchor the earliest expansive written record.",
    },
    {
      year: "1046 BCE",
      title: "Zhou political language",
      detail:
        "The Mandate of Heaven offers a moral vocabulary for dynastic legitimacy and political change.",
    },
    {
      year: "2nd century BCE",
      title: "Silk routes open westward",
      detail:
        "Han diplomacy and trade deepen ties with Central Asia and wider Eurasia.",
    },
    {
      year: "4th-9th centuries",
      title: "Buddhist China",
      detail:
        "Translation, monastery building, and cave art transform the visual and spiritual landscape.",
    },
    {
      year: "10th-13th centuries",
      title: "Commercial revolution",
      detail:
        "Song markets, shipping, printing, and cities reshape everyday life and regional specialization.",
    },
    {
      year: "14th-18th centuries",
      title: "Regional high cultures",
      detail:
        "Porcelain, opera, lineage institutions, tea, and vernacular fiction flourish across different macro-regions.",
    },
  ],
  sections: [
    {
      title: "Landscapes that made history",
      body: [
        "No single river explains China's civilizational story. The Yellow River basin fostered early millet agriculture and many early courts; the Yangtze world became a giant rice frontier; Sichuan offered a protected basin with hydraulic wealth; the southeast coast connected China to maritime Asia; and the northwest corridors linked it to Inner Asia and the Islamic world.",
        "Because these zones differed so sharply, Chinese civilization grew through integration. States had to coordinate water control, tax collection, grain transport, migration, and frontier defense across very different climates and livelihoods.",
      ],
      bullets: [
        "North China Plain: early capitals, wheat and millet, steppe exposure",
        "Lower Yangtze: rice wealth, urban markets, late imperial commercial density",
        "Hexi Corridor: Silk Road passage between the agrarian core and Inner Asia",
        "Pearl River Delta and Fujian coast: migration, overseas trade, diaspora",
      ],
    },
    {
      title: "Script, classics, and the educated elite",
      body: [
        "Chinese writing did not simply record speech; it became a tool for administration, scholarship, and prestige. Control over texts meant control over memory, and standardized writing helped courts govern populations that spoke many local languages and dialects.",
        "Over time, mastery of canonical texts created the scholar-official ideal. That ideal never described all of society, but it shaped how power justified itself, how families educated sons, and how ambitious households imagined social mobility.",
      ],
      bullets: [
        "Oracle bones and bronze inscriptions tied writing to ritual and kingship",
        "The Confucian canon framed education, ethics, and official recruitment",
        "Printing multiplied commentaries, local gazetteers, and practical manuals",
      ],
    },
    {
      title: "Belief worlds, not one religion",
      body: [
        "China never had a single orthodoxy comparable to a single church. Confucianism supplied ethical and political language; Daoism organized ritual, cosmology, and self-cultivation; Buddhism provided monastic institutions and universal salvation; and local cults tied communities to deities, mountains, waters, and ancestors.",
        "Later centuries also brought stronger Muslim, Christian, and Tibetan Buddhist networks. The state's role was often to regulate and rank these traditions rather than eradicate all but one of them.",
      ],
    },
    {
      title: "Trade, migration, and cultural circulation",
      body: [
        "Chinese civilization expanded through movement as much as through conquest. Soldiers, merchants, monks, migrants, exam candidates, and refugees carried technologies, stories, and cuisines across provincial and imperial boundaries.",
        "That circulation explains why regional cultures remained vivid while still participating in a larger literary, political, and commercial world. A Jiangnan merchant city, a Shaanxi garrison, and a Fujian port could feel different and still belong to the same civilizational system.",
      ],
    },
  ],
  gallery: ["dunhuang-mural", "terracotta-army", "hall-of-supreme-harmony"],
  relatedThemes: ["dynasties", "science-and-innovation", "modern-transformation"],
};

const dynastiesTheme: Theme = {
  slug: "dynasties",
  navLabel: "Dynasties",
  eyebrow: "Imperial Structures",
  title: "Dynasties as Political Experiments",
  subtitle:
    "Chinese dynasties were not just royal families. Each one was an experiment in territory, taxation, military organization, legitimacy, and elite recruitment. Together they built the institutional grammar of the Chinese state.",
  preview:
    "Follow the chain from Shang and Zhou to Qing, and see how conquest, reform, and collapse remade the imperial toolkit.",
  periodLabel: "c. 1600 BCE - 1912",
  accent: "#8e3b2a",
  heroImage: "hall-of-supreme-harmony",
  intro: [
    "The standard dynastic story can look deceptively neat: one house rises, prospers, decays, and falls. In reality, every dynasty inherited competing regional powers, ecological pressures, and foreign threats, then assembled a new compromise between force and administration.",
    "What makes Chinese dynastic history so influential is the durability of its recurring solutions. Qin and Han standardization, Tang and Song elite culture, Yuan and Qing conquest governance, and the examination system all kept outliving the courts that sponsored them.",
  ],
  quickFacts: [
    { label: "Arc", value: "Shang to Qing, with many interregnums and split realms" },
    {
      label: "Capitals",
      value: "Anyang, Chang'an, Luoyang, Kaifeng, Hangzhou, Nanjing, Beijing",
    },
    {
      label: "Imperial toolkit",
      value: "Standardization, prefectures, exams, granaries, canals, law",
    },
    {
      label: "Recurring stress points",
      value: "Fiscal strain, court factionalism, rebellion, climate, frontier war",
    },
  ],
  insightCards: [
    {
      title: "Qin and Han set the template",
      body: "Weights, measures, roads, commanderies, legal codes, and a bureaucratic center became the default language of empire.",
    },
    {
      title: "The center moved south",
      body: "By the Song era, the economic heart of China had shifted decisively toward the Yangtze and southeast.",
    },
    {
      title: "Conquest did not mean rupture",
      body: "Yuan and Qing rulers came from outside the Han heartland but governed through hybrid institutions that became central to Chinese history.",
    },
    {
      title: "Collapse was systemic",
      body: "Dynasties rarely fell because of one bad emperor alone; breakdown usually combined war, money problems, ecological shocks, and social revolt.",
    },
  ],
  timeline: [
    {
      year: "c. 1600-1046 BCE",
      title: "Shang",
      detail:
        "Bronze ritual power, divination, and the earliest large-scale writing archive.",
    },
    {
      year: "1046-256 BCE",
      title: "Zhou",
      detail:
        "Feudal networks, the Mandate of Heaven, and the intellectual ferment of the classical age.",
    },
    {
      year: "221-206 BCE",
      title: "Qin",
      detail:
        "Short-lived but decisive unification through standardization and centralized administration.",
    },
    {
      year: "206 BCE-220 CE",
      title: "Han",
      detail:
        "Long imperial consolidation, Silk Road contacts, and the classical bureaucratic order.",
    },
    {
      year: "581-618",
      title: "Sui",
      detail: "Reunification and the early Grand Canal, with heavy costs that sped collapse.",
    },
    {
      year: "618-907",
      title: "Tang",
      detail:
        "A cosmopolitan empire linking China to Central Asia, Korea, Japan, and Buddhist networks.",
    },
    {
      year: "960-1279",
      title: "Song",
      detail:
        "A commercial, urban, and technological high point despite military vulnerability.",
    },
    {
      year: "1271-1368",
      title: "Yuan",
      detail:
        "Mongol rule integrated China into a much larger Eurasian imperial system.",
    },
    {
      year: "1368-1644",
      title: "Ming",
      detail:
        "Han restoration, maritime expeditions, the Forbidden City, and later fiscal crisis.",
    },
    {
      year: "1644-1912",
      title: "Qing",
      detail:
        "Territorial expansion, demographic boom, then internal upheaval and imperial collapse.",
    },
  ],
  sections: [
    {
      title: "From lineages to empire",
      body: [
        "The Shang and Zhou worlds were not yet China in the later imperial sense, but they generated the moral and ritual languages that later courts claimed. The Warring States period then created the harsh practical problem of how to mobilize land, labor, and armies efficiently enough to survive.",
        "Qin answered with ruthless centralization, while Han softened that structure into a longer-lasting balance between law, hierarchy, and classical learning. Most later dynasties worked within that basic architecture.",
      ],
    },
    {
      title: "The institutions that endured",
      body: [
        "Chinese dynasties varied enormously, yet several institutions kept returning: county and prefectural administration, professional record-keeping, grain taxes, transport infrastructure, standardized law, and a cultivated elite that mediated between court and locality.",
        "The civil service examinations were especially influential. They never created full meritocracy, but they helped make textual learning and bureaucratic service the highest-status route into power.",
      ],
      bullets: [
        "Standardized script and paperwork supported scale",
        "Granaries and canals linked food supply to political legitimacy",
        "The exam system rewarded memorization, commentary, and moral performance",
      ],
    },
    {
      title: "Cosmopolitan, commercial, and conquest empires",
      body: [
        "Tang Chang'an was one of the world's great cosmopolitan capitals. Song China pioneered large cities, sophisticated markets, movable type printing, paper money, and sea trade. Yuan rule linked North China to Mongol Eurasia, while the Qing built a multiethnic empire reaching deep into Inner Asia.",
        "This means dynastic history is not just a tale of inward-looking empire. Many of China's richest periods were deeply connected to transregional flows of goods, ideas, and people.",
      ],
    },
    {
      title: "Why dynasties fell",
      body: [
        "Dynastic decline was rarely a simple moral drama. Corruption mattered, but so did inflation, silver shortages, climate variability, peasant flight, military overstretch, and frontier invasion. A state could appear ceremonially grand even while its tax base was decaying.",
        "That pattern helps explain why later Chinese political thinking became so focused on order, unity, food supply, and administrative competence. Dynastic memory taught elites that disorder could be far more catastrophic than bad policy.",
      ],
    },
  ],
  gallery: ["terracotta-army", "great-wall-jinshanling", "hall-of-supreme-harmony"],
  relatedThemes: ["civilization", "wars-and-revolutions", "century-of-humiliation"],
};

const centuryOfHumiliationTheme: Theme = {
  slug: "century-of-humiliation",
  navLabel: "Humiliation",
  eyebrow: "Sovereignty Under Pressure",
  title: "The Century of Humiliation",
  subtitle:
    "The phrase usually refers to the era from the First Opium War in 1839 to the founding of the People's Republic in 1949. It compresses invasion, unequal treaties, rebellion, reform, and revolution into a national memory about weakness and recovery.",
  preview:
    "See how foreign coercion, domestic crisis, and the search for national revival reshaped modern Chinese politics.",
  periodLabel: "1839 - 1949",
  accent: "#9c3825",
  heroImage: "treaty-of-nanking-signing",
  intro: [
    "The 'century of humiliation' is not a neutral label; it is a retrospective framework that became politically powerful in the twentieth century. But it captures something real: Qing China lost tariff autonomy, treaty-port control, and military credibility at the same time that huge internal rebellions devastated the country.",
    "Modern Chinese nationalism grew out of that crisis. Reformers, constitutionalists, republicans, socialists, and later Communists all claimed to offer a route from subordination to renewal, even though they disagreed about what had gone wrong and how to fix it.",
  ],
  quickFacts: [
    { label: "Conventional span", value: "1839 to 1949" },
    {
      label: "Main arenas",
      value: "Canton, Nanjing, Tianjin, Shanghai, Beijing, Manchuria, Wuhan",
    },
    {
      label: "Core injuries",
      value: "Unequal treaties, indemnities, occupation, lost tariff and legal autonomy",
    },
    {
      label: "Long afterlife",
      value: "National memory of weakness still shapes diplomacy and legitimacy",
    },
  ],
  insightCards: [
    {
      title: "Foreign pressure exposed structural gaps",
      body: "Industrial-era naval power and global finance revealed how vulnerable the Qing system had become.",
    },
    {
      title: "Internal rebellion was equally destructive",
      body: "The Taiping and other uprisings caused staggering human and fiscal losses, weakening the dynasty from within.",
    },
    {
      title: "Reform was real but uneven",
      body: "Self-Strengthening, arsenals, new schools, and constitutional reform all appeared, but too slowly and without enough coherence.",
    },
    {
      title: "Nationalism changed the political subject",
      body: "Subjects of a dynasty were increasingly asked to imagine themselves as members of a nation that had to be saved and rebuilt.",
    },
  ],
  timeline: [
    {
      year: "1839-1842",
      title: "First Opium War",
      detail:
        "British military power defeats the Qing and opens the treaty-port era.",
    },
    {
      year: "1842",
      title: "Treaty of Nanking",
      detail:
        "Hong Kong is ceded and a framework for unequal treaty relations is established.",
    },
    {
      year: "1850-1864",
      title: "Taiping Rebellion",
      detail:
        "One of the deadliest civil wars in history tears through the Qing realm.",
    },
    {
      year: "1861-1895",
      title: "Self-Strengthening movement",
      detail:
        "Officials build arsenals, shipyards, schools, and translation programs while trying to preserve Qing rule.",
    },
    {
      year: "1894-1895",
      title: "First Sino-Japanese War",
      detail:
        "Japan's victory shatters confidence in Qing military and diplomatic recovery.",
    },
    {
      year: "1900",
      title: "Boxer crisis",
      detail:
        "Foreign intervention and occupation deepen the sense of dynastic bankruptcy.",
    },
    {
      year: "1911",
      title: "Xinhai Revolution",
      detail:
        "The Qing falls and the imperial system ends, but state fragmentation remains.",
    },
    {
      year: "1919",
      title: "May Fourth movement",
      detail:
        "Students and intellectuals fuse anti-imperial protest with a program for cultural and political renewal.",
    },
    {
      year: "1931-1945",
      title: "Japanese aggression and total war",
      detail:
        "Manchurian occupation, invasion, and occupation intensify the narrative of survival and recovery.",
    },
    {
      year: "1949",
      title: "Founding of the PRC",
      detail:
        "A new state claims that the age of national humiliation has ended.",
    },
  ],
  sections: [
    {
      title: "Unequal treaties and treaty-port China",
      body: [
        "The Opium Wars mattered not only because Qing armies lost battles, but because the settlement transformed sovereignty. Indemnities, low tariffs, foreign concessions, and extraterritorial rights created spaces inside China where the Qing state no longer exercised full control.",
        "Shanghai became the clearest symbol of this new order: a booming modern city, but one whose legal and financial architecture often answered to foreign powers rather than Chinese authorities.",
      ],
    },
    {
      title: "Rebellion, regional armies, and self-strengthening",
      body: [
        "The nineteenth century cannot be reduced to foreign invasion alone. The Taiping Rebellion, Nian movement, Muslim rebellions, and court factionalism consumed lives and revenue on an enormous scale. The Qing survived partly by empowering provincial officials and regional armies, but that solution also weakened central authority.",
        "Self-Strengthening tried to borrow Western weapons and industrial methods without abandoning Confucian political order. The movement produced arsenals, shipyards, schools, and translations, yet it never fully solved the deeper problems of institutions and command.",
      ],
    },
    {
      title: "Reformers, revolutionaries, and the end of empire",
      body: [
        "After defeat by Japan in 1895, many Chinese elites concluded that piecemeal adaptation would not be enough. Some wanted constitutional monarchy, others republican revolution, and still others a deeper social transformation. This was the political world that produced Kang Youwei, Liang Qichao, Sun Yat-sen, the New Culture movement, and later Communist organizing.",
        "The 1911 Revolution ended the dynasty but not the crisis. Warlordism, foreign pressure, and competing national projects meant the republic inherited both the hopes and the fractures of the late Qing.",
      ],
    },
    {
      title: "Why the memory still matters",
      body: [
        "In modern Chinese political language, humiliation is not only about the past; it is a warning about what happens when the state is weak, divided, or technologically dependent. That memory helps explain why unity, sovereignty, and industrial capability are treated as existential rather than merely desirable.",
        "The phrase also simplifies history. Not every problem came from foreigners, and not every reform can be explained by humiliation alone. Still, as a civic and political narrative, it remains one of the strongest organizing stories in modern China.",
      ],
    },
  ],
  gallery: ["opium-war-junks", "xinhai-revolution", "marco-polo-bridge"],
  relatedThemes: ["wars-and-revolutions", "modern-transformation", "dynasties"],
};

const warsAndRevolutionsTheme: Theme = {
  slug: "wars-and-revolutions",
  navLabel: "Wars",
  eyebrow: "Conflict and Mobilization",
  title: "Wars, Frontiers, and Revolutions",
  subtitle:
    "Chinese history was shaped as much by warfare and mobilization as by philosophy and bureaucracy. States rose by solving military problems, and many of the greatest political transformations came out of prolonged war.",
  preview:
    "Study how strategy, frontier pressure, internal rebellion, anti-imperial war, and revolution remade the Chinese state.",
  periodLabel: "475 BCE - 1950s and beyond",
  accent: "#7a3227",
  heroImage: "great-wall-jinshanling",
  intro: [
    "The military history of China is not just a sequence of campaigns. It is the history of how agrarian cores negotiated with steppe powers, how empires maintained supply lines, how cities and walls worked with taxation, and how civil wars often proved deadlier than foreign invasions.",
    "Modern revolutions intensified these patterns. By the twentieth century, mass politics, industrial weapons, guerrilla warfare, propaganda, and party organization had turned warfare into a struggle over society itself rather than simply over dynastic succession.",
  ],
  quickFacts: [
    { label: "Arc", value: "From the Warring States to the Korean War era" },
    {
      label: "Strategic classics",
      value: "Sunzi, Wei Liaozi, military frontier manuals, late imperial statecraft texts",
    },
    {
      label: "Recurring pattern",
      value: "External pressure plus internal fragmentation",
    },
    {
      label: "Military shifts",
      value: "Chariots, cavalry, gunpowder, industrial warfare, mass mobilization",
    },
  ],
  insightCards: [
    {
      title: "Logistics beat romance",
      body: "Walls and heroic generals mattered, but grain transport, taxes, roads, and command chains usually mattered more.",
    },
    {
      title: "Frontiers were interactive zones",
      body: "The steppe, plateau, and maritime rim were not empty margins; they were political systems that constantly reshaped the agrarian core.",
    },
    {
      title: "Civil war could be catastrophic",
      body: "An Lushan, Taiping, and the twentieth-century civil war changed demography, finance, and legitimacy at national scale.",
    },
    {
      title: "Revolution militarized society",
      body: "In the twentieth century, parties, ideology, and armies fused into new kinds of state power.",
    },
  ],
  timeline: [
    {
      year: "475-221 BCE",
      title: "Warring States",
      detail:
        "Competing states professionalize armies and bureaucracy, setting the stage for unification.",
    },
    {
      year: "755-763",
      title: "An Lushan rebellion",
      detail: "Tang power is shattered and regional militarization deepens.",
    },
    {
      year: "1127",
      title: "Jin conquest of North China",
      detail:
        "The Song court retreats south, transforming the empire's geography and defense strategy.",
    },
    {
      year: "1279",
      title: "Song defeat by the Mongols",
      detail:
        "China becomes part of a wider Mongol imperial order.",
    },
    {
      year: "1644",
      title: "Ming collapse and Qing conquest",
      detail:
        "Internal rebellion and Manchu expansion produce a new conquest dynasty.",
    },
    {
      year: "1850-1864",
      title: "Taiping civil war",
      detail:
        "Mass rebellion devastates the Yangtze heartland and empowers provincial militarists.",
    },
    {
      year: "1937",
      title: "Marco Polo Bridge and full-scale war",
      detail:
        "The conflict with Japan becomes a total national war of resistance.",
    },
    {
      year: "1945-1949",
      title: "Civil war resumes",
      detail:
        "Nationalists and Communists fight for control of the postwar state.",
    },
    {
      year: "1950-1953",
      title: "Korean War",
      detail:
        "The new PRC enters a major international war, cementing a militarized Cold War state.",
    },
  ],
  sections: [
    {
      title: "State formation through war",
      body: [
        "The Warring States era forged the relationship between military necessity and administrative innovation. States that could survey land, conscript labor, and supply armies survived; those that could not disappeared. That is one reason Chinese political thought became so interested in order, law, and discipline.",
        "Even after unification, Chinese empires remained military projects. Garrison systems, frontier colonies, relay stations, cavalry procurement, and wall building were central to governing an enormous space.",
      ],
    },
    {
      title: "Gunpowder, fortification, and internal conflict",
      body: [
        "China was an early center of gunpowder technology, but technology alone never guaranteed dominance. The real question was how weapons were embedded in institutions, command, and industry. Late imperial states often faced a double burden: defending borders while crushing internal uprisings.",
        "That helps explain why the Taiping Rebellion and late Qing military regionalization were so consequential. They altered who held armed power inside China long before the dynasty formally fell.",
      ],
    },
    {
      title: "War of resistance and revolutionary legitimacy",
      body: [
        "The 1937-1945 war against Japan reordered Chinese politics. Coastal industrial zones were lost, millions were displaced inland, and Chongqing became the wartime capital of a battered but still functioning republic. The Communist movement expanded by embedding itself in rural bases and anti-Japanese resistance networks.",
        "When civil war resumed after 1945, both sides were fighting not only over territory but over claims to represent national salvation. Victory would go to the side that linked military success to social mobilization more effectively.",
      ],
    },
    {
      title: "After 1949",
      body: [
        "The new People's Republic treated military power as a foundation of sovereignty. The Korean War reinforced the lesson that national survival depended on industrial capacity, centralized command, and strategic depth.",
        "Contemporary Chinese military modernization still carries echoes of this long history: concern for unity, logistics, frontier control, and the danger of technological inferiority.",
      ],
    },
  ],
  gallery: ["marco-polo-bridge", "xinhai-revolution", "opium-war-junks"],
  relatedThemes: ["century-of-humiliation", "dynasties", "modern-transformation"],
};

const scienceAndInnovationTheme: Theme = {
  slug: "science-and-innovation",
  navLabel: "Science",
  eyebrow: "Ideas, Tools, Infrastructures",
  title: "Scientific Traditions and Modern Innovation",
  subtitle:
    "China's scientific story runs from paper, printing, and gunpowder to radio astronomy, satellite navigation, high-speed rail, and orbital laboratories. It is a history of craft knowledge, state sponsorship, industrial scale, and global exchange.",
  preview:
    "Explore how classical inventions, technical crafts, modern institutions, and contemporary megaprojects fit into one longer innovation arc.",
  periodLabel: "Ancient inventions to the present",
  accent: "#2f6b63",
  heroImage: "tiangong",
  intro: [
    "It is misleading to talk about Chinese science as if it moved in a straight line from ancient brilliance to modern rediscovery. Different eras privileged different kinds of knowledge: court astronomy, hydraulic engineering, medicine, artisan experimentation, military technology, industrial chemistry, electronics, and space engineering.",
    "What is consistent is the importance of institutions. The most consequential breakthroughs usually appeared when craft practice, state demand, and large systems of training or manufacture aligned behind them.",
  ],
  quickFacts: [
    {
      label: "Classic landmarks",
      value: "Paper, printing, compass, gunpowder, seismology, hydraulics",
    },
    {
      label: "Modern platforms",
      value: "Academies, universities, state labs, industrial parks, private tech firms",
    },
    {
      label: "Signature sectors",
      value: "Space, telecoms, transport, renewables, advanced manufacturing",
    },
    {
      label: "Central question",
      value: "How institutional scale turns technical capacity into strategic power",
    },
  ],
  insightCards: [
    {
      title: "Craft mattered as much as theory",
      body: "Papermaking, metallurgy, ceramics, and navigation came from accumulated practical knowledge as much as abstract science.",
    },
    {
      title: "Song China was unusually inventive",
      body: "Commercialization, urban demand, and printing created fertile ground for technical change.",
    },
    {
      title: "Modern science required institutions",
      body: "Laboratories, universities, planning agencies, and overseas-trained researchers transformed the twentieth-century landscape.",
    },
    {
      title: "Scale is a modern advantage",
      body: "Large domestic markets, infrastructure funding, and manufacturing ecosystems speed the deployment of new systems once they are feasible.",
    },
  ],
  timeline: [
    {
      year: "105 CE (traditional date)",
      title: "Paper",
      detail:
        "Cai Lun becomes the symbolic figure for papermaking, though the craft itself predates him.",
    },
    {
      year: "2nd century CE",
      title: "Zhang Heng's seismoscope",
      detail:
        "Court astronomy and instrumentation show the close tie between science and governance.",
    },
    {
      year: "7th-11th centuries",
      title: "Printing, gunpowder, compass",
      detail:
        "Technologies with world-changing consequences mature across the medieval period.",
    },
    {
      year: "1088",
      title: "Su Song's clock tower",
      detail:
        "Mechanical engineering, astronomy, and state timekeeping converge.",
    },
    {
      year: "1964",
      title: "First atomic bomb",
      detail:
        "The PRC demonstrates a high-stakes national science mobilization.",
    },
    {
      year: "1970",
      title: "Dong Fang Hong-1",
      detail:
        "China launches its first satellite.",
    },
    {
      year: "2003",
      title: "Shenzhou 5",
      detail:
        "China becomes the third country to launch a human into space independently.",
    },
    {
      year: "2016",
      title: "FAST telescope begins operation",
      detail:
        "A giant radio astronomy facility expands China's big-science profile.",
    },
    {
      year: "2020",
      title: "BeiDou global services complete",
      detail:
        "China's satellite navigation system reaches full operational status.",
    },
    {
      year: "2021-present",
      title: "Tiangong era",
      detail:
        "A continuously inhabited modular space station marks a new level of systems integration.",
    },
  ],
  sections: [
    {
      title: "Ancient inventions and technical cultures",
      body: [
        "The famous 'Four Great Inventions' are only the beginning. Chinese technical traditions also included large-scale iron casting, advanced ceramics, canal engineering, astronomical observation, agricultural treatises, pharmacology, and sophisticated bookkeeping for grain and labor.",
        "These achievements usually grew inside practical worlds of artisans, officials, monks, and merchants. The state often provided the demand signal, but workshops and local expertise did the day-to-day experimentation.",
      ],
    },
    {
      title: "Institutions for modern science",
      body: [
        "Twentieth-century Chinese science required new institutions: modern universities, laboratories, engineering ministries, military research systems, and academies. Foreign study and diaspora exchange were crucial, even when national politics later made those connections uneven.",
        "After 1949, the state invested heavily in strategic sectors such as nuclear science, aerospace, and heavy industry. That pattern left a lasting preference for large mission-driven programs.",
      ],
    },
    {
      title: "Space, telecoms, rail, and big systems",
      body: [
        "Contemporary China is especially visible in system-level engineering. The BeiDou network, Tiangong station, high-speed rail grid, large dams, renewable manufacturing chains, and fast deployment of telecom infrastructure show how design, finance, manufacturing, and policy can move together.",
        "This does not mean every frontier is equally strong, but it does mean China is unusually capable of taking an idea from pilot project to national platform.",
      ],
      bullets: [
        "FAST: flagship radio astronomy facility in Guizhou",
        "Tiangong: modular orbital platform for long-duration missions",
        "CR400AF and the HSR network: transport as integrated engineering",
      ],
    },
    {
      title: "Limits and next challenges",
      body: [
        "Innovation at scale creates new pressures: basic research quality, openness to dissent, intellectual property enforcement, semiconductor bottlenecks, and the need to balance state direction with entrepreneurial flexibility.",
        "The next phase of Chinese science will depend on whether its institutions can combine scale with originality, and strategic autonomy with global collaboration.",
      ],
    },
  ],
  gallery: ["fast", "cr400af", "pudong"],
  relatedThemes: ["modern-transformation", "civilization", "wars-and-revolutions"],
};

const modernTransformationTheme: Theme = {
  slug: "modern-transformation",
  navLabel: "Modern China",
  eyebrow: "Reform, Urbanization, Power",
  title: "Modern Transformation",
  subtitle:
    "Modern China was shaped by the construction of a new socialist state, the post-1978 reform era, and a vast remaking of cities, industry, infrastructure, and global economic position. It is a story of growth and capacity, but also of hard constraints.",
  preview:
    "Track how state-building, reform and opening, export industry, urbanization, and new challenges define contemporary China.",
  periodLabel: "1949 - present",
  accent: "#2c4f70",
  heroImage: "pudong",
  intro: [
    "The People's Republic inherited war damage, uneven industrialization, and fractured infrastructure. Its first decades focused on sovereignty, land reform, state consolidation, and heavy industry. Later, reform and opening changed the operating logic of the system without ending the state's central role.",
    "Since the 1980s, China has urbanized at extraordinary speed, built one of the world's largest industrial ecosystems, and become central to global supply chains. That transformation is now entering a more complex phase marked by aging, slower productivity growth, environmental pressure, and geopolitical competition.",
  ],
  quickFacts: [
    { label: "Foundational break", value: "1949 state-building, 1978 reform turn" },
    {
      label: "Key regions",
      value: "Pearl River Delta, Yangtze Delta, Bohai Rim, Chengdu-Chongqing",
    },
    {
      label: "Visible outcomes",
      value: "Megacities, HSR, export manufacturing, digital platforms, green industry",
    },
    {
      label: "Current headwinds",
      value: "Demography, debt, inequality, climate stress, external pressure",
    },
  ],
  insightCards: [
    {
      title: "The state never disappeared",
      body: "Reform changed incentives and ownership patterns, but the state remained central to land, finance, infrastructure, and strategic direction.",
    },
    {
      title: "Cities became laboratories",
      body: "Shenzhen, Shanghai, Suzhou, Hangzhou, and Chongqing each tested different blends of manufacturing, finance, logistics, and tech growth.",
    },
    {
      title: "Infrastructure is political",
      body: "Railways, ports, power grids, and digital networks integrate territory and concentrate state capacity.",
    },
    {
      title: "Scale cuts both ways",
      body: "Massive domestic markets enable rapid deployment, but they also magnify debt, real-estate dependence, and regional disparities.",
    },
  ],
  timeline: [
    {
      year: "1949",
      title: "Founding of the PRC",
      detail:
        "A new state claims national reunification and sovereign reconstruction.",
    },
    {
      year: "1953",
      title: "First Five-Year Plan",
      detail:
        "Heavy-industry-led development becomes the early model of socialist modernization.",
    },
    {
      year: "1978",
      title: "Reform and opening",
      detail:
        "Deng Xiaoping's turn changes incentives, foreign investment policy, and rural production.",
    },
    {
      year: "1980",
      title: "Special Economic Zones",
      detail:
        "Shenzhen and other zones become laboratories for export-led growth.",
    },
    {
      year: "2001",
      title: "WTO accession",
      detail:
        "China is integrated more deeply into global trade and manufacturing networks.",
    },
    {
      year: "2008 onward",
      title: "High-speed rail era",
      detail:
        "Massive infrastructure spending reorders mobility and regional integration.",
    },
    {
      year: "2013 onward",
      title: "Infrastructure and outward strategy",
      detail:
        "New logistics corridors and overseas economic ambitions expand China's external footprint.",
    },
    {
      year: "2020s",
      title: "Green and advanced manufacturing push",
      detail:
        "Electric vehicles, batteries, solar, and digital industry become central to the next growth model.",
    },
  ],
  sections: [
    {
      title: "From revolutionary state to reform state",
      body: [
        "The early PRC prioritized land reform, social control, literacy campaigns, and a heavy industrial base. Even where policy was disastrous, the long-term effect was to strengthen the state's reach into territory, labor, and data collection.",
        "After 1978, reform loosened collective structures, welcomed foreign capital, and allowed local governments and entrepreneurs to compete for growth. But reform worked because it rechanneled state capacity rather than abolishing it.",
      ],
    },
    {
      title: "Urbanization and industrial ecosystems",
      body: [
        "China's cities did not simply get bigger; they became specialized machines. Delta regions concentrated manufacturing supply chains, finance, universities, migrant labor, and ports in ways that compounded productivity. The result was not one economy but a hierarchy of regional growth engines.",
        "This urban-industrial system underpins China's role in electronics, machinery, chemicals, steel, shipbuilding, batteries, and consumer goods, even as policymakers try to push value upward into advanced sectors.",
      ],
    },
    {
      title: "Digital and infrastructural modernity",
      body: [
        "Modern China is intensely infrastructural. Ports, expressways, airports, metro systems, high-speed rail, mobile payments, logistics platforms, and smart-grid systems have changed the texture of everyday life and the state's ability to coordinate vast spaces.",
        "That infrastructural buildout also supports political goals: reducing regional gaps, binding interior provinces more tightly to the coast, and insulating critical systems from external shocks.",
      ],
      bullets: [
        "Shenzhen: hardware, design, and tech entrepreneurship",
        "Shanghai: finance, logistics, and global-facing urban power",
        "Guizhou and western provinces: data centers, energy, and new corridors",
      ],
    },
    {
      title: "The next phase",
      body: [
        "The era of easy catch-up growth is over. China now faces aging, lower birth rates, pressure on property-led finance, water and climate constraints, and more contested access to global technology. The question is no longer whether transformation happened, but what kind of maturity follows it.",
        "That makes contemporary China especially important to study historically. Its current choices are being made by a state that still remembers dynastic collapse, foreign domination, revolutionary war, and the developmental leaps of the reform era.",
      ],
    },
  ],
  gallery: ["shenzhen", "cr400af", "tiangong"],
  relatedThemes: ["science-and-innovation", "century-of-humiliation", "civilization"],
};

export const themes: Record<ThemeSlug, Theme> = {
  civilization: civilizationTheme,
  dynasties: dynastiesTheme,
  "century-of-humiliation": centuryOfHumiliationTheme,
  "wars-and-revolutions": warsAndRevolutionsTheme,
  "science-and-innovation": scienceAndInnovationTheme,
  "modern-transformation": modernTransformationTheme,
};

export const themeList = themeOrder.map((slug) => themes[slug]);

export const mapStories = [
  {
    id: "yellow-river",
    title: "Yellow River Cradle",
    locationLabel: "Henan, Shanxi, Shaanxi",
    blurb:
      "This belt contains early capitals, bronze-age archives, and the political language of the classical age. Hover nearby provinces to see how the core expanded outward.",
    themeSlug: "civilization" as ThemeSlug,
    x: 55,
    y: 38,
    provinces: ["henan", "shanxi", "shaanxi", "hebei"],
  },
  {
    id: "silk-road",
    title: "Hexi and Silk Road Corridors",
    locationLabel: "Gansu and Xinjiang",
    blurb:
      "The northwest was never peripheral in cultural terms. It carried caravans, garrisons, Buddhism, Islam, and the strategic logic of frontier empire.",
    themeSlug: "dynasties" as ThemeSlug,
    x: 25,
    y: 38,
    provinces: ["gansu", "xinjiang-uygur", "ningxia-hui", "quinghai"],
  },
  {
    id: "lower-yangtze",
    title: "Lower Yangtze and Grand Canal",
    locationLabel: "Jiangsu, Zhejiang, Shanghai",
    blurb:
      "Commercial wealth, urban culture, literati networks, and grain transport made this the economic heartland of late imperial China.",
    themeSlug: "civilization" as ThemeSlug,
    x: 72,
    y: 53,
    provinces: ["jiangsu", "zhejiang", "shanghai", "anhui"],
  },
  {
    id: "treaty-ports",
    title: "Treaty Ports and Maritime Shock",
    locationLabel: "Shanghai, Fujian, Guangdong",
    blurb:
      "Coastal openings became the frontline of the nineteenth-century encounter with imperial powers, capitalism, and new political ideas.",
    themeSlug: "century-of-humiliation" as ThemeSlug,
    x: 74,
    y: 69,
    provinces: ["shanghai", "fujian", "guangdong", "hong-kong"],
  },
  {
    id: "wartime-interior",
    title: "Wartime Interior",
    locationLabel: "Sichuan and Chongqing",
    blurb:
      "When the coast was invaded, the southwest and upper Yangtze became the strategic rear base of modern Chinese survival.",
    themeSlug: "wars-and-revolutions" as ThemeSlug,
    x: 49,
    y: 58,
    provinces: ["sichuan", "chongqing", "guizhou", "yunnan"],
  },
  {
    id: "innovation-corridor",
    title: "Innovation Corridors",
    locationLabel: "Beijing, Guizhou, Pearl River Delta",
    blurb:
      "Contemporary scientific power sits in linked corridors of research, manufacturing, data, and infrastructure rather than a single capital alone.",
    themeSlug: "science-and-innovation" as ThemeSlug,
    x: 66,
    y: 28,
    provinces: ["beijing", "guizhou", "guangdong", "shanghai"],
  },
];

export const provinceHighlights: Record<
  string,
  {
    label: string;
    body: string;
  }
> = {
  beijing: {
    label: "Imperial and modern capital",
    body: "Seat of late Yuan, Ming, and Qing rule, then the political center of the modern PRC and a hub for universities, archives, and national institutions.",
  },
  gansu: {
    label: "Silk Road gateway",
    body: "The Hexi Corridor linked the agrarian core to Central Asia, making Gansu vital for trade, diplomacy, Buddhism, and military logistics.",
  },
  guangdong: {
    label: "Maritime frontier",
    body: "Canton trade, the Opium War, overseas migration, and later reform-era manufacturing all give Guangdong outsized historical weight.",
  },
  guizhou: {
    label: "Southwest frontier to science hub",
    body: "Once seen as remote, Guizhou now hosts major data infrastructure and the FAST radio telescope, symbolizing western development and scientific ambition.",
  },
  hebei: {
    label: "North China hinge",
    body: "Great Wall defenses, the approach to Beijing, and key twentieth-century battle zones make Hebei central to frontier and wartime history.",
  },
  henan: {
    label: "Classical heartland",
    body: "Early capitals, dense agricultural settlement, and long association with the Zhongyuan core make Henan one of the deepest historical centers of Chinese state formation.",
  },
  jiangsu: {
    label: "Canal and commerce",
    body: "The Grand Canal, Lower Yangtze markets, and late imperial urban wealth made Jiangsu crucial to fiscal and cultural life.",
  },
  shaanxi: {
    label: "Chang'an and imperial west",
    body: "Home to Qin and Tang capitals, Shaanxi sits at the junction of classical state formation and Inner Asian connections.",
  },
  shanghai: {
    label: "Treaty port to global metropolis",
    body: "Shanghai compressed foreign concessions, industrial modernity, revolutionary politics, finance, and twenty-first-century urban power into one city.",
  },
  shanxi: {
    label: "Loess plateau and merchant routes",
    body: "Shanxi linked North China agriculture, frontier defense, and long-distance merchant finance across several dynasties.",
  },
  sichuan: {
    label: "Protected basin",
    body: "Sichuan's geography supported population growth, agricultural resilience, and the wartime interior strategy in the twentieth century.",
  },
  xizang: {
    label: "Plateau frontier",
    body: "The Tibetan Plateau shaped frontier governance, caravan routes, Buddhism, and the multiethnic geography of empire.",
  },
  "xinjiang-uygur": {
    label: "Oasis and empire",
    body: "Xinjiang connected China to Central Asia and became central to Qing expansion, Silk Road history, and modern strategic planning.",
  },
  yunnan: {
    label: "Southwest crossroads",
    body: "Yunnan linked upland cultures, copper and mineral zones, Southeast Asian routes, and wartime escape and supply corridors.",
  },
  zhejiang: {
    label: "Maritime and commercial China",
    body: "Ports, handicraft wealth, private enterprise, and literati culture made Zhejiang a major engine of both late imperial and modern commerce.",
  },
};

export function getTheme(slug: string): Theme | undefined {
  return themes[slug as ThemeSlug];
}
