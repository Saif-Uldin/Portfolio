import { academy, videoPipeline } from "../../data/projects";
import { Stepper } from "../shared/Stepper";
import { TagList } from "../shared/Tags";
import { AcademyStructure } from "./AcademyStructure";
import { BulletGroups } from "./BulletGroups";

export function AcademyShowcase() {
  return (
    <article id="academy" className="project project--academy" aria-labelledby="academy-name">
      <header className="project__head reveal">
        <p className="project__index mono">
          <span>Project {academy.index}</span>
          <span>Learning platform</span>
        </p>
        <h3 id="academy-name" className="project__name">
          Academy <em>Learning Management System</em>
        </h3>
        <p className="project__role mono">{academy.role}</p>
        <p className="project__intro">{academy.intro}</p>
      </header>

      <section className="domain reveal" aria-labelledby="academy-arch">
        <div className="domain__head">
          <p className="domain__num mono">Layer 1</p>
          <h4 id="academy-arch" className="domain__title">Application architecture</h4>
        </div>
        <div className="domain__body">
          <AcademyStructure />
          <ul className="bulletlist bulletlist--cols">
            <li>Super Admin, Admin, Instructor, and Learner roles tied to protected resources and actions.</li>
            <li>Department-based course organization and enrollment workflows.</li>
            <li>Lessons, learning items, assessments, completion tracking, and passing-threshold logic.</li>
            <li>Course publication requirements and completion-based certificate eligibility.</li>
          </ul>
        </div>
      </section>

      <section className="domain reveal" aria-labelledby="academy-video">
        <div className="domain__head">
          <p className="domain__num mono">Layer 2</p>
          <h4 id="academy-video" className="domain__title">Video &amp; transcription pipeline</h4>
          <p className="domain__note">From an uploaded video to subtitles in the player, with playback progress tied back to course completion.</p>
        </div>
        <div className="domain__body">
          <Stepper
            stages={videoPipeline}
            label="Video processing pipeline stages"
            accent="cyan"
            caption="Fig. 04 — How a video moves through the media workflow, as described in the resume."
          />
        </div>
      </section>

      <section className="domain reveal" aria-labelledby="academy-ai">
        <div className="domain__head">
          <p className="domain__num mono">Layer 3</p>
          <h4 id="academy-ai" className="domain__title">AI-assisted support</h4>
        </div>
        <div className="domain__body twocol">
          <div className="callout">
            <p className="callout__k mono">Help desk</p>
            <p>An AI-powered help-desk workflow designed to answer questions using an understanding of the application and its functionality.</p>
          </div>
          <div className="callout">
            <p className="callout__k mono">Guardrails &amp; cost</p>
            <p>Guardrails to reduce misuse, and prompts optimized to improve token efficiency.</p>
          </div>
        </div>
      </section>

      <section className="domain reveal" aria-labelledby="academy-ops">
        <div className="domain__head">
          <p className="domain__num mono">Layer 4</p>
          <h4 id="academy-ops" className="domain__title">Deployment &amp; operations</h4>
        </div>
        <div className="domain__body">
          <ul className="bulletlist">
            {academy.groups[3].bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="project__focus">
            <span className="mono">Engineering focus</span>
            {academy.focus}
          </p>
        </div>
      </section>

      <div className="project__foot reveal">
        <h5 className="subhead mono">Full resume detail</h5>
        <BulletGroups groups={academy.groups} />
        <h5 className="subhead mono">Technologies</h5>
        <TagList items={academy.stack} label="Academy technologies" />
      </div>
    </article>
  );
}
