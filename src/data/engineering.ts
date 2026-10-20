/**
 * Engineering approach, grouped by concern. Every point is drawn from the resume.
 * "evidence" says which project demonstrates it, so the page never implies that every
 * technology was used in every project.
 */

export type LayerId = "interface" | "api" | "domain" | "data" | "integrations" | "runtime";

export interface Layer {
  id: LayerId;
  label: string;
  items: string;
}

export const layers: Layer[] = [
  { id: "interface", label: "Interface", items: "React · TypeScript · Vite · React Router · Axios · React Query" },
  { id: "api", label: "API", items: "Flask · REST APIs · request validation" },
  { id: "domain", label: "Domain logic", items: "Permissions · configurable policies · explicit states" },
  { id: "data", label: "Data", items: "PostgreSQL · SQLite · SQLAlchemy · Alembic / Flask-Migrate" },
  { id: "integrations", label: "Integrations", items: "Transcription APIs · LiveKit · Google AI API · Video.js" },
  { id: "runtime", label: "Runtime", items: "Linux · Nginx · Gunicorn · Redis · Celery / RedBeat" },
];

export interface EngineeringTopic {
  id: string;
  label: string;
  statement: string;
  layers: LayerId[];
  points: string[];
  evidence: { project: string; note: string }[];
}

export const engineeringTopics: EngineeringTopic[] = [
  {
    id: "application",
    label: "Application Architecture",
    statement:
      "Frontend, backend API, relational database, integrations, and infrastructure are built as integrated layers, then validated as a whole system.",
    layers: ["interface", "api", "domain", "data"],
    points: [
      "React and TypeScript frontends (Vite, React Router, Axios, React Query) working against Flask REST backends.",
      "Business rules organized around configurable policies rather than embedding every commercial decision in application logic.",
      "Backend and frontend built as integrated application layers, with end-to-end validation covering the system as a whole.",
    ],
    evidence: [
      { project: "Academy", note: "React / TypeScript frontend with Flask backend and PostgreSQL" },
      { project: "Tutoring Platform", note: "Same layered stack, with policy-driven business rules" },
      { project: "DynamicQR", note: "Flask backend with HTML and CSS" },
    ],
  },
  {
    id: "integrity",
    label: "Data Integrity",
    statement:
      "Relational models, constraints, and migrations, with explicit states and historical records instead of a single mutable balance.",
    layers: ["data", "domain"],
    points: [
      "PostgreSQL-backed models, schema migrations, and database constraints.",
      "Explicit state transitions across complex financial workflows.",
      "Effective-dated agreements and policy changes kept as historical records.",
      "Correction workflows that preserve history and support traceable changes.",
    ],
    evidence: [
      { project: "Tutoring Platform", note: "Financial states, corrections, effective-dated records" },
      { project: "Academy", note: "PostgreSQL persistence with structured migrations" },
      { project: "DynamicQR", note: "SQLite with Alembic / Flask-Migrate migrations" },
    ],
  },
  {
    id: "security",
    label: "Security",
    statement:
      "Authentication and authorization are part of the architecture, with request-level protection layered on top.",
    layers: ["api", "domain"],
    points: [
      "Permission-driven authorization connecting user permissions to protected resources and actions.",
      "Bcrypt for credentials; authentication and access control throughout the applications.",
      "CSRF protection (Flask-WTF, CSRFProtect), rate limiting (Flask-Limiter), and request validation.",
      "Guardrails on the AI help desk to reduce misuse.",
    ],
    evidence: [
      { project: "Academy", note: "Super Admin, Admin, Instructor, and Learner roles; Flask-WTF; Flask-Limiter; Bcrypt" },
      { project: "Tutoring Platform", note: "Distinct permissions per role; authentication and access control; Bcrypt" },
      { project: "DynamicQR", note: "CSRF safeguards and rate limiting" },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    statement: "External services connected into the product workflows they serve.",
    layers: ["integrations", "api"],
    points: [
      "Video processing: extracted audio sent to an external transcription API and normalized into WebVTT subtitles.",
      "LiveKit-based online teaching built into the tutoring workflow.",
      "Google AI API workflows that analyze meeting transcripts for student progress and write concise session summaries.",
      "An AI help desk with token-efficient prompts.",
    ],
    evidence: [
      { project: "Academy", note: "Transcription API, Video.js playback, AI help desk" },
      { project: "Tutoring Platform", note: "LiveKit and Google AI API" },
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    statement:
      "Linux-based deployment architecture, service management, and troubleshooting, prepared hands-on rather than only studied.",
    layers: ["runtime", "data"],
    points: [
      "Gunicorn application server behind an Nginx reverse proxy, with PostgreSQL, Redis, and Celery / RedBeat services.",
      "Application configuration, service management, database migration, and deployment troubleshooting.",
      "Process management on Linux.",
    ],
    evidence: [
      { project: "Academy", note: "Linux-based deployment architecture prepared" },
      { project: "Tutoring Platform", note: "Deployment preparation and end-to-end testing underway" },
    ],
  },
];
