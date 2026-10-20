import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { LifecycleStage } from "../../data/projects";

interface StepperProps {
  stages: LifecycleStage[];
  label: string;
  accent: "cyan" | "amber";
  /** Shown beneath the diagram to make clear what the diagram represents. */
  caption?: string;
}

/**
 * Keyboard-accessible flow diagram. Stages are a tablist; arrow keys move between them.
 * Every stage's explanation is also available as a plain ordered list for print and no-JS readers.
 */
export function Stepper({ stages, label, accent, caption }: StepperProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (i: number) => {
    const next = (i + stages.length) % stages.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab(i + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(stages.length - 1);
    }
  };

  const stage = stages[active];

  return (
    <figure className={`stepper stepper--${accent}`}>
      <div className="stepper__rail" role="tablist" aria-label={label}>
        {stages.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            id={`${baseId}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={`stepper__node ${i < active ? "is-past" : ""} ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="stepper__num mono">{String(i + 1).padStart(2, "0")}</span>
            <span className="stepper__label">{s.label}</span>
          </button>
        ))}
      </div>
      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="stepper__panel"
        tabIndex={0}
      >
        <p className="stepper__summary">{stage.summary}</p>
        <ul className="stepper__details">
          {stage.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      {caption ? <figcaption className="stepper__caption mono">{caption}</figcaption> : null}
    </figure>
  );
}
