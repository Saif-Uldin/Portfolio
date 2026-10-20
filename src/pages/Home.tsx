import { Header } from "../components/navigation/Header";
import { Hero } from "../components/hero/Hero";
import { Snapshot } from "../components/snapshot/Snapshot";
import { ProjectsSection } from "../components/projects/ProjectsSection";
import { ArchitectureSection } from "../components/architecture/ArchitectureSection";
import { TimelineSection } from "../components/timeline/TimelineSection";
import { Contact, Footer } from "../components/contact/Contact";
import { PrintResume } from "../components/print/PrintResume";
import { useRevealSetup } from "../components/shared/hooks";

export function Home() {
  useRevealSetup();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="screen-only" id="top">
        <Header />
        <main id="main">
          <Hero />
          <Snapshot />
          <ProjectsSection />
          <ArchitectureSection />
          <TimelineSection />
          <Contact />
        </main>
        <Footer />
      </div>
      <PrintResume />
    </>
  );
}
