const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=80&w=${w}&auto=format`;

export const IMAGES = {
  heroCard: img("photo-1556761175-4b46a572b786", 800),
  banner: img("photo-1644088379091-d574269d422f", 2200),
  dark: img("photo-1680992046626-418f7e910589", 2000),
  aboutCollage: [
    {
      src: img("photo-1542744173-8e7e53415bb0", 900),
      alt: "Executive cyber governance briefing in a modern conference room",
    },
    {
      src: img("photo-1622675363311-3e1904dc1885", 900),
      alt: "Leadership team reviewing a risk framework around a boardroom table",
    },
    {
      src: img("photo-1517048676732-d65bc937f952", 900),
      alt: "Hands-on advisory session with an executive team",
    },
  ],
};

export const BRAND = {
  name: "SecurePath",
  legalName: "SecurePath Cyber Ltd.",
  tagline: "Guiding organisations on the path to sustainable security.",
  email: "info@securepathcyber.ie",
  linkedin: "https://www.linkedin.com/company/securepath-cyber/",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Privacy & Policy", to: "/privacy" },
];

export const HERO = {
  eyebrow: "CYBERSECURITY GOVERNANCE & RISK",
  titleWords: [
    "Guiding",
    "organisations",
    "on",
    "the",
    "path",
    "to",
    "sustainable",
    "security.",
  ],
  highlightWord: "path",
  sub: "Cybersecurity done right isn't about ticking boxes — it's about understanding your business risks and building programs that genuinely protect it. 16+ years of hands-on expertise, beyond compliance.",
  primaryCta: "Book a Consultation",
  secondaryCta: "Explore Our Services",
};

export const TRUST_ITEMS = [
  "16+ years experience",
  "ISO 27001 specialists",
  "Independent & objective",
];

export const APPROACH = {
  eyebrow: "OUR APPROACH",
  intro:
    "Many organisations approach cybersecurity primarily as a compliance requirement. We build structured governance that aligns with your specific business goals.",
  pillars: [
    {
      number: "01",
      title: "Alignment",
      line: "Aligning cybersecurity with business objectives",
      icon: "compass",
    },
    {
      number: "02",
      title: "Sustainable",
      line: "Building sustainable security processes",
      icon: "sprout",
    },
    {
      number: "03",
      title: "Practical",
      line: "Delivering practical and achievable solutions",
      icon: "clipboard-check",
    },
    {
      number: "04",
      title: "Resilience",
      line: "Strengthening long-term organisational resilience",
      icon: "shield",
    },
  ],
};

export const SERVICES = {
  eyebrow: "WHAT WE DO",
  title: "Our Core Services",
  sub: "Practical, risk-driven cybersecurity consulting to protect your business and support long-term growth.",
  items: [
    {
      id: "iso27001",
      title: "ISO 27001 Implementation",
      line: "Support in achieving ISO 27001 certification and establishing an effective ISMS.",
      icon: "badge-check",
      large: true,
      image: img("photo-1751448555253-f39c06e29d82", 1200),
      imageAlt: "Security and compliance management dashboard interface",
      detail:
        "From gap analysis to certification audit, we guide you through the full ISO 27001 journey — scoping your ISMS, building the risk treatment plan, writing policies people actually follow, and preparing your team for the audit with confidence.",
      bullets: [
        "ISMS scoping & gap analysis",
        "Risk assessment & treatment planning",
        "Policy & control documentation",
        "Internal audit & certification preparation",
      ],
    },
    {
      id: "risk-assessments",
      title: "Cybersecurity Risk Assessments",
      line: "Identify risks and build a clear roadmap for strengthening security across your organisation.",
      icon: "search-check",
      large: false,
      image: img("photo-1758073519996-6d3c63b4922c", 1200),
      imageAlt: "Abstract blue data waves representing network telemetry",
      detail:
        "A clear, business-first view of where you stand. We identify the risks that genuinely matter to your organisation and turn them into a prioritised, achievable roadmap — not a hundred-page report that sits on a shelf.",
      bullets: [
        "Business risk identification & scoring",
        "Threat & vulnerability review",
        "Prioritised remediation roadmap",
        "Executive summary in plain English",
      ],
    },
    {
      id: "audits",
      title: "Security Audits & Assurance",
      line: "Independent security reviews to evaluate control effectiveness and improve resilience.",
      icon: "file-search",
      large: false,
      image: img("photo-1680992046626-418f7e910589", 1200),
      imageAlt: "High-security server infrastructure in deep navy tones",
      detail:
        "Independent, objective reviews of your security controls — what is working, what is not, and what to do about it. Our assurance work gives boards, customers and auditors the confidence they need.",
      bullets: [
        "Control effectiveness reviews",
        "Independent assurance reports",
        "Supplier & third-party reviews",
        "Follow-up verification",
      ],
    },
    {
      id: "policy",
      title: "Security Policy & Framework Development",
      line: "Frameworks aligned with both regulatory requirements and business operations.",
      icon: "scroll-text",
      large: false,
      image: img("photo-1542744173-8e7e53415bb0", 1200),
      imageAlt: "Governance briefing in a modern conference room",
      detail:
        "Security frameworks and policies written for how your business actually runs — aligned to regulatory requirements, but practical enough that teams follow them without friction.",
      bullets: [
        "Policy suites tailored to your operations",
        "Framework alignment (ISO 27001, NIST, Cyber Essentials)",
        "Roles, responsibilities & governance structures",
        "Regular review & maintenance rhythm",
      ],
    },
    {
      id: "vciso",
      title: "Security Governance & Virtual CISO",
      line: "Strategic cybersecurity leadership without the full-time cost.",
      icon: "crown",
      large: false,
      image: img("photo-1622675363311-3e1904dc1885", 1200),
      imageAlt: "Leadership team reviewing security strategy in a boardroom",
      detail:
        "Senior security leadership on a flexible basis. We set the strategy, chair the risk conversations, report to your board, and keep your programme moving — without the cost of a full-time CISO.",
      bullets: [
        "Security strategy & board reporting",
        "Risk committee & governance cadence",
        "Vendor & investment decisions",
        "Mentoring for in-house teams",
      ],
    },
  ],
};

export const PROCESS = {
  eyebrow: "HOW WE WORK",
  title: "A clear path, from first conversation to lasting resilience",
  steps: [
    {
      number: "01",
      title: "Discovery",
      line: "We listen first — understanding your business, goals and current security posture.",
    },
    {
      number: "02",
      title: "Assessment",
      line: "We identify the risks that matter most and evaluate your existing controls.",
    },
    {
      number: "03",
      title: "Roadmap",
      line: "You get a prioritised, practical plan aligned to your business objectives.",
    },
    {
      number: "04",
      title: "Implement",
      line: "We work alongside your team to put controls, policies and governance in place.",
    },
    {
      number: "05",
      title: "Monitor",
      line: "We keep the programme alive — reviewing, measuring and improving over time.",
    },
  ],
};

export const STATEMENT = {
  quote: "Cybersecurity done right isn't about ticking boxes.",
  sub: "It's about understanding your business risks — and building programmes that genuinely protect them.",
};

export const AUDIENCE = {
  eyebrow: "WHO WE WORK WITH",
  title: "Organisations that need practical and sustainable cybersecurity",
  body: "SecurePath works with organisations that need practical and sustainable cybersecurity. Many of our clients require structured cybersecurity programs and governance but do not yet have a dedicated cybersecurity team. We help these organisations build sustainable security programs that protect the business and support long-term growth.",
  cta: "Work with Us",
  groups: [
    {
      id: "tech-saas",
      title: "Technology & SaaS companies",
      line: "Organisations that need to strengthen cybersecurity to meet customer expectations, security questionnaires, and ISO 27001 certification requirements.",
      image: img("photo-1497366754035-f200968a6e72", 1000),
      imageAlt: "Modern glass office architecture",
    },
    {
      id: "smes",
      title: "Growing SMEs",
      line: "Companies expanding and requiring structured cybersecurity governance, risk management, and security policies.",
      image: img("photo-1531973576160-7125cd663d86", 1000),
      imageAlt: "Growing team collaborating in an open office",
    },
    {
      id: "professional-services",
      title: "Professional Services Firms",
      line: "Organisations managing sensitive client data that need to demonstrate strong security practices and assurance.",
      image: img("photo-1517048676732-d65bc937f952", 1000),
      imageAlt: "Advisory session with a professional services team",
    },
    {
      id: "iso-orgs",
      title: "Organisations implementing ISO 27001",
      line: "Organisations seeking expert guidance to implement an effective Information Security Management System (ISMS).",
      image: img("photo-1751448555253-f39c06e29d82", 1000),
      imageAlt: "Compliance management dashboard for ISO 27001",
    },
    {
      id: "leadership",
      title: "Organisations needing cybersecurity leadership",
      line: "Companies requiring strategic direction, governance, and risk oversight without hiring a full-time CISO.",
      image: img("photo-1431540015161-0bf868a2d407", 1000),
      imageAlt: "Executive board meeting in a corporate suite",
    },
  ],
};

export const WHY_US = {
  eyebrow: "WHY US?",
  title:
    "Effective cybersecurity built on trust, expertise, and a deep understanding of risk.",
  items: [
    {
      title: "Sustainable Security Programs",
      line: "We help organisations develop security practices that are sustainable, scalable, and aligned with long-term business success — not quick fixes.",
      icon: "recycle",
    },
    {
      title: "Risk-Driven Approach",
      line: "Security strategies are aligned with real business risks — not just regulatory checklists. We help organisations understand and address their specific threat landscape.",
      icon: "target",
    },
    {
      title: "Practical Security",
      line: "Our approach focuses on practical and achievable security improvements that integrate with business operations and support organisational goals.",
      icon: "wrench",
    },
    {
      title: "Trust and Integrity",
      line: "We build trusted relationships based on transparency and accountability, providing objective advice that prioritises the security and resilience of our clients.",
      icon: "handshake",
    },
  ],
};

export const FOUNDER = {
  eyebrow: "ABOUT THE FOUNDER",
  title: "The person behind SecurePath Cyber Ltd.",
  name: "Cleofe Velmonte",
  role: "Founder & Principal Consultant",
  photo: "/assets/founder.webp",
  photoAlt: "Cleofe Velmonte, Founder & Principal Consultant of SecurePath Cyber Ltd.",
  bio: [
    "Cleofe Velmonte is a cybersecurity, risk and governance professional with over 16 years of experience helping organisations strengthen their security posture, manage technology risk, and build effective governance frameworks.",
    "Throughout her career, Cleofe has worked across consulting, internal audit, risk management and cybersecurity advisory roles with organisations including Deloitte, PwC, and financial services with European and global footprints. She has led enterprise-wide risk initiatives, implemented GRC platforms, developed security and risk frameworks, and provided challenge and oversight on complex technology and business transformation programmes.",
    "She is passionate about helping organisations translate cybersecurity requirements into practical, business-focused solutions that strengthen security, support compliance, and enable informed decision-making.",
  ],
  credentials: [
    "Cybersecurity Governance",
    "ISO 27001",
    "IT Risk Management",
    "GRC",
    "Operational Resilience",
    "Third-Party Risk",
    "Data Governance",
    "DORA",
    "Internal Audit",
    "Regulatory Compliance",
    "NIS2",
  ],
};

export const FINAL_CTA = {
  title: "Ready to strengthen your security posture?",
  sub: "Start with a free 30-minute consultation.",
  button: "Book a Consultation",
};

export const BOOKING = {
  title: "Book a Consultation",
  sub: "Tell us a little about your organisation and what you need. We'll come back to you within one business day.",
  sizes: ["1–10", "11–50", "51–200", "201–500", "500+"],
  successTitle: "Thank you — request received",
  successLine:
    "We've noted your details and will be in touch within one business day to arrange your free 30-minute consultation.",
};

export const ABOUT = {
  eyebrow: "ABOUT SECUREPATH",
  title: "Independent cybersecurity guidance, grounded in real experience",
  intro:
    "SecurePath Cyber Ltd. is an independent cybersecurity governance and risk consultancy. We exist for one reason: to guide organisations on the path to sustainable security — with advice that is practical, honest, and free of vendor agendas.",
  body: [
    "With 16+ years of hands-on expertise across cybersecurity governance, risk management and ISO 27001, we have seen what genuinely protects organisations — and what simply ticks boxes. That experience shapes everything we do.",
    "We work as an extension of your team. We translate complex security questions into plain-English business decisions, build programmes your organisation can actually sustain, and stay alongside you as those programmes mature.",
  ],
  values: [
    {
      title: "Independent & objective",
      line: "We sell advice, not products. Our only agenda is your security and resilience.",
      icon: "scale",
    },
    {
      title: "Plain English, always",
      line: "Boards and teams alike get clarity — never jargon or fear-mongering.",
      icon: "message-square",
    },
    {
      title: "Built to last",
      line: "Programmes designed around your people and operations, so security endures long after we leave.",
      icon: "infinity",
    },
  ],
  stats: [
    { value: "16+", label: "Years of hands-on expertise" },
    { value: "100%", label: "Independent & objective advice" },
    { value: "ISO 27001", label: "Implementation specialists" },
  ],
};

export const PRIVACY = {
  eyebrow: "PRIVACY & POLICY",
  title: "Privacy Policy",
  updated: "Last updated: January 2026",
  intro:
    "SecurePath Cyber Ltd. respects your privacy. This policy explains, in plain English, what personal data we collect through this website, why we collect it, and how we look after it.",
  sections: [
    {
      title: "Who we are",
      body: "SecurePath Cyber Ltd. is an independent cybersecurity governance and risk consultancy. If you have any questions about this policy or how we handle your data, you can contact us at info@securepathcyber.ie.",
    },
    {
      title: "What we collect",
      body: "When you request a consultation through this website, we collect the details you choose to give us: your name, work email address, company name, company size, the services you are interested in, and your message. We do not collect special-category data, and we do not ask for more than we need.",
    },
    {
      title: "How we use it",
      body: "We use your details for one purpose only: to respond to your enquiry and arrange your consultation. We do not use your data for marketing lists, we do not profile you, and we do not sell or share your personal data with third parties for their own purposes.",
    },
    {
      title: "How long we keep it",
      body: "Enquiry details are kept only for as long as needed to handle your request and any follow-up work you ask us to do. If we do not end up working together, your enquiry details are deleted within 12 months.",
    },
    {
      title: "How we protect it",
      body: "As a cybersecurity consultancy, we hold ourselves to the same standards we recommend to clients. Access to personal data is restricted, systems are kept up to date, and data is stored securely within the EU/EEA wherever possible.",
    },
    {
      title: "Cookies & analytics",
      body: "This website uses only privacy-respecting, aggregate usage measurement to help us understand which pages are useful. It does not use advertising trackers, and no cross-site profiling takes place.",
    },
    {
      title: "Your rights",
      body: "You have the right to access the personal data we hold about you, to have it corrected or deleted, and to object to or restrict how we use it. To exercise any of these rights, email info@securepathcyber.ie and we will respond promptly. You also have the right to lodge a complaint with the Data Protection Commission (Ireland).",
    },
    {
      title: "Changes to this policy",
      body: "If we change this policy, we will update the date at the top of this page. Material changes will be flagged clearly.",
    },
  ],
};

export const FOOTER = {
  note: "Independent cybersecurity governance & risk consultancy.",
};
