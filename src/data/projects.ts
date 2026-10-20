export interface BulletGroup {
  heading: string;
  bullets: string[];
}

export interface ProjectMeta {
  id: "academy" | "tutoring" | "dynamicqr";
  index: string;
  name: string;
  tagline: string;
  role: string;
  status?: string;
  intro: string;
  stack: string[];
  groups: BulletGroup[];
  focus?: string;
}

export const academy: ProjectMeta = {
  id: "academy",
  index: "01",
  name: "Academy",
  tagline: "Organizational Learning Management System",
  role: "Independent Project — Full-Stack Development, System Architecture & Production Infrastructure",
  intro:
    "Independently designed, developed, and prepared an organizational learning management system with structured course delivery, role-based permissions, video learning, assessment workflows, and AI-assisted support.",
  stack: [
    "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Alembic/Flask-Migrate", "React", "TypeScript", "Vite",
    "React Router", "Axios", "React Query", "Bcrypt", "Flask-WTF", "Flask-Limiter", "Video.js", "Redis",
    "Celery", "RedBeat", "Gunicorn", "Nginx",
  ],
  groups: [
    {
      heading: "Application Architecture & Learning Management",
      bullets: [
        "Designed a permission-driven architecture with Super Admin, Admin, Instructor, and Learner roles, connecting user permissions to protected resources and actions.",
        "Developed department-based course organization, enrollment workflows, lessons, learning items, assessments, completion tracking, and passing-threshold logic.",
        "Implemented course publication requirements and completion-based certificate eligibility.",
        "Built the React/TypeScript frontend and Flask backend with PostgreSQL persistence and structured database migrations.",
      ],
    },
    {
      heading: "Video Learning & Transcription Pipeline",
      bullets: [
        "Integrated Video.js into the learning experience and developed video progress controls designed to discourage bypassing required learning content.",
        "Implemented video processing workflows that produce multiple quality variants to support playback under differing network conditions.",
        "Integrated external transcription APIs into the media workflow by extracting audio from uploaded videos, submitting it for transcription, and normalizing returned results into WebVTT subtitle files for frontend use.",
        "Connected media processing and playback progress to the broader learning workflow.",
      ],
    },
    {
      heading: "AI-Assisted Support",
      bullets: [
        "Developed an AI-powered help-desk workflow designed to answer questions using an understanding of the application and its functionality.",
        "Incorporated guardrails to reduce misuse and optimized prompts to improve token efficiency.",
      ],
    },
    {
      heading: "Deployment & Operations",
      bullets: [
        "Prepared a Linux-based deployment architecture using Gunicorn, Nginx, PostgreSQL, Redis, and Celery/RedBeat services.",
        "Worked across application configuration, service management, database migration, reverse-proxy integration, and deployment troubleshooting.",
      ],
    },
  ],
  focus:
    "Secure access control, maintainable architecture, reliable media workflows, and operational readiness for an organizational application.",
};

export const tutoring: ProjectMeta = {
  id: "tutoring",
  index: "02",
  name: "Tutoring & Academic Management Platform",
  tagline: "Multi-role academic operations with a policy-driven billing engine",
  role: "Independent Project — Full-Stack Development, System Architecture & Deployment Preparation",
  status: "Core development is complete; integrated system testing and deployment preparation are underway.",
  intro:
    "Independently designed and developed a comprehensive tutoring management platform that connects students, parents, teachers, managers, and administrators through structured academic workflows and financial operations. The complete system is undergoing end-to-end testing in preparation for deployment.",
  stack: [
    "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Alembic/Flask-Migrate", "React", "TypeScript", "Vite",
    "React Router", "Axios", "React Query", "Bcrypt", "Redis", "Celery", "Gunicorn", "Nginx", "LiveKit", "Google AI API",
  ],
  groups: [
    {
      heading: "Platform Architecture & Academic Workflows",
      bullets: [
        "Designed a multi-role application with distinct permissions and workflows for administrators, managers, parents, teachers, and students.",
        "Built academic planning and management workflows around curriculum planning, lessons, scheduled sessions, and participant responsibilities.",
        "Integrated LiveKit-based online teaching functionality into the platform.",
        "Integrated Google AI API workflows to analyze meeting transcripts with a focus on student progress and produce concise session summaries.",
        "Implemented authentication, access control, database migrations, and structured backend/frontend integration.",
      ],
    },
    {
      heading: "Billing & Financial Management Engine",
      bullets: [
        "Designed and implemented a comprehensive, policy-driven billing system covering parent charges, teacher compensation, manager allocations, and organizational financial records as distinct financial domains.",
        "Built configurable billing rules around session rates, teacher agreements, operational fees, tax policies, and parent-specific prepaid or postpaid arrangements.",
        "Developed contract and rate-management workflows with administrative limits, manager-level configuration, and historical records for effective-dated agreements and policy changes.",
        "Implemented billing-cycle and statement workflows that distinguish expected charges from actual session outcomes, including different settlement behavior for prepaid and postpaid arrangements.",
        "Built workflows for payment evidence submission, administrative payment verification, receivables, staff compensation tracking, refunds, credits, adjustments, and settlement calculations.",
        "Designed financial state transitions and correction workflows to preserve historical records and support traceable changes instead of relying on a single mutable balance.",
        "Incorporated controls for unresolved sessions, overdue accounts, payment-related restrictions, and financial finalization.",
        "Structured the financial model to keep customer billing, staff compensation, and the platform provider’s own subscription billing separate.",
      ],
    },
    {
      heading: "Engineering & Reliability",
      bullets: [
        "Used PostgreSQL-backed models, schema migrations, database constraints, and explicit state transitions to support data integrity across complex financial workflows.",
        "Organized business rules around configurable policies rather than embedding every commercial decision directly in application logic.",
        "Built the backend and frontend as integrated application layers, with deployment preparation and end-to-end validation covering the system as a whole.",
      ],
    },
  ],
};

