export const SITE = {
  name: "Ecomzadi",
  legalName: "Ecomzadi",
  tagline: "Digital Marketing Agency",
  city: "Marrakech",
  addressLine: "Marrakech, Morocco 40000",
  phoneDisplay: "+212 660 017 774",
  phoneHref: "tel:+212660017774",
  email: "ecomzadi@gmail.com",
  hoursLabel: "Monday – Friday",
  hoursValue: "09:00 – 18:00",
  instagramHandle: "@ecomzadi",
  instagramUrl: "https://www.instagram.com/ecomzadi/",
} as const;

export const HERO_VIDEO_SRC: string | undefined = "/Create_seamless_abstract_animate…_202609031119.mp4";

export const HERO_VIDEO_MOBILE_SRC: string | undefined = "/hero-video-mobile.mp4";

export const HERO_VIDEO_DARK_SRC: string | undefined = "/hero-video-dark.mp4";

export const HERO_VIDEO_DARK_MOBILE_SRC: string | undefined = "/hero-video-dark-mobile.mp4";

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/contact" },
] as const;

export const PILLARS = [
  {
    index: "01",
    title: "Grounded Strategy",
    description: "Decisions shaped by data, not guesswork.",
  },
  {
    index: "02",
    title: "Performing Creative",
    description: "Content and campaigns built to convert, not just look good.",
  },
  {
    index: "03",
    title: "Compounding Growth",
    description: "Systems that keep improving with every cycle.",
  },
] as const;

export const SERVICES = [
  {
    index: "01",
    title: "Performance & paid media",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
    description:
      "Search and social campaigns planned, tested, and optimized around a single goal: turning budget into measurable growth.",
    images: [
      "/service-01-a.jpg",
      "/service-01-b.jpg",
      "/service-01-c.jpg",
      "/service-01-d.jpg",
      "/service-01-e.jpg",
      "/service-01-f.jpg",
    ],
  },
  {
    index: "02",
    title: "SEO & organic growth",
    tags: ["Technical SEO", "Content SEO", "AI Search"],
    description:
      "Technical, on-page, and content foundations built so your brand keeps earning visibility long after the campaign ends.",
    images: [
      "/service-02-a.jpg",
      "/service-02-b.jpg",
      "/service-02-c.jpg",
      "/service-02-d.jpg",
      "/service-02-e.jpg",
      "/service-02-f.jpg",
    ],
  },
  {
    index: "03",
    title: "Social media marketing",
    tags: ["Strategy", "Content", "Community"],
    description:
      "Channel strategy, content systems, and community management that keep a brand present and consistent everywhere it matters.",
    images: [
      "/service-03-a.jpg",
      "/service-03-b.jpg",
      "/service-03-c.jpg",
      "/service-03-d.jpg",
      "/service-03-e.jpg",
      "/service-03-f.jpg",
    ],
  },
  {
    index: "04",
    title: "Content & branding",
    tags: ["Identity", "Content", "Design"],
    description:
      "Visual identity and content direction that give a brand a distinct voice across every touchpoint it shows up in.",
    images: [
      "/service-04-a.jpg",
      "/service-04-b.jpg",
      "/service-04-c.jpg",
      "/service-04-d.jpg",
      "/service-04-e.jpg",
      "/service-04-f.jpg",
    ],
  },
  {
    index: "05",
    title: "Web & e-commerce development",
    tags: ["Web Design", "E-commerce", "Performance"],
    description:
      "Fast, conversion-minded websites and online stores designed to turn traffic into customers, not just visitors.",
    images: [
      "/service-05-a.jpg",
      "/service-05-b.jpg",
      "/service-05-c.jpg",
      "/service-05-d.jpg",
      "/service-05-e.jpg",
      "/service-05-f.jpg",
    ],
  },
  {
    index: "06",
    title: "Strategy & consulting",
    tags: ["Roadmapping", "Analytics", "Consulting"],
    description:
      "Marketing roadmaps grounded in the numbers, built to align every channel around the same business objective.",
    images: [
      "/service-06-a.jpg",
      "/service-06-b.jpg",
      "/service-06-c.jpg",
      "/service-06-d.jpg",
      "/service-06-e.jpg",
      "/service-06-f.jpg",
    ],
  },
] as const;

