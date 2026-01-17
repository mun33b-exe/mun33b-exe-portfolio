export interface SkillCategory {
  category: string;
  items: string[];
  tier: 'core' | 'supporting' | 'secondary'; // Visual hierarchy: core > supporting > secondary
}

export const skills: SkillCategory[] = [
  {
    category: "Flutter Development",
    tier: 'core',
    items: [
      "Flutter",
      "Dart",
      "Cross-platform Development",
      "Responsive UI",
      "Platform Integrations"
    ]
  },
  {
    category: "Architecture & State Management",
    tier: 'core',
    items: [
      "Clean Architecture",
      "BLoC",
      "Provider",
      "Dependency Injection"
    ]
  },
  {
    category: "Backend & Cloud",
    tier: 'supporting',
    items: [
      "Node.js (REST APIs)",
      "Express.js",
      "REST API Integration",
      "Firebase",
      "Supabase",
      "SQLite & Offline Sync"
    ]
  },
  {
    category: "Programming Languages",
    tier: 'secondary',
    items: [
      "Dart",
      "JavaScript",
      "Java",
      "Kotlin",
      "SQL",
      "Python",
      "PHP"
    ]
  },
  {
    category: "UI/UX & Design",
    tier: 'secondary',
    items: [
      "Figma",
      "Mobile-first UI",
      "Dark Mode & Theming",
      "UX Fundamentals"
    ]
  },
  {
    category: "Tools & Workflow",
    tier: 'secondary',
    items: [
      "Git & GitHub",
      "Android Studio",
      "VS Code",
      "Firebase Console",
      "Postman"
    ]
  }
];