export const dynamicqr: ProjectMeta = {
  id: "dynamicqr",
  index: "03",
  name: "DynamicQR",
  tagline: "Dynamic QR Code Management Platform",
  role: "Independent Project — Product Design, Full-Stack Development & Deployment",
  intro:
    "Independently designed, developed, and deployed a subscription-based dynamic QR platform that enables users to manage QR destinations without having to replace the physical QR code.",
  stack: [
    "Python", "Flask", "SQLite", "Alembic/Flask-Migrate", "Flask-WTF", "CSRFProtect", "Flask-Limiter", "HTML", "CSS", "PDF/SVG libraries",
  ],
  groups: [
    {
      heading: "What was built",
      bullets: [
        "Built a backend application for managing dynamic QR destinations and their associated behavior.",
        "Addressed the practical problem of QR codes printed or engraved on physical objects becoming costly to replace when a destination changes.",
        "Designed detailed QR customization capabilities to support different product and usage requirements.",
        "Implemented database migrations, request protection, CSRF safeguards, and rate limiting.",
        "Combined product thinking with full-stack implementation to deliver a solution to a real-world operational problem.",
      ],
    },
  ],
};

/** Tutoring platform financial lifecycle, as an explanatory model of the described system. */
export interface LifecycleStage {
  id: string;
  label: string;
  summary: string;
  details: string[];
}

export const billingLifecycle: LifecycleStage[] = [
  {
    id: "policy",
    label: "Policy & Agreements",
    summary: "Configurable rules decide what a session is worth.",
    details: [
      "Session rates, teacher agreements, operational fees, and tax policies are configurable rather than hard-coded.",
      "Parent-specific prepaid or postpaid arrangements.",
      "Administrative limits with manager-level configuration.",
      "Effective-dated agreements and policy changes keep historical records.",
    ],
  },
  {
    id: "sessions",
    label: "Session Outcomes",
    summary: "What actually happened, versus what was expected.",
    details: [
      "Billing distinguishes expected charges from actual session outcomes.",
      "Controls exist for unresolved sessions.",
    ],
  },
  {
    id: "calculation",
    label: "Billing Calculation",
    summary: "Policies are applied to outcomes within billing cycles.",
    details: [
      "Billing-cycle workflows apply the resolved policies to session outcomes.",
      "Prepaid and postpaid arrangements settle differently.",
    ],
  },
  {
    id: "statement",
    label: "Statement",
    summary: "A statement records the charges for the cycle.",
    details: [
      "Statement workflows separate expected charges from actual ones.",
      "Financial finalization rules control when a record is closed.",
    ],
  },
  {
    id: "verification",
    label: "Payment Verification",
    summary: "Manual evidence, administrative verification.",
    details: [
      "Payment evidence submission followed by administrative payment verification.",
      "Overdue accounts and payment-related restrictions are handled by explicit controls.",
      "There is no payment gateway in this description: payments are evidenced and verified by administrators.",
    ],
  },
  {
    id: "settlement",
    label: "Settlement & Compensation",
    summary: "Receivables, staff compensation, and corrections.",
    details: [
      "Receivables, staff compensation tracking, and settlement calculations.",
      "Refunds, credits, and adjustments.",
      "Corrections follow explicit state transitions that preserve history, rather than editing a single mutable balance.",
    ],
  },
];

export interface FinancialDomain {
  id: string;
  label: string;
  description: string;
}

export const financialDomains: FinancialDomain[] = [
  {
    id: "parent",
    label: "Parent charges",
    description: "Customer billing: what parents are charged, under their prepaid or postpaid arrangement.",
  },
  {
    id: "staff",
    label: "Teacher compensation",
    description: "Staff compensation tracking, driven by teacher agreements.",
  },
  {
    id: "manager",
    label: "Manager allocations",
    description: "Allocations to managers, kept as their own financial domain.",
  },
  {
    id: "org",
    label: "Organizational records",
    description: "The organization's own financial records.",
  },
  {
    id: "provider",
    label: "Provider subscription",
    description: "The platform provider’s own subscription billing, kept separate from customer billing and staff compensation.",
  },
];

export const videoPipeline: LifecycleStage[] = [
  {
    id: "upload",
    label: "Video upload",
    summary: "A video is uploaded into the learning platform.",
    details: ["Uploaded videos enter the media workflow."],
  },
  {
    id: "variants",
    label: "Quality variants",
    summary: "Multiple quality variants are produced.",
    details: ["Variants support playback under differing network conditions."],
  },
  {
    id: "audio",
    label: "Audio extraction",
    summary: "Audio is extracted from the uploaded video.",
    details: ["The extracted audio is submitted to an external transcription API."],
  },
  {
    id: "transcription",
    label: "Transcription",
    summary: "An external API returns the transcript.",
    details: ["Returned results are normalized before the frontend uses them."],
  },
  {
    id: "webvtt",
    label: "WebVTT normalization",
    summary: "Results become WebVTT subtitle files.",
    details: ["Normalized into WebVTT subtitle files for frontend use."],
  },
  {
    id: "playback",
    label: "Playback & progress",
    summary: "Video.js plays the lesson with progress controls.",
    details: [
      "Playback progress controls are designed to discourage bypassing required learning content.",
      "Progress connects to the broader completion-tracking workflow.",
    ],
  },
];

export const academyRoles = ["Super Admin", "Admin", "Instructor", "Learner"] as const;

export const academyHierarchy = [
  "Department",
  "Course",
  "Lesson",
  "Learning item",
  "Assessment",
  "Completion",
  "Certificate eligibility",
] as const;
