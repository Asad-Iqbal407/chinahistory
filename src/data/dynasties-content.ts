import type { ImageKey } from "@/data/china-content";

export const dynastyTopicOrder = [
  "bronze-and-zhou-foundations",
  "qin-han-order",
  "tang-song-transformation",
  "conquest-empires",
  "ming-qing-last-imperial-age",
] as const;

export type DynastyTopicSlug = (typeof dynastyTopicOrder)[number];

export type DynastyTopic = {
  slug: DynastyTopicSlug;
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
  related: DynastyTopicSlug[];
};

export const dynastiesHub = {
  deck: [
    "A Chinese dynasty was never just a family line on a throne. It was a package of institutions, military arrangements, fiscal compromises, ritual claims, and elite bargains that had to solve the problem of ruling a huge, varied territory. Some dynasties centralized brutally, others relied on literati mediation, conquest coalitions, or commercial wealth, but all had to answer the same question: how do you keep order, revenue, legitimacy, and supply moving together?",
    "That is why dynastic history matters so much in Chinese political memory. The dynastic sequence preserves a record of repeated experiments in unity and collapse. Qin and Han built a core template; Tang and Song showed different routes to imperial sophistication; Yuan and Qing proved that conquest dynasties could become fully Chinese empires without losing their own frontier logics; Ming and late Qing demonstrated how grandeur could coexist with deep structural fragility.",
  ],
  metrics: [
    { label: "Main unit", value: "Dynasty as institutional experiment" },
    { label: "Core toolkit", value: "Law, tax, transport, bureaucracy, army" },
    { label: "Main risk", value: "Fiscal strain + frontier pressure + rebellion" },
    { label: "Long memory", value: "Order survives by adapting forms of rule" },
  ],
  mechanics: [
    {
      title: "Legitimacy",
      body: "Dynasties justified themselves through ritual order, moral governance, conquest success, or the Mandate of Heaven.",
    },
    {
      title: "Bureaucracy",
      body: "County and prefectural administration, archives, and scholar-official mediation made scale governable.",
    },
    {
      title: "Fiscality",
      body: "Tax collection, grain transport, corvee, silver flows, and land control determined whether a dynasty could survive crises.",
    },
    {
      title: "Frontiers",
      body: "Steppe powers, Inner Asia, maritime threats, and regional armies repeatedly reshaped dynastic priorities.",
    },
  ],
  rhythmBlocks: [
    {
      title: "The earliest dynasties built kingship through bronze, ritual, and political language.",
      eyebrow: "Foundations",
      image: "shang-bronze-ding" as ImageKey,
      topicSlug: "bronze-and-zhou-foundations" as DynastyTopicSlug,
      body: [
        "The Shang and Zhou worlds were not bureaucratic empires in the later sense, but they established the ritual grammar of rulership and the moral vocabulary through which later dynasties explained rise, decline, and replacement.",
        "Bronze vessels and Zhou political thought matter because they tied sacred authority, lineage, warfare, and memory together long before imperial institutions reached their mature form.",
      ],
      bullets: [
        "Ritual and kingship were inseparable",
        "The Mandate of Heaven made dynastic replacement thinkable",
        "Early courts framed later imperial memory",
      ],
    },
    {
      title: "Qin and Han created the long-lived administrative spine of empire.",
      eyebrow: "State formation",
      image: "terracotta-army" as ImageKey,
      topicSlug: "qin-han-order" as DynastyTopicSlug,
      body: [
        "Qin unification was brief, but its standardizations and command structures became the benchmark for imperial governance. Han rule then gave that hard-edged system a more sustainable balance of law, bureaucracy, classical learning, and territorial expansion.",
        "Most later dynasties inherited this dual legacy: the need for central authority and the need to soften coercion with durable institutions and elite cooperation.",
      ],
      bullets: [
        "Standardization made rule legible across distance",
        "Han fused bureaucratic practice with classical statecraft",
        "The imperial center became a reproducible model",
      ],
    },
    {
      title: "Tang and Song show that one imperial tradition could take very different forms.",
      eyebrow: "High imperial diversity",
      image: "qingming-scroll" as ImageKey,
      topicSlug: "tang-song-transformation" as DynastyTopicSlug,
      body: [
        "Tang China became famous for cosmopolitan court culture, military reach, and ties across Asia, while Song China became the great age of commercial cities, literati governance, printing, and market sophistication. Both were highly imperial, but they solved imperial problems differently.",
        "Taken together, Tang and Song undermine the idea that there was only one ideal dynasty. Chinese imperial history repeatedly reconfigured the balance between military power, urban commerce, and elite administration.",
      ],
      bullets: [
        "Tang emphasized expansive aristocratic and military empire",
        "Song deepened market integration and literati governance",
        "Imperial success could be measured in more than conquest",
      ],
    },
    {
      title: "Conquest dynasties changed China by ruling it, not merely by interrupting it.",
      eyebrow: "Conquest empires",
      image: "kublai-khan" as ImageKey,
      topicSlug: "conquest-empires" as DynastyTopicSlug,
      body: [
        "Yuan and Qing rule demonstrate that dynastic continuity in China was never ethnically simple. Mongol and Manchu rulers governed through hybrid systems, preserving frontier and conquest logics while also inhabiting Chinese imperial forms.",
        "These dynasties expanded the map of empire and the meaning of China itself, especially through Inner Asian governance, military organization, and multiethnic political practice.",
      ],
      bullets: [
        "Conquest did not prevent institutional depth",
        "Multiethnic empire became central to Qing power",
        "Dynastic history includes frontier logics as well as heartland norms",
      ],
    },
    {
      title: "Ming and Qing grandeur also reveal the structural vulnerabilities of the last imperial age.",
      eyebrow: "Last imperial age",
      image: "hall-of-supreme-harmony" as ImageKey,
      topicSlug: "ming-qing-last-imperial-age" as DynastyTopicSlug,
      body: [
        "The Ming and Qing courts produced some of the most recognizable images of imperial China: the Forbidden City, porcelain, literati high culture, commercial boom, and vast territorial power. Yet both dynasties also reveal how difficult it was to fund empire, manage succession, and withstand internal and external shocks over the long term.",
        "The last imperial centuries therefore matter not only for their splendour but for the memory of how a seemingly immense order could still break down.",
      ],
      bullets: [
        "Court magnificence could mask fiscal weakness",
        "Commercial wealth did not remove governance strain",
        "Late dynastic crisis shaped modern Chinese politics",
      ],
    },
  ],
};

