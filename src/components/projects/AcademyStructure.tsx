import { academyHierarchy, academyRoles } from "../../data/projects";

/** Two small diagrams: how permissions reach protected resources, and how learning content is organized. */
export function AcademyStructure() {
  return (
    <div className="astruct">
      <figure className="astruct__fig">
        <h5 className="subhead mono">Permission-driven access</h5>
        <div className="perm" role="group" aria-label="Roles connect to permissions, which protect resources and actions">
          <ul className="perm__col" aria-label="Roles">
            {academyRoles.map((r) => (
              <li key={r} className="perm__node">{r}</li>
            ))}
          </ul>
          <span className="perm__arrow" aria-hidden="true" />
          <div className="perm__node perm__node--mid">Permissions</div>
          <span className="perm__arrow" aria-hidden="true" />
          <div className="perm__node perm__node--end">Protected resources &amp; actions</div>
        </div>
        <figcaption className="figcap mono">Fig. 02 — Roles connect to permissions, which guard resources and actions.</figcaption>
      </figure>

      <figure className="astruct__fig">
        <h5 className="subhead mono">Learning structure</h5>
        <ol className="chain" aria-label="Learning structure from department to certificate eligibility">
          {academyHierarchy.map((h, i) => (
            <li key={h} className="chain__item">
              <span className="chain__n mono">{String(i + 1).padStart(2, "0")}</span>
              {h}
            </li>
          ))}
        </ol>
        <figcaption className="figcap mono">
          Fig. 03 — Departments organize courses; completion and passing thresholds lead to certificate eligibility.
        </figcaption>
      </figure>
    </div>
  );
}
