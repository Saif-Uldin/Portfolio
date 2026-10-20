/** Source of truth: the supplied resume. Do not add facts here that the resume does not state. */

export const person = {
  name: "Saifuldin Mohammed",
  firstName: "Saifuldin",
  lastName: "Mohammed",
  title: "Full-Stack Software Developer",
  subtitle: "Independent Software Product Developer",
  location: "Jeddah, Saudi Arabia",
  phone: "+966 56 743 4045",
  phoneHref: "tel:+966567434045",
  email: "saifuldinmohammed@gmail.com",
  emailHref: "mailto:saifuldinmohammed@gmail.com",
  github: "https://github.com/Saif-Uldin",
  githubLabel: "github.com/Saif-Uldin",
} as const;

export const summary: string[] = [
  "Full-stack software developer and independent software product builder with hands-on experience designing, developing, securing, and deploying end-to-end web applications. Independently developed multiple substantial software products, covering frontend architecture, backend APIs, relational database design, authentication and authorization, complex business logic, third-party integrations, and Linux-based deployment.",
  "Experienced in building permission-driven enterprise applications, video-based learning systems, AI-assisted workflows, subscription-based software, and policy-driven financial systems. Particularly interested in software architecture, security, reliable business processes, and translating complex operational requirements into maintainable software.",
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: "Programming", items: ["Python", "TypeScript", "JavaScript", "SQL", "C++"] },
  {
    label: "Frontend Development",
    items: ["React", "Vite", "React Router", "Axios", "React Query", "HTML", "CSS", "form validation", "component-based interfaces"],
  },
  {
    label: "Backend Development",
    items: ["Flask", "REST APIs", "SQLAlchemy", "relational data modeling", "business logic", "request validation"],
  },
  {
    label: "Databases & Migrations",
    items: ["PostgreSQL", "SQLite", "Alembic", "Flask-Migrate", "schema migrations", "database constraints"],
  },
  {
    label: "Security & Access Control",
    items: ["Bcrypt", "CSRF protection", "permission-based authorization", "role-based access control", "rate limiting", "input validation"],
  },
  {
    label: "AI & Integrations",
    items: ["External API integration", "AI-assisted support", "transcript analysis", "prompt optimization", "guarded AI workflows"],
  },
  {
    label: "Video & Media Processing",
    items: ["Video.js", "video quality variants", "audio extraction", "speech transcription integration", "WebVTT subtitles", "playback progress controls"],
  },
  {
    label: "Deployment & Infrastructure",
    items: ["Linux", "Nginx", "Gunicorn", "Redis", "Celery", "RedBeat", "application configuration", "deployment troubleshooting", "process management"],
  },
  {
    label: "Additional Experience",
    items: ["Arduino", "IoT", "hardware–software integration", "PDF and SVG generation", "cybersecurity fundamentals"],
  },
];

export const additionalStrengths: string[] = [
  "End-to-end ownership of independently developed software products, from requirements and architecture through implementation and deployment preparation.",
  "Experience translating complicated operational and financial requirements into explicit application rules and workflows.",
  "Practical Linux deployment and troubleshooting experience beyond formal coursework.",
  "Strong interest in software architecture, application security, database integrity, and maintainable systems.",
];

export const navItems = [
  { id: "overview", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "engineering", label: "Engineering" },
  { id: "education", label: "Education & Training" },
  { id: "contact", label: "Contact" },
] as const;
