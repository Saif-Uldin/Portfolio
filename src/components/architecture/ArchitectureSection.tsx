import { useId, useRef, useState, type KeyboardEvent } from "react";
import { engineeringTopics, layers } from "../../data/engineering";
import { additionalStrengths, skills } from "../../data/resume";
import { Disclosure } from "../shared/Disclosure";
import { Sheet } from "../shared/Sheet";

/**
 * Interactive architecture map. Choosing a concern highlights the layers it touches
 * and lists which project demonstrates it, so technologies appear in context, not as a logo wall.
 */
function ArchitectureMap() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const topic = engineeringTopics[active];

  const move = (i: number) => {
    const next = (i + engineeringTopics.length) % engineeringTopics.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      move(i + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      move(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      move(0);
    } else if (e.key === "End") {
      e.preventDefault();
      move(engineeringTopics.length - 1);
    }
  };

  return (
    <div className="arch">
      <div className="arch__tabs" role="tablist" aria-label="Engineering concerns" aria-orientation="vertical">
        {engineeringTopics.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            id={`${baseId}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            className="arch__tab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            {t.label}
          </button>
        ))}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="arch__panel" tabIndex={0}>
        <figure className="arch__diagram">
          <ol className="layers" aria-label="System layers. Highlighted layers are involved in the selected concern.">
            {layers.map((l) => {
              const on = topic.layers.includes(l.id);
              return (
                <li key={l.id} className={`layer ${on ? "is-on" : ""}`}>
                  <span className="layer__label mono">{l.label}</span>
                  <span className="layer__items">{l.items}</span>
                  {on ? <span className="visually-hidden"> (involved)</span> : null}
                </li>
              );
            })}
          </ol>
          <figcaption className="figcap mono">
            Fig. 07 — Highlighted layers are involved in “{topic.label}”. Not every technology is used in every project.
          </figcaption>
        </figure>

        <div className="arch__detail">
          <h3 className="arch__title">{topic.label}</h3>
          <p className="arch__statement">{topic.statement}</p>
          <ul className="bulletlist">
            {topic.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h4 className="subhead mono">Where it shows up</h4>
          <ul className="evidence">
            {topic.evidence.map((e) => (
              <li key={e.project}>
                <span className="tag tag--cyan">{e.project}</span>
                <span>{e.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <Sheet
      id="engineering"
      number="03"
      label="Architecture & engineering"
      title={
        <>
          How I approach <em>engineering problems.</em>
        </>
      }
      lede="Choose a concern to see which layers of a system it touches and which project demonstrates it."
      className="sheet--engineering"
    >
      <div className="reveal">
        <ArchitectureMap />
      </div>

      <div className="toolchain reveal">
        <h3 className="toolchain__title">Toolchain &amp; skills</h3>
        <dl className="skills">
          {skills.map((g) => (
            <div key={g.label} className="skills__row">
              <dt className="mono">{g.label}</dt>
              <dd>
                <ul className="tag-list" aria-label={g.label}>
                  {g.items.map((i) => (
                    <li key={i} className="tag">
                      {i}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="strengths reveal">
        <Disclosure summary="Additional strengths" meta={`${additionalStrengths.length} items`} defaultOpen>
          <ul className="bulletlist bulletlist--cols">
            {additionalStrengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Disclosure>
      </div>
    </Sheet>
  );
}
