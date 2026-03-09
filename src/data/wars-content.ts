import type { ImageKey } from "@/data/china-content";

export const warTopicOrder = [
  "warring-states-and-qin",
  "frontier-war-and-gunpowder",
  "taiping-and-late-qing-crisis",
  "war-of-resistance",
  "revolution-civil-war-and-korea",
] as const;

export type WarTopicSlug = (typeof warTopicOrder)[number];

export type WarTopic = {
  slug: WarTopicSlug;
  shortTitle: string;
  title: string;
  subtitle: string;
  accent: string;
  heroImage: ImageKey;
  preview: string;
  quickFacts: Array<{ label: string; value: string }>;
  intro: string[];
  milestones: Array<{ year: string; title: string; detail: string }>;
  chapters: Array<{
    title: string;
    image: ImageKey;
    body: string[];
    bullets?: string[];
  }>;
  related: WarTopicSlug[];
};

export const warsHub = {
  deck: [
    "Chinese military history is a history of scale: securing the agrarian core, moving grain and silver across long distances, defending passes and river corridors, and stopping armed power from splintering into rival regions.",
    "War repeatedly remade the Chinese state. The Warring States turned administration into a weapon; frontier pressure pushed dynasties toward cavalry systems, walls, and gunpowder defense; the Taiping war regionalized armed power; and the anti-Japanese war plus civil war carried politics into total mobilization.",
  ],
  metrics: [
    { label: "Time span", value: "475 BCE to the Cold War era" },
    { label: "Core problem", value: "Supply the core, defend the frontier, prevent fragmentation" },
    { label: "Deadliest pattern", value: "Civil war inside an already stressed state" },
    { label: "Modern shift", value: "Party armies, ideology, industry, total mobilization" },
  ],
  logics: [
    {
      title: "Logistics first",
      body: "Roads, canals, grain taxes, arsenals, and command chains usually mattered more than battlefield drama by itself.",
    },
    {
      title: "Frontiers reshape the center",
      body: "Steppe empires, maritime threats, and borderlands kept forcing Chinese states to redesign armies and institutions.",
    },
    {
      title: "Internal wars can be existential",
      body: "Taiping and the twentieth-century civil war damaged finance, population, and legitimacy more deeply than many foreign invasions.",
    },
    {
      title: "Modern war politicized society",
      body: "Parties, propaganda, literacy, and industrial production made twentieth-century conflict a struggle over the whole social order.",
    },
  ],
  theatres: [
    {
      title: "North China corridor",
      region: "Hebei, Shanxi, Shaanxi, Henan",
      body: "The passes and plains north of the Yellow River repeatedly became the hinge between the imperial core and northern rivals.",
    },
    {
      title: "Northwest frontier belt",
      region: "Gansu, Ningxia, Inner Asia",
      body: "Horse supply, caravan routes, oasis politics, and fortress networks made the northwest central to imperial survival.",
    },
    {
      title: "Lower Yangtze war zone",
      region: "Nanjing, Anhui, Jiangsu, Hubei",
      body: "When the commercial heartland became a battlefield, fiscal crisis and political collapse followed quickly.",
    },
    {
      title: "Wartime interior",
      region: "Sichuan, Chongqing, Yunnan, Guizhou",
      body: "After 1937 the interior became the rear base of national survival, hosting relocated universities, arsenals, and refugee populations.",
    },
  ],
  rhythmBlocks: [
    {
      title: "Warring States competition turned administration, measurement, and mass infantry into engines of conquest.",
      eyebrow: "State formation through war",
      image: "terracotta-army" as ImageKey,
      topicSlug: "warring-states-and-qin" as WarTopicSlug,
      body: [
        "Land surveys, population registers, roads, and standardized command structures let states mobilize at scales earlier aristocratic warfare could not match.",
        "Qin won because it built the hardest military-fiscal machine, then translated victory into a new territorial order.",
      ],
      bullets: [
        "Mass mobilization replaced elite chariot warfare",
        "Legal reform increased military reach",
        "Empire emerged from military competition",
      ],
    },
    {
      title: "Frontier war forced dynasties to think in terms of passes, cavalry, walls, and strategic depth.",
      eyebrow: "Frontier systems",
      image: "great-wall-jinshanling" as ImageKey,
      topicSlug: "frontier-war-and-gunpowder" as WarTopicSlug,
      body: [
        "Han, Tang, Song, Ming, and Qing all faced the problem of defending a rich core against mobile rivals and multi-directional threats.",
        "The answer was never one wall or one weapon. It was a whole system of supply, diplomacy, mounted power, garrisons, and later gunpowder fortification.",
      ],
      bullets: [
        "Frontiers were active political systems",
        "Military geography changed with every dynasty",
        "Gunpowder did not erase strategic constraints",
      ],
    },
    {
      title: "The Taiping war showed how internal rebellion could devastate the richest parts of the empire and shift armed power outward.",
      eyebrow: "Civil war and regional armies",
      image: "taiping-regaining-jinling" as ImageKey,
      topicSlug: "taiping-and-late-qing-crisis" as WarTopicSlug,
      body: [
        "The late Qing state faced foreign pressure at the same moment that a huge civil war tore through the Yangtze zone.",
        "Provincial armies, merchant funding, and ad hoc command networks became more important than the old banner and Green Standard structures.",
      ],
      bullets: [
        "Taiping devastation was both military and social",
        "Provincial militarization weakened the center",
        "Late Qing crisis created the armed politics of the republican era",
      ],
    },
    {
      title: "The war against Japan became a national war of survival that moved industry, education, and politics into the interior.",
      eyebrow: "War of resistance",
      image: "battle-of-shanghai-1937" as ImageKey,
      topicSlug: "war-of-resistance" as WarTopicSlug,
      body: [
        "The Japanese invasion displaced millions, destroyed coastal capacity, and forced the Chinese state to keep functioning from inland strongholds.",
        "Nationalists carried the burden of the formal state while Communists expanded their rural base-area influence through resistance and organization.",
      ],
      bullets: [
        "Total war reached deep into civilian life",
        "Chongqing and the southwest became rear bases",
        "Resistance politics shaped the post-1945 balance",
      ],
    },
    {
      title: "Revolutionary armies, civil war, and the Korean War fused military victory with the early security culture of the PRC.",
      eyebrow: "Revolutionary warfare",
      image: "triangle-hill-infantry" as ImageKey,
      topicSlug: "revolution-civil-war-and-korea" as WarTopicSlug,
      body: [
        "Twentieth-century Chinese war was about parties building cadres, shaping narratives, and turning military discipline into a model of political rule.",
        "Victory in the civil war established the new state, and intervention in Korea hardened the lesson that sovereignty depended on industrial strength and readiness.",
      ],
      bullets: [
        "The party-army model changed military power",
        "Civil war victory was also an administrative victory",
        "Korea reinforced permanent strategic vigilance",
      ],
    },
  ],
};

