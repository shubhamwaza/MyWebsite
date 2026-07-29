// ===== Content data layer =====
// Edit this file to add or update projects, clients, and blog posts —
// every page reads from these arrays automatically.
//
// Two project types:
//  - type: "case-study"     -> full write-up (Overview, Problem, Goals, etc.) — see UpCrew
//  - type: "multi-carousel" -> one project page containing a separate
//                              horizontal scrollable gallery per client.
//                              Each entry in `clients` has its own images
//                              and its own carouselRatio (CSS aspect-ratio).

const PROJECTS = [
  {
    slug: "upcrew",
    title: "UpCrew",
    type: "case-study",
    client: "UpCrew (self-initiated)",
    industry: "Gig Economy / Workforce Marketplace",
    categories: ["UI/UX"],
    year: "2026",
    description: "A mobile-first marketplace connecting businesses with verified temporary workers for flexible, shift-based jobs across India.",
    coverImage: "images/projects/upcrew-cover.svg",
    heroImage: "images/projects/upcrew-hero.svg",
    deliverables: ["UX research", "Personas & journey mapping", "Information architecture", "Wireframes", "High-fidelity UI", "Design system", "Interactive prototype"],
    gallery: ["images/projects/upcrew-1.svg", "images/projects/upcrew-2.svg"],
    caseStudy: [
      { heading: "Overview", body: "UpCrew is a mobile-first marketplace platform that connects businesses with verified temporary workers for flexible, shift-based jobs across India. It helps employers hire reliable staff quickly, while helping students, freelancers, and gig workers discover trusted, flexible work opportunities. This was a self-initiated, end-to-end UX/UI project built to solve a real-world hiring problem identified through research." },
      { heading: "Problem", body: "Temporary hiring in India is fragmented and largely dependent on WhatsApp groups, referrals, and informal networks. Businesses struggle to find dependable workers on short notice, while students, freelancers, and gig workers struggle to discover verified, flexible opportunities they can trust. Existing solutions often lack transparency, verification, and a streamlined hiring experience." },
      { heading: "Goals", body: "Design a trusted, mobile-first platform that enables businesses to hire temporary staff quickly while empowering workers to find verified shift-based jobs with clear pay, responsibilities, and scheduling. The experience needed to prioritize trust, speed, transparency, and flexibility — the four themes consistently identified during research." },
      { heading: "Research", body: "Combined secondary research with user interviews and surveys across both sides of the marketplace — employers and workers — then synthesized findings through affinity mapping and empathy maps to surface shared pain points around trust and verification." },
      { heading: "Process", body: "Findings were distilled into a clear problem statement and a set of How-Might-We questions, which shaped the information architecture and user flows before any screens were designed. Low-fidelity wireframes were used to test structure and flow ahead of visual design." },
      { heading: "Design Decisions", body: "Built a dedicated design system — colour, typography, and component rules — so the high-fidelity UI could scale consistently across both the employer and worker experiences, with visual identity choices aimed at reinforcing trust and clarity at every step." },
      { heading: "Final Solution", body: "A high-fidelity mobile UI and interactive prototype covering the full hiring loop — from posting a shift to worker verification, scheduling, and pay transparency — backed by a complete brand identity and design system." },
      { heading: "Learnings", body: "Designing for two very different user groups on one platform reinforced how much shared vocabulary (trust, speed, transparency) can still lead to very different interface needs on each side of a marketplace." }
    ]
  },
  {
    slug: "social-media-creatives",
    title: "Social Media Creatives",
    type: "multi-carousel",
    categories: ["Social Media"],
    year: "2026",
    coverImage: "images/projects/phy-carousel-1.svg",
    clients: [
      {
        name: "PHY",
        badges: ["Social Media Design"],
        description: "Placeholder — add a short line about the PHY social content: platform focus, content style, or campaign goal.",
        carouselRatio: "1080 / 1350",
        images: [
          "images/projects/phy-carousel-1.jpg",
          "images/projects/phy-carousel-2.webp",
          "images/projects/phy-carousel-3.jpg",
          "images/projects/phy-carousel-4.webp",
          "images/projects/phy-carousel-5.jpg"
        ]
      },
      {
        name: "Philips",
        badges: ["Social Media Design"],
        description: "Placeholder — add a short line about the Philips social content: platform focus, content style, or campaign goal.",
        carouselRatio: "1080 / 1350",
        images: [
          "images/projects/philips-carousel-1.jpg",
          "images/projects/philips-carousel-2.webp",
          "images/projects/philips-carousel-3.jpg",
          "images/projects/philips-carousel-4.webp",
          "images/projects/philips-carousel-5.jpg"
        ]
      },
      {
        name: "AOC",
        badges: ["Social Media Design"],
        description: "Placeholder — add a short line about the AOC social content: platform focus, content style, or campaign goal.",
        carouselRatio: "1080 / 1350",
        images: [
         "images/projects/aoc-carousel-1.jpg",
         "images/projects/aoc-carousel-2.jpg",
         "images/projects/aoc-carousel-3.jpg",
         "images/projects/aoc-carousel-4.webp",
         "images/projects/aoc-carousel-5.webp"
        ]
      },
      {
        name: "ITPL",
        badges: ["Social Media Design"],
        description: "Placeholder — add a short line about the ITPL social content: platform focus, content style, or campaign goal.",
        carouselRatio: "1080 / 1080",
        images: [
          "images/projects/itpl-carousel-1.jpeg",
          "images/projects/itpl-carousel-2.jpeg",
          "images/projects/itpl-carousel-3.jpeg",
          "images/projects/itpl-carousel-4.jpeg",
          "images/projects/itpl-carousel-5.jpeg"
        ]
      },
      {
        name: "OnlyGaming",
        badges: ["Social Media Design"],
        description: "Placeholder — add a short line about the OnlyGaming social content: platform focus, content style, or campaign goal.",
        carouselRatio: "1080 / 1350",
        images: [
          "images/projects/OnlyGaming-1.png",
          "images/projects/OnlyGaming-2.png",
          "images/projects/OnlyGaming-3.png",
          "images/projects/OnlyGaming-4.png"
        ]
      },
      {
        name: "MakeO",
        badges: ["Social Media Design", "Push Notifications"],
        description: "Placeholder — add a short line about the MakeO work: social content plus push notification design, platform focus, or goal.",
        carouselRatio: "1080 / 540",
        images: [
          "images/projects/makeo-carousel-1.png",
          "images/projects/makeo-carousel-2.png",
          "images/projects/makeo-carousel-3.png",
          "images/projects/makeo-carousel-4.png",
          "images/projects/makeo-carousel-5.png",
        ]
      }
    ]
  }
];

