import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { HeroArtwork } from "@/components/interactive";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Philosophy,
  Capabilities,
  SelectedWork,
  AISection,
  ResponsibleAI,
  Toolkit,
  AboutSection,
  ContactSection,
} from "@/components/sections";
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <Spotlight className="hero-spotlight" fill="#a66bff" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              <i /> FULL-STACK DEVELOPER · AI-AUGMENTED BUILDER
            </span>
            <h1>
              Ideas into
              <br />
              <span>Impact.</span>
            </h1>
            <p className="hero-lead">
              I build purposeful technology
              <br />
              for a world of possibilities.
            </p>
            <p className="hero-description">
              Full-stack applications. Practical AI. Thoughtful automation.
              <br />
              From meaningful problems to technology people can use.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/projects">
                Explore my work <ArrowUpRight size={17} />
              </Link>
              <Link className="button secondary" href="/contact">
                Let’s build something <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <HeroArtwork />
        </div>
        <div className="shell hero-foot">
          <span>HUMAN-CENTERED. PURPOSE-DRIVEN. FUTURE-FOCUSED.</span>
          <a href="#philosophy">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div id="philosophy">
        <Philosophy />
      </div>
      <Capabilities />
      <SelectedWork />
      <AISection />
      <ResponsibleAI />
      <Toolkit />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
