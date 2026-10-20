import { useEffect, useRef, useState } from "react";
import { navItems, person } from "../../data/resume";
import { useActiveSection } from "../shared/hooks";

const ids = navItems.map((n) => n.id);

export function Header() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const print = () => window.print();

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a href="#top" className="brand" aria-label={`${person.name} — back to top`}>
          <span className="brand__name">{person.name}</span>
          <span className="brand__tag mono">/ dev</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="btn btn--small" onClick={print}>
            Print / Save as PDF
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle__bars" />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="nav-mobile" aria-label="Primary mobile" hidden={!open}>
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            <span>{item.label}</span>
            <span className="mono" style={{ color: "var(--ink-3)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </a>
        ))}
        <button
          type="button"
          className="btn"
          onClick={() => {
            setOpen(false);
            print();
          }}
        >
          Print / Save as PDF
        </button>
      </nav>

      <div className="progress" ref={barRef} aria-hidden="true" />
    </header>
  );
}
