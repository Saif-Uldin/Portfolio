import { Fragment, useMemo, useState } from "react";
import { educationSorted, type EducationCategory, type EducationEntry } from "../../data/education";
import { Sheet } from "../shared/Sheet";

type Filter = "All" | EducationCategory;

const categories: EducationCategory[] = ["Education", "Certification", "School Coursework", "External Training"];

const slug = (c: EducationCategory) => c.toLowerCase().replace(/\s+/g, "-");

const yearOf = (e: EducationEntry): string => /(\d{4})/.exec(e.date)?.[1] ?? "";

function TimelineEntry({ entry, side }: { entry: EducationEntry; side: "left" | "right" }) {
  return (
    <li className={`tl__item tl__item--${slug(entry.category)}`} data-side={side}>
      <p className="tl__date">{entry.date}</p>
      <span className="tl__marker" aria-hidden="true" />
      <div className="tl__card">
        <p className="tl__cat mono">
          <span className="tl__glyph" aria-hidden="true" />
          {entry.category}
        </p>
        <h3 className="tl__title" lang={entry.rtl ? "ar" : undefined} dir={entry.rtl ? "rtl" : undefined}>
          {entry.title}
        </h3>
        {entry.titleAlt ? <p className="tl__alt">{entry.titleAlt}</p> : null}
        <p className="tl__provider">{entry.provider}</p>
        {entry.duration ? <p className="tl__duration mono">{entry.duration}</p> : null}
      </div>
    </li>
  );
}

export function TimelineSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const c = new Map<Filter, number>([["All", educationSorted.length]]);
    for (const cat of categories) c.set(cat, educationSorted.filter((e) => e.category === cat).length);
    return c;
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? educationSorted : educationSorted.filter((e) => e.category === filter)),
    [filter],
  );

  let entryIndex = -1;
  let lastYear = "";

  return (
    <Sheet
      id="education"
      number="04"
      label="Education & training"
      title={
        <>
          Learning, <em>in order.</em>
        </>
      }
      lede="Newest first. School coursework, one school certification, and external online training are labelled separately: not every entry is a professional certification."
      className="sheet--paper sheet--timeline"
    >
      <div className="tl-controls reveal">
        <div role="group" aria-label="Filter timeline by type" className="tl-filters">
          {(["All", ...categories] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="mono"> {counts.get(f)}</span>
            </button>
          ))}
        </div>
        <p className="mono tl-count" role="status">
          Showing {visible.length} of {educationSorted.length} entries
        </p>
      </div>

      <ol className="tl" aria-label="Education and training, newest first">
        {visible.map((entry) => {
          entryIndex += 1;
          const year = yearOf(entry);
          const showYear = year !== lastYear;
          lastYear = year;
          return (
            <Fragment key={entry.id}>
              {showYear ? (
                <li className="tl__year" aria-hidden="true">
                  <span className="mono">{year}</span>
                </li>
              ) : null}
              <TimelineEntry entry={entry} side={entryIndex % 2 === 0 ? "right" : "left"} />
            </Fragment>
          );
        })}
      </ol>
    </Sheet>
  );
}