export const dynastyTopics: Record<DynastyTopicSlug, DynastyTopic> = {
  "bronze-and-zhou-foundations": {
    slug: "bronze-and-zhou-foundations",
    shortTitle: "Bronze and Zhou",
    title: "Shang Bronze Kingship and Zhou Political Foundations",
    subtitle:
      "The earliest dynasties created the ritual and political language that later empires kept reusing. Bronze, divination, lineage, and the Mandate of Heaven all belonged to the earliest grammar of Chinese dynastic rule.",
    accent: "#8b4e2c",
    heroImage: "shang-bronze-ding",
    preview:
      "Shang bronze ritual power, Zhou political thought, and the early foundations of dynastic legitimacy.",
    quickFacts: [
      { label: "Core media", value: "Bronze, divination, ritual inscription" },
      { label: "Key concept", value: "Mandate of Heaven" },
      { label: "Political form", value: "Lineage kingship and regional networks" },
      { label: "Long afterlife", value: "Later dynasties kept citing these beginnings" },
    ],
    intro: [
      "The Shang and Zhou are not simply prologues to the 'real' dynastic story. They created the moral and ritual languages that made dynastic change intelligible for the next two millennia. The famous Mandate of Heaven was not just a slogan; it was a theory of why one ruling house could replace another without reducing politics to pure accident.",
      "Equally important, early kingship tied material display to rule. Bronze vessels, sacrificial order, lineage memory, and written inscriptions created visible evidence that authority could organize labor, ritual, and time itself.",
    ],
    milestones: [
      {
        year: "c. 1600-1046 BCE",
        title: "Shang ritual kingship",
        detail:
          "Bronze and divination anchor a courtly order with exceptional ritual density.",
      },
      {
        year: "1046 BCE",
        title: "Zhou conquest",
        detail:
          "The Zhou defeat the Shang and frame dynastic replacement in moral terms.",
      },
      {
        year: "Western Zhou era",
        title: "Feudal-style regional order",
        detail:
          "Royal kin and allied lineages hold power through distributed political networks.",
      },
      {
        year: "Eastern Zhou",
        title: "Fragmentation and thought",
        detail:
          "Political weakening produces the intellectual ferment that later dynasties inherit.",
      },
    ],
    chapters: [
      {
        title: "Bronze as political technology",
        image: "shang-bronze-ding",
        body: [
          "Shang bronzes were not decorative luxuries in the modern sense. They were political technologies that organized labor, ritual rank, and ancestral communication. To cast monumental bronze repeatedly required command over materials, specialists, and ceremonial timing.",
          "That makes bronze central to dynastic history. It shows early Chinese rule already binding craft, sacred order, and state power into one system.",
        ],
      },
      {
        title: "The Zhou invention of moral replacement",
        image: "oracle-bone",
        body: [
          "The Zhou did something politically profound after conquest: they explained the fall of the Shang through a transferable heavenly mandate. In doing so they created a framework that justified both obedience and rebellion, depending on whether a ruling house still governed with virtue.",
          "Later dynasties repeatedly reused this logic. Collapse could be read not only as disaster, but as evidence that Heaven had already shifted its approval elsewhere.",
        ],
        bullets: [
          "Legitimacy became conditional, not merely hereditary",
          "Dynastic history gained a moral narrative structure",
          "Rebellion could be normalized after success",
        ],
      },
      {
        title: "Why these beginnings stayed powerful",
        image: "bamboo-slips",
        body: [
          "The early dynasties mattered because later ages kept re-reading them. Confucian scholars, Han state theorists, and imperial compilers treated Shang and Zhou as the deep archive of rulership. These ages became the sourcebook from which later dynasties extracted lessons about virtue, ritual, and decay.",
          "That long memory is part of what made Chinese dynastic history so coherent. Each new court entered a story already filled with precedents.",
        ],
      },
    ],
    related: ["qin-han-order", "tang-song-transformation"],
  },
  "qin-han-order": {
    slug: "qin-han-order",
    shortTitle: "Qin and Han",
    title: "Qin-Han Unification and the Imperial Administrative Template",
    subtitle:
      "Qin and Han transformed a world of competing states into an empire with standardized law, roads, weights, script, offices, and territorial command. Later dynasties kept revisiting this template even when they rejected Qin harshness.",
    accent: "#7d3428",
    heroImage: "terracotta-army",
    preview:
      "Unification, standardization, commanderies, Han statecraft, and the durable administrative architecture of empire.",
    quickFacts: [
      { label: "Political break", value: "From warring states to empire" },
      { label: "Qin legacy", value: "Standardization and central command" },
      { label: "Han legacy", value: "Durable bureaucracy with classical ideology" },
      { label: "Long reach", value: "Most later dynasties worked inside this frame" },
    ],
    intro: [
      "The Qin dynasty's brevity can obscure its importance. Qin showed that a vast territory could be made governable through standardization, registries, direct administration, and infrastructure. Even those who condemned Qin severity inherited its administrative imagination.",
      "Han rule then translated that hard-edged system into a longer imperial order. It kept the territorial skeleton while adding a more persuasive ideology of governance, wider elite incorporation, and sustained frontier diplomacy and expansion.",
    ],
    milestones: [
      {
        year: "221 BCE",
        title: "Qin unification",
        detail:
          "A single dynasty ends the Warring States order and centralizes authority.",
      },
      {
        year: "Qin era",
        title: "Standards and commanderies",
        detail:
          "Script, measures, roads, and administration become more uniform across the empire.",
      },
      {
        year: "206 BCE",
        title: "Han succession",
        detail:
          "A new dynasty inherits the Qin state and reshapes it for longevity.",
      },
      {
        year: "Han centuries",
        title: "Expansion and classical statecraft",
        detail:
          "Empire reaches westward and bureaucratic learning gains ideological centrality.",
      },
    ],
    chapters: [
      {
        title: "Why Qin still matters",
        image: "terracotta-army",
        body: [
          "The Terracotta Army symbolizes scale, but the deeper Qin achievement was administrative. Standardization let distant regions become legible to the center, while roads and direct offices translated conquest into daily governance.",
          "Later Chinese political memory often treated Qin as too harsh, yet still indispensable. It became the example of what state capacity could accomplish and the warning of what happened when coercion outran legitimacy.",
        ],
      },
      {
        title: "Han softened the template without abandoning it",
        image: "oracle-bone",
        body: [
          "Han rule did not simply reverse Qin. It kept centralized institutions while embedding them in a richer world of court ritual, classical learning, and elite collaboration. This blend made imperial governance sustainable at a scale the Qin never had time to prove.",
          "That combination of bureaucratic structure and moral-cultural justification became one of the most powerful inheritances in Chinese history.",
        ],
        bullets: [
          "Administrative continuity mattered more than dynastic rupture",
          "Classical ideology gave empire a persuasive moral face",
          "Statecraft became a repeatable tradition rather than a one-time invention",
        ],
      },
      {
        title: "The first fully imperial horizon",
        image: "great-wall-jinshanling",
        body: [
          "Qin and Han also forced rulers to think territorially. Frontier defense, transport, taxation, and western diplomacy all became integral to what empire meant. China was no longer just a cluster of kingdoms with a shared culture; it was an administratively imagined whole.",
          "That imperial horizon shaped nearly every later dynasty, even when geography, commercial gravity, or elite culture shifted dramatically.",
        ],
      },
    ],
    related: ["tang-song-transformation", "ming-qing-last-imperial-age"],
  },
  "tang-song-transformation": {
    slug: "tang-song-transformation",
    shortTitle: "Tang and Song",
    title: "Tang Cosmopolitanism and Song Commercial Transformation",
    subtitle:
      "Tang and Song were both high imperial ages, but they looked different: Tang excelled in aristocratic, military, and cosmopolitan reach; Song in urban commerce, literati governance, and technical sophistication.",
    accent: "#9a5a36",
    heroImage: "qingming-scroll",
    preview:
      "How Tang and Song dynasties created two different models of high imperial success.",
    quickFacts: [
      { label: "Tang strength", value: "Cosmopolitan court and military reach" },
      { label: "Song strength", value: "Commercial cities and literati state" },
      { label: "Shared feature", value: "High institutional sophistication" },
      { label: "Historical lesson", value: "Imperial success had multiple forms" },
    ],
    intro: [
      "Tang and Song are often grouped together as golden ages, but the comparison is more interesting when the differences are kept in view. Tang power drew heavily on aristocratic culture, frontier warfare, and trans-Asian prestige; Song strength rested more on commerce, administration, printing, and dense urban life.",
      "The pair shows that dynastic excellence in China could emerge from different institutional balances. Military reach was not the only route to influence, and commercial-literati sophistication could coexist with strategic vulnerability.",
    ],
    milestones: [
      {
        year: "618-907",
        title: "Tang imperial age",
        detail:
          "Chang'an becomes one of the great cosmopolitan capitals of the premodern world.",
      },
      {
        year: "755-763",
        title: "An Lushan shock",
        detail:
          "Rebellion weakens Tang central power and intensifies regional militarization.",
      },
      {
        year: "960-1279",
        title: "Song reconstruction",
        detail:
          "A new dynasty privileges administration, commerce, and literati order.",
      },
      {
        year: "Song era",
        title: "Commercial and technical deepening",
        detail:
          "Cities, print, finance, and specialized production reach new density.",
      },
    ],
    chapters: [
      {
        title: "Tang as imperial crossroads",
        image: "tang-sancai-camel",
        body: [
          "Tang sancai ceramics capture something real about the age: the Tang court stood inside a broad world of steppe power, Buddhist movement, Silk Road exchange, and foreign communities in the capital. Tang China looked outward without ceasing to be deeply dynastic.",
          "This cosmopolitanism was not decorative. It belonged to the military and diplomatic architecture of empire.",
        ],
      },
      {
        title: "Song as an urban-commercial dynasty",
        image: "qingming-scroll",
        body: [
          "The Qingming scroll tradition is useful because it shows a society thick with bridges, markets, shops, carts, boats, and administrative order. Song power was expressed not only in palace ritual but in the management of dense economic life.",
          "That world made Song China one of history's most sophisticated commercial civilizations, even while it struggled to dominate frontier rivals militarily.",
        ],
        bullets: [
          "Urban density became a source of state strength",
          "Literati governance deepened the bureaucratic order",
          "Market sophistication changed what imperial life looked like",
        ],
      },
      {
        title: "A richer model of golden ages",
        image: "papermaking",
        body: [
          "The Tang-Song sequence matters because it widens the meaning of greatness. One dynasty could be remembered for reach and cosmopolitan grandeur; another for commercial, scholarly, and technical refinement. Both belonged fully to the imperial tradition.",
          "That variety is part of why dynastic memory stayed so influential: it offered several benchmarks for what a successful order could be.",
        ],
      },
    ],
    related: ["conquest-empires", "qin-han-order"],
  },
  "conquest-empires": {
    slug: "conquest-empires",
    shortTitle: "Conquest empires",
    title: "Yuan and Qing as Conquest Dynasties and Multiethnic Empires",
    subtitle:
      "The Yuan and Qing dynasties prove that Chinese imperial history was never only a Han heartland story. Mongol and Manchu rulers built empires that were simultaneously Chinese, Inner Asian, and deeply shaped by conquest.",
    accent: "#5e5b74",
    heroImage: "kublai-khan",
    preview:
      "Yuan and Qing rule, conquest legitimacy, Inner Asia, and why frontier empire belongs at the center of dynastic history.",
    quickFacts: [
      { label: "Core point", value: "Conquest dynasties were not temporary anomalies" },
      { label: "Key scale", value: "Heartland + Inner Asia" },
      { label: "Political style", value: "Hybrid institutions" },
      { label: "Historical impact", value: "They changed the map of China" },
    ],
    intro: [
      "Yuan and Qing rule unsettle overly narrow dynastic narratives. Neither dynasty was simply swallowed by 'Chinese civilization' in a passive sense, nor did either remain untouched by it. Both ruled through combinations of conquest authority and imperial adaptation.",
      "The result was a more expansive and more multiethnic understanding of empire. Qing especially turned frontier governance into a central, not peripheral, part of dynastic rule.",
    ],
    milestones: [
      {
        year: "1271-1368",
        title: "Yuan dynasty",
        detail:
          "Mongol rule links China to a much larger Eurasian imperial formation.",
      },
      {
        year: "1644",
        title: "Qing conquest begins in the north China heartland",
        detail:
          "Manchu rulers build a new dynasty on conquest and institutional adaptation.",
      },
      {
        year: "18th century",
        title: "Qing territorial expansion",
        detail:
          "Inner Asian expansion changes the scale and strategic logic of empire.",
      },
      {
        year: "Late Qing",
        title: "Conquest empire under global pressure",
        detail:
          "Multiethnic empire faces new military and fiscal stresses.",
      },
    ],
    chapters: [
      {
        title: "Kublai and the meaning of Yuan rule",
        image: "kublai-khan",
        body: [
          "Kublai Khan's dynasty ruled China from inside a broader Mongol imperial world. That meant the Yuan cannot be understood only as a Chinese court with foreign rulers on top. It was part of a transcontinental conquest formation that changed mobility, political imagination, and hierarchy.",
          "At the same time, Yuan rule also occupied Chinese imperial space, proving that conquest and dynastic continuity could coexist rather than cancel one another out.",
        ],
      },
      {
        title: "The Qing map as a political argument",
        image: "qing-map",
        body: [
          "A map of the Qing dynasty is not just geography; it is a statement about what China had become. The Qing empire stretched far beyond the old agricultural core and required different forms of rule for Manchuria, Mongolia, Tibet, Xinjiang, and the heartland provinces.",
          "This frontier dimension was not incidental. It was central to Qing legitimacy, military organization, and strategic identity.",
        ],
        bullets: [
          "Heartland governance and frontier governance were not the same thing",
          "Territorial scale changed the meaning of empire",
          "Later Chinese territorial imagination owes much to Qing precedent",
        ],
      },
      {
        title: "Why conquest dynasties belong at the center",
        image: "hall-of-supreme-harmony",
        body: [
          "Conquest dynasties show that Chinese history remained adaptive because it could absorb rulers from outside the earlier heartland without losing institutional depth. They also remind us that 'Chinese' and 'imperial' were never perfectly identical categories.",
          "Without Yuan and Qing, the map, ethnic complexity, and strategic memory of modern China would be impossible to explain clearly.",
        ],
      },
    ],
    related: ["ming-qing-last-imperial-age", "tang-song-transformation"],
  },
  "ming-qing-last-imperial-age": {
    slug: "ming-qing-last-imperial-age",
    shortTitle: "Ming and Qing",
    title: "Ming-Qing Splendour and the Last Imperial Age",
    subtitle:
      "The Ming and Qing dynasties produced some of the strongest visual symbols of imperial China, from the Forbidden City to porcelain and literati high culture. They also reveal the limits of imperial adaptation under mounting fiscal, military, and global pressure.",
    accent: "#38506b",
    heroImage: "hall-of-supreme-harmony",
    preview:
      "The last imperial centuries, their splendour, commercial strength, and eventual structural breakdown.",
    quickFacts: [
      { label: "Visual symbol", value: "Forbidden City and Beijing court culture" },
      { label: "Economic depth", value: "Commercial expansion and global silver" },
      { label: "Craft prestige", value: "Porcelain, print, urban culture" },
      { label: "Endgame", value: "Crisis under internal and external strain" },
    ],
    intro: [
      "The Ming and Qing dynasties created the most familiar iconography of imperial China. Palaces, court ceremony, porcelain, literati painting, market towns, and urban consumption all intensified during these last imperial centuries.",
      "But grandeur should not be mistaken for stability. The same age that produced extraordinary material culture also accumulated fiscal problems, population pressure, frontier burdens, corruption, and vulnerability to nineteenth-century upheaval.",
    ],
    milestones: [
      {
        year: "1368",
        title: "Ming restoration",
        detail:
          "A new dynasty displaces Mongol rule and rebuilds Han-led court order.",
      },
      {
        year: "15th century",
        title: "Court and craft consolidation",
        detail:
          "Beijing court architecture and imperial craft systems deepen.",
      },
      {
        year: "17th-18th centuries",
        title: "Qing high imperial phase",
        detail:
          "Territorial expansion and commercial growth coexist with strong court culture.",
      },
      {
        year: "19th century",
        title: "Late imperial crisis",
        detail:
          "Rebellion, foreign war, and fiscal strain expose structural fragility.",
      },
    ],
    chapters: [
      {
        title: "The palace and the performance of rule",
        image: "hall-of-supreme-harmony",
        body: [
          "The Hall of Supreme Harmony represents more than court beauty. It was part of a ritual machine that ordered hierarchy, ceremony, and access. Architecture itself became a medium of dynastic legitimacy.",
          "This is why Beijing remains so central to the dynastic imagination: the built environment turned imperial order into something spatially overwhelming.",
        ],
      },
      {
        title: "Porcelain, luxury, and the commercial empire",
        image: "ming-porcelain",
        body: [
          "Ming porcelain shows how dynastic order and commercial culture intertwined. Court sponsorship, specialized craft regions, trade demand, and aesthetic prestige combined to make objects that circulated across Eurasia.",
          "The last imperial age was therefore not only bureaucratic and ceremonial. It was also deeply commercial, globally connected, and shaped by sophisticated production zones.",
        ],
        bullets: [
          "Craft prestige relied on regional specialization",
          "Luxury objects linked court and market",
          "Global demand fed local manufacturing ecosystems",
        ],
      },
      {
        title: "Grandeur and breakdown",
        image: "qing-map",
        body: [
          "The last imperial order grew territorially impressive even as it became harder to sustain. Population growth, silver dependence, corruption, administrative overload, and foreign pressure all made the system more brittle than its ceremonial surface suggested.",
          "This contradiction mattered immensely for modern China. The memory of late dynastic collapse helped make later leaders obsessed with unity, strength, reform, and sovereign recovery.",
        ],
      },
    ],
    related: ["conquest-empires", "qin-han-order"],
  },
};

export function getDynastyTopic(slug: string): DynastyTopic | undefined {
  return dynastyTopics[slug as DynastyTopicSlug];
}
