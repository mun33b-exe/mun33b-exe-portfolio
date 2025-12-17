export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Mobile App Development",
    items: [
      "Flutter",
      "Dart",
      "Android (Java & Kotlin)",
      "Cross-platform Development",
      "Responsive UI",
      "Platform Integrations"
    ]
  },
  {
    category: "Architecture & State Management",
    items: [
      "Clean Architecture",
      "Bloc",
      "Provider",
      "Dependency Injection"
    ]
  },
  {
    category: "Backend & Cloud (Mobile)",
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
    items: [
      "Figma",
      "Design Systems",
      "Mobile-first UI",
      "Dark Mode & Theming",
      "UX Fundamentals"
    ]
  },
  {
    category: "Tools & Workflow",
    items: [
      "Git & GitHub",
      "Android Studio",
      "VS Code",
      "Firebase Console",
      "Postman"
    ]
  }
];
