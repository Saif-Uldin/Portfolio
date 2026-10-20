import type { BulletGroup } from "../../data/projects";
import { Disclosure } from "../shared/Disclosure";

interface BulletGroupsProps {
  groups: BulletGroup[];
  /** Index of groups to open by default. */
  openFirst?: boolean;
}

/** The resume's own bullets, grouped under their original headings, behind accessible disclosures. */
export function BulletGroups({ groups, openFirst = false }: BulletGroupsProps) {
  return (
    <div className="bulletgroups">
      {groups.map((group, i) => (
        <Disclosure
          key={group.heading}
          summary={group.heading}
          meta={`${group.bullets.length} items`}
          defaultOpen={openFirst && i === 0}
        >
          <ul className="bulletlist">
            {group.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Disclosure>
      ))}
    </div>
  );
}
