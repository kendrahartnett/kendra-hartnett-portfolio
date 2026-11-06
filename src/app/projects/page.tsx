import type { Metadata } from "next";
import { ProjectGrid, ContactSection } from "@/components/sections";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Four projects spanning independent AI work, full-stack community applications, and practical prototypes.",
};
export default function Projects() {
  return (
    <main id="main">
      <section className="shell page-intro">
        <span className="eyebrow">THE PORTFOLIO / SELECTED WORK</span>
        <h1>
          Building what
          <br />
          <em>could be.</em>
        </h1>
        <p>
          Independent products, mission-driven applications, and practical
          prototypes. Explore the problem, the choices, and the work
          behind each one.
        </p>
      </section>
      <section className="shell projects-page">
        <ProjectGrid />
      </section>
      <ContactSection />
    </main>
  );
}
