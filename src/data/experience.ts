export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  startDate: string;
  endDate: string | 'Present';
  overview?: string;
  description: string[];
  techStack?: string[];
  note?: string;
}

export const experience: Experience[] = [
  {
    id: 'freelance-mobile-dev',
    title: 'Mobile App Developer',
    company: 'Freelance',
    location: 'Remote',
    type: 'freelance',
    startDate: '2024',
    endDate: 'Present',
    overview: 'Building Flutter mobile applications end-to-end, from UI implementation to backend integration, using Clean Architecture and BLoC for structured, maintainable codebases.',
    description: [
      'Developing cross-platform mobile apps with Flutter and Dart',
      'Implementing Clean Architecture with BLoC for predictable state management',
      'Integrating Firebase and Supabase for authentication and real-time data',
      'Building REST API integrations with Node.js/Express backends',
      'Working directly with clients to translate requirements into functional features',
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Firebase', 'Supabase', 'Node.js', 'Express.js'],
  },
  {
    id: 'supr-freelance',
    title: 'Freelance Mobile App Developer',
    company: 'SUPR',
    location: 'Remote (Middle East Market)',
    type: 'freelance',
    startDate: 'September 2025',
    endDate: 'November 2025',
    overview: 'Project-based freelance engagement as part of a development team building SUPR, a service-based ride-hailing application targeting Middle Eastern markets. Contributed to mobile-side development with focus on API integration and booking flows.',
    description: [
      'Contributed to mobile app development as part of a distributed team',
      'Integrated REST APIs for authentication, booking, and ride management features',
      'Implemented secure token handling and session management flows',
      'Handled JSON parsing for complex API responses and edge cases',
      'Managed network error states and offline recovery scenarios',
    ],
    techStack: ['Flutter', 'REST APIs', 'JSON', 'Authentication', 'Error Handling', 'Mobile Development'],
    note: 'UI and source code are not publicly available due to NDA.',
  },
];
