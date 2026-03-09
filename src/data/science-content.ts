import type { ImageKey } from "@/data/china-content";

export const scienceTopicOrder = [
  "ancient-inventions",
  "song-engineering",
  "state-science",
  "spaceflight",
  "deployment-systems",
] as const;

export type ScienceTopicSlug = (typeof scienceTopicOrder)[number];

export type ScienceTopic = {
  slug: ScienceTopicSlug;
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
  related: ScienceTopicSlug[];
};

export const scienceHub = {
  deck: [
    "China's scientific story is strongest when read as a sequence of institutional regimes rather than a list of inventions. Early craft cultures linked experimentation to workshops, courts, and ritual needs; Song-period urbanization widened the demand for precise instruments, navigation, and print; twentieth-century state science fused laboratories, military planning, and industrial scale; and the reform era added export ecosystems, universities, and globally networked manufacturing.",
    "That long arc explains why modern Chinese science is so visible in systems deployment. A country that can pair state direction, engineering labor, supply chains, and domestic market scale does not simply produce isolated devices. It builds platforms: space stations, rail networks, navigation constellations, giant telescopes, battery supply chains, and manufacturing corridors that make technology legible in daily life.",
  ],
  metrics: [
    { label: "Long arc", value: "Paper to orbital stations" },
    { label: "Core model", value: "Craft + institutions + scale" },
    { label: "Present strengths", value: "Space, rail, telecoms, big science" },
    { label: "Persistent tension", value: "Original research vs deployment speed" },
  ],
  rhythmBlocks: [
    {
      title: "Ancient technical cultures were practical, repeatable, and state-aware.",
      eyebrow: "Origins",
      image: "papermaking" as ImageKey,
      topicSlug: "ancient-inventions" as ScienceTopicSlug,
      body: [
        "Chinese technical achievement began in craft systems that solved repeat problems at scale: making writing surfaces cheaper, casting metal with predictable quality, controlling water, preserving astronomical calendars, and moving grain across long distances.",
        "Papermaking matters here not only as a famous invention but as a model of how process knowledge, material experimentation, and administrative demand can reinforce each other. Once writing materials became cheaper and more abundant, law, scholarship, taxation, religion, and memory all expanded with them.",
      ],
      bullets: [
        "Court astronomy tied observation to legitimacy",
        "Hydraulic knowledge tied engineering to survival",
        "Artisan practice often outran abstract theory",
      ],
    },
    {
      title: "The Song era made invention urban, commercial, and mechanically ambitious.",
      eyebrow: "Song technical revolution",
      image: "su-song-clock" as ImageKey,
      topicSlug: "song-engineering" as ScienceTopicSlug,
      body: [
        "Song China concentrated merchants, printers, iron producers, shipbuilders, and scholar-officials inside an unusually dense commercial world. That environment rewarded precision tools, navigational reliability, and reproducible text circulation.",
        "Su Song's clock tower is useful because it condenses several traditions at once: astronomy, mechanical transmission, calendrical authority, and public display. It shows that high-level engineering in premodern China was not marginal tinkering but part of governance and elite culture.",
      ],
      bullets: [
        "Printing multiplied technical manuals and examination texts",
        "Compass use and shipbuilding widened navigational capability",
        "Gunpowder moved from formula to battlefield system",
      ],
    },
    {
      title: "Twentieth-century science became mission-driven and organizationally deep.",
      eyebrow: "State science",
      image: "long-march" as ImageKey,
      topicSlug: "state-science" as ScienceTopicSlug,
      body: [
        "Modern Chinese science was rebuilt through universities, academies, planning ministries, military research, and carefully targeted strategic programs. The question was not only whether a discovery could be made, but whether the state could mobilize enough training, industry, and secrecy to sustain it.",
        "This is the environment that produced nuclear milestones, rocketry, satellite programs, and eventually large facilities such as FAST. Even when priorities changed, the institutional habit of running science as a national capability project remained highly durable.",
      ],
      bullets: [
        "Academies and universities built the talent pipeline",
        "Defense priorities shaped aerospace and electronics",
        "Big projects trained managers as well as scientists",
      ],
    },
    {
      title: "Spaceflight turned systems integration into a public symbol of national capability.",
      eyebrow: "Orbital platforms",
      image: "tiangong" as ImageKey,
      topicSlug: "spaceflight" as ScienceTopicSlug,
      body: [
        "Tiangong is not just a spacecraft. It is a visible proof that launch vehicles, life-support engineering, docking, robotics, tracking, materials science, and ground operations can function as one coordinated stack over time.",
        "That is why Chinese space achievements resonate politically. They suggest a state that can absorb long timelines, high risk, and organizational complexity, then present the result as evidence of recovered national stature and future capacity.",
      ],
      bullets: [
        "Human spaceflight reinforces deep aerospace supply chains",
        "Orbital research extends science, prestige, and strategic signaling",
        "Mission cadence matters as much as single headline launches",
      ],
    },
    {
      title: "The contemporary edge lies in deployment: moving from lab, to factory, to national platform quickly.",
      eyebrow: "Deployment systems",
      image: "cr400af" as ImageKey,
      topicSlug: "deployment-systems" as ScienceTopicSlug,
      body: [
        "Modern Chinese technology is often most impressive when it scales. High-speed rail, BeiDou navigation, telecom infrastructure, batteries, and renewable manufacturing all show the same pattern: standardization, fast iteration, dense supplier ecosystems, and a market large enough to reward rollout.",
        "This does not eliminate weaknesses in fundamental research or high-end components, but it gives China unusual leverage in turning technical competence into everyday infrastructure. The outcome is a society where advanced systems are not hidden in labs; they are visible in transport, payments, logistics, power, and mapping.",
      ],
      bullets: [
        "Scale lowers costs and speeds feedback",
        "Infrastructure doubles as state capacity",
        "Export competitiveness is rooted in domestic rollout",
      ],
    },
  ],
  capabilityCards: [
    {
      title: "Observation",
      body: "From court astronomy to FAST, observational science has been tied to state legitimacy, frontier awareness, and prestige.",
    },
    {
      title: "Materials",
      body: "Paper, bronze, ceramics, steel, batteries, and advanced composites all show how materials mastery underwrites broader systems power.",
    },
    {
      title: "Mobility",
      body: "Canals, maritime navigation, rail, launch vehicles, and satellite positioning all turn geography into a technical problem.",
    },
    {
      title: "Networks",
      body: "Printing once spread the canon; now digital payments, logistics, telecoms, and BeiDou spread infrastructure intelligence.",
    },
  ],
};