export const warTopics: Record<WarTopicSlug, WarTopic> = {
  "warring-states-and-qin": {
    slug: "warring-states-and-qin",
    shortTitle: "Warring States and Qin",
    title: "Warring States Competition and Qin Military Statecraft",
    subtitle:
      "States learned to turn administration, population counts, roads, and legal discipline into battlefield advantage. Qin won that contest and transformed victory into imperial order.",
    accent: "#8a3b2a",
    heroImage: "terracotta-army",
    preview: "How military competition in the Warring States era created the administrative logic of empire.",
    quickFacts: [
      { label: "Period", value: "475-206 BCE" },
      { label: "Military shift", value: "From aristocratic warfare to mass infantry states" },
      { label: "Key tools", value: "Land survey, law, roads, conscription, standardization" },
      { label: "Long legacy", value: "Empire kept the military-fiscal architecture Qin built" },
    ],
    intro: [
      "The Warring States period was a pressure cooker in which rulers learned to mobilize people and resources more efficiently than rivals. Warfare became larger, more continuous, and more bureaucratic.",
      "Qin's triumph did not come from bravery alone. It came from a system that linked military discipline to political centralization, making early military history inseparable from state formation.",
    ],
    milestones: [
      { year: "475-221 BCE", title: "Warring States competition", detail: "Regional powers professionalize armies, command, and taxation at new scale." },
      { year: "4th century BCE", title: "Qin reforms", detail: "Legal and administrative restructuring gives Qin an exceptional mobilization edge." },
      { year: "260 BCE", title: "Changping", detail: "Annihilation warfare shows how total interstate conflict has become." },
      { year: "221 BCE", title: "Qin unification", detail: "Conquest produces the first centralized empire over the heartland." },
      { year: "206 BCE", title: "Qin collapse", detail: "The dynasty falls quickly, but its institutions survive in modified form." },
    ],
    chapters: [
      {
        title: "Administration became a battlefield weapon",
        image: "bamboo-slips",
        body: [
          "States needed household registration, tax assessment, and disciplinary law to sustain large armies over repeated campaigns.",
          "Paperwork, rank, reward, and punishment became part of the military machine rather than separate from it.",
        ],
        bullets: [
          "Military reform depended on social legibility",
          "Registers and roads expanded campaign range",
          "State capacity and battlefield success reinforced each other",
        ],
      },
      {
        title: "Qin conquest and standardized command",
        image: "terracotta-army",
        body: [
          "The Terracotta Army is evidence of scale: only a regime with enormous control over labor and materials could build such a project while fighting real campaigns across multiple fronts.",
          "Qin's edge lay in coordination: roads, commanderies, direct rule, and the ability to turn conquest zones into governed territory quickly.",
        ],
      },
      {
        title: "Why the first military empire failed so fast",
        image: "great-wall-jinshanling",
        body: [
          "Qin's state was formidable but brittle. Forced labor, relentless extraction, and narrow legitimacy concentrated resentment as quickly as they concentrated power.",
          "Later dynasties kept Qin's administrative backbone while searching for broader ideological and elite support.",
        ],
      },
    ],
    related: ["frontier-war-and-gunpowder", "taiping-and-late-qing-crisis"],
  },
  "frontier-war-and-gunpowder": {
    slug: "frontier-war-and-gunpowder",
    shortTitle: "Frontiers and gunpowder",
    title: "Frontier Warfare from Han Cavalry to Ming Gunpowder Defenses",
    subtitle:
      "Chinese states repeatedly had to defend dense agrarian zones against rivals who were often more mobile and strategically flexible. That frontier problem produced cavalry systems, walls, forts, naval patrols, and gunpowder-heavy defense networks.",
    accent: "#6a4a33",
    heroImage: "great-wall-jinshanling",
    preview: "A long history of frontier strategy, from steppe conflict to late imperial gunpowder defense.",
    quickFacts: [
      { label: "Strategic problem", value: "Agrarian core versus mobile frontier powers" },
      { label: "Key systems", value: "Garrisons, horse supply, walls, relay routes, forts" },
      { label: "Technology arc", value: "Crossbows, cavalry, gunpowder, artillery, naval firepower" },
      { label: "Main lesson", value: "Institutions mattered more than any single weapon" },
    ],
    intro: [
      "For much of Chinese history, the main strategic question was not simply how to win one campaign but how to sustain security across very different military ecologies.",
      "A state that mismanaged the frontier could lose revenue, prestige, and eventually the heartland itself. A state that handled it well could expand the map of empire.",
    ],
    milestones: [
      { year: "2nd century BCE", title: "Han-Xiongnu struggle", detail: "Long-distance frontier war pushes the Han state toward sustained cavalry and logistics planning." },
      { year: "7th-8th centuries", title: "Tang frontier empire", detail: "Military power, diplomacy, and Inner Asian politics shape a wide imperial horizon." },
      { year: "1127", title: "Song loses North China", detail: "A frontier defeat transforms political geography and defense strategy." },
      { year: "14th-16th centuries", title: "Ming walls and artillery", detail: "Defense-in-depth, fortification, and gunpowder systems become more elaborate." },
      { year: "19th century", title: "Maritime weakness exposed", detail: "Late imperial gunpowder systems prove weaker than foreign industrial naval power." },
    ],
    chapters: [
      {
        title: "Steppe frontiers demanded mobility and diplomacy",
        image: "tang-sancai-camel",
        body: [
          "The frontier was a zone of exchange, raiding, alliance, tribute, and migration rather than a simple line separating China from outsiders.",
          "Dynasties needed cavalry, interpreters, traders, and garrison colonists as much as they needed infantry and walls.",
        ],
      },
      {
        title: "Walls and garrisons were systems, not symbols",
        image: "great-wall-jinshanling",
        body: [
          "The Great Wall mattered as part of a larger system of beacon towers, passes, troop settlements, transport corridors, and strategic staging zones.",
          "Defensive depth depended on administrative coordination just as much as on stone and brick.",
        ],
        bullets: [
          "Fortification worked only with mobile reserves",
          "Frontier defense tied settlement to military planning",
          "Civil and military administration stayed closely linked",
        ],
      },
      {
        title: "Gunpowder changed warfare, but not the strategic equation",
        image: "opium-war-junks",
        body: [
          "Chinese states were early users of gunpowder weapons, yet technology never automatically solved geopolitical problems.",
          "The Opium War exposed the gap between possessing gunpowder and mastering an industrial military system.",
        ],
      },
    ],
    related: ["warring-states-and-qin", "taiping-and-late-qing-crisis"],
  },
  "taiping-and-late-qing-crisis": {
    slug: "taiping-and-late-qing-crisis",
    shortTitle: "Taiping and late Qing",
    title: "Taiping Civil War and the Militarization of the Late Qing",
    subtitle:
      "Foreign military pressure and the Taiping civil war forced the Qing court to rely on regional armies, new financing networks, and improvised command structures that permanently weakened central control.",
    accent: "#7a3227",
    heroImage: "taiping-regaining-jinling",
    preview: "How foreign war, Taiping rebellion, and provincial armies destabilized the late Qing state.",
    quickFacts: [
      { label: "Main theater", value: "Lower Yangtze and central China" },
      { label: "Human cost", value: "Tens of millions dead across the Taiping era" },
      { label: "Political shift", value: "Provincial armies eclipse older banner systems" },
      { label: "Historical result", value: "The dynasty survives short term but loses strategic coherence" },
    ],
    intro: [
      "The late Qing crisis was not one war but a sequence of overlapping shocks. Foreign defeat exposed military weakness, and the Taiping movement turned the richest fiscal zone of the empire into a prolonged killing field.",
      "What emerged was a different armed order in which regional commanders, provincial tax channels, merchant funding, and semi-autonomous military coalitions became more important than the older centered model.",
    ],
    milestones: [
      { year: "1839-1842", title: "First Opium War", detail: "The Qing military system is exposed to severe naval and technological disadvantage." },
      { year: "1851", title: "Taiping movement begins", detail: "A heterodox religious-political rebellion expands into a vast civil war." },
      { year: "1853", title: "Nanjing falls", detail: "The rebels seize a major city and turn it into their capital." },
      { year: "1864", title: "Taiping defeat", detail: "The rebellion is crushed, but only after regional armies become indispensable." },
      { year: "1911", title: "Xinhai Revolution", detail: "The late Qing military-political order finally breaks into republican revolution." },
    ],
    chapters: [
      {
        title: "Foreign war exposed the old military order",
        image: "opium-war-junks",
        body: [
          "The Opium War revealed a system that struggled to integrate command, shipbuilding, training, and strategic adaptation.",
          "That defeat mattered because it undermined confidence before the greatest internal war of the century even began.",
        ],
      },
      {
        title: "Taiping was a civil war of social destruction",
        image: "taiping-regaining-jinling",
        body: [
          "The Taiping conflict devastated the Lower Yangtze because it consumed market towns, transport routes, tax bases, and civilian populations in the empire's most productive zone.",
          "It also forced elites to improvise, raising armies more loyal to commanders and networks than to the old centrally managed military system.",
        ],
        bullets: [
          "Military decentralization became a survival strategy",
          "Fiscal extraction shifted toward provincial control",
          "Victory deepened the structural weakness of the dynasty",
        ],
      },
      {
        title: "Regional armies carried the late Qing into its endgame",
        image: "xinhai-revolution",
        body: [
          "After Taiping, the Qing court never fully restored a monopoly over effective armed force. Modernized armies, provincial interests, and reformist politics interacted in unstable ways.",
          "The 1911 revolution arrived in a military landscape already transformed by half a century of crisis.",
        ],
      },
    ],
    related: ["war-of-resistance", "revolution-civil-war-and-korea"],
  },
  "war-of-resistance": {
    slug: "war-of-resistance",
    shortTitle: "War of resistance",
    title: "The War of Resistance Against Japan and China's Wartime Interior",
    subtitle:
      "The 1937-1945 struggle against Japan was a total war of survival. It broke the coastal core, relocated universities and industries inland, subjected cities to sustained bombing, and transformed the political balance between Nationalists and Communists.",
    accent: "#4d596e",
    heroImage: "battle-of-shanghai-1937",
    preview: "Invasion, occupation, Chongqing, and the wartime reshaping of Chinese politics.",
    quickFacts: [
      { label: "Full-scale war", value: "1937-1945" },
      { label: "Main spaces", value: "North China, Shanghai-Nanjing, Wuhan, Chongqing, base areas" },
      { label: "Civilian reality", value: "Occupation, bombing, displacement, famine, refugee flight" },
      { label: "Political result", value: "Nationalist exhaustion and Communist expansion" },
    ],
    intro: [
      "The war with Japan was a layered conflict that combined conventional campaigns, occupation regimes, air raids, scorched-earth decisions, guerrilla struggle, and the reassembly of state functions deep in the interior.",
      "Because the war was so comprehensive, it changed China permanently. Economic geography shifted inland, political legitimacy was tested under extreme stress, and the social reach of both major parties expanded.",
    ],
    milestones: [
      { year: "1931", title: "Manchurian crisis", detail: "Japanese expansion in the northeast begins to destabilize the wider strategic balance." },
      { year: "July 1937", title: "Marco Polo Bridge incident", detail: "Local fighting near Beijing escalates into full-scale national war." },
      { year: "1937", title: "Shanghai and Nanjing", detail: "Heavy fighting and atrocity shatter confidence in coastal security." },
      { year: "1938", title: "Wuhan and relocation inland", detail: "The Nationalist state pulls deeper into the interior while trying to keep the war effort alive." },
      { year: "1938-1945", title: "Chongqing under bombardment", detail: "The wartime capital becomes a symbol of endurance and strategic depth." },
      { year: "1945", title: "Japanese surrender", detail: "Victory arrives, but the postwar political balance has already shifted." },
    ],
    chapters: [
      {
        title: "From incident to national emergency",
        image: "marco-polo-bridge",
        body: [
          "The Marco Polo Bridge incident converted a tense regional situation into a conflict that neither side could easily contain.",
          "What followed was a struggle over whether the Chinese state could remain politically coherent under invasion.",
        ],
      },
      {
        title: "Shanghai and the collapse of coastal security",
        image: "battle-of-shanghai-1937",
        body: [
          "Shanghai represented modern, urban, globally connected China, and its battlefield destruction showed how exposed that world was to industrial warfare.",
          "Once the coast and lower Yangtze became unstable, the republic had to imagine survival from somewhere else.",
        ],
        bullets: [
          "Urban war became a public theater of national crisis",
          "Military sacrifice did not prevent strategic retreat",
          "The coastline ceased to be the secure center of the nation",
        ],
      },
      {
        title: "Chongqing and the wartime interior",
        image: "bombing-of-chongqing",
        body: [
          "The bombing of Chongqing captures the reality of long attritional war. The wartime capital was not a safe rear zone but an exposed center of state administration, diplomacy, education, and civilian endurance.",
          "At the same time, the interior became the space where China reconstituted itself through relocation, improvisation, and resistance politics.",
        ],
      },
    ],
    related: ["taiping-and-late-qing-crisis", "revolution-civil-war-and-korea"],
  },
  "revolution-civil-war-and-korea": {
    slug: "revolution-civil-war-and-korea",
    shortTitle: "Revolution, civil war, Korea",
    title: "Revolution, Civil War, and the Korean War",
    subtitle:
      "Twentieth-century Chinese war fused party organization, military command, and social mobilization. The republican revolution, the Communist survival struggle, the civil war campaigns, and intervention in Korea together shaped the early security culture of the PRC.",
    accent: "#5b3e43",
    heroImage: "chinese-korean-war-poster",
    preview: "How revolutionary warfare, party armies, civil war, and Korea shaped the new Chinese state.",
    quickFacts: [
      { label: "Key actors", value: "Nationalists, Communists, regional armies, the early PRC" },
      { label: "Main innovation", value: "Party-army fusion and political work" },
      { label: "Decisive years", value: "1911, 1927-1935, 1946-1949, 1950-1953" },
      { label: "Strategic outcome", value: "Military victory becomes the foundation of state-building" },
    ],
    intro: [
      "The wars of the twentieth century did not simply replace dynastic armies with modern national ones. They produced new forms of political warfare in which parties built disciplined cadres, shaped local society, and treated the army as both a combat instrument and a governing institution.",
      "The transition from empire to republic to PRC therefore cannot be understood without military history. Armed struggle became the medium through which legitimacy, administrative reach, and social transformation were decided.",
    ],
    milestones: [
      { year: "1911", title: "Xinhai Revolution", detail: "Dynastic rule falls, but military fragmentation remains built into the republican landscape." },
      { year: "1927", title: "Nationalist-Communist split", detail: "Armed revolution and party conflict become the central dynamic of Chinese politics." },
      { year: "1934-1935", title: "Long March", detail: "Communist forces survive strategic collapse by retreating and rebuilding a new center." },
      { year: "1946-1949", title: "Civil war campaigns", detail: "Communist forces defeat the Nationalists and establish territorial control over the mainland." },
      { year: "1950-1953", title: "Korean War", detail: "The new PRC enters a major international war and hardens its security state." },
    ],
    chapters: [
      {
        title: "Republican revolution did not demilitarize politics",
        image: "xinhai-revolution",
        body: [
          "The 1911 revolution overthrew the dynasty, but it did not solve the problem of armed fragmentation. Provincial militaries, warlord coalitions, and competing party projects all emerged inside the vacuum left by imperial collapse.",
          "The modern Chinese state would be rebuilt in a world where political legitimacy and armed force were tightly coupled from the beginning.",
        ],
      },
      {
        title: "The Long March redefined revolutionary survival",
        image: "long-march-map",
        body: [
          "The Long March was a retreat from immediate defeat, but also a filtering experience that preserved a core leadership and created a durable founding myth.",
          "Its route shows how revolutionary war depended on landscape, mobility, and the ability to turn survival itself into legitimacy.",
        ],
        bullets: [
          "Retreat became a source of political authority",
          "Base-area strategy linked war to social organization",
          "Military endurance and party discipline became inseparable",
        ],
      },
      {
        title: "Civil war victory and Korea hardened the new state",
        image: "triangle-hill-infantry",
        body: [
          "The final civil war campaigns were won not only through battlefield maneuver but through land reform, local organization, intelligence, and the ability to sustain a larger social coalition than the Nationalists could manage.",
          "Intervention in Korea then reinforced a durable belief that sovereignty required permanent readiness, industrial depth, and centralized command.",
        ],
      },
    ],
    related: ["war-of-resistance", "taiping-and-late-qing-crisis"],
  },
};

export function getWarTopic(slug: string): WarTopic | undefined {
  return warTopics[slug as WarTopicSlug];
}
