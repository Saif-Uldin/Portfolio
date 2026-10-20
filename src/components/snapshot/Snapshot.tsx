import { summary } from "../../data/resume";

interface Capability {
  id: string;
  title: string;
  statement: string;
  evidence: string[];
  where: string;
}

/** Capabilities and evidence are taken from the resume; "where" points at the project that demonstrates each. */
const capabilities: Capability[] = [
  {
    id: "fullstack",
    title: "Full-stack application development",
    statement: "React and TypeScript frontends wired to Flask REST backends, built as integrated layers.",
    evidence: ["React", "TypeScript", "Flask", "REST APIs", "React Query"],
    where: "All three products",
  },
  {
    id: "data",
    title: "System & database architecture",
    statement: "Relational models, migrations, constraints, and explicit state transitions.",
    evidence: ["PostgreSQL", "SQLAlchemy", "Alembic / Flask-Migrate"],
    where: "All three products",
  },
  {
    id: "security",
    title: "Security & permission models",
    statement: "Role- and permission-based authorization, CSRF protection, rate limiting, and input validation.",
    evidence: ["RBAC", "Bcrypt", "Flask-WTF", "Flask-Limiter"],
    where: "All three products",
  },
  {
    id: "finance",
    title: "Financial business logic",
    statement: "Policy-driven billing with separate financial domains and traceable corrections.",
    evidence: ["Statements", "Settlement", "Refunds & credits", "Effective-dated agreements"],
    where: "Tutoring Platform",
  },
  {
    id: "ai",
    title: "AI & external API integrations",
    statement: "Transcription APIs, LiveKit, and guarded AI workflows with token-conscious prompts.",
    evidence: ["Google AI API", "Transcription APIs", "LiveKit"],
    where: "Academy · Tutoring Platform",
  },
  {
    id: "ops",
    title: "Linux deployment & operations",
    statement: "Reverse proxy, application server, background workers, and deployment troubleshooting.",
    evidence: ["Nginx", "Gunicorn", "Redis", "Celery / RedBeat"],
    where: "Academy · Tutoring Platform",
  },
];

export function Snapshot() {
  return (
    <section className="snapshot" aria-labelledby="snapshot-title">
      <div className="wrap">
        <div className="snapshot__head reveal">
          <div>
            <p className="mono snapshot__kicker">Engineering range</p>
            <h2 id="snapshot-title" className="snapshot__title">
              Six areas of engineering, each backed by a built system.
            </h2>
          </div>
          <div className="snapshot__summary">
            <p className="mono snapshot__kicker">Professional summary</p>
            {summary.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <ol className="capindex">
          {capabilities.map((cap, i) => (
            <li key={cap.id} className="capindex__row reveal">
              <span className="capindex__num mono">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="capindex__title">{cap.title}</h3>
              <p className="capindex__statement">{cap.statement}</p>
              <div className="capindex__meta">
                <ul className="capindex__evidence mono" aria-label="Technologies and concepts">
                  {cap.evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <p className="capindex__where mono">↳ {cap.where}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
