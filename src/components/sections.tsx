import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Sparkles,
  Workflow,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  GitBranch as Github,
} from "lucide-react";
import { projects, github } from "@/lib/projects";
import { GlowFrame, ProblemLab } from "./interactive";
export function SectionTitle({
  number,
  label,
  title,
  copy,
}: {
  number: string;
  label: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span>{number} /</span> {label}
      </span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
export function Philosophy() {
  return (
    <section className="philosophy light-section">
      <div className="shell">
        <div className="philosophy-heading">
          <span className="eyebrow">THE WAY I BUILD</span>
          <h2>
            I find the friction.
            <br />
            <span>I build the fix.</span>
          </h2>
          <p>
            Useful technology starts with a better question. My process connects
            real problems to thoughtful, working solutions.
          </p>
        </div>
        <div className="process">
          {[
            ["Identify", "Understand the real problem."],
            ["Envision", "Design around the people."],
            ["Build", "Develop the right solution."],
            ["Ship", "Deliver, learn, and improve."],
          ].map(([title, text], i) => (
            <div key={title}>
              <span className="process-number">0{i + 1}</span>
              <h3>
                {title}
                <ArrowUpRight size={21} />
              </h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Capabilities() {
  const list = [
    [
      Code2,
      "Full-stack applications",
      "Interfaces, backend systems, databases, and integrations.",
    ],
    [
      Sparkles,
      "Practical AI",
      "Useful integrations with clear boundaries and human judgment.",
    ],
    [
      Workflow,
      "Business automation",
      "Thoughtful workflows for repetitive operational tasks.",
    ],
    [
      HeartHandshake,
      "Mission-driven technology",
      "Software shaped by community needs and meaningful problems.",
    ],
    [
      Layers3,
      "Independent products",
      "Ideas developed through design, engineering, and iteration.",
    ],
  ] as const;
  return (
    <section className="shell section capabilities">
      <SectionTitle
        number="01"
        label="WHAT I BUILD"
        title="Purpose at the core. Possibility in the code."
      />
      <div className="capability-grid">
        {list.map(([Icon, title, copy]) => (
          <div key={title}>
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function ProjectGrid({ all = true }: { all?: boolean }) {
  const selected = all ? projects : projects.filter((p) => !p.flagship);
  return (
    <div className="project-grid">
      {selected.map((p, i) => (
        <article
          className={`project-card ${p.flagship ? "flagship" : ""}`}
          key={p.slug}
        >
          <Link className="project-image" href={`/projects/${p.slug}`}>
            <Image
              src={`/images/${p.image.replace(".png", ".webp")}`}
              alt={p.alt}
              width={1200}
              height={750}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <span className="project-image-arrow">
              <ArrowUpRight size={22} />
            </span>
          </Link>
          <div className="project-card-body">
            <div className="project-meta">
              <span>{p.category}</span>
              <span>0{i + 1}</span>
            </div>
            <h3>
              <Link href={`/projects/${p.slug}`}>{p.name}</Link>
            </h3>
            <p>{p.summary}</p>
            <div className="tags">
              {p.stack.slice(0, 3).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-bottom">
              <span className="status">
                <i />
                {p.status}
              </span>
              <Link href={`/projects/${p.slug}`}>
                Explore project <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="project-external">
              <a href={p.live} target="_blank" rel="noreferrer">
                {p.slug === "eevoradocs" ? "View concept" : "Visit website"}{" "}
                <ArrowUpRight size={13} />
              </a>
              <a href={p.repo} target="_blank" rel="noreferrer">
                GitHub <Github size={13} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
export function SelectedWork() {
  return (
    <section id="work" className="shell section work">
      <div className="heading-row">
        <SectionTitle
          number="02"
          label="SELECTED WORK"
          title="Different problems. Purposeful solutions."
        />
        <p>
          A selection of independent products,
          <br />
          community tools, and business websites.
        </p>
      </div>
      <ProjectGrid />
    </section>
  );
}
export function AISection({ full = false }: { full?: boolean }) {
  return (
    <section className="section ai-section">
      <div className="shell">
        <div className="ai-intro">
          <div>
            <SectionTitle
              number="03"
              label="AI & AUTOMATION"
              title="Making AI useful in the real world."
            />
            <p>
              Start with the work. Find the friction. Build a solution that
              makes sense—with people in control.
            </p>
            <Link
              className="text-link"
              href={full ? "/projects/eevora" : "/ai-automation"}
            >
              {full ? "Explore EEVORA" : "Explore my approach"}{" "}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <Image
            src="/images/ai-collaboration.webp"
            width={1672}
            height={941}
            alt="Violet and gold illustration of a developer collaborating with an AI system"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        <div className="lab-heading">
          <h3>Find the friction. Build the fix.</h3>
          <p>Explore four possible approaches to everyday business problems.</p>
        </div>
        <GlowFrame>
          <ProblemLab />
        </GlowFrame>
      </div>
    </section>
  );
}
export function ResponsibleAI() {
  return (
    <section className="light-section responsibility section">
      <div className="shell responsibility-grid">
        <div>
          <span className="eyebrow">INTELLIGENCE WITH INTENTION</span>
          <h2>
            Build with intelligence.
            <br />
            <em>Build with responsibility.</em>
          </h2>
          <p>
            AI belongs where it adds value. Good engineering also means knowing
            when a simpler, predictable solution is better.
          </p>
          <Link className="text-link" href="/projects/ethical-apple">
            A practical example: Ethical Apple <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="principles">
          {[
            [
              "Purpose before tools",
              "Choose AI when it meaningfully improves the solution.",
            ],
            [
              "People in control",
              "Keep human review in consequential decisions.",
            ],
            [
              "Privacy & security by design",
              "Minimize sensitive data and protect credentials.",
            ],
            [
              "Validate, then trust",
              "Test outputs, communicate limits, and prefer deterministic logic where appropriate.",
            ],
          ].map(([t, d]) => (
            <div key={t}>
              <ShieldCheck size={22} />
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Toolkit() {
  return (
    <section className="shell section toolkit">
      <SectionTitle
        number="04"
        label="THE TOOLKIT"
        title="The right tools for the problem."
        copy="Technologies used across the linked projects. Each case study shows where and how they fit."
      />
      <div className="toolkit-grid">
        {[
          [
            "Frontend",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML & CSS",
          ],
          [
            "Backend & data",
            "REST APIs",
            "Neon PostgreSQL",
            "Prisma",
            "Drizzle",
            "Auth.js",
            "Neon Auth",
          ],
          [
            "AI & workflows",
            "Anthropic API",
            "Human review",
            "Deterministic planning",
            "Resend",
            "Ollama exploration",
          ],
          [
            "Build & ship",
            "GitHub",
            "Vercel",
            "Vite",
            "Motion",
            "Codex",
            "Claude Code",
          ],
        ].map(([title, ...tools]) => (
          <div key={title}>
            <h3>{title}</h3>
            <div className="tags">
              {tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className="shell section about-section">
      <div className="about-art">
        <Image
          src="/images/orbital-network.webp"
          alt="Connected points of light surrounded by cyan and violet orbits"
          width={1280}
          height={720}
        />
        <span>CONNECTING IDEAS TO IMPACT</span>
      </div>
      <div>
        <SectionTitle
          number="05"
          label="ABOUT KENDRA"
          title="The builder behind the ideas."
        />
        <p>
          I’m Kendra Hartnett, a full-stack developer and AI-augmented builder.
          I identify problems, envision solutions, and turn ideas into practical
          applications.
        </p>
        <p>
          My work spans community-focused software, business websites, and
          independent products. I’m interested in what technology makes
          possible—and in making thoughtful choices about how it gets there.
        </p>
        {full && (
          <p>
            Through the Next Chapter Project and my independent work on EEVORA,
            I’m continuing to develop my engineering practice: building complete
            experiences, questioning assumptions, and using AI with clear intent
            and human oversight.
          </p>
        )}
        <Link className="text-link" href={full ? "/projects" : "/about"}>
          {full ? "Explore the work" : "A little more about me"}{" "}
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
export function ContactSection({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section className="contact-section">
      <div className="shell">
        <span className="eyebrow">LET’S BUILD SOMETHING THAT MATTERS</span>
        <Heading>
          Have a problem
          <br />
          worth <em>solving?</em>
        </Heading>
        <p>
          For teams looking for a thoughtful builder, businesses with a
          challenge,
          <br className="desktop-break" /> and collaborators with an idea. Let’s
          connect.
        </p>
        <div className="button-row">
          <a
            className="button primary"
            href="https://eevora.vercel.app/contact"
            target="_blank"
            rel="noreferrer"
          >
            Get in touch through EEVORA <ArrowUpRight size={17} />
          </a>
          <a
            className="button secondary"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> Find me on GitHub
          </a>
        </div>
        <span className="contact-note">
          The contact link opens my EEVORA website.
        </span>
      </div>
    </section>
  );
}
