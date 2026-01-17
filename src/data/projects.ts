export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  tier?: 1 | 2 | 3; // 1 = Flagship, 2 = Engineering, 3 = Design/Academic
  playStoreStatus?: 'live' | 'closed-testing' | 'internal-testing'; // Play Store publishing status
}

export const projects: Project[] = [
  // Tier 1 - Flagship Projects
  {
    id: 'chatzilla',
    name: 'Chatzilla',
    description: 'A production-ready real-time chat application built with Flutter, published to Google Play Store. Focused on scalable state management and real-time data synchronization, with one-to-one and group messaging using Firebase, Clean Architecture, and BLoC.',
    image: '/assets/images/projects/chatzilla.png',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Firestore', 'Clean Architecture'],
    github: 'https://github.com/mun33b-exe/chatzilla',
    featured: true,
    tier: 1,
    playStoreStatus: 'closed-testing',
  },
  {
    id: 'doctor-drive',
    name: 'Doctor Drive',
    description: 'A Flutter-based mobile app that integrates with vehicle OBD-II diagnostics to display real-time engine data and fault codes. Focused on handling external device data streams, asynchronous communication, and clean separation of business logic using Clean Architecture.',
    image: '/assets/images/projects/doctor_drive.png',
    techStack: ['Flutter', 'Dart', 'Provider', 'OBD-II', 'WiFi', 'Clean Architecture'],
    github: 'https://github.com/mun33b-exe/doctor_drive',
    featured: true,
    tier: 1,
  },
  {
    id: 'study-circle',
    name: 'Study Circle',
    description: 'A collaborative study application designed to support group study sessions with real-time communication. Implemented backend integration using Firebase with structured state management and modular architecture for maintainable feature development.',
    image: '/assets/images/projects/study_circle.png',
    techStack: ['Flutter', 'Dart', 'Provider', 'Firebase', 'Firestore', 'Clean Architecture'],
    github: 'https://github.com/mun33b-exe/Study-Circle',
    featured: true,
    tier: 1,
  },

  // Tier 2 - Engineering Projects
  {
    id: 'smart-farm',
    name: 'Smart Farm',
    description: 'A farm monitoring application with local-first data storage using SQLite for offline operation. Implemented sync logic between local database and cloud, handling data conflicts and ensuring reliable data persistence in low-connectivity environments.',
    image: '/assets/images/projects/smart_farm.png',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Provider', 'Firebase'],
    github: 'https://github.com/mun33b-exe/SmartFarm',
    tier: 2,
  },
  {
    id: 'imei-manager',
    name: 'IMEI Manager',
    description: 'A utility app for managing device IMEI records with fast local storage using Hive. Built with Clean Architecture principles to separate data, domain, and presentation layers for easier testing and maintenance.',
    image: '/assets/images/projects/imei.png',
    techStack: ['Flutter', 'Dart', 'Hive', 'Clean Architecture'],
    github: 'https://github.com/mun33b-exe/imei-manager',
    tier: 2,
  },

  // Tier 3 - Design / Academic
  {
    id: 'histomeet',
    name: 'Histomeet',
    description: 'A UI/UX design prototype created for a Human-Computer Interaction course project. Designed user flows and interactive prototypes in Figma for an app concept allowing users to explore historical personalities.',
    image: '/assets/images/projects/histomeet.png',
    techStack: ['Figma', 'UI/UX Design'],
    github: 'https://github.com/mun33b-exe/histomeet-ui-ux',
    tier: 3,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