export const WORK_ITEMS = [
  {
    slug: "khadmatona-immo",
    name: "Khadmatona Immo",
    sector: "Real Estate",
    tone: "gold",
    image: "/work-khadmatona-immo.jpg",
    services: ["Branding", "Website", "Digital Marketing", "Sales Strategy"],
    summary:
      "A complete brand identity, a performance-driven website, and a marketing strategy built to generate real sales.",
    mission:
      "We helped Khadmatona Immo build its brand identity, grow its digital presence, and put in place a results-driven sales strategy. From a distinctive logo and visual language to a fast, conversion-focused website, every piece was designed around the agency's own promise — more than a property, a future. Ongoing digital marketing and a structured sales journey now work together to turn visibility into real leads.",
    achievements: [
      { title: "Branding", description: "A premium, consistent brand identity." },
      { title: "Website", description: "A modern, high-performing, conversion-focused website." },
      { title: "Digital Marketing", description: "Acquisition, content, and visibility." },
      { title: "Sales Strategy", description: "A sales journey built to generate leads." },
    ],
  },
  {
    slug: "biofert",
    name: "Biofert",
    sector: "Fertility / Wellness",
    tone: "pink",
    image: "/work-biofert.jpg",
    services: ["Branding", "Website", "Consultation Funnel", "Lead Generation"],
    summary:
      "A reassuring identity, a digital ecosystem, and an acquisition journey built for the fertility sector.",
    mission:
      "We developed a reassuring identity, a digital ecosystem, and an acquisition journey tailored to the fertility sector for Biofert. The branding and website were built to put patients at ease from the very first visit, echoing the clinic's own philosophy — more than a project, a journey of hope. A guided consultation funnel and a focused lead-generation approach help turn that trust into booked appointments.",
    achievements: [
      { title: "Branding", description: "A reassuring, professional identity." },
      { title: "Website", description: "A clear, trust-focused digital presence." },
      { title: "Consultation Funnel", description: "A guided path to consultation." },
      { title: "Lead Generation", description: "Acquiring and qualifying prospects." },
    ],
  },
  {
    slug: "caftan-zayn",
    name: "Caftan Zayn",
    sector: "Fashion / Caftan Rental",
    tone: "gold",
    image: "/work-caftan-zayn.jpg",
    services: ["Branding", "Visual Identity", "Digital Presence", "Sales Strategy"],
    summary:
      "An elegant, premium identity built to elevate caftan rental and grow a coherent digital presence.",
    mission:
      "We created an elegant, premium identity for Caftan Zayn, designed to elevate caftan rental and build a coherent digital presence. The visual identity and art direction bring the boutique's own positioning to life — more than a caftan, a story to live — across every touchpoint, from the showroom to social media. A clear sales strategy now ties that presentation directly to bookings and conversion.",
    achievements: [
      { title: "Branding", description: "A recognizable, high-end brand world." },
      { title: "Visual Identity", description: "An art direction tailored to caftans." },
      { title: "Digital Presence", description: "Social media and brand presentation." },
      { title: "Sales Strategy", description: "Showcasing offers and driving conversion." },
    ],
  },
  {
    slug: "zadibio",
    name: "Zadibio",
    sector: "Natural Products / E-commerce",
    tone: "green",
    image: "/work-zadibio.jpg",
    services: ["Branding", "E-commerce", "Digital Marketing", "Product Strategy"],
    summary:
      "A full brand journey: identity, online store, digital strategy, and Moroccan natural products brought to life.",
    mission:
      "A complete brand accompaniment for Zadibio: branding, an e-commerce store, digital strategy, and a showcase for high-quality Moroccan natural products. The identity is rooted in the cooperative's own promise — from our land to your well-being — carried through into a store built for a smooth purchase journey. Digital marketing and a clear product strategy now support positioning, launch, and growth for the range.",
    achievements: [
      { title: "Branding", description: "An identity rooted in Moroccan naturalness." },
      { title: "E-commerce", description: "An online store and purchase journey." },
      { title: "Digital Marketing", description: "Advertising, content, influence, and SEO." },
      { title: "Product Strategy", description: "Positioning, launch, and growth." },
    ],
  },
] as const;
