import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { HeroArtwork } from "@/components/interactive";
import { TypedHeroHeading } from "@/components/typed-hero-heading";
import { StarSprinkles } from "@/components/star-sprinkles";
import { ScrollChapters, Chapter } from "@/components/scroll-chapters";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Capabilities,
  SelectedWork,
  AISection,
  Toolkit,
  AboutSection,
  ContactSection,
} from "@/components/sections";
export default function Home() {
  return (
    <main id="main">
      <StarSprinkles />
      <section className="hero">
        <Spotlight className="hero-spotlight" fill="#a66bff" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <TypedHeroHeading />
            <p className="hero-lead">
              I build purposeful technology
              <br />
              for a world of possibilities.
            </p>
            <p className="hero-description">
              I combine full-stack development, practical AI, and thoughtful
              automation to solve meaningful problems and build technology
              people can use.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/projects">
                Explore my work <ArrowUpRight size={17} />
              </Link>
              <Link className="button secondary gold-accent" href="/contact">
                Let’s build something <ArrowUpRight size={17} />
              </Link>
              <a
                className="button secondary resume-glow"
                href="/resume/KendraAnneHartnettResume.pdf"
                download
                aria-label="Download Kendra Hartnett resume PDF"
              >
                Download Resume <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
        <div className="shell hero-foot">
          <span>HUMAN-CENTERED. PURPOSE-DRIVEN. FUTURE-FOCUSED.</span>
          <a href="#work">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <ScrollChapters>
        <Chapter>
          <SelectedWork />
        </Chapter>
        <Chapter>
          <Capabilities />
        </Chapter>
        <Chapter>
          <AISection />
        </Chapter>
        <Chapter>
          <Toolkit />
        </Chapter>
        <Chapter>
          <AboutSection />
        </Chapter>
        <Chapter>
          <ContactSection />
        </Chapter>
      </ScrollChapters>
    </main>
  );
}
