import { Fragment } from "react";

interface Row {
  id: string;
  project: string;
  status: string;
  cells: { layer: string; text: string }[];
  signature: { layer: string; text: string };
  href: string;
}

/**
 * Layered architecture of the three products. Every label comes from the resume's technology lists.
 * Layers resolve left to right: the shared foundations first, each product's signature system last.
 */
const rows: Row[] = [
  {
    id: "academy",
    project: "Academy LMS",
    status: "Deployment architecture prepared",
    href: "#academy",
    cells: [
      { layer: "Interface", text: "React · TypeScript · Video.js" },
      { layer: "Application", text: "Flask · role permissions" },
      { layer: "Data", text: "PostgreSQL · migrations" },
      { layer: "Infrastructure", text: "Redis · Celery/RedBeat · Gunicorn · Nginx" },
    ],
    signature: { layer: "Signature system", text: "Video & transcription pipeline" },
  },
  {
    id: "tutoring",
    project: "Tutoring Platform",
    status: "Integrated testing",
    href: "#tutoring",
    cells: [
      { layer: "Interface", text: "React · TypeScript" },
      { layer: "Application", text: "Flask · access control" },
      { layer: "Data", text: "PostgreSQL · migrations" },
      { layer: "Infrastructure", text: "Redis · Celery · Gunicorn · Nginx" },
    ],
    signature: { layer: "Signature system", text: "Billing & financial engine" },
  },
  {
    id: "dynamicqr",
    project: "DynamicQR",
    status: "Deployed",
    href: "#dynamicqr",
    cells: [
      { layer: "Interface", text: "HTML · CSS" },
      { layer: "Application", text: "Flask · CSRF · rate limiting" },
      { layer: "Data", text: "SQLite · migrations" },
      { layer: "Output", text: "PDF / SVG libraries" },
    ],
    signature: { layer: "Signature system", text: "Dynamic destinations" },
  },
];

const columns = ["Product", "Interface", "Application", "Data", "Infrastructure / output", "Signature system"];

export function SystemMap() {
  return (
    <figure className="sysmap" aria-labelledby="sysmap-caption">
      <div className="sysmap__head mono" aria-hidden="true">
        {columns.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <ul className="sysmap__rows">
        {rows.map((row, r) => (
          <li key={row.id} className="sysmap__row" style={{ ["--r" as string]: r }}>
            <a className="sysmap__product" href={row.href}>
              <span className="sysmap__name">{row.project}</span>
              <span className="sysmap__status mono">{row.status}</span>
            </a>
            {row.cells.map((cell, c) => (
              <Fragment key={cell.layer + c}>
                <div className="sysmap__cell" style={{ ["--c" as string]: c }}>
                  <span className="sysmap__layer mono">{cell.layer}</span>
                  <span className="sysmap__text">{cell.text}</span>
                </div>
              </Fragment>
            ))}
            <div className="sysmap__cell sysmap__cell--signature" style={{ ["--c" as string]: 4 }}>
              <span className="sysmap__layer mono">{row.signature.layer}</span>
              <span className="sysmap__text">{row.signature.text}</span>
            </div>
          </li>
        ))}
      </ul>
      <figcaption id="sysmap-caption" className="sysmap__caption mono">
        Fig. 01 — Layers of each independently built product, as listed in the resume. Not every technology is used in every project.
      </figcaption>
    </figure>
  );
}
