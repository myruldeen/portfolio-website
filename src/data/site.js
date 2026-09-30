export const site = {
  name: 'deno solution',
  shortName: 'deno',
  owner: 'Muhammad Amirul Rashideen',
  role: 'Technical Support Analyst',
  ssm: 'AS0513321-M',
  tagline: 'Apps & websites built to actually work',
  description:
    'deno solution builds custom websites, web apps and mobile apps for businesses that need something reliable, fast and easy to use.',
  email: 'myruldeen@gmail.com',
  location: 'Malaysia',
  timezone: 'GMT+8',
  url: 'https://denosolution.com',
  socials: {
    linkedin: 'https://linkedin.com/in/muhd-amirul-rashideen-zaidi-65682015a/',
    github: 'https://github.com/myruldeen',
    resume:
      'https://drive.google.com/file/d/1exSnCRh-O1PAFCi9pynZsNdiZAg_OLmX/view'
  }
};

export const seo = {
  title: 'deno solution — Custom Websites, Web Apps & Mobile Apps',
  ogImage: '/pwa-512x512.png'
};

export const navItems = [
  { text: 'Services', link: '#services' },
  { text: 'Process', link: '#process' },
  { text: 'Work', link: '#work' },
  { text: 'Pricing', link: '#pricing' },
  { text: 'About', link: '#about' },
  { text: 'FAQ', link: '#faq' }
];

export const services = [
  {
    title: 'Custom Websites',
    icon: 'fas fa-globe',
    description:
      'Marketing sites, landing pages and online stores built to load fast, rank well and convert visitors into enquiries.'
  },
  {
    title: 'Web Applications',
    icon: 'fas fa-window-restore',
    description:
      'Dashboards, portals and internal tools that replace spreadsheets and manual processes with something your team actually enjoys using.'
  },
  {
    title: 'Mobile Apps',
    icon: 'fas fa-mobile-screen',
    description:
      'iOS and Android apps built from a single codebase, connected to your backends, sensors and third-party services.'
  },
  {
    title: 'Backend & APIs',
    icon: 'fas fa-server',
    description:
      'REST and GraphQL APIs, authentication, databases and third-party integrations designed to stay maintainable as you grow.'
  },
  {
    title: 'UI/UX & Design',
    icon: 'fas fa-pen-ruler',
    description:
      'Wireframes, prototypes and design systems so the finished product looks considered on every screen size and is usable by everyone.'
  },
  {
    title: 'Maintenance & Support',
    icon: 'fas fa-shield-halved',
    description:
      'Hosting, monitoring, dependency updates, backups and ongoing feature work after launch, so your app keeps working.'
  }
];

export const process = [
  {
    title: 'Discovery call',
    icon: 'fas fa-comments',
    description:
      'A free 30-minute call to understand the problem, the people using it and what success looks like.'
  },
  {
    title: 'Scope & quote',
    icon: 'fas fa-file-signature',
    description:
      'You get written deliverables, a realistic timeline and a fixed quote. No vague estimates, no surprise invoices.'
  },
  {
    title: 'Design',
    icon: 'fas fa-palette',
    description:
      'Wireframes and a clickable prototype so you approve the direction before a single line of production code is written.'
  },
  {
    title: 'Build',
    icon: 'fas fa-code',
    description:
      'Development in short sprints with a live demo at the end of each one, so you always see real progress.'
  },
  {
    title: 'Launch',
    icon: 'fas fa-rocket',
    description:
      'Testing, deployment, domain and analytics setup, plus a walkthrough so your team knows exactly how to use what you built.'
  },
  {
    title: 'Support',
    icon: 'fas fa-life-ring',
    description:
      'A handover period for fixes, and an ongoing maintenance plan if you want someone accountable on the other end.'
  }
];

export const work = [
  {
    title: 'Smart Agriculture Platform',
    featured: true,
    status: 'Completed',
    image: '/projects/smart-agriculture/1.png',
    problem:
      'Growers had no way to see soil temperature, humidity and moisture across their fields without walking out to check gauges by hand.',
    solution:
      'A sensor network feeding a live dashboard, so readings from every plot appear in one place within seconds and can be exported for analysis.',
    outcome:
      'Manual field checks became a quick glance at a phone, and irrigation decisions stopped being guesswork.',
    link: 'https://github.com/myruldeen/smart-agriculture',
    technologies: ['Ionic', 'Angular', 'Node.js', 'MongoDB', 'IoT Sensors']
  },
  {
    title: 'Solar Monitoring App',
    featured: false,
    status: 'Completed',
    image: '/projects/solar-monitoring/2.png',
    problem:
      'Solar installations were checked by driving out to the site and reading meters manually, which does not scale past a handful of panels.',
    solution:
      'A mobile app that streams DC voltage, current, ambient temperature and humidity per installation, with alerts when readings drift out of range.',
    outcome:
      'Faults surfaced within minutes instead of the next scheduled site visit.',
    link: 'https://github.com/myruldeen/solar-monitoring',
    technologies: ['Ionic', 'Angular', 'Node.js', 'MongoDB']
  },
  {
    title: 'IoT Weather Station',
    featured: false,
    status: 'Live',
    image: '/projects/weather-monitoring/1.png',
    liveLink: 'https://nodered.denoodev.com/ui',
    problem:
      'A need for continuous local weather telemetry that was cheap to run, self-hosted and always available.',
    solution:
      'ESP32 sensors publishing over MQTT into a self-hosted Node-RED pipeline, with Grafana and InfluxDB for live dashboards and history.',
    outcome:
      'Runs entirely on owned infrastructure, so the data stays private and there are no per-request platform fees.',
    link: 'https://github.com/myruldeen/soilmas-noderedflow',
    technologies: ['ESP32', 'MQTT', 'Node-RED', 'Grafana', 'InfluxDB', 'Docker']
  }
];

