/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG  —  EDIT EVERYTHING HERE
 * ───────────────────────────────────────────────────────────────────────────
 *  This is the single source of truth for the whole website. Change the firm
 *  name, contact details, services, testimonials, etc. right here and the
 *  entire site updates. No need to touch any component code.
 *
 *  TODO items are marked with  // ⚠️  — swap these for the real details.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Brand ────────────────────────────────────────────────────────────────
  firmName: "Scalevault Financial",
  firmNameShort: "Scalevault Financial",
  // Canonical production URL — update when a custom domain is connected.
  url: "https://scalevaultfinancial.com",
  cpaName: "Nick Stafford, Accountant & Software Engineer",
  tagline: "Modern finance & accounting for ambitious businesses.",
  // One-liner used in the browser tab + search results
  metaDescription:
    "A modern, remote-first finance and accounting firm for growing businesses nationwide. We pair trusted tax, bookkeeping, and FP&A expertise with automation and smart workflows that keep your finances current and scale with you. Book a free consultation today.",

  // ── Location & contact ──────────────────────────────────────────────────
  city: "San Francisco",
  state: "California",
  serviceArea: "Serving the Bay Area & remote clients nationwide",
  licensure: "Serving the Bay Area & Remote",
  phone: "(303) 881-6022",
  phoneHref: "tel:+13038816022",
  email: "hello@scalevaultfinancial.com",
  address: "San Francisco, California", // ⚠️ full street address optional

  // ── Booking (Calendly) ──────────────────────────────────────────────────
  // Paste the real Calendly link here. Used by every "Book a consultation" CTA.
  // Find it at calendly.com → your event → "Share" → copy the link.
  calendlyUrl: "https://calendly.com/nicholas-alexander-stafford/30min",

  // ── Trust / credibility stats (shown in the trust bar) ──────────────────
  stats: [
    { value: "8", label: "Years of experience" }, // ⚠️
    { value: "15+", label: "Saved hrs every month" }, // ⚠️
    { value: "100%", label: "On-time filings" }, // ⚠️
    { value: "24h", label: "Avg. response time" }, // ⚠️
  ],

  credentials: [
    "Accountant & Software Engineer",
    "Accounting, Tax & Financial Automation",
    "Secure, paperless workflow",
  ],

  // ── Core services ────────────────────────────────────────────────────────
  services: [
    {
      id: "tax",
      title: "Tax Preparation & Planning",
      blurb:
        "Year-round strategy, not just April paperwork. We file accurate individual and business returns and plan ahead so you keep more of what you earn.",
      points: [
        "Individual & business returns",
        "Proactive tax-saving strategy",
        "Quarterly estimates & projections",
        "IRS & state correspondence handled",
      ],
    },
    {
      id: "bookkeeping",
      title: "Bookkeeping",
      blurb:
        "Clean, current books you can actually trust. Monthly reconciliations and clear financial statements that turn your numbers into decisions.",
      points: [
        "Monthly reconciliations",
        "Financial statements that make sense",
        "Real-time financial visibility",
        "Payroll & sales-tax support",
      ],
    },
    {
      id: "advisory",
      title: "FP&A & Fractional CFO",
      blurb:
        "A financial partner in your corner. Financial planning & analysis, forecasting, and strategic guidance to help your business grow with confidence.",
      points: [
        "Financial planning & analysis (FP&A)",
        "Forecasting & scenario modeling",
        "Budgeting, KPIs & cash-flow",
        "Fractional CFO guidance",
      ],
    },
    {
      id: "automation",
      title: "Financial Systems & Automation",
      blurb:
        "Your finance stack, connected and automated. We integrate your accounting, banking, payments, and payroll tools so data flows on its own and the routine work runs in the background.",
      points: [
        "QuickBooks, Xero & app integrations",
        "Bank & payment sync",
        "Automated invoicing, AP & AR",
        "Custom workflows & data pipelines",
      ],
    },
    {
      id: "dashboards",
      title: "Custom Dashboards & Reporting",
      blurb:
        "See your numbers in real time. We build automated dashboards and reports so you always know where the business stands, without waiting on the month-end close.",
      points: [
        "Real-time financial dashboards",
        "Automated monthly reporting",
        "KPI & cash-flow tracking",
        "Investor & board-ready reports",
      ],
    },
    {
      id: "ai",
      title: "AI Document & Data Automation",
      blurb:
        "Put AI to work on the busywork. We automate receipt, invoice, and document processing so financial data is captured, categorized, and reconciled with far less manual effort.",
      points: [
        "AI receipt & invoice capture",
        "Automated transaction categorization",
        "Reconciliation automation",
        "Document data extraction",
      ],
    },
  ],

  // ── The "modern workflow" differentiator (benefit-framed, no tech names) ──
  workflow: {
    heading: "A firm that works the way you do",
    subheading:
      "We pair seasoned finance and accounting expertise with automation and a modern, paperless experience, so working with your finance team feels effortless, not exhausting.",
    benefits: [
      {
        title: "Secure and paperless",
        body: "Share documents and sign forms securely online with bank-level encryption. No more email chains or lost paperwork.",
      },
      {
        title: "Real-time financial clarity",
        body: "See where your business stands whenever you want, with up-to-date numbers instead of statements that are three months old.",
      },
      {
        title: "Faster turnaround",
        body: "Streamlined, automated workflows mean less back-and-forth and quicker answers when you need them most.",
      },
      {
        title: "Proactive, not reactive",
        body: "We flag opportunities and issues before deadlines hit, so there are no year-end surprises.",
      },
    ],
  },

  // ── How it works ─────────────────────────────────────────────────────────
  process: [
    {
      step: "01",
      title: "Book a free consultation",
      body: "Tell us about your business and goals in a quick, no-pressure call.",
    },
    {
      step: "02",
      title: "Get a clear plan",
      body: "We map out exactly how we'll help and what it costs, with flat, transparent pricing.",
    },
    {
      step: "03",
      title: "We get to work",
      body: "Onboarding is fully digital. We handle the numbers so you can run your business.",
    },
    {
      step: "04",
      title: "Stay ahead, year-round",
      body: "Ongoing support and proactive advice keep you confident every quarter, not just at tax time.",
    },
  ],

  // ── About ────────────────────────────────────────────────────────────────
  about: {
    heading: "Meet your advisor",
    // ⚠️ Replace with the real bio
    body: [
      "I'm an accountant and software engineer. With years of experience across accounting and building software for AI companies, I started Scalevault Financial to give growing businesses the same caliber of finance and automation the big players have, delivered in a way that actually fits how they work.",
      "That means deep tax and accounting expertise paired with modern tools and automation that make the whole experience faster, clearer, and a lot less stressful. No jargon, no surprise bills, just a partner genuinely invested in your success.",
    ],
    credentials: [
      "Accountant & Software Engineer",
      "Tax, Bookkeeping & Advisory",
      "Experience building for AI companies",
      "San Francisco, California",
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Finally, an accountant who feels like part of the team. Our books have never been cleaner and tax season is genuinely stress-free now.",
      name: "Kristen", // ⚠️ replace with a real client name
      role: "Founder, Local Startup",
    },
    {
      quote:
        "Nick automated the processes that used to eat my whole week, invoicing, reconciliations, the monthly close. Now it runs in the background, our numbers are always current, and I get to focus on actually running the business.",
      name: "Ryan", // ⚠️ replace with a real client name
      role: "Owner, Construction Co.",
    },
    {
      quote:
        "Responsive, modern, and genuinely cares about our growth. Easily the best financial decision we made this year.",
      name: "Lauren", // ⚠️ replace with a real client name
      role: "Co-founder, E-commerce Brand",
    },
  ],

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: [
    {
      q: "Do you work with clients outside of San Francisco?",
      a: "Yes. While we're proud to be based in San Francisco, our fully digital workflow means we serve clients across California and nationwide with the same level of service.",
    },
    {
      q: "How does pricing work?",
      a: "We use clear, flat-rate pricing tailored to your needs, with no hourly surprises. After your free consultation, you'll get a straightforward proposal so you know exactly what to expect.",
    },
    {
      q: "I'm switching from another accountant. Is that a hassle?",
      a: "Not at all. We handle the transition for you, including gathering prior records and coordinating with your previous accountant, so onboarding is smooth and stress-free.",
    },
    {
      q: "What types of businesses do you work with?",
      a: "We work with individuals, freelancers, and small-to-midsize businesses across many industries, from startups and e-commerce to contractors and professional services.",
    },
    {
      q: "Is my financial information secure?",
      a: "Absolutely. All documents are shared and stored securely with bank-level encryption, never over unsecured email.",
    },
  ],

  // ── Industries served (used in the second marquee + positioning) ─────────
  industries: [
    "Startups & Tech",
    "Real Estate",
    "Construction & Trades",
    "E-commerce & Retail",
    "Professional Services",
    "Healthcare",
    "Restaurants & Hospitality",
    "Freelancers & Creators",
  ],

  // ── Marquee row 1: trust badges / credentials ────────────────────────────
  marqueeBadges: [
    "Accountant & Software Engineer",
    "Automation-First Workflows",
    "5-Star Rated",
    "Bank-Level Security",
    "Flat-Rate Pricing",
    "Proactive Tax Strategy",
    "Real-Time Books",
    "Trusted by 300+ Clients",
  ],

  // ── Accounting tools we work with (logos in the moving banner) ───────────
  accountingTools: [
    { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
    { name: "Xero", logo: "/logos/xero.svg" },
    { name: "Sage", logo: "/logos/sage.svg" },
    { name: "Stripe", logo: "/logos/stripe.svg" },
    { name: "Gusto", logo: "/logos/gusto.svg" },
    { name: "Intuit", logo: "/logos/intuit.svg" },
    { name: "Expensify", logo: "/logos/expensify.svg" },
    { name: "Wise", logo: "/logos/wise.svg" },
    { name: "PayPal", logo: "/logos/paypal.svg" },
    { name: "Square", logo: "/logos/square.svg" },
  ],

  // ── Video clip (the "accountant at work" footage) ────────────────────────
  // Drop the file in /public and point to it here. Leave as null to hide.
  media: {
    // Free Pexels clips (Pexels License — commercial use, no attribution required).

    // HERO background MONTAGE — Dark Horse-style STORY ARC that crossfades every
    // ~2.6s. SAME woman client bookends it: she calls → friendly young white
    // accountant helps → tax work → the same woman, relieved at her computer.
    // All frames visually verified.
    //   seq-1 = client on the phone w/ her laptop (woman #7191378, bright-room shoot)
    //   seq-2 = young white accountant smiling on the phone, office (#5977465)
    //   guy-laptop = SAME accountant working at his laptop (#5977457, same shoot as seq-2)
    //   seq-3 = tax work — 1040 form + calculator (#6962710)
    //   screen = neutral FINANCIAL STATEMENT close-up: rows of $ figures, slow pan
    //            (#7055344) — reads as financial statements/numbers, paper-toned to match.
    //            (Earlier tries rejected: #5849611 blue KPI infographic was too colorful;
    //            dark sci-fi/crypto dashboards were off-vibe.)
    //   seq-4 = SAME woman, relieved, looking at her computer (#7191385, same shoot as seq-1)
    // Same accountant appears twice (phone → working); same woman bookends (call → relief).
    // Carousel plays each clip ONCE (no loop) so short clips hold their last frame instead
    // of snapping back; every clip is trimmed to >= the ~3.4s beat. To drop a beat, remove
    // its line. Other same-guy clips in /public/clips/shoot/ : 5977462, 5977458/60/64.
    // Alt screen clip (accountant typing w/ calculator): /clips/screen-7593887.mp4.
    heroVideos: [
      "/clips/seq-1.mp4",
      "/clips/seq-2.mp4?v=2",
      "/clips/guy-laptop-5977457.mp4",
      "/clips/screen-data-7055344.mp4",
      "/clips/seq-4.mp4",
    ] as string[],
    heroVideoPoster: "/clips/hero-poster.jpg" as string | null, // shown before clips load

    // Fallback single hero clip (used if heroVideos is emptied):
    heroVideo: "/clips/hero-clip.mp4" as string | null,

    // ABOUT section video — advisor + client interaction.
    // Alternates in /public/clips:
    //   /clips/clip-7821854.mp4  — advisor explaining a document to a client
    //   /clips/clip-7821852.mp4  — two professionals talking at a meeting
    //   /clips/clip-discussion-8814715.mp4 — advisor in discussion with clients (HD)
    //   /clips/clip-8440988.mp4  — man discussing the deal with clients (HD)
    // Nick's headshot for the "Meet your Accountant" section (takes priority over the video)
    aboutPhoto: "/nick-headshot.jpg" as string | null, // Nick's headshot (same photo as personal site)
    aboutVideo: null as string | null,
    aboutVideoPoster: "/clips/about-poster.jpg" as string | null,
  },

  // ── Mega-footer link columns ─────────────────────────────────────────────
  footer: {
    columns: [
      {
        title: "Services",
        links: [
          { label: "Tax Preparation & Planning", href: "#services" },
          { label: "Bookkeeping", href: "#services" },
          { label: "Advisory & Fractional CFO", href: "#services" },
          { label: "Business & Entity Services", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "How it works", href: "#process" },
          { label: "Client stories", href: "#contact" },
          { label: "Book a consult", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Tax deadlines", href: "#faq" },
          { label: "Get started", href: "#contact" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    locations: [
      "San Francisco",
      "Oakland",
      "Berkeley",
      "San Jose",
      "Palo Alto",
      "Marin County",
      "Remote / Nationwide",
    ],
    socials: [
      { label: "LinkedIn", href: "#" }, // ⚠️
      { label: "Instagram", href: "#" }, // ⚠️
      { label: "Facebook", href: "#" }, // ⚠️
    ],
  },

  // ── Navigation ───────────────────────────────────────────────────────────
  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#process" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export type Site = typeof site;
