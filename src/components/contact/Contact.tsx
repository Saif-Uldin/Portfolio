import { person } from "../../data/resume";
import { Sheet } from "../shared/Sheet";

const actions = [
  { k: "Email", v: person.email, href: person.emailHref, label: `Email ${person.name}` },
  { k: "Phone", v: person.phone, href: person.phoneHref, label: `Call ${person.name}` },
  { k: "GitHub", v: person.githubLabel, href: person.github, label: `${person.name} on GitHub`, external: true },
] as const;

export function Contact() {
  return (
    <Sheet
      id="contact"
      number="05"
      label="Contact"
      title={
        <>
          Have a complex problem <em>worth solving?</em>
        </>
      }
      lede="I'm a full-stack developer who owns systems from database design to deployment. The quickest way to reach me is email or phone."
      className="sheet--contact"
    >
      <ul className="contact reveal">
        {actions.map((a) => (
          <li key={a.k}>
            <a
              href={a.href}
              aria-label={a.label}
              {...("external" in a ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="contact__k mono">{a.k}</span>
              <span className="contact__v">{a.v}</span>
              <span className="contact__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
        <li>
          <div className="contact__static">
            <span className="contact__k mono">Location</span>
            <span className="contact__v">{person.location}</span>
          </div>
        </li>
      </ul>

      <div className="contact__print reveal">
        <button type="button" className="btn" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
        <p className="mono">Opens your browser’s print dialog. Choose “Save as PDF” for a file.</p>
      </div>
    </Sheet>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner mono">
        <span>
          © {new Date().getFullYear()} {person.name}
        </span>
        <span>All featured projects are independent work · {person.location}</span>
      </div>
    </footer>
  );
}
