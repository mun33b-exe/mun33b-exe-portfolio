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
    id: 'supr-freelance',
    title: 'Freelance Mobile App Developer',
    company: 'Supr',
    location: 'Remote',
    type: 'freelance',
    startDate: '2024',
    endDate: '2024',
    overview: 'Worked as a freelance mobile developer integrating RESTful APIs into a production-scale ride-hailing application. Focused on secure data communication, reliability, and real-world network constraints.',
    description: [
      'Integrated REST APIs into an existing mobile app architecture',
      'Implemented authentication and secure request handling',
      'Parsed and managed JSON responses and edge cases',
      'Handled API errors, timeouts, and network failures',
      'Followed backend API contracts and documentation',
    ],
    techStack: ['REST APIs', 'JSON', 'Authentication', 'Mobile App Development'],
    note: 'UI and source code are not publicly available due to NDA.',
  },
  {
    id: 'freelance-mobile-dev',
    title: 'Mobile App Developer',
    company: 'Freelance',
    location: 'Remote',
    type: 'freelance',
    startDate: '2024',
    endDate: 'Present',
    overview: 'Developing custom mobile applications for clients, delivering end-to-end solutions from UI implementation to backend integration.',
    description: [
      'Developing custom mobile applications for clients using Flutter',
      'Building full-stack solutions with Node.js and MongoDB backends',
      'Implementing clean architecture and best practices for maintainable codebases',
      'Collaborating with clients to deliver pixel-perfect UI implementations',
    ],
    techStack: ['Flutter', 'Dart', 'Node.js','Express.js', 'Supabase', 'Firebase', 'Bloc', 'Clean Architecture'],
  },
];
