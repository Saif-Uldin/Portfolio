import { dynamicqr } from "../../data/projects";
import { TagList } from "../shared/Tags";
import { BulletGroups } from "./BulletGroups";
import { QRDemo } from "./QRDemo";

const points = [
  { k: "Destination management", v: "Users manage where a QR code points, without replacing the physical code." },
  { k: "QR customization", v: "Detailed customization capabilities for different product and usage requirements." },
  { k: "Subscription product", v: "Designed and deployed as a subscription-based platform." },
  { k: "Safeguards", v: "Database migrations, request protection, CSRF safeguards, and rate limiting." },
];

export function DynamicQRShowcase() {
  return (
    <article id="dynamicqr" className="project project--dynamicqr" aria-labelledby="dynamicqr-name">
      <header className="project__head">
        <p className="project__index mono">
          <span>Project {dynamicqr.index}</span>
          <span>Compact product</span>
        </p>
        <h3 id="dynamicqr-name" className="project__name">
          DynamicQR <em>Dynamic QR Code Management Platform</em>
        </h3>
        <p className="project__role mono">{dynamicqr.role}</p>
        <p className="project__intro">{dynamicqr.intro}</p>
        <p className="project__problem">
          <span className="mono">The problem</span>
          QR codes printed or engraved on physical objects become costly to replace when a destination changes.
        </p>
      </header>

      <QRDemo />

      <ul className="qrpoints">
        {points.map((p) => (
          <li key={p.k}>
            <span className="mono">{p.k}</span>
            <p>{p.v}</p>
          </li>
        ))}
      </ul>

      <div className="project__foot">
        <h5 className="subhead mono">Full resume detail</h5>
        <BulletGroups groups={dynamicqr.groups} />
        <h5 className="subhead mono">Technologies</h5>
        <TagList items={dynamicqr.stack} label="DynamicQR technologies" />
      </div>
    </article>
  );
}
