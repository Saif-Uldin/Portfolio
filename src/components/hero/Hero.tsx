import { person } from "../../data/resume";
import { SystemMap } from "./SystemMap";

export function Hero() {
  return (
    <section id="overview" className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero__top">
          <div className="hero__lead">
            <p className="hero__eyebrow mono reveal">
              <span className="dot" aria-hidden="true" />
              {person.title} · {person.subtitle}
            </p>
            <h1 id="hero-title" className="hero__title reveal">
              Complex systems.
              <br />
              <em>Carefully engineered.</em>
            </h1>
            <p className="hero__name reveal">
              <span className="mono">Saifuldin Mohammed</span>
              <span className="hero__loc mono">{person.location}</span>
            </p>
          </div>

          <div className="hero__side reveal">
            <p className="hero__intro">
              I design and build end-to-end web applications on my own: permission-driven learning software, a
              policy-driven billing engine, and a subscription QR product. Three independent products covering
              database design, security, integrations, and Linux-based deployment.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                Explore Projects
              </a>
              <button type="button" className="btn" onClick={() => window.print()}>
                Print / Save Resume
              </button>
              <a className="btn" href="#contact">
                Contact
              </a>
            </div>
            <dl className="hero__facts mono">
              <div>
                <dt>Built independently</dt>
                <dd>3 products</dd>
              </div>
              <div>
                <dt>Core stack</dt>
                <dd>Python · TypeScript</dd>
              </div>
              <div>
                <dt>Strongest evidence</dt>
                <dd>Billing engine · Academy</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="reveal">
          <SystemMap />
        </div>
      </div>
    </section>
  );
}
