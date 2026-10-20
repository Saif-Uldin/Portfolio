import { useId, useState, type ReactNode } from "react";

interface DisclosureProps {
  summary: string;
  meta?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

/** Accessible progressive disclosure. Content stays in the DOM, so it remains indexable and printable. */
export function Disclosure({ summary, meta, defaultOpen = false, children }: DisclosureProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={`disclosure ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="disclosure__btn"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="disclosure__icon" aria-hidden="true" />
        <span className="disclosure__title">{summary}</span>
        {meta ? <span className="disclosure__meta mono">{meta}</span> : null}
      </button>
      <div id={panelId} className="disclosure__panel" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