const ALL_CATEGORIES = ["Branding", "Social Media", "UI/UX", "Web Design", "Motion Graphics", "Marketing Campaigns"];

// "Worked With" — text-style experience list. Edit name / role / period / location
// freely; logo is optional (falls back to initials if the path is missing).
const WORKED_WITH = [
  { name: "UpCrew", role: "UI/UX Design", period: "2026", location: "Self-initiated", logo: "images/clients/UpCrew.png", link: "" },
  { name: "Philips", role: "Design Support", period: "Placeholder — add dates", location: "Placeholder — add location", logo: "images/clients/Philips.png", link: "" },
  { name: "Blue Star", role: "Design Support", period: "Placeholder — add dates", location: "Placeholder — add location", logo: "images/clients/Blue Star.png", link: "" },
  { name: "AOC", role: "Design Support", period: "Placeholder — add dates", location: "Placeholder — add location", logo: "images/clients/AOC.png", link: "" },
  { name: "ITPL", role: "Design Support", period: "Placeholder — add dates", location: "Placeholder — add location", logo: "images/clients/ITPL.png", link: "" },
  { name: "MakeO", role: "Social Media Design", period: "Placeholder — add dates", location: "Placeholder — add location", logo: "images/clients/MakeO.png", link: "" }
];

const CLIENTS = [
  { name: "Philips", logo: "images/clients/Philips.png" },
  { name: "Blue Star", logo: "images/clients/Blue Star.png" },
  { name: "AOC", logo: "images/clients/AOC.png" },
  { name: "ITPL", logo: "images/clients/ITPL.png" },
  { name: "MakeO", logo: "images/clients/MakeO.png" },
  { name: "UpCrew", logo: "images/clients/UpCrew.png" }
];

const POSTS = [
  {
    slug: "designing-for-trust-in-refurbished-electronics",
    title: "Designing for Trust in Refurbished Electronics",
    category: "Branding",
    date: "2026-05-12",
    readingTime: "6 min read",
    coverImage: "images/blog/trust-electronics.svg",
    excerpt: "Notes on closing the confidence gap for shoppers through consistent, honest visual design.",
    body: "Full post content goes here — replace this placeholder with your actual writing, or wire this data file up to a headless CMS."
  },
  {
    slug: "what-a-good-design-sprint-actually-looks-like",
    title: "What a Good Design Sprint Actually Looks Like",
    category: "UX Process",
    date: "2026-03-02",
    readingTime: "8 min read",
    coverImage: "images/blog/design-sprint.svg",
    excerpt: "Breaking down affinity mapping, personas, and Crazy 8's into a repeatable workflow.",
    body: "Full post content goes here — replace this placeholder with your actual writing, or wire this data file up to a headless CMS."
  },
  {
    slug: "building-a-brand-system-that-survives-contact-with-reality",
    title: "Building a Brand System That Survives Contact With Reality",
    category: "Branding",
    date: "2025-11-18",
    readingTime: "5 min read",
    coverImage: "images/blog/brand-system.svg",
    excerpt: "Why flexible rules beat rigid guidelines once a brand actually starts shipping content.",
    body: "Full post content goes here — replace this placeholder with your actual writing, or wire this data file up to a headless CMS."
  }
];
