import type { ImageKey } from "@/data/china-content";

export const modernTopicOrder = [
  "state-building-and-socialist-foundations",
  "reform-and-special-economic-zones",
  "urbanization-and-infrastructure",
  "platforms-and-industrial-ecosystems",
  "green-transition-and-new-pressures",
] as const;

export type ModernTopicSlug = (typeof modernTopicOrder)[number];

export type ModernTopic = {
  slug: ModernTopicSlug;
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
  related: ModernTopicSlug[];
};

export const modernHub = {
  deck: [
    "Modern China is not one uninterrupted development story. It is a sequence of political-economic regimes layered on top of one another: revolutionary state-building, planned industrialization, reform-era experimentation, export-platform growth, megacity urbanization, and today's push toward strategic technology and green industry.",
    "What gives the story coherence is institutional scale. The same state that built heavy industry and national grids later enabled special economic zones, high-speed rail, giant ports, digital logistics, and green-manufacturing ecosystems. The unresolved question now is whether that scale can adjust to aging, debt pressure, property stress, and a more contested world economy.",
  ],
  metrics: [
    { label: "Main breaks", value: "1949 state-building and 1978 reform turn" },
    { label: "Growth geography", value: "Pearl River Delta, Yangtze Delta, Bohai, interior corridors" },
    { label: "Visible systems", value: "Ports, HSR, industrial clusters, platforms, green supply chains" },
    { label: "Current squeeze", value: "Demography, debt, climate pressure, tech rivalry" },
  ],
  systemCards: [
    {
      title: "The state remained the organizer",
      body: "Reform changed incentives, but land, finance, infrastructure, and strategic sectors continued to run through powerful public institutions.",
    },
    {
      title: "Local experimentation mattered",
      body: "Shenzhen, Pudong, Suzhou, Chongqing, and many provincial zones tested different combinations of openness, manufacturing, and policy support.",
    },
    {
      title: "Infrastructure is developmental power",
      body: "Rail, ports, power, data, and logistics systems bound provinces together and made industrial scaling faster than piecemeal growth would allow.",
    },
    {
      title: "Scale created new vulnerabilities",
      body: "The same systems that enabled rapid growth also amplified property dependence, local debt, ecological stress, and regional imbalance.",
    },
  ],
  regionalEngines: [
    {
      title: "Pearl River Delta",
      region: "Shenzhen, Dongguan, Guangzhou",
      body: "From export workshops to hardware, telecoms, batteries, and EV supply chains, the delta became the archetype of reform-era manufacturing dynamism.",
    },
    {
      title: "Yangtze Delta",
      region: "Shanghai, Suzhou, Hangzhou, Ningbo",
      body: "Finance, ports, advanced manufacturing, logistics, and platform firms made the delta the densest modern economic machine in China.",
    },
    {
      title: "Bohai and northern industry",
      region: "Beijing, Tianjin, Hebei, Liaoning",
      body: "State firms, heavy industry, research institutions, and political centrality kept the north central to strategic sectors even as southern growth accelerated.",
    },
    {
      title: "Interior corridors",
      region: "Chengdu-Chongqing, central and western provinces",
      body: "Highways, rail, energy, data centers, and industrial relocation tied inland cities more tightly into the national production map.",
    },
  ],
  rhythmBlocks: [
    {
      title: "The early PRC built reach, steel, oil, and administrative depth before it built consumer abundance.",
      eyebrow: "State foundation",
      image: "first-train-of-oil-daqing" as ImageKey,
      topicSlug: "state-building-and-socialist-foundations" as ModernTopicSlug,
      body: [
        "The socialist decades left a contradictory inheritance, but they undeniably deepened the state's ability to count, mobilize, educate, and industrialize.",
        "That institutional reach helps explain why later reform could redirect the system rather than replacing it from scratch.",
      ],
      bullets: [
        "Heavy industry preceded consumer prosperity",
        "Territorial integration remained central",
        "Planning left lasting administrative muscles",
      ],
    },
    {
      title: "Reform turned selected coastal spaces into laboratories for export industry, private initiative, and global linkage.",
      eyebrow: "Reform geography",
      image: "shenzhen" as ImageKey,
      topicSlug: "reform-and-special-economic-zones" as ModernTopicSlug,
      body: [
        "Special economic zones mattered because they changed the operating logic of the system one region at a time rather than everywhere at once.",
        "Shenzhen became the emblem of that shift, but the wider story is about how local states, foreign capital, migrant labor, and global markets interacted.",
      ],
      bullets: [
        "Selective openness beat uniform liberalization",
        "Local governments became growth brokers",
        "Coastal manufacturing rewired the national economy",
      ],
    },
    {
      title: "Modern China became legible through ports, rail, logistics, and megacity skylines as much as through factories.",
      eyebrow: "Urban systems",
      image: "yangshan-deepwater-port" as ImageKey,
      topicSlug: "urbanization-and-infrastructure" as ModernTopicSlug,
      body: [
        "Container terminals, expressways, high-speed rail, metros, and airport networks changed how provinces connected to one another and to the world economy.",
        "These systems were not neutral conveniences. They concentrated state power, fiscal ambition, and regional strategy in concrete form.",
      ],
      bullets: [
        "Infrastructure integrated territory at new speed",
        "Cities became logistical command platforms",
        "Urban growth depended on massive public investment",
      ],
    },
    {
      title: "Contemporary China combines platform urbanism with deep manufacturing ecosystems and strategic tech programs.",
      eyebrow: "Industrial depth",
      image: "pudong" as ImageKey,
      topicSlug: "platforms-and-industrial-ecosystems" as ModernTopicSlug,
      body: [
        "China's modern power lies less in a single famous company than in dense ecosystems linking suppliers, ports, skilled labor, state finance, and engineering talent.",
        "That is why digital platforms, telecoms, robotics, batteries, satellites, and advanced manufacturing often advance together rather than in isolation.",
      ],
      bullets: [
        "Manufacturing depth supports digital scale",
        "Strategic tech remains tied to state priorities",
        "Urban finance and industrial production reinforce each other",
      ],
    },
    {
      title: "The next phase depends on whether green industry and strategic upgrading can outpace debt, aging, and slower property-led growth.",
      eyebrow: "Next transition",
      image: "longyangxia-solar" as ImageKey,
      topicSlug: "green-transition-and-new-pressures" as ModernTopicSlug,
      body: [
        "Solar, batteries, EVs, grid investment, and lower-carbon transport show that China is trying to build its next growth model around industrial upgrading rather than simple construction booms.",
        "But that transition unfolds under harder conditions than the earlier reform decades: more external pressure, weaker demographic momentum, and less room for easy debt-fueled expansion.",
      ],
      bullets: [
        "Green industry is both economic and geopolitical",
        "Headwinds are structural, not temporary",
        "Scale must now coexist with efficiency and restraint",
      ],
    },
  ],
};

