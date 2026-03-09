import type { ImageKey } from "@/data/china-content";

export const civilizationTopicOrder = [
  "early-landscapes",
  "writing-and-classics",
  "belief-worlds",
  "routes-and-exchange",
  "regional-cultures",
] as const;

export type CivilizationTopicSlug = (typeof civilizationTopicOrder)[number];

export type CivilizationTopic = {
  slug: CivilizationTopicSlug;
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
  related: CivilizationTopicSlug[];
};

export const civilizationHub = {
  deck: [
    "Chinese civilization is best understood as a long process of integration rather than a single uninterrupted essence. Different ecological zones produced different social forms, and the achievement of later states was to connect those worlds through writing, transport, ritual, markets, and shared political language.",
    "That is why a civilization page should not begin and end with dynasties. A dynasty ruled for a time, but civilization persisted through scripts, classics, temple networks, family institutions, trade corridors, craft traditions, and regional cultures that often outlived any court that tried to govern them.",
  ],
  metrics: [
    { label: "Civilizational frame", value: "Plural regions inside one memory system" },
    { label: "Deep glue", value: "Writing, ritual, transport, canon" },
    { label: "Geographic engine", value: "River basins, coasts, corridors, frontiers" },
    { label: "Historical pattern", value: "Absorb, reorder, and transmit" },
  ],
  rhythmBlocks: [
    {
      title: "Origins were regional before they became imperial.",
      eyebrow: "Early landscapes",
      image: "liangzhu-jade-cong" as ImageKey,
      topicSlug: "early-landscapes" as CivilizationTopicSlug,
      body: [
        "China's civilizational story begins with several ecological cradles at once: millet agriculture in the north, rice worlds in the lower Yangtze, mountain and basin cultures in the southwest, and ritual centers that developed sophisticated craft and hierarchy long before a single empire unified them.",
        "Artifacts such as Liangzhu jade and the Sanxingdui bronzes show that early prestige culture was already regionally rich. The eventual civilizational synthesis did not erase that diversity; it layered a wider written and political order on top of it.",
      ],
      bullets: [
        "Yellow River and Yangtze worlds developed in parallel",
        "Ritual craft marked status before imperial unification",
        "Regional difference is the starting point, not a later deviation",
      ],
    },
    {
      title: "Writing turned memory into an institution.",
      eyebrow: "Script and canon",
      image: "oracle-bone" as ImageKey,
      topicSlug: "writing-and-classics" as CivilizationTopicSlug,
      body: [
        "From oracle bones to bamboo slips to printed books, writing gave Chinese states and elites a way to stabilize memory across time and distance. It made records portable, legitimacies arguable, and scholarship cumulative.",
        "The power of script was not only administrative. A shared literary culture allowed geographically distant elites to participate in a common archive of precedent, commentary, and moral language even when they spoke very different local tongues.",
      ],
      bullets: [
        "Writing supported both archives and prestige",
        "Canonical texts shaped recruitment and moral debate",
        "Print multiplied the density of shared reference",
      ],
    },
    {
      title: "Belief in China remained layered rather than singular.",
      eyebrow: "Belief worlds",
      image: "dunhuang-mural" as ImageKey,
      topicSlug: "belief-worlds" as CivilizationTopicSlug,
      body: [
        "Confucian ethics, Daoist ritual, Buddhist salvation, ancestral practice, local cults, Islam, and later Christianity all occupied Chinese space without collapsing into one neat religious system. The result was a civilizational field rather than a single church.",
        "The Mogao cave murals and other Buddhist visual cultures show how foreign traditions entered China not as passive imports but as traditions translated, localized, sponsored, and woven into Chinese aesthetics and pilgrimage networks.",
      ],
      bullets: [
        "Confucianism ordered ethics and politics more than worship",
        "Buddhism transformed art, institutions, and concepts of the self",
        "Local cults kept religion grounded in place and community",
      ],
    },
    {
      title: "Corridors and canals made distance governable.",
      eyebrow: "Exchange networks",
      image: "suzhou-grand-canal" as ImageKey,
      topicSlug: "routes-and-exchange" as CivilizationTopicSlug,
      body: [
        "Silk Road passages, maritime ports, and the Grand Canal changed what counted as center and frontier. They moved grain, texts, pilgrims, merchants, styles, and state power, allowing very different regions to function inside one expanding civilizational system.",
        "The point is not only trade volume. Routes transformed imagination: they linked the Chinese world to Central Asia, India, Southeast Asia, the Islamic world, and eventually Europe, while also shifting power inside China itself from one region to another.",
      ],
      bullets: [
        "Transport systems stabilized empire",
        "Trade routes also moved religions, art, and techniques",
        "Connectivity repeatedly shifted the balance between north and south",
      ],
    },
    {
      title: "Regional cultures gave civilization its texture.",
      eyebrow: "Regional high cultures",
      image: "longjing-tea-fields" as ImageKey,
      topicSlug: "regional-cultures" as CivilizationTopicSlug,
      body: [
        "Civilization became durable because it lived in local worlds: Jiangnan gardens and printing houses, Fujian ports and lineages, Sichuan cuisines and basin society, Shanxi merchant finance, Lingnan maritime migration, and tea and porcelain regions that shaped global taste.",
        "Regional culture is not decorative detail. It is how large civilizational systems become lived reality, turning canon and statecraft into food, accent, architecture, ritual, craft, and everyday social organization.",
      ],
      bullets: [
        "Regional specializations turned difference into wealth",
        "Cuisine, craft, lineage, and local ritual carried memory forward",
        "Late imperial and modern culture both rely on strong regional worlds",
      ],
    },
  ],
  civilizationalThreads: [
    {
      title: "Ecology",
      body: "Rivers, loess plains, basins, coasts, and highlands created several starting points for civilization rather than one.",
    },
    {
      title: "Archive",
      body: "Script, commentary, and print made Chinese civilization unusually self-remembering.",
    },
    {
      title: "Ritual",
      body: "Ancestral practice, state ceremony, temples, and seasonal observance linked family, locality, and empire.",
    },
    {
      title: "Movement",
      body: "Caravan routes, canals, sea trade, migration, and exams moved people and ideas constantly.",
    },
  ],
};

