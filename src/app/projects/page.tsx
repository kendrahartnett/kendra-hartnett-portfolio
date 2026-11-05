import type { Metadata } from "next";
import { ProjectGrid, ContactSection } from "@/components/sections";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Six projects spanning independent AI products, full-stack community applications, and business websites.",
};
export default function Projects() {
  return (
    <main id="main">
      <section className="shell page-intro">
        <span className="eyebrow">THE PORTFOLIO / SELECTED WORK</span>
        <h1>
          Ideas made
          <br />
          <em>tangible.</em>
        </h1>
        <p>
          Independent products, mission-driven applications, and purposeful
          business experiences. Explore the problem, the choices, and the work
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
