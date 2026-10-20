import { Sheet } from "../shared/Sheet";
import { useActiveSection } from "../shared/hooks";
import { AcademyShowcase } from "./AcademyShowcase";
import { TutoringShowcase } from "./TutoringShowcase";
import { DynamicQRShowcase } from "./DynamicQRShowcase";

const projectIds = ["academy", "tutoring", "dynamicqr"] as const;

/** Navigation index. Segment widths echo the editorial space each system receives below. */
const index = [
  { id: "academy", n: "01", name: "Academy", weight: 38 },
  { id: "tutoring", n: "02", name: "Tutoring & Billing", weight: 43 },
  { id: "dynamicqr", n: "03", name: "DynamicQR", weight: 19 },
] as const;

export function ProjectsSection() {
  const active = useActiveSection(projectIds);

  return (
    <Sheet
      id="projects"
      number="02"
      label="Featured projects"
      title={
        <>
          Three systems, <em>built end to end.</em>
        </>
      }
      lede="Each project was designed, built, and owned independently. Diagrams on this page are explanatory representations of the systems described in the resume, not product screenshots."
      className="sheet--projects"
    >
      <nav className="pindex" aria-label="Project index">
        <ol>
          {index.map((p) => (
            <li key={p.id} style={{ flexGrow: p.weight }}>
              <a href={`#${p.id}`} aria-current={active === p.id ? "true" : undefined}>
                <span className="mono">{p.n}</span>
                <span>{p.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <AcademyShowcase />
      <TutoringShowcase />
      <DynamicQRShowcase />
    </Sheet>
  );
}
