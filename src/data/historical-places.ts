import type { ImageKey } from "@/data/china-content";

export type HistoricalPlace = {
  name: string;
  location: string;
  period: string;
  description: string;
  image: ImageKey;
};

export type HistoricalPlaceGroup = {
  slug: string;
  title: string;
  subtitle: string;
  image: ImageKey;
  places: HistoricalPlace[];
};

export const historicalPlacesHero = {
  eyebrow: "Landmarks, capitals, routes, and memory sites",
  title: "Historical Places",
  subtitle:
    "A curated guide to major historical places across China, from Neolithic centers and imperial capitals to cave temples, canal towns, and modern sites of war and revolution.",
  metrics: [
    { label: "Curated places", value: "18" },
    { label: "Time span", value: "Neolithic to the 20th century" },
    { label: "Main types", value: "Capitals, ritual centers, walls, caves, canals, wartime sites" },
    { label: "Best use", value: "Scan by era, region, or theme" },
  ],
};

export const historicalPlaceGroups: HistoricalPlaceGroup[] = [
  {
    slug: "origins-and-early-centers",
    title: "Origins and Early Centers",
    subtitle:
      "These places show that early Chinese civilization grew from several regional centers rather than one single cradle.",
    image: "sanxingdui-statues",
    places: [
      {
        name: "Liangzhu Ancient City",
        location: "Hangzhou, Zhejiang",
        period: "c. 3300-2300 BCE",
        image: "liangzhu-site",
        description:
          "Liangzhu reveals a highly organized late Neolithic society with walls, water management, and ritual jade production. It is one of the strongest pieces of evidence for early state formation in the Lower Yangtze.",
      },
      {
        name: "Yinxu",
        location: "Anyang, Henan",
        period: "Late Shang",
        image: "yinxu-site",
        description:
          "Yinxu was one of the late Shang capitals and the place where oracle bones were found in large numbers. It anchors the earliest long written record of Chinese kingship, ritual, and warfare.",
      },
      {
        name: "Sanxingdui",
        location: "Guanghan, Sichuan",
        period: "2nd millennium BCE",
        image: "sanxingdui-statues",
        description:
          "Sanxingdui is famous for its striking bronze masks and statues, which look very different from the North China bronze tradition. The site proves that early Chinese civilization was regionally diverse from the beginning.",
      },
      {
        name: "Banpo",
        location: "Xi'an, Shaanxi",
        period: "c. 4800-3600 BCE",
        image: "banpo-museum",
        description:
          "Banpo is one of the best-known Neolithic village sites in North China. It helps visitors picture everyday life before dynastic courts, with houses, pottery, storage pits, and burial zones.",
      },
    ],
  },
  {
    slug: "capitals-and-imperial-power",
    title: "Capitals and Imperial Power",
    subtitle:
      "These places show how dynasties turned political authority into walls, palaces, tombs, roads, and ceremonial landscapes.",
    image: "hall-of-supreme-harmony",
    places: [
      {
        name: "Xi'an and Ancient Chang'an",
        location: "Shaanxi",
        period: "Qin, Han, Tang",
        image: "xian-city-wall",
        description:
          "Xi'an stands on the ground of several great capitals, especially ancient Chang'an. It was one of the main centers from which imperial institutions, frontier campaigns, and Silk Road exchanges were directed.",
      },
      {
        name: "Terracotta Army",
        location: "Lintong, Shaanxi",
        period: "Qin dynasty",
        image: "terracotta-army",
        description:
          "The Terracotta Army was built for the tomb complex of Qin Shi Huang, the first emperor. It captures the scale, discipline, and command culture of the first unified imperial state.",
      },
      {
        name: "Forbidden City",
        location: "Beijing",
        period: "Ming and Qing",
        image: "hall-of-supreme-harmony",
        description:
          "The Forbidden City is the most famous surviving court complex of imperial China. Its architecture turned hierarchy and ritual into physical space, making state power visible in stone, timber, and ceremony.",
      },
      {
        name: "Great Wall at Jinshanling",
        location: "Beijing-Hebei frontier",
        period: "Mainly Ming",
        image: "great-wall-jinshanling",
        description:
          "Jinshanling is one of the most dramatic surviving stretches of the Great Wall. It shows that frontier defense depended on watchtowers, passes, signaling, and troop movement rather than on a single continuous barrier alone.",
      },
      {
        name: "Temple of Confucius in Qufu",
        location: "Shandong",
        period: "Expanded over many dynasties",
        image: "confucius-temple",
        description:
          "Qufu, the hometown of Confucius, became one of the great ritual and educational centers of Chinese history. The temple complex reflects how classical learning and moral legitimacy were built into the imperial order.",
      },
    ],
  },
  {
    slug: "routes-faith-and-cultural-exchange",
    title: "Routes, Faith, and Cultural Exchange",
    subtitle:
      "These places connect trade, pilgrimage, religious art, and internal transport across the Chinese world.",
    image: "dunhuang-mural",
    places: [
      {
        name: "Mogao Caves, Dunhuang",
        location: "Gansu",
        period: "4th-14th centuries",
        image: "mogao-caves",
        description:
          "The Mogao Caves preserve one of the richest archives of Buddhist art anywhere in Eurasia. Dunhuang mattered because it sat at a Silk Road hinge where monks, merchants, and states all passed through.",
      },
      {
        name: "Longmen Grottoes",
        location: "Luoyang, Henan",
        period: "Northern Wei to Tang",
        image: "longmen-grottoes",
        description:
          "Longmen's carved cave temples show how Buddhism became part of the Chinese imperial landscape. The site brings together court patronage, devotional art, and the movement of ideas across centuries.",
      },
      {
        name: "The Grand Canal",
        location: "From Beijing to Hangzhou",
        period: "Major expansion from Sui onward",
        image: "suzhou-grand-canal",
        description:
          "The Grand Canal linked northern political centers to the grain-rich south. It was one of the great infrastructural achievements of Chinese history and helped hold large empires together fiscally.",
      },
      {
        name: "Mount Tai",
        location: "Shandong",
        period: "Ancient to imperial eras",
        image: "mount-tai",
        description:
          "Mount Tai is one of China's most historically charged sacred mountains. Emperors associated it with legitimacy and cosmic order, while poets and pilgrims treated it as a place of cultural and spiritual elevation.",
      },
      {
        name: "West Lake and Hangzhou",
        location: "Zhejiang",
        period: "Especially Song onward",
        image: "west-lake",
        description:
          "Hangzhou became one of the most celebrated urban landscapes of late imperial China, and West Lake sat at the center of that reputation. The area combines commerce, garden culture, poetry, and elite leisure in one setting.",
      },
    ],
  },
  {
    slug: "modern-memory-sites",
    title: "Modern Memory Sites",
    subtitle:
      "These places mark the age of treaty ports, war, revolution, and the remaking of China in the nineteenth and twentieth centuries.",
    image: "marco-polo-bridge",
    places: [
      {
        name: "The Bund and Old Treaty-Port Shanghai",
        location: "Shanghai",
        period: "19th-20th centuries",
        image: "the-bund",
        description:
          "Treaty-port Shanghai condensed foreign concessions, finance, industry, and modern urban culture into one city. It is one of the clearest places to study the shock of global capitalism and imperial intrusion in China.",
      },
      {
        name: "Marco Polo Bridge",
        location: "Beijing",
        period: "1937 as a modern turning point",
        image: "marco-polo-bridge",
        description:
          "The bridge is remembered because fighting there in July 1937 helped trigger full-scale war between China and Japan. It marks the beginning of one of the most destructive chapters in modern Chinese history.",
      },
      {
        name: "Nanjing",
        location: "Jiangsu",
        period: "Taiping era, republican era, 1937",
        image: "nanjing-massacre-memorial",
        description:
          "Nanjing has been many things: a dynastic capital, a Taiping capital, and the seat of the Nationalist government. Its modern history is inseparable from the catastrophe of the 1937 massacre and occupation.",
      },
      {
        name: "Chongqing Wartime Capital",
        location: "Chongqing",
        period: "1938-1945",
        image: "bombing-of-chongqing",
        description:
          "When the coast became untenable, Chongqing turned into the wartime capital of resistance. It symbolizes survival under bombardment and the shift of state, education, and diplomacy into the interior.",
      },
    ],
  },
];