export const engagement = [
  {
    title: 'Fixed-scope project',
    icon: 'fas fa-bullseye',
    bestFor: 'Websites, apps and defined features',
    description:
      'You know what you want built. We agree the deliverables and timeline up front, and you get a fixed quote against them.',
    points: [
      'Written scope with clear deliverables',
      'Fixed quote, no hourly surprises',
      'Agreed launch date',
      '30 days of post-launch fixes included'
    ]
  },
  {
    title: 'Ongoing retainer',
    icon: 'fas fa-arrows-rotate',
    bestFor: 'Products that need to keep improving',
    description:
      'A monthly block of time for new features, iteration and maintenance, so your app keeps getting better without new project overhead.',
    points: [
      'Reserved capacity every month',
      'Priority on new requests',
      'Maintenance and monitoring included',
      'Cancel or pause with 30 days notice'
    ]
  },
  {
    title: 'Technical consulting',
    icon: 'fas fa-compass',
    bestFor: 'Teams that need a second opinion',
    description:
      'An independent review of your existing setup, architecture or codebase, with a written plan you can act on or hand to any developer.',
    points: [
      'Code and infrastructure audits',
      'Stack and architecture advice',
      'Written findings and recommendations',
      'Help hiring or briefing your own team'
    ]
  }
];

export const credentials = [
  {
    value: '5+',
    label: 'Years building and shipping software',
    icon: 'fas fa-code'
  },
  {
    value: 'End-to-end',
    label: 'Design, backend, frontend and infrastructure',
    icon: 'fas fa-layer-group'
  },
  {
    value: 'Production',
    label: 'Systems monitored and maintained in real environments',
    icon: 'fas fa-server'
  }
];

export const differentiators = [
  {
    title: 'You talk to the person building it',
    description:
      'No account managers, no hand-off to a junior team halfway through. The person you scope the project with is the one writing the code.'
  },
  {
    title: 'Fixed quotes, not open tabs',
    description:
      'You approve a scope and a price before work starts. If the scope does not change, the price does not change either.'
  },
  {
    title: 'You own everything',
    description:
      'Source code, domains, hosting and documentation are yours from day one. Nothing is held hostage, including if we part ways.'
  },
  {
    title: 'Built to be maintained',
    description:
      'Documented, conventional code and a proper handover. The project should be simple for your next developer, even if that is not me.'
  }
];

export const faqs = [
  {
    question: 'What does a project cost?',
    answer:
      'It depends entirely on scope, and I would rather quote accurately than quote low. Once I understand what you need, you get a fixed price in writing with the deliverables attached. The scoping call is free, so there is no cost to find out.'
  },
  {
    question: 'How long does it take?',
    answer:
      'A focused marketing website is usually a few weeks. A custom web or mobile app with real backend work is typically a couple of months. You get a realistic timeline in the proposal, and I will tell you early if a deadline is not achievable rather than missing it quietly.'
  },
  {
    question: 'Do you work with existing codebases?',
    answer:
      'Yes. I can take over an unfinished project, work alongside an existing developer or start from a codebase that needs untangling. I will review what is there first and give you an honest assessment of what is worth keeping.'
  },
  {
    question: 'What technologies do you build with?',
    answer:
      'Modern JavaScript and TypeScript across the stack, with Astro, React or Vue on the frontend and Node.js on the backend. For mobile, cross-platform frameworks so one codebase covers both iOS and Android. I will recommend what fits your project rather than what is fashionable.'
  },
  {
    question: 'Who owns the code and the hosting?',
    answer:
      'You do, from the start. Repositories, domains, hosting accounts and documentation are all in your name. If we stop working together you keep all of it and can hand it to any developer.'
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Every project includes 30 days of fixes for anything found after launch. After that you can take an ongoing maintenance plan, or simply book further work whenever you need it.'
  },
  {
    question: 'Do you work with clients outside Malaysia?',
    answer:
      'Yes. I work remotely with clients in any timezone, with scheduled calls arranged around your working hours. All communication, quotes and handovers are in writing.'
  }
];
