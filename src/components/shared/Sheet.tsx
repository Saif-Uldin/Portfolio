import type { ReactNode } from "react";

interface SheetProps {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** A numbered "drawing sheet" frame used by every top-level section. */
export function Sheet({ id, number, label, title, lede, children, className = "" }: SheetProps) {
  return (
    <section id={id} className={`sheet ${className}`} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <header className="sheet__head reveal">
          <p className="sheet__label mono">
            <b>Sheet {number}</b>
            <span>{label}</span>
          </p>
          <div>
            <h2 id={`${id}-title`} className="sheet__title">
              {title}
            </h2>
            {lede ? <p className="sheet__lede" style={{ marginTop: 20 }}>{lede}</p> : null}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