export const civilizationTopics: Record<CivilizationTopicSlug, CivilizationTopic> = {
  "early-landscapes": {
    slug: "early-landscapes",
    shortTitle: "Early landscapes",
    title: "Early Landscapes, Neolithic Worlds, and Regional Origins",
    subtitle:
      "China's civilization began across multiple ecological zones. Northern millet villages, southern rice settlements, ritual centers, and frontier exchange corridors all contributed to the world later empires tried to unify.",
    accent: "#a55d37",
    heroImage: "liangzhu-jade-cong",
    preview:
      "Neolithic cultures, ritual centers, the Yellow River and Yangtze worlds, and why plural origins matter.",
    quickFacts: [
      { label: "Time frame", value: "c. 7000 BCE to early bronze age" },
      { label: "Main crops", value: "Millet in the north, rice in the south" },
      { label: "Key lesson", value: "Civilization started regionally" },
      { label: "Symbol image", value: "Liangzhu jade and Sanxingdui bronze" },
    ],
    intro: [
      "A common simplification treats ancient China as if it began in one northern cradle and then diffused outward. Archaeology tells a more interesting story. Distinct regional cultures developed with their own ritual forms, settlement patterns, and craft systems before any single court ruled over them all.",
      "This matters because later Chinese civilization retained that plural base. Different regions entered shared history through different strengths: some through agriculture and early capitals, others through ritual prestige, trade position, or ecological wealth.",
    ],
    milestones: [
      {
        year: "c. 7000-5000 BCE",
        title: "Farming villages expand",
        detail:
          "Millet and rice agriculture create durable settlement worlds in different regions.",
      },
      {
        year: "c. 3300-2300 BCE",
        title: "Liangzhu and other ritual cultures",
        detail:
          "Jade production, walls, and ceremonial complexity signal hierarchy and long-range coordination.",
      },
      {
        year: "c. 2000-1200 BCE",
        title: "Bronze-age formations deepen",
        detail:
          "Regional elites sponsor increasingly elaborate craft and ritual systems.",
      },
      {
        year: "c. 1600 BCE onward",
        title: "Shang-era writing and bronze",
        detail:
          "The northern courtly world enters the historical record with unusual clarity.",
      },
    ],
    chapters: [
      {
        title: "Multiple ecologies, multiple starts",
        image: "liangzhu-jade-cong",
        body: [
          "The Yellow River plain favored millet agriculture and some of the earliest known dynastic centers, but the lower Yangtze offered a different civilizational path built around rice, wetland environments, and rich ritual production. These were not minor variants of one template.",
          "Recognizing multiple starts makes later Chinese integration easier to understand. A civilization of this scale had to learn how to connect unlike worlds rather than merely expand one local culture outward unchanged.",
        ],
      },
      {
        title: "Ritual prestige before empire",
        image: "sanxingdui-statues",
        body: [
          "Sites such as Sanxingdui remind us that the Chinese world included spectacular ritual cultures far from the later canonical capitals. Bronze masks, monumental forms, and distinct visual languages show that political and sacred authority could take many shapes.",
          "Civilization therefore emerged out of negotiation and layering. Later historical narratives centered some regions more than others, but archaeology keeps recovering the broader field from which the imperial story arose.",
        ],
        bullets: [
          "Ritual systems organized labor and status",
          "Prestige goods reveal long-distance contact",
          "Archaeology complicates older textbook origin stories",
        ],
      },
      {
        title: "From regional worlds to historical memory",
        image: "terracotta-army",
        body: [
          "Once later states looked backward, they turned some early regions into civilizational ancestors and treated others as peripheral or transitional. Modern scholarship has undone much of that narrowing by showing how many early worlds fed into later China.",
          "The result is a stronger explanation of continuity: China endured not because it was simple, but because it could remember and reorder diversity.",
        ],
      },
    ],
    related: ["writing-and-classics", "routes-and-exchange"],
  },
  "writing-and-classics": {
    slug: "writing-and-classics",
    shortTitle: "Writing and classics",
    title: "Writing, Classics, and the Scholar's World",
    subtitle:
      "Chinese civilization became unusually durable because it wrote itself down, commented on itself, and educated elites inside that growing archive. Script was an administrative tool, but it was also a medium of prestige, memory, and debate.",
    accent: "#8f4332",
    heroImage: "oracle-bone",
    preview:
      "Oracle bones, bamboo slips, the classical canon, commentary, print, and the social authority of literacy.",
    quickFacts: [
      { label: "Deep medium", value: "Script as archive and authority" },
      { label: "Elite ideal", value: "Scholar-official and textual mastery" },
      { label: "Material shift", value: "Bones to slips to paper to print" },
      { label: "Civilizational effect", value: "Shared reference across distance" },
    ],
    intro: [
      "Writing helped Chinese civilization solve the problem of scale. A large territory with many dialects could still share records, laws, genealogies, ritual formulae, and literary standards if it maintained a durable written world.",
      "Over time, script became much more than bureaucracy. It anchored historical consciousness itself. To know the past was to read, annotate, cite, and debate it, which gave literacy a central place in politics and prestige.",
    ],
    milestones: [
      {
        year: "Late 2nd millennium BCE",
        title: "Oracle bone inscriptions",
        detail:
          "The earliest large written archive links script to kingship, ritual, and decision-making.",
      },
      {
        year: "Warring States era",
        title: "Bamboo-slip text worlds",
        detail:
          "Portable textual culture deepens and intellectual debate intensifies.",
      },
      {
        year: "Han onward",
        title: "Canon and commentary",
        detail:
          "Classical texts become central to political and ethical education.",
      },
      {
        year: "Song onward",
        title: "Printing multiplies scholarship",
        detail:
          "Commentary, local gazetteers, practical manuals, and literary circulation expand dramatically.",
      },
    ],
    chapters: [
      {
        title: "Oracle bones and the first durable archive",
        image: "oracle-bone",
        body: [
          "Oracle bone inscriptions show writing at the intersection of political power and sacred inquiry. Questions about weather, warfare, sacrifice, and dynastic fortune were recorded because authority needed both consultation and memory.",
          "This is already recognizably civilizational. Once a court keeps systematic written traces, later generations can treat that past as recoverable and discussable rather than lost.",
        ],
      },
      {
        title: "Bamboo slips, books, and the mobile text",
        image: "bamboo-slips",
        body: [
          "Bamboo slips reveal a world before bound books fully dominated, but also a world where texts could travel, be copied, and be rearranged. The physical form mattered because it shaped how knowledge moved.",
          "What later became the classical canon emerged through this broader textual environment of compilation, teaching, and argument. Chinese literacy was never just memorization; it was participation in a long argumentative archive.",
        ],
        bullets: [
          "Material form shapes what a culture can preserve",
          "Commentary turns texts into living arguments",
          "Literacy became social capital as much as skill",
        ],
      },
      {
        title: "Qufu and the institutionalization of the canon",
        image: "confucius-temple",
        body: [
          "The Temple of Confucius at Qufu symbolizes how textual and moral authority became spatially embodied. Education, ritual commemoration, family lineage, and state endorsement all converged around the Confucian tradition.",
          "That convergence helps explain why the classics mattered for so long. They were not just books on a shelf; they were embedded in institutions, rituals, careers, and built environments.",
        ],
      },
    ],
    related: ["belief-worlds", "regional-cultures"],
  },
  "belief-worlds": {
    slug: "belief-worlds",
    shortTitle: "Belief worlds",
    title: "Confucian Ethics, Daoist Practice, Buddhist China, and Local Cults",
    subtitle:
      "Chinese civilization never ran on a single religious orthodoxy. Instead it developed a layered belief field in which ethics, ritual, temples, pilgrimage, ancestral practice, and imported faiths coexisted and interacted.",
    accent: "#8a5c2f",
    heroImage: "dunhuang-mural",
    preview:
      "Confucianism, Daoism, Buddhism, local religion, and the civilizational importance of plural sacred life.",
    quickFacts: [
      { label: "Not a single church", value: "Layered traditions" },
      { label: "State role", value: "Regulate, sponsor, rank, and sometimes suppress" },
      { label: "Visual landmark", value: "Dunhuang and cave Buddhism" },
      { label: "Social base", value: "Family rites, local cults, temples, monasteries" },
    ],
    intro: [
      "Belief in China worked through overlap rather than exclusivity. Confucian teachings organized ethics and governance; Daoist practice offered ritual, cosmology, and cultivation; Buddhism reshaped ideas of salvation, suffering, and monastic life; and local cults tied communities to place and protection.",
      "This plurality mattered because it made civilization flexible. Different communities could participate in a shared civilizational world without needing the same exact religious profile.",
    ],
    milestones: [
      {
        year: "Classical era",
        title: "Confucian and Daoist foundations",
        detail:
          "Ethical and cosmological traditions take textual shape and enter political debate.",
      },
      {
        year: "Early centuries CE",
        title: "Buddhism enters China",
        detail:
          "Texts, monks, and visual culture arrive through overland and maritime routes.",
      },
      {
        year: "4th-9th centuries",
        title: "Buddhist institutional expansion",
        detail:
          "Monasteries, translation, and pilgrimage become major social forces.",
      },
      {
        year: "Late imperial era",
        title: "Layered religious life stabilizes",
        detail:
          "Ancestor rites, state cults, local temples, and elite ethics coexist at scale.",
      },
    ],
    chapters: [
      {
        title: "Confucianism as moral and political order",
        image: "confucius-temple",
        body: [
          "Confucianism is often mislabeled a religion in the same sense as temple-based salvation traditions. In practice it functioned more as a moral, educational, and political order, shaping what proper family life, governance, learning, and ritual decorum should look like.",
          "That made it unusually influential inside the state and the family alike. It gave the civilizational center a shared ethical vocabulary even when religious practice remained varied.",
        ],
      },
      {
        title: "Buddhism remade imagination and art",
        image: "dunhuang-mural",
        body: [
          "Buddhism changed the Chinese visual and spiritual landscape through cave temples, monasteries, sutra translation, and new understandings of karma, merit, and cosmology. Its greatest achievements came through adaptation rather than direct imitation.",
          "Dunhuang is one of the clearest examples. It sits at the crossroads of exchange, showing how a foreign religion became deeply Chinese through translation, patronage, and artistic transformation.",
        ],
        bullets: [
          "Translation converted doctrine into Chinese literary worlds",
          "Monasteries became economic and social institutions",
          "Art made belief portable across language and distance",
        ],
      },
      {
        title: "Local religion kept civilization grounded",
        image: "hall-of-supreme-harmony",
        body: [
          "Even with great philosophical systems and major temple networks, civilizational life remained local. Communities venerated place-based deities, ancestors, protective spirits, and practical ritual specialists who addressed illness, harvest, and danger.",
          "That local grounding explains why Chinese civilization stayed socially thick. It was never only about emperors and texts; it was also about village shrines, annual festivals, family altars, and embodied ritual practice.",
        ],
      },
    ],
    related: ["writing-and-classics", "routes-and-exchange"],
  },
  "routes-and-exchange": {
    slug: "routes-and-exchange",
    shortTitle: "Routes and exchange",
    title: "Silk Roads, Maritime Asia, and the Grand Canal",
    subtitle:
      "Chinese civilization expanded and changed through movement. Caravan routes, sea lanes, canals, and migration patterns carried grain, merchants, monks, envoys, and artistic forms across long distances and across civilizational boundaries.",
    accent: "#9c6a2f",
    heroImage: "suzhou-grand-canal",
    preview:
      "Silk Road corridors, maritime trade, the Grand Canal, and the movement of goods, people, and ideas.",
    quickFacts: [
      { label: "Main corridors", value: "Hexi, maritime coast, Grand Canal" },
      { label: "What moved", value: "Grain, texts, pilgrims, silver, ceramics, ideas" },
      { label: "Political effect", value: "Distance became governable" },
      { label: "Civilizational effect", value: "China stayed open even when states feared disorder" },
    ],
    intro: [
      "A civilization this large could not depend on one core speaking only to itself. Routes mattered because they made redistribution, pilgrimage, diplomacy, and imitation possible. What later looked like a stable center was constantly being fed by movement.",
      "Exchange also prevented Chinese civilization from becoming isolated in the strong sense of the word. Central Asian, Indian, Islamic, Southeast Asian, and later European influences entered Chinese worlds repeatedly through the same routes that carried Chinese goods outward.",
    ],
    milestones: [
      {
        year: "2nd century BCE",
        title: "Han contacts deepen westward",
        detail:
          "Diplomacy and trade enlarge the overland world linking China to Central Asia.",
      },
      {
        year: "Sui and Tang eras",
        title: "Canal integration grows",
        detail:
          "North-south transport becomes central to political and economic coordination.",
      },
      {
        year: "Song to Yuan",
        title: "Maritime trade accelerates",
        detail:
          "Ports and merchant networks pull coastal China into denser Asian exchange.",
      },
      {
        year: "Late imperial era",
        title: "Commercial circulation saturates the realm",
        detail:
          "Canals, roads, market towns, and regional specialization bind the empire more tightly.",
      },
    ],
    chapters: [
      {
        title: "The Silk Road as cultural corridor",
        image: "dunhuang-mural",
        body: [
          "The Silk Road was never just a silk road. It carried diplomats, monks, translators, animals, artistic motifs, and political intelligence. Dunhuang's art and manuscript finds show how frontier corridors became repositories of layered cultural exchange.",
          "That means the Chinese world cannot be read only from the center outward. Frontier corridors often tell us more clearly how civilization absorbed outside forms and remade them.",
        ],
      },
      {
        title: "The Grand Canal and the mechanics of unity",
        image: "suzhou-grand-canal",
        body: [
          "The Grand Canal mattered because it turned geography into infrastructure. Grain from the south could support northern capitals; tax and communication networks could move with more predictability; and economic integration could survive regional imbalance more effectively.",
          "A canal is not glamorous in the way a palace is, but it may tell us more about how a civilization actually holds together. Chinese history repeatedly shows that transport systems are cultural systems.",
        ],
        bullets: [
          "Food security and political legitimacy were linked",
          "Transport widened markets and cultural circulation",
          "Infrastructure shifted the balance of power between regions",
        ],
      },
      {
        title: "Maritime China and outward-facing culture",
        image: "longjing-tea-fields",
        body: [
          "Ports in Fujian, Guangdong, and Zhejiang tied Chinese society to migration, trade, and diaspora. Tea, ceramics, and other regional products turned local ecologies into global commodities, carrying Chinese taste far beyond the empire.",
          "Maritime exchange also brought ideas back. Religious communities, merchant techniques, and new political vocabularies entered Chinese coastal worlds through the same channels that exported goods.",
        ],
      },
    ],
    related: ["regional-cultures", "belief-worlds"],
  },
  "regional-cultures": {
    slug: "regional-cultures",
    shortTitle: "Regional cultures",
    title: "Jiangnan, Tea, Porcelain, Lineage, and Regional High Culture",
    subtitle:
      "Chinese civilization became rich and durable because it expressed itself regionally. Different regions turned ecology, migration, and trade into cuisines, built forms, literary scenes, craft traditions, and social institutions that still define China today.",
    accent: "#5d7b47",
    heroImage: "longjing-tea-fields",
    preview:
      "Regional specialization, Jiangnan culture, tea and porcelain worlds, lineage institutions, and local texture.",
    quickFacts: [
      { label: "Key regions", value: "Jiangnan, Lingnan, Fujian, Sichuan, Shanxi, northwest corridors" },
      { label: "Cultural carriers", value: "Cuisine, lineage, craft, architecture, opera" },
      { label: "Economic base", value: "Regional specialization and market density" },
      { label: "Big idea", value: "Civilization becomes real locally" },
    ],
    intro: [
      "Large civilizations endure when they can become ordinary life. In China that happened through regionally distinct worlds that were still legible within a shared script, canon, and political order.",
      "Jiangnan gardens, tea regions around Hangzhou, porcelain centers like Jingdezhen, Fujian maritime lineages, Sichuan foodways, and Shanxi merchant networks all show how civilizational unity gained texture through difference rather than despite it.",
    ],
    milestones: [
      {
        year: "Tang-Song transition",
        title: "Southern economic shift",
        detail:
          "The lower Yangtze and southeast become increasingly central to wealth and culture.",
      },
      {
        year: "Song to Ming",
        title: "Urban and craft regionalism grows",
        detail:
          "Specialized cities and craft zones deepen the map of Chinese high culture.",
      },
      {
        year: "Late imperial era",
        title: "Lineage and local society intensify",
        detail:
          "Family institutions and local elites anchor social order across many regions.",
      },
      {
        year: "Global age",
        title: "Regional goods go outward",
        detail:
          "Tea, porcelain, and merchant culture give regional China global cultural reach.",
      },
    ],
    chapters: [
      {
        title: "Tea landscapes and cultivated taste",
        image: "longjing-tea-fields",
        body: [
          "Tea regions show how ecology, labor, literary taste, and commerce can combine into civilizational symbols. Longjing is not only an agricultural zone; it is part of a wider cultural world of refinement, hospitality, and regional identity.",
          "This matters because many features of Chinese civilization entered global awareness through such regional products rather than through dynastic institutions directly.",
        ],
      },
      {
        title: "Jiangnan as a cultural engine",
        image: "suzhou-grand-canal",
        body: [
          "Jiangnan became one of the most influential cultural zones in Chinese history because water transport, commercial wealth, education, and urban life reinforced one another. Gardens, printing, refined foodways, and literary culture all thickened in this environment.",
          "The region shows how a civilizational center can shift geographically without breaking continuity. China's cultural heart did not stay fixed in one place forever.",
        ],
        bullets: [
          "Commercial density supported high culture",
          "Transport linked elite and market life",
          "Regional prestige could reshape the empire-wide norm",
        ],
      },
      {
        title: "Regional difference as civilizational strength",
        image: "confucius-temple",
        body: [
          "A shared canon did not flatten regional life. Instead it gave different places a way to speak across difference while keeping local identity vivid. This is one reason Chinese civilization remained both legible and diverse.",
          "Regional culture is therefore not an appendix to the main story. It is how the main story survived in food, craft, ritual, architecture, and memory after courts rose and fell.",
        ],
      },
    ],
    related: ["routes-and-exchange", "writing-and-classics"],
  },
};

export function getCivilizationTopic(slug: string): CivilizationTopic | undefined {
  return civilizationTopics[slug as CivilizationTopicSlug];
}
