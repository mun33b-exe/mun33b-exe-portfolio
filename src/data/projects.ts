export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'doctor-drive',
    name: 'Doctor Drive',
    description: 'Doctor Drive is a mobile application that connects to a vehicle’s OBD-II diagnostic device to provide real-time insights into vehicle performance and health. The app enables users to monitor live engine data, diagnose faults, and visualize vehicle issues through an intuitive and modern interface.',
    image: '/assets/images/projects/doctor_drive.png',
    techStack: ['OBD-II','WiFi', 'Flutter', 'Dart', 'Provider', 'Firebase', 'Firestore', 'Cloud Functions', 'Clean Architecture'],
    github: 'https://github.com/mun33b-exe/doctor_drive',
    featured: true,
  },
  {
    id: 'chatzilla',
    name: 'Chatzilla',
    description: 'Real-time chat application with modern UI. Supports one-on-one messaging, group chats, media sharing, and end-to-end encryption.',
    image: '/assets/images/projects/chatzilla.png',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Bloc', 'Clean Architecture', 'Firestore', 'Cloud Functions'],
    github: 'https://github.com/mun33b-exe/chatzilla ',
    featured: true,
  },
  {
    id: 'study-circle',
    name: 'Study Circle',
    description: 'Study Circle is a mobile application that allows students to communicate and study in groups and different study sessions.',
    image: '/assets/images/projects/study_circle.png',
    techStack: ['Flutter', 'Provider', 'Firebase', 'Firestore', 'Cloud Functions', 'Clean Architecture'],
    github: 'https://github.com/mun33b-exe/Study-Circle',
    featured: true,
  },
  {
    id: 'smart-farm',
    name: 'Smart Farm',
    description: 'Smart Farm is a mobile application that allows farmers to monitor their farm and get insights into their farm.',
    image: '/assets/images/projects/smart_farm.png',
    techStack: ['Flutter', 'SQLite', 'Provider', 'Clean Architecture', 'Firestore', 'Cloud Functions'],
    github: 'https://github.com/mun33b-exe/SmartFarm',
    
  },
  {
    id: 'imei-manager',
    name: 'Imei Manager',
    description: 'Imei Manager is a mobile application that allows users to manage their imei numbers and get insights into their imei numbers.',
    image: '/assets/images/projects/imei.png',
    techStack: ['Flutter', 'Provider', 'Hive', 'Clean Architecture'],
    github: 'https://github.com/mun33b-exe/imei-manager',
  },
  {
    id: 'histomeet',
    name: 'Histomeet',
    description: 'Histomeet is a UI/UX design prototype created as part of our Human-Computer Interaction (HCI) semester project at COMSATS University. The app allows users to travel through time by meeting famous historical personalities from different eras.',
    image: '/assets/images/projects/histomeet.png',
    techStack: ['Figma'],
    github: 'https://github.com/mun33b-exe/histomeet-ui-ux',
  },
  
  
];

export const featuredProjects = projects.filter(p => p.featured);
