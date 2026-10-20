import { billingLifecycle, tutoring } from "../../data/projects";
import { TagList } from "../shared/Tags";
import { Stepper } from "../shared/Stepper";
import { BulletGroups } from "./BulletGroups";
import { FinancialDomainMap } from "./FinancialDomainMap";

const roles = ["Administrators", "Managers", "Parents", "Teachers", "Students"];

const academicOps = [
  { t: "Multi-role workflows", d: "Distinct permissions and workflows for administrators, managers, parents, teachers, and students." },
  { t: "Academic planning", d: "Curriculum planning, lessons, scheduled sessions, and participant responsibilities." },
  { t: "LiveKit online teaching", d: "LiveKit-based online teaching functionality integrated into the platform." },
  { t: "AI-assisted session analysis", d: "Google AI API workflows analyze meeting transcripts with a focus on student progress and produce concise session summaries." },
];

const financialCapabilities = [
  "Configurable session rates, teacher agreements, operational fees, and tax policies",
  "Prepaid and postpaid arrangements, set per parent",
  "Billing cycles and statements that distinguish expected charges from actual session outcomes",
  "Payment evidence submission and administrative verification",
  "Receivables, staff compensation tracking, refunds, credits, adjustments, and settlement calculations",
  "Controls for unresolved sessions, overdue accounts, payment-related restrictions, and financial finalization",
];

export function TutoringShowcase() {
  return (
    <article id="tutoring" className="project project--tutoring" aria-labelledby="tutoring-name">
      <header className="project__head reveal">
        <p className="project__index mono">
          <span>Project {tutoring.index}</span>
          <span>Operations &amp; finance</span>
        </p>
        <h3 id="tutoring-name" className="project__name">
          Tutoring &amp; Academic <em>Management Platform</em>
        </h3>
        <p className="project__role mono">{tutoring.role}</p>
        <p className="project__intro">{tutoring.intro}</p>
        <div className="status status--amber" role="note">
          <span className="status__label mono">Current status</span>
          <p>{tutoring.status}</p>
          <p className="status__sub">Not yet deployed or publicly available.</p>
        </div>
      </header>

      <section className="domain reveal" aria-labelledby="tutoring-ops">
        <div className="domain__head">
          <p className="domain__num mono">Domain A</p>
          <h4 id="tutoring-ops" className="domain__title">Academic Operations</h4>
        </div>
        <div>
          <ul className="chiprow" aria-label="User roles">
            {roles.map((r) => (
              <li key={r} className="tag tag--amber">
                {r}
              </li>
            ))}
          </ul>
          <dl className="deflist">
            {academicOps.map((o) => (
              <div key={o.t}>
                <dt>{o.t}</dt>
                <dd>{o.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="domain domain--fin reveal" aria-labelledby="tutoring-fin">
        <div className="domain__head">
          <p className="domain__num mono">Domain B</p>
          <h4 id="tutoring-fin" className="domain__title">Financial Architecture</h4>
          <p className="domain__note">
            The billing module is a system of its own: distinct financial domains, policy-driven calculations, explicit state transitions, and historical records.
          </p>
        </div>
        <div className="domain__body">
          <FinancialDomainMap />

          <h5 className="subhead mono">Statement-to-settlement lifecycle</h5>
          <Stepper
            stages={billingLifecycle}
            label="Billing lifecycle stages"
            accent="amber"
            caption="Fig. 06 — Explanatory model of the workflow described in the resume. Payments are evidenced and verified by administrators; no payment gateway is implied."
          />

          <h5 className="subhead mono">What the financial engine covers</h5>
          <ul className="bulletlist bulletlist--cols">
            {financialCapabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="domain reveal" aria-labelledby="tutoring-rel">
        <div className="domain__head">
          <p className="domain__num mono">Domain C</p>
          <h4 id="tutoring-rel" className="domain__title">Engineering &amp; Reliability</h4>
        </div>
        <div className="domain__body">
          <ul className="bulletlist">
            {tutoring.groups[2].bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="project__foot reveal">
        <h5 className="subhead mono">Full resume detail</h5>
        <BulletGroups groups={tutoring.groups} />
        <h5 className="subhead mono">Technologies</h5>
        <TagList items={tutoring.stack} label="Tutoring platform technologies" />
      </div>
    </article>
  );
}
