export interface CourseItem {
  name: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string | 'Present';
  description?: string;
  coursework?: CourseItem[];
}

export const education: Education[] = [
  {
    id: 'bachelors',
    degree: "Bachelor's Degree",
    field: 'Software Engineering',
    institution: 'COMSATS University Islamabad',
    location: 'Wah Cantt, Pakistan',
    startYear: '2022',
    endYear: '2026',
    description: 'Undergraduate program covering software engineering fundamentals, with hands-on focus on mobile development, backend systems, and database design.',
    coursework: [
      { name: 'Mobile Application Development', description: 'Built Flutter apps as semester projects' },
      { name: 'Database Systems', description: 'Designed and implemented relational databases with SQL' },
      { name: 'Software Design & Architecture', description: 'Applied design patterns and clean code principles' },
      { name: 'Object-Oriented Programming', description: 'Developed applications using Java and Dart' },
    ],
  },
];