export const scienceTopics: Record<ScienceTopicSlug, ScienceTopic> = {
  "ancient-inventions": {
    slug: "ancient-inventions",
    shortTitle: "Ancient inventions",
    title: "Ancient Inventions and Technical Cultures",
    subtitle:
      "Early Chinese science and technology emerged from craft traditions, court needs, and material experimentation. The important story is not a lone inventor myth, but a technical culture that kept turning practical problems into durable systems.",
    accent: "#9a6030",
    heroImage: "papermaking",
    preview:
      "Papermaking, seismology, metallurgy, hydraulics, and practical knowledge before the modern laboratory.",
    quickFacts: [
      { label: "Core pattern", value: "Craft knowledge scaled by institutions" },
      { label: "Signature materials", value: "Paper, bronze, iron, ceramics" },
      { label: "Political tie", value: "Calendars, records, granaries, canals" },
      { label: "Key idea", value: "Repeatable process mattered more than celebrity" },
    ],
    intro: [
      "The earliest Chinese technical traditions should be read through their material environments. Rice and millet farming required water control and seasonal knowledge; bronze casting required heat management, molds, and supply organization; administration required durable surfaces for writing; and ritual authority depended on accurate calendars and ordered records.",
      "That is why ancient Chinese science often looks different from the later modern laboratory model. It was dispersed across workshops, courts, ritual centers, and transport systems. The brilliance lies in the way those spaces accumulated process knowledge and transmitted it across generations.",
    ],
    milestones: [
      {
        year: "2nd millennium BCE",
        title: "Bronze foundries scale up",
        detail:
          "Large casting traditions show complex control of labor, fuel, alloying, and ritual design.",
      },
      {
        year: "2nd century CE",
        title: "Papermaking becomes emblematic",
        detail:
          "The association with Cai Lun captures a broader transition toward cheaper and more flexible writing material.",
      },
      {
        year: "2nd century CE",
        title: "Zhang Heng's seismoscope",
        detail:
          "Instrumentation links natural observation to the state's duty to know and respond.",
      },
      {
        year: "Early imperial era",
        title: "Hydraulic knowledge deepens",
        detail:
          "Canals, irrigation, and river management become central technical arts of government.",
      },
    ],
    chapters: [
      {
        title: "Papermaking changed the administrative horizon",
        image: "papermaking",
        body: [
          "Papermaking is often listed as one of China's great inventions, but the deeper point is institutional. Once a writing surface became cheaper and easier to move than bamboo or silk, the volume of documentation that a state or scholarly culture could sustain expanded dramatically.",
          "This mattered for law, taxation, education, Buddhist sutra circulation, and family memory. Technical process therefore had civilizational consequences: a workshop innovation widened the scale of archives and literacy.",
        ],
        bullets: [
          "Lighter writing materials improved transport and storage",
          "Cheap writing surfaces widened the audience for printed and handwritten texts",
          "Bureaucratic states depend on low-friction record systems",
        ],
      },
      {
        title: "Observation and legitimacy",
        image: "seismoscope",
        body: [
          "Ancient Chinese astronomy and instrument making were political sciences. Accurate calendars signaled cosmic order, while unusual celestial or terrestrial events were read as warnings that required interpretation and action.",
          "Zhang Heng's seismoscope is valuable not only as an ingenious device but as evidence that observation itself had state value. The empire wanted instruments that turned distant disturbances into knowable signals.",
        ],
      },
      {
        title: "Technical cultures were social worlds",
        image: "terracotta-army",
        body: [
          "Large technical feats, from bronze casting to complex tomb production, depended on disciplined labor, standardized components, and long chains of supply. Ancient Chinese science did not separate theory cleanly from organization; it embedded technical reasoning inside large social systems.",
          "That habit would matter for centuries. Later Chinese innovation repeatedly excelled when craft skill, state demand, and standardization aligned around a shared project.",
        ],
      },
    ],
    related: ["song-engineering", "state-science"],
  },
  "song-engineering": {
    slug: "song-engineering",
    shortTitle: "Song engineering",
    title: "Song Engineering, Printing, and Mechanical Ambition",
    subtitle:
      "The Song period transformed technical life by linking cities, markets, printing, metallurgical skill, and mechanical experimentation. It was one of the world's richest environments for turning knowledge into tools and tools into systems.",
    accent: "#8a4e3d",
    heroImage: "su-song-clock",
    preview:
      "Why the Song period matters for printing, navigation, mechanical devices, and the spread of technical knowledge.",
    quickFacts: [
      { label: "Context", value: "Urbanization + commercialization + print" },
      { label: "Famous system", value: "Su Song's astronomical clock tower" },
      { label: "Key shift", value: "Knowledge moved faster through texts and markets" },
      { label: "Wider impact", value: "Navigation, calendars, metalwork, gunpowder" },
    ],
    intro: [
      "Song China concentrated people, capital, and specialized labor in ways that made technical refinement highly valuable. Markets rewarded durable tools and better transport; printing rewarded standardization and reproducibility; and states still demanded precise calendars and administrative order.",
      "The result was not an industrial revolution in the modern sense, but it was a striking expansion of mechanical ambition and technical communication. Printed manuals, navigational practice, and urban craft specializations formed an unusually fertile innovation environment.",
    ],
    milestones: [
      {
        year: "10th-11th centuries",
        title: "Commercial and urban growth",
        detail:
          "Dense markets and cities create stronger demand for reliable instruments, texts, and transport systems.",
      },
      {
        year: "11th century",
        title: "Movable type and print culture",
        detail:
          "Printing transforms the speed and scale of textual circulation.",
      },
      {
        year: "1088",
        title: "Su Song's clock tower",
        detail:
          "Astronomy, gear trains, and state timekeeping converge in a landmark technical system.",
      },
      {
        year: "Song era",
        title: "Compass and maritime use deepen",
        detail:
          "Navigation becomes more reliable as trade networks widen.",
      },
    ],
    chapters: [
      {
        title: "Printing widened the technical public",
        image: "papermaking",
        body: [
          "Printing did more than preserve canonical texts. It also helped circulate medical recipes, agricultural guidance, calendars, reference works, and administrative knowledge. That circulation lowered the cost of copying solutions across regions.",
          "Once a society can reproduce text cheaply, it can also stabilize technique more effectively. Standard instructions travel farther, and comparison between versions becomes easier.",
        ],
      },
      {
        title: "The clock tower as political machine",
        image: "su-song-clock",
        body: [
          "Su Song's clock tower stands out because it combines spectacle with system design. It used mechanical transmission to express astronomical order publicly, which means the device served both technical and political purposes.",
          "This matters historically because it shows that complex engineering in China was not confined to workshops. It could sit at the center of state representation and elite intellectual life.",
        ],
        bullets: [
          "Timekeeping was linked to cosmic order",
          "Mechanical design supported public authority",
          "Elite scholarship could be technically ambitious",
        ],
      },
      {
        title: "Why the Song moment still matters",
        image: "cr400af",
        body: [
          "The Song example helps explain a recurring Chinese pattern: innovation flourishes when dense markets, transport systems, technical labor, and political institutions reinforce one another. Modern China often recreates that pattern at a far larger scale.",
          "That does not make the Song era a direct ancestor of today's laboratories. It does show that Chinese history contains earlier moments where text, commerce, and engineering formed a mutually accelerating system.",
        ],
      },
    ],
    related: ["ancient-inventions", "deployment-systems"],
  },
  "state-science": {
    slug: "state-science",
    shortTitle: "State science",
    title: "Mission-Driven State Science and Big Projects",
    subtitle:
      "Twentieth-century Chinese science became organizationally deep through academies, universities, ministries, and national projects. The state treated science as a sovereignty asset as much as an intellectual pursuit.",
    accent: "#2e5b5d",
    heroImage: "long-march",
    preview:
      "From national laboratories to giant science facilities, this page explains the institutional logic behind modern Chinese science.",
    quickFacts: [
      { label: "Main engine", value: "Academies, ministries, strategic programs" },
      { label: "Signature output", value: "Nuclear, aerospace, electronics, big science" },
      { label: "Management style", value: "Mission-driven, long-horizon, state-backed" },
      { label: "Modern symbol", value: "FAST and satellite networks" },
    ],
    intro: [
      "Modern Chinese science was built by organizations that trained people, allocated equipment, and concentrated resources behind national priorities. That meant science advanced through institutional architecture as much as through individual brilliance.",
      "This pattern has costs, including rigidity and political pressure, but it also creates an ability to sustain long projects that require coordination across universities, factories, logistics systems, and government agencies.",
    ],
    milestones: [
      {
        year: "1950s",
        title: "Research system consolidation",
        detail:
          "Academies, institutes, and planning structures create a national framework for scientific work.",
      },
      {
        year: "1960s",
        title: "Strategic defense science",
        detail:
          "Nuclear and missile programs deepen the link between science and sovereignty.",
      },
      {
        year: "1970s-1990s",
        title: "Rebuilding and reform",
        detail:
          "Universities, foreign study, and new labs widen the talent and research base.",
      },
      {
        year: "2010s",
        title: "Big science facilities mature",
        detail:
          "Projects such as FAST show that China can host globally significant scientific infrastructure.",
      },
    ],
    chapters: [
      {
        title: "Institutions are the story",
        image: "long-march",
        body: [
          "When governments speak about scientific modernization, they often emphasize results. But results emerge from institutions that recruit students, pay researchers, coordinate suppliers, and protect long-term investment from short-term shocks.",
          "China's modern system became effective where it could align state demand, technical training, and industrial execution. Aerospace is a strong example because it requires all three continuously.",
        ],
      },
      {
        title: "Big science as training ground",
        image: "fast",
        body: [
          "Facilities like FAST do more than collect data. They train engineers, project managers, instrument specialists, software teams, and regional infrastructure planners. Big science therefore has spillover value beyond the specific experiment it houses.",
          "This is one reason such projects matter in Chinese policy language: they represent prestige, but they also create networks of capability that can feed other sectors.",
        ],
        bullets: [
          "Large facilities develop procurement and maintenance expertise",
          "Scientific prestige supports recruitment and international visibility",
          "Regional buildout turns remote sites into technical corridors",
        ],
      },
      {
        title: "The tension inside mission-driven research",
        image: "beidou",
        body: [
          "Mission-driven systems excel at coordination, but they can struggle when breakthrough work depends on institutional openness, intellectual risk, and tolerance for failure that cannot be planned cleanly. This is a structural tension rather than a temporary policy glitch.",
          "China's future scientific strength depends on whether it can preserve the advantages of mission discipline while also widening the space for exploratory research and cross-border exchange.",
        ],
      },
    ],
    related: ["spaceflight", "deployment-systems"],
  },
  spaceflight: {
    slug: "spaceflight",
    shortTitle: "Spaceflight",
    title: "Tiangong, Launch Systems, and Orbital Capability",
    subtitle:
      "Chinese spaceflight is a systems story: launch vehicles, guidance, docking, orbital life support, robotics, materials, and ground control have to work together repeatedly. Tiangong makes that integration visible.",
    accent: "#345774",
    heroImage: "tiangong",
    preview:
      "Human spaceflight, launch cadence, orbital laboratories, and why Tiangong matters beyond prestige.",
    quickFacts: [
      { label: "Public symbol", value: "Tiangong space station" },
      { label: "Key stack", value: "Launch, docking, habitation, robotics, tracking" },
      { label: "Strategic meaning", value: "Autonomous orbital capability" },
      { label: "Why it matters", value: "Prestige + science + industrial discipline" },
    ],
    intro: [
      "Spaceflight condenses a nation's engineering competence into a form the public can see. Success requires high reliability across propulsion, sensors, software, materials, thermal control, and mission operations, all while coordinating large supplier networks.",
      "Tiangong matters because it demonstrates continuity rather than a one-off spectacle. A modular orbital platform implies sustained launch cadence, docking confidence, crew support, and station management over time.",
    ],
    milestones: [
      {
        year: "1970",
        title: "Dong Fang Hong-1",
        detail:
          "China launches its first satellite and establishes an early orbital milestone.",
      },
      {
        year: "2003",
        title: "Shenzhou 5",
        detail:
          "The first independent crewed mission places China in a very small club of spacefaring states.",
      },
      {
        year: "2011-2016",
        title: "Tiangong prototypes",
        detail:
          "Earlier stations and docking missions test procedures and reliability.",
      },
      {
        year: "2021-present",
        title: "Operational Tiangong era",
        detail:
          "The modular station becomes a long-duration orbital platform.",
      },
    ],
    chapters: [
      {
        title: "Why orbit is a systems test",
        image: "tiangong",
        body: [
          "An orbital station is not the sum of its modules. It is a living systems test that proves whether launch, rendezvous, power, habitation, communications, and repair can be maintained under operational conditions.",
          "That is why space stations are unusually revealing. They show how a country manages complexity over time, not just whether it can engineer one successful event.",
        ],
      },
      {
        title: "Launch vehicles and cadence",
        image: "long-march",
        body: [
          "Launch systems matter because they create schedule discipline. Scientific payloads, cargo flights, crew rotations, and future exploration all depend on rockets that can move from prototype to dependable service.",
          "The Long March family therefore sits behind the more visible achievements. Without launch reliability, no orbital architecture can become routine.",
        ],
        bullets: [
          "Cadence creates confidence for downstream missions",
          "Launch ecosystems support materials, software, and propulsion industries",
          "Operational reliability is often more important than one dramatic lift-off",
        ],
      },
      {
        title: "Spaceflight and national narrative",
        image: "beidou",
        body: [
          "Chinese space achievements are narrated as proof that the country has moved from dependence to autonomy. In this sense, spaceflight serves both a scientific and a historical function inside the broader story of national rejuvenation.",
          "That framing helps explain why orbital programs receive sustained political attention. They symbolize technological sovereignty in a way that is easy to communicate across domestic and international audiences.",
        ],
      },
    ],
    related: ["state-science", "deployment-systems"],
  },
  "deployment-systems": {
    slug: "deployment-systems",
    shortTitle: "Deployment systems",
    title: "High-Speed Rail, BeiDou, and Technology at Deployment Scale",
    subtitle:
      "China's contemporary advantage often appears after the laboratory stage, when a technical system has to be standardized, manufactured, financed, and spread across a continental market. This is where rail, telecoms, and navigation platforms become especially revealing.",
    accent: "#3b6b58",
    heroImage: "cr400af",
    preview:
      "How high-speed rail, satellite navigation, and infrastructural rollout turn technical competence into everyday systems power.",
    quickFacts: [
      { label: "Signature example", value: "CR400AF and the HSR network" },
      { label: "Navigation layer", value: "BeiDou" },
      { label: "Operational logic", value: "Standardize, finance, deploy, iterate" },
      { label: "Historical meaning", value: "Infrastructure as visible state capacity" },
    ],
    intro: [
      "A great deal of modern Chinese technological strength shows up where design meets rollout. Building one successful prototype matters less than building fleets, stations, maintenance routines, digital layers, and supplier systems that keep the whole network moving.",
      "High-speed rail and BeiDou are ideal examples because they combine engineering with territory. They do not just exist in labs; they reorganize travel, logistics, mapping, timing, and regional integration.",
    ],
    milestones: [
      {
        year: "2000s",
        title: "High-speed rail acceleration",
        detail:
          "National investment turns rail from major project into integrated platform.",
      },
      {
        year: "2010s",
        title: "Network effects deepen",
        detail:
          "Rail, logistics, and urban systems begin reinforcing one another at national scale.",
      },
      {
        year: "2020",
        title: "BeiDou global services complete",
        detail:
          "Navigation becomes a domestic and international infrastructure layer.",
      },
      {
        year: "2020s",
        title: "Deployment as strategy",
        detail:
          "Energy, transport, and digital industries are increasingly judged by rollout speed and supply-chain depth.",
      },
    ],
    chapters: [
      {
        title: "Rail as engineering plus coordination",
        image: "cr400af",
        body: [
          "High-speed rail is not only about train design. It requires tracks, signaling, tunnels, stations, rolling stock maintenance, scheduling software, financing, and land coordination. The visible train rests on an enormous organizational base.",
          "That base is precisely what makes the system historically interesting. It shows China's capacity to bind technical design to territory-wide execution.",
        ],
      },
      {
        title: "BeiDou extends the system into space",
        image: "beidou",
        body: [
          "Navigation networks are quiet infrastructure. Once they are in place, they support mapping, logistics, agriculture, timing, telecom integration, disaster response, and military planning without constantly drawing attention to themselves.",
          "BeiDou therefore represents the shift from isolated hardware to layered technical sovereignty. It gives China a positioning stack it controls directly and can embed across many domestic sectors.",
        ],
        bullets: [
          "Navigation supports civilian and strategic uses simultaneously",
          "Domestic control reduces dependence on external systems",
          "Platform technologies become more valuable as they spread",
        ],
      },
      {
        title: "Why deployment matters historically",
        image: "pudong",
        body: [
          "China's scientific present is often most legible in cities and transport nodes rather than in the laboratory alone. Platforms such as rail, digital payment, logistics, and urban data systems change what ordinary life feels like, which in turn changes how technological progress is perceived politically.",
          "That visibility feeds back into legitimacy. Science is not abstract when people experience it as faster journeys, more reliable logistics, dense digital services, and coordinated urban growth.",
        ],
      },
    ],
    related: ["state-science", "spaceflight"],
  },
};

export function getScienceTopic(slug: string): ScienceTopic | undefined {
  return scienceTopics[slug as ScienceTopicSlug];
}
