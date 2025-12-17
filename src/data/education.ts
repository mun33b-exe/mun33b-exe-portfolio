export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string | 'Present';
  description?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: 'bachelors',
    degree: "Bachelor's Degree",
    field: 'Software Engineering',
    institution: 'COMSATS University Islamabad',
    location: 'Islamabad, Pakistan',
    startYear: '2022',
    endYear: '2026',
    description: 'Focused on software engineering, mobile development, and web technologies.',
    achievements: [
      'Developed multiple mobile applications as part of coursework',
      'Participated in coding competitions and hackathons',
      'Active member of the Computer Science society',
    ],
  },
];
