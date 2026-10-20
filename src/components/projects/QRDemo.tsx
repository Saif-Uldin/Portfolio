import { useId, useMemo, useState } from "react";

const SIZE = 25;

/** Deterministic, decorative matrix: finder patterns, timing lines, and seeded noise. It is NOT a scannable code. */
function buildMatrix(): boolean[][] {
  const m: boolean[][] = Array.from({ length: SIZE }, () => Array<boolean>(SIZE).fill(false));
  const reserved: boolean[][] = Array.from({ length: SIZE }, () => Array<boolean>(SIZE).fill(false));

  const finder = (r0: number, c0: number) => {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const rr = r0 + r;
        const cc = c0 + c;
        if (rr < 0 || cc < 0 || rr >= SIZE || cc >= SIZE) continue;
        reserved[rr][cc] = true;
        const inside = r >= 0 && r <= 6 && c >= 0 && c <= 6;
        m[rr][cc] = inside && (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
      }
    }
  };
  finder(0, 0);
  finder(0, SIZE - 7);
  finder(SIZE - 7, 0);

  for (let i = 8; i < SIZE - 8; i++) {
    reserved[6][i] = true;
    reserved[i][6] = true;
    m[6][i] = i % 2 === 0;
    m[i][6] = i % 2 === 0;
  }

  let seed = 20481;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (!reserved[r][c]) m[r][c] = rnd() > 0.52;
    }
  }
  return m;
}

function checksum(m: boolean[][]): string {
  let h = 0;
  m.forEach((row, r) =>
    row.forEach((on, c) => {
      if (on) h = (h * 31 + r * SIZE + c + 7) & 0xffff;
    }),
  );
  return h.toString(16).toUpperCase().padStart(4, "0");
}

const destinations = [
  { id: "manual-1", label: "Product manual", page: "Product manual, first edition" },
  { id: "manual-2", label: "Updated manual", page: "Product manual, revised edition" },
  { id: "warranty", label: "Warranty page", page: "Warranty registration page" },
] as const;

/**
 * Illustration of DynamicQR's core idea: the physical code never changes, the managed destination does.
 * The matrix is decorative and the destinations are examples; nothing here resolves to a real URL.
 */
export function QRDemo() {
  const groupId = useId();
  const matrix = useMemo(buildMatrix, []);
  const sum = useMemo(() => checksum(matrix), [matrix]);
  const [selected, setSelected] = useState(0);
  const [changes, setChanges] = useState(0);
  const dest = destinations[selected];

  const choose = (i: number) => {
    if (i === selected) return;
    setSelected(i);
    setChanges((n) => n + 1);
  };

  return (
    <figure className="qrdemo">
      <div className="qrdemo__stage">
        <div className="qrdemo__object">
          <p className="qrdemo__k mono">Physical object · printed or engraved once</p>
          <div className="qrdemo__plate">
            <svg
              className="qrdemo__qr"
              viewBox={`-2 -2 ${SIZE + 4} ${SIZE + 4}`}
              role="img"
              aria-label="Illustrative QR pattern. It stays identical while the destination changes."
              shapeRendering="crispEdges"
            >
              <rect x="-2" y="-2" width={SIZE + 4} height={SIZE + 4} fill="#fff" />
              {matrix.map((row, r) =>
                row.map((on, c) => (on ? <rect key={`${r}-${c}`} x={c} y={r} width="1.02" height="1.02" fill="#0a0d14" /> : null)),
              )}
            </svg>
          </div>
          <dl className="qrdemo__facts mono">
            <div>
              <dt>Printed pattern</dt>
              <dd>#{sum} · unchanged</dd>
            </div>
            <div>
              <dt>Replacements needed</dt>
              <dd>0</dd>
            </div>
          </dl>
        </div>

        <div className="qrdemo__link" aria-hidden="true">
          <span key={changes} className={`qrdemo__pulse ${changes > 0 ? "is-pulsing" : ""}`} />
        </div>

        <div className="qrdemo__dest">
          <p className="qrdemo__k mono">Managed destination · changeable</p>
          <fieldset className="qrdemo__choices">
            <legend className="visually-hidden">Choose the destination this code points to</legend>
            {destinations.map((d, i) => (
              <label key={d.id} className={`qrdemo__choice ${i === selected ? "is-on" : ""}`}>
                <input
                  type="radio"
                  name={`${groupId}-dest`}
                  checked={i === selected}
                  onChange={() => choose(i)}
                />
                <span>{d.label}</span>
              </label>
            ))}
          </fieldset>
          <div className="qrdemo__card" aria-live="polite">
            <span className="mono">The code now opens</span>
            <strong>{dest.page}</strong>
            <span className="mono">Destination changes: {changes}</span>
          </div>
        </div>
      </div>
      <figcaption className="figcap mono">
        Fig. 08 — Illustration of the core idea. The pattern is decorative (not scannable) and the destinations are examples.
      </figcaption>
    </figure>
  );
}
