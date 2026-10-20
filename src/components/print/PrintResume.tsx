import { additionalStrengths, person, skills, summary } from "../../data/resume";
import { dynamicqr, academy, tutoring, type ProjectMeta } from "../../data/projects";
import { educationSorted } from "../../data/education";

/**
 * Plain, complete resume. Hidden on screen and shown only when printing,
 * so the printed page is a conventional white-background document rather than the dark site.
 * Order follows the supplied resume.
 */
function PrintProject({ project, n }: { project: ProjectMeta; n: number }) {
  return (
    <section className="pr-project">
      <h3>
        {n}. {project.name}
        {project.id !== "tutoring" && project.tagline !== project.name ? ` — ${project.tagline}` : ""}
      </h3>
      <p className="pr-role">{project.role}</p>
      <p className="pr-tech">
        <strong>Technologies:</strong> {project.stack.join(", ")}
      </p>
      <p>{project.intro}</p>
      {project.groups.map((g) => (
        <div key={g.heading} className="pr-group">
          <h4>{g.heading}</h4>
          <ul>
            {g.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
      {project.status ? (
        <p>
          <strong>Current status:</strong> {project.status}
        </p>
      ) : null}
      {project.focus ? (
        <p>
          <strong>Engineering focus:</strong> {project.focus}
        </p>
      ) : null}
    </section>
  );
}

export function PrintResume() {
  const training = educationSorted.filter((e) => e.category !== "Education");

  return (
    <div className="print-resume" aria-hidden="false">
      <header className="pr-head">
        <h1>{person.name}</h1>
        <p className="pr-title">
          <strong>{person.title}</strong> | {person.subtitle}
        </p>
        <p>
          {person.location} · {person.phone} · {person.email}
          <br />
          GitHub: {person.github}
        </p>
      </header>

      <section>
        <h2>Professional Summary</h2>
        {summary.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </section>

      <section>
        <h2>Technical Skills</h2>
        <dl className="pr-skills">
          {skills.map((g) => (
            <div key={g.label}>
              <dt>{g.label}:</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>Featured Software Projects</h2>
        <PrintProject project={tutoring} n={1} />
        <PrintProject project={academy} n={2} />
        <PrintProject project={dynamicqr} n={3} />
      </section>

      <section>
        <h2>Education</h2>
        {educationSorted
          .filter((e) => e.category === "Education")
          .map((e) => (
            <p key={e.id}>
              <strong>
                {e.provider} — {e.title}
              </strong>
              <br />
              {e.date}
            </p>
          ))}
      </section>

      <section>
        <h2>Certifications &amp; Professional Training</h2>
        <p className="pr-note">
          Listed in reverse chronological order. School coursework is identified separately from external training and certificates.
        </p>
        <ul className="pr-training">
          {training.map((e) => (
            <li key={e.id}>
              <strong lang={e.rtl ? "ar" : undefined} dir={e.rtl ? "rtl" : undefined}>
                {e.title}
              </strong>
              {e.titleAlt ? ` (${e.titleAlt})` : ""} — {e.provider} · {e.duration ? `${e.duration} · ` : ""}
              {e.date} · <em>{e.category}</em>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Additional Strengths</h2>
        <ul>
          {additionalStrengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