export const modernTopics: Record<ModernTopicSlug, ModernTopic> = {
  "state-building-and-socialist-foundations": {
    slug: "state-building-and-socialist-foundations",
    shortTitle: "State foundation",
    title: "State-Building and Socialist Foundations, 1949-1978",
    subtitle:
      "The early PRC prioritized sovereignty, land reform, administrative penetration, and heavy industry. The era left deep scars and sharp discontinuities, but it also created much of the institutional reach that later phases depended on.",
    accent: "#76513a",
    heroImage: "first-train-of-oil-daqing",
    preview: "How the early PRC built industrial depth and territorial reach before the reform era.",
    quickFacts: [
      { label: "Core task", value: "Rebuild the state after war and revolution" },
      { label: "Economic style", value: "Planning, heavy industry, mobilization" },
      { label: "Key sectors", value: "Steel, oil, machinery, rail, defense" },
      { label: "Long legacy", value: "Administrative depth and industrial base" },
    ],
    intro: [
      "In 1949 the new regime inherited war damage, fragmented infrastructure, uneven literacy, and fragile industrial capacity. Its first priority was not consumer prosperity but sovereign control: land reform, taxation, policing, cadre penetration, and the restoration of central authority over territory.",
      "The planned economy that followed was harsh, often coercive, and historically costly. Yet it also built the ministries, enterprises, educational pipelines, and industrial habits that later reform would redirect rather than abolish.",
    ],
    milestones: [
      { year: "1949", title: "PRC founded", detail: "A new state begins reconstructing authority after decades of war." },
      { year: "1953", title: "First Five-Year Plan", detail: "Heavy-industry-led development becomes the organizing model." },
      { year: "1950s-1960s", title: "Administrative reach expands", detail: "Cadre networks, schools, work units, and planning institutions extend state capacity." },
      { year: "1960s-1970s", title: "Strategic industry deepens", detail: "Oil, machinery, defense, and inland industrial projects remain central priorities." },
    ],
    chapters: [
      {
        title: "Reconstruction meant governing territory first",
        image: "first-train-of-oil-daqing",
        body: [
          "The early PRC treated sovereignty as an administrative problem as much as a diplomatic one. Taxation, census work, political campaigns, police power, and local cadre penetration mattered because the center had to make the country governable in routine daily ways.",
          "This is one reason the state's later developmental shifts mattered so much: they were built on a system already accustomed to acting at territorial scale.",
        ],
      },
      {
        title: "Heavy industry carried political meaning",
        image: "first-train-of-oil-daqing",
        body: [
          "Daqing became symbolic because oil and steel represented more than production targets. They stood for autonomy, security, and the refusal to remain dependent on foreign industrial systems.",
          "Heavy industry therefore functioned as both economic policy and a language of national recovery.",
        ],
        bullets: [
          "Industry was tied to sovereignty",
          "Planning favored scale and control",
          "Strategic sectors outranked household consumption",
        ],
      },
      {
        title: "Why later reform inherited so much from this era",
        image: "cr400af",
        body: [
          "The reform era is often narrated as a complete break, but many of its successes depended on capacities built earlier: educated technical cadres, national grids, large enterprises, provincial administrative chains, and a political culture comfortable with mission-scale projects.",
          "Modern China's infrastructure ambitions make more sense when read as a redirected version of these earlier state-building habits.",
        ],
      },
    ],
    related: ["reform-and-special-economic-zones", "urbanization-and-infrastructure"],
  },
  "reform-and-special-economic-zones": {
    slug: "reform-and-special-economic-zones",
    shortTitle: "Reform and SEZs",
    title: "Reform, Opening, and the Special Economic Zone Era",
    subtitle:
      "After 1978 the Chinese system changed its operating logic without abandoning state direction. Rural decollectivization, coastal openness, foreign capital, and local experimentation remade the economy zone by zone.",
    accent: "#2b6e68",
    heroImage: "shenzhen",
    preview: "How reform and opening used selective experimentation to rebuild China's growth model.",
    quickFacts: [
      { label: "Key date", value: "1978 reform turn" },
      { label: "Policy style", value: "Experiment first, scale later" },
      { label: "Symbol city", value: "Shenzhen" },
      { label: "Growth engine", value: "Exports, migration, local competition, foreign investment" },
    ],
    intro: [
      "Reform worked because it was uneven by design. Instead of remaking the whole country in one move, policymakers loosened agriculture, invited foreign capital to selected zones, and allowed local governments to compete for growth under broad political supervision.",
      "That strategy produced a new political economy in which the state still set the frame, but markets, enterprise, migration, and regional differentiation became much more powerful.",
    ],
    milestones: [
      { year: "1978", title: "Reform begins", detail: "The system pivots toward incentives, experimentation, and controlled openness." },
      { year: "1980", title: "Special Economic Zones", detail: "Shenzhen and other zones become policy laboratories." },
      { year: "1990s", title: "Coastal takeoff", detail: "Export manufacturing, migrant labor, and industrial parks accelerate." },
      { year: "2001", title: "WTO accession", detail: "Global trade integration deepens the manufacturing boom." },
    ],
    chapters: [
      {
        title: "Why Shenzhen became the reform emblem",
        image: "shenzhen",
        body: [
          "Shenzhen compressed several features of the reform era into one place: proximity to Hong Kong, rapid land conversion, huge migrant inflows, and a local state willing to broker capital, infrastructure, and industrial space at speed.",
          "Its importance lies not only in local success but in showing how selectively open regions could pull the whole national economy in a new direction.",
        ],
      },
      {
        title: "Reform was mediated by local governments",
        image: "pudong",
        body: [
          "Local officials did not merely obey central plans. They assembled industrial parks, negotiated with investors, built roads and power, and competed for revenue and status. Growth thus became a bureaucratic project as well as a market one.",
          "This helps explain both the speed of development and the later problems of land finance, unevenness, and overbuilding.",
        ],
        bullets: [
          "Growth incentives ran through local cadres",
          "Zones linked policy to physical space",
          "Experimentation created winners and regional gaps",
        ],
      },
      {
        title: "Opening meant logistics, not just liberalization",
        image: "yangshan-deepwater-port",
        body: [
          "Exports scale only when ports, customs systems, roads, warehouses, and supplier networks also scale. China's rise in world manufacturing depended on physical and administrative logistics as much as on cheap labor.",
          "That is why reform history belongs inside infrastructure history, not apart from it.",
        ],
      },
    ],
    related: ["urbanization-and-infrastructure", "platforms-and-industrial-ecosystems"],
  },
  "urbanization-and-infrastructure": {
    slug: "urbanization-and-infrastructure",
    shortTitle: "Urban systems",
    title: "Urbanization, High-Speed Mobility, and Infrastructure Power",
    subtitle:
      "Modern China is intensely infrastructural. Megacities, rail corridors, deepwater ports, logistics parks, and airports remade the geography of production and everyday life.",
    accent: "#335f81",
    heroImage: "cr400af",
    preview: "How rail, ports, logistics, and megacity growth turned infrastructure into state power.",
    quickFacts: [
      { label: "Visible systems", value: "HSR, ports, metros, airports, expressways" },
      { label: "Urban result", value: "Cities became growth engines and command platforms" },
      { label: "Political meaning", value: "Infrastructure integrated territory and concentrated capacity" },
      { label: "Main tension", value: "Public ambition versus debt and uneven returns" },
    ],
    intro: [
      "China's modern transformation is visible in concrete, steel, and circulation. Infrastructure did not just follow growth; it actively produced new patterns of migration, trade, and regional hierarchy.",
      "That makes ports and railways political artifacts. They reveal how the state chose to bind provinces together, redirect industry inland, and make logistical speed a source of national advantage.",
    ],
    milestones: [
      { year: "1990s", title: "Urban construction accelerates", detail: "Coastal cities begin scaling at unprecedented speed." },
      { year: "2000s", title: "Port and expressway expansion", detail: "National logistics systems deepen integration with global trade." },
      { year: "2008 onward", title: "High-speed rail era", detail: "Massive investment reshapes mobility and regional planning." },
      { year: "2010s-2020s", title: "Multi-city corridors", detail: "Megaregions emerge as the basic units of modern economic organization." },
    ],
    chapters: [
      {
        title: "High-speed rail changed time and territory",
        image: "cr400af",
        body: [
          "High-speed rail compressed distance inside China in both practical and political terms. It made interior cities more connected to coastal markets, widened commuting and business ranges, and signaled that integration itself was a national project.",
          "Rail in this sense is not just transportation. It is a way of reorganizing the hierarchy of regions and making state investment tangible in everyday movement.",
        ],
      },
      {
        title: "Ports turned China into a logistical super-node",
        image: "yangshan-deepwater-port",
        body: [
          "Deepwater ports, container terminals, customs systems, and inland freight links made China's export role much denser than a simple 'factory' label suggests.",
          "The port system works because it connects urban government, industrial parks, finance, and transport into one coordinated machine.",
        ],
        bullets: [
          "Trade capacity depends on inland and coastal integration",
          "Ports are governance systems as well as shipping spaces",
          "Logistics scale reinforced industrial specialization",
        ],
      },
      {
        title: "Megacity skylines reflect an entire development model",
        image: "pudong",
        body: [
          "Skylines such as Pudong represent more than wealth or visual modernity. They condense land finance, state planning, commercial real estate, transport investment, and symbolic competition between regions.",
          "Modern China's urban form therefore reveals both strength and strain: immense build capacity on one side, and rising questions about property dependence and fiscal sustainability on the other.",
        ],
      },
    ],
    related: ["reform-and-special-economic-zones", "green-transition-and-new-pressures"],
  },
  "platforms-and-industrial-ecosystems": {
    slug: "platforms-and-industrial-ecosystems",
    shortTitle: "Platforms and industry",
    title: "Platforms, Manufacturing Ecosystems, and Strategic Technology",
    subtitle:
      "China's contemporary economic power sits in dense ecosystems rather than isolated firms. Ports, suppliers, engineers, universities, finance, and state priorities allow digital platforms and advanced manufacturing to scale together.",
    accent: "#4a5f86",
    heroImage: "pudong",
    preview: "Why modern Chinese power lies in industrial ecosystems, platform scale, and strategic tech coordination.",
    quickFacts: [
      { label: "Core advantage", value: "Dense supplier and manufacturing networks" },
      { label: "Visible sectors", value: "Telecoms, electronics, batteries, EVs, aerospace, platforms" },
      { label: "Key cities", value: "Shenzhen, Shanghai, Hangzhou, Suzhou, Beijing" },
      { label: "Strategic pattern", value: "Commercial scale plus state-backed priority sectors" },
    ],
    intro: [
      "Modern Chinese industry is powerful because production, design, logistics, finance, and state strategy overlap geographically. In places like Shenzhen and the Yangtze Delta, a firm can move from prototype to scaled production inside unusually dense ecosystems.",
      "This is also why contemporary China cannot be read only through finance or only through big-tech brands. Its digital and industrial strengths reinforce one another through physical supply chains and policy support.",
    ],
    milestones: [
      { year: "1990s-2000s", title: "Electronics clusters deepen", detail: "Coastal manufacturing regions become increasingly specialized and interconnected." },
      { year: "2010s", title: "Platform urbanism scales", detail: "Digital payments, logistics apps, and online commerce reshape daily life." },
      { year: "2010s-2020s", title: "Strategic sectors expand", detail: "Satellites, telecoms, robotics, batteries, and advanced manufacturing gain priority." },
      { year: "2020s", title: "Tech rivalry intensifies", detail: "Semiconductors, supply security, and indigenous capacity become central concerns." },
    ],
    chapters: [
      {
        title: "Shenzhen shows how hardware ecosystems work",
        image: "shenzhen",
        body: [
          "Shenzhen's importance lies in its density: component suppliers, tooling shops, contract manufacturers, engineers, logistics firms, and investors can interact at extraordinary speed.",
          "That density shortens the path between design and production, which is why the city matters far beyond its skyline.",
        ],
      },
      {
        title: "Strategic technology is embedded in larger systems",
        image: "beidou",
        body: [
          "Programs such as BeiDou matter not only as symbols of prestige but as infrastructure. They support transport, mapping, timing, and strategic autonomy while linking research institutions, manufacturers, and state agencies.",
          "This systems logic also explains why technology policy in China often targets whole sectors rather than single firms.",
        ],
        bullets: [
          "Platforms rest on physical infrastructure",
          "Strategic tech is tied to state coordination",
          "Autonomy matters as much as market share",
        ],
      },
      {
        title: "Modern industry reaches upward into complex systems",
        image: "tiangong",
        body: [
          "Tiangong is a scientific platform, but it also represents modern industrial maturity: propulsion, materials, electronics, manufacturing precision, and organizational integration.",
          "When China demonstrates capability in these system-level projects, it is revealing the depth of its industrial ecosystem as much as the ambition of any single mission.",
        ],
      },
    ],
    related: ["reform-and-special-economic-zones", "green-transition-and-new-pressures"],
  },
  "green-transition-and-new-pressures": {
    slug: "green-transition-and-new-pressures",
    shortTitle: "Green transition",
    title: "Green Industry, Demographic Headwinds, and the Next Modern Transition",
    subtitle:
      "The current phase of China's transformation is defined by a difficult overlap: world-scale green manufacturing and infrastructure investment on one side, and aging, debt, property stress, and external technology pressure on the other.",
    accent: "#3a695b",
    heroImage: "longyangxia-solar",
    preview: "How green industry and new constraints define the next phase of modern China.",
    quickFacts: [
      { label: "Growth candidates", value: "Solar, batteries, EVs, grid systems, low-carbon transport" },
      { label: "Hard constraints", value: "Aging, debt, property weakness, water and climate pressure" },
      { label: "Strategic setting", value: "More contested trade and technology environment" },
      { label: "Open question", value: "Can upgrading replace debt-led construction?" },
    ],
    intro: [
      "China is trying to move from property-heavy and investment-heavy growth toward industrial upgrading, green manufacturing, and greater strategic resilience. The effort is visible in energy systems, vehicle supply chains, and lower-carbon transport.",
      "But the timing is difficult. Earlier reform decades benefited from younger demographics, cheaper labor, faster urban migration, and a more permissive external environment. The next transition must happen under tighter constraints.",
    ],
    milestones: [
      { year: "2010s", title: "Environmental and energy pressure rise", detail: "Pollution control and energy restructuring become more central to policymaking." },
      { year: "2020s", title: "Green manufacturing surges", detail: "Batteries, EVs, solar, and related supply chains become new growth pillars." },
      { year: "2020s", title: "Property-led growth weakens", detail: "Debt and real-estate stress expose limits in the older model." },
      { year: "Present phase", title: "Upgrade under pressure", detail: "China seeks productivity and resilience in a more difficult global setting." },
    ],
    chapters: [
      {
        title: "Green infrastructure is industrial strategy",
        image: "longyangxia-solar",
        body: [
          "Projects such as Longyangxia show that renewable energy in China is not only an environmental policy area. It is also tied to manufacturing scale, grid management, regional development, and industrial export power.",
          "Green transition therefore belongs inside the broader story of state-led capability building rather than outside it.",
        ],
      },
      {
        title: "Low-carbon transport extends the same systems logic",
        image: "cr400af",
        body: [
          "High-speed rail, batteries, electric mobility, and grid investment all reflect a common habit of development: building interconnected systems rather than isolated products.",
          "That systems strength could support the next phase of growth, but only if it produces sustainable returns rather than simply larger balance sheets.",
        ],
        bullets: [
          "Industrial upgrading still relies on infrastructure scale",
          "Efficiency matters more than expansion alone",
          "Green sectors are now tied to trade rivalry",
        ],
      },
      {
        title: "The hardest problems are slower and less visible",
        image: "pudong",
        body: [
          "Debt, aging, local-fiscal stress, and weaker property momentum do not produce dramatic visuals, but they shape the limits of every new policy push. Modern China's next chapter will depend on how it handles these quieter structural pressures.",
          "That makes the current era historically significant. It is the point at which the machinery built over decades must prove it can adapt rather than merely expand.",
        ],
      },
    ],
    related: ["urbanization-and-infrastructure", "platforms-and-industrial-ecosystems"],
  },
};

export function getModernTopic(slug: string): ModernTopic | undefined {
  return modernTopics[slug as ModernTopicSlug];
}
