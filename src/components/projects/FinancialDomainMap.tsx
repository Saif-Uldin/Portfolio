import { financialDomains } from "../../data/projects";

/**
 * Explanatory picture of one design decision from the resume: financial domains are kept distinct,
 * each with its own traceable record, instead of collapsing into a single mutable balance.
 */
export function FinancialDomainMap() {
  return (
    <figure className="fdm">
      <div className="fdm__not mono">
        <span className="fdm__strike">One mutable balance</span>
        <span>← not this</span>
      </div>
      <ul className="fdm__grid">
        {financialDomains.map((d, i) => (
          <li key={d.id} className="fdm__domain">
            <span className="fdm__idx mono">D{i + 1}</span>
            <h4 className="fdm__label">{d.label}</h4>
            <p className="fdm__desc">{d.description}</p>
            <div className="fdm__ledger" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <p className="fdm__foot mono">Own records · traceable corrections</p>
          </li>
        ))}
      </ul>
      <figcaption className="fdm__caption mono">
        Fig. 05 — Financial domains are kept separate. Explanatory diagram of the described design; corrections preserve history rather than overwrite it.
      </figcaption>
    </figure>
  );
}
