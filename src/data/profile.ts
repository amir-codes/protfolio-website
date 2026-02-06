export const profile = {
  name: 'Mellouk Amir Seif Eddine',
  title: 'Flutter Developer',
  location: 'Tlemcen, Algeria',
  email: 'amirmellouk5@gmail.com',
  phone: '+213 699531806',
  linkedIn: 'linkedin.com/in/amir-mellouk-a51b6b259/',
  summary:
    'Experienced Flutter Developer with 4+ years building cross-platform mobile apps. Strong with GetX, clean architecture, and BaaS platforms (Supabase/Firebase). I deliver production-ready apps with real-time features, push notifications, Maps, and solid database integrations.',
  highlights: [
    { label: 'Years experience', value: '4+' },
    { label: 'Apps delivered', value: '15+' },
    { label: 'Client satisfaction', value: '98%' },
  ],
  services: [
    {
      title: 'MVP to Production',
      desc: 'From Figma to Android/iOS builds, release prep, and store-ready delivery.',
    },
    {
      title: 'Real-time & Messaging',
      desc: 'Supabase realtime, chat, live updates, and scalable data flows.',
    },
    {
      title: 'Maps & Location',
      desc: 'Google Maps, markers/routes, geolocation, and location-based UX.',
    },
    {
      title: 'Notifications & Deep Links',
      desc: 'FCM push notifications, targeting, deep links, and background handling.',
    },
    {
      title: 'Payments & Orders',
      desc: 'Payment integration, order flows, booking flows, and dashboards.',
    },
    {
      title: 'Maintenance & Performance',
      desc: 'Bug fixes, refactors, profiling, and performance optimization.',
    },
  ],
  skills: {
    mobile: ['Flutter', 'Dart', 'GetX', 'Provider', 'Bloc', 'Material Design', 'Responsive UI'],
    backend: ['Supabase', 'Firebase', 'PostgreSQL', 'REST APIs', 'Realtime subscriptions'],
    tools: ['Git/GitHub', 'VS Code', 'Android Studio', 'Agile/Scrum', 'Unit & Integration testing'],
    focus: ['Clean Architecture', 'MVVM', 'Debugging', 'Store Publishing', 'CI/CD basics'],
  },
  projects: [
    {
      name: 'Transconnect — Logistics Mobile Platform',
      description:
        'Logistics platform connecting shippers and carriers with real-time shipment tracking, secure messaging, and location-based services.',
      tech: ['Flutter', 'Supabase', 'Firebase FCM', 'Google Maps', 'Realtime messaging'],
      impact: ['200+ users', '40% reduction in communication delays'],
      links: [],
    },
    {
      name: 'Festa DZ — Event Management Platform',
      description:
        'Event booking platform for venues, DJs, and photographers with revenue management and real-time client communication.',
      tech: ['Flutter', 'Supabase', 'Firebase FCM', 'Payments', 'Realtime communication'],
      impact: ['500+ event bookings', 'Automated booking management'],
      links: [],
    },
    {
      name: 'EcoLoop DZ — E-commerce & Service Platform',
      description:
        'Multi-vendor marketplace for buying/selling items and connecting service providers, with seller analytics and order tracking.',
      tech: ['Flutter', 'Supabase', 'Firebase FCM', 'Payment gateway', 'Order management'],
      impact: ['100+ vendors onboarded', 'Integrated payments & order tracking'],
      links: [],
    },
  ],
  experience: [
    {
      role: 'Flutter Developer',
      company: 'AMENTECH',
      meta: 'Full-time • Hybrid • Algiers, Algeria',
      dates: 'Nov 2025 — Present',
      bullets: [
        'Developing enterprise-grade Flutter apps with focus on performance and UX.',
        'Implementing notifications, deep linking, and location-based features.',
        'Integrating REST APIs with robust error handling and smooth data flows.',
        'Managing Android/iOS releases (versioning, publishing, troubleshooting).',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'RanWip',
      meta: 'Full-time • Remote • United States',
      dates: 'Jul 2025 — Sep 2025',
      bullets: [
        'Built Flutter features with strong code review and team collaboration.',
        'Worked on production-quality UX and performance improvements.',
      ],
    },
    {
      role: 'Freelance Mobile Application Developer',
      company: 'Self-Employed',
      meta: 'Remote',
      dates: 'Nov 2024 — Sep 2025',
      bullets: [
        'Delivered 15+ cross-platform apps end-to-end (requirements → deployment).',
        'Advanced integrations: Supabase, Firebase FCM, real-time messaging.',
        'Maps, payments, appointments, and authentication systems.',
        'Maintained 98% client satisfaction through clear communication and reliable delivery.',
      ],
    },
  ],
} as const
