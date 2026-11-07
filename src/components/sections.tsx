import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  SiAnthropic,
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNeon,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
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
import { projects, github, linkedin } from "@/lib/projects";
import { ContactForm } from "@/components/contact-form";
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
          <span className="eyebrow">ENGINEERING + IMAGINATION</span>
          <h2>
            I think critically.
            <br />I create boldly.
            <br />
            <span>I build purposefully.</span>
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
      Layers3,
      "UI/UX & interaction design",
      "Intuitive interfaces, thoughtful user journeys, and the details that make software feel right.",
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
        number="02"
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
                Visit website <ArrowUpRight size={13} />
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
          number="01"
          label="SELECTED WORK"
          title="Ideas brought to life."
        />
        <p>
          A selection of independent products,
          <br />
          community tools, and practical prototypes.
        </p>
      </div>
      <ProjectGrid />
    </section>
  );
}
export function AISection() {
  return (
    <section className="section ai-section">
      <div className="shell">
        <div className="ai-intro">
          <div>
            <SectionTitle
              number="03"
              label="BUILDING WITH AI"
              title="Building with AI. Guided by human judgment."
            />
            <p>
              I bring the problem, context, and judgment. AI helps me explore
              possibilities, test approaches, and iterate. I verify the output
              and shape the final software around the people it serves.
            </p>
          </div>
          <Image
            src="/images/ai-collaboration.webp"
            width={1672}
            height={941}
            alt="Violet and gold illustration of a developer collaborating with an AI system"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </div>
      <ResponsibleAI />
    </section>
  );
}
export function ResponsibleAI() {
  return (
    <div className="light-section responsibility section">
      <div className="shell responsibility-grid">
        <div>
          <span className="eyebrow">INTELLIGENCE WITH INTENTION · RESPONSIBLE PRACTICE</span>
          <h2>
            Build with intelligence.
            <br />
            <em>Build with responsibility.</em>
          </h2>
          <p>
            I approach AI as a capability to evaluate, not an authority to
            trust. My starting questions are practical: Does this actually need
            AI? What could go wrong? What data does it require? And what happens
            when it fails?
          </p>
          <p>
            Responsible integration means establishing clear boundaries from the
            beginning, considering privacy, reliability, and human oversight
            before giving a model access to personal information or real-world
            actions.
          </p>
          <div className="responsibility-art">
            <Image
              src="/images/kh-intention.png"
              alt="KH monogram with a crescent moon, flowers, and flowing violet ribbons"
              width={640}
              height={360}
              sizes="(max-width: 760px) 90vw, 450px"
            />
          </div>
        </div>
        <div className="principles">
          {[
            [
              "Guardrails beyond the prompt",
              "Define allowed tasks, validate inputs and outputs, and restrict tool permissions in code. Treat model responses and uploads as untrusted.",
            ],
            [
              "Safe fallbacks, clear limits",
              "Plan for timeouts, unavailable models, and invalid responses. Fall back to predictable rules or a manual workflow; otherwise stop safely.",
            ],
            [
              "Human judgment stays in control",
              "Keep suggestions distinct from approved actions. Require review for consequential changes and make outputs easy to correct or reject.",
            ],
            [
              "Security & privacy by design",
              "Send only necessary data, keep secrets server-side, and enforce access outside the model. Consider logs and retention before integrating.",
            ],
            [
              "Evaluate the failure cases",
              "Test misleading or biased outputs, prompt injection, malformed data, and service failures. Revisit guardrails and fallbacks as the system changes.",
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
    </div>
  );
}
export function Toolkit() {
  const tools = [
    ["JavaScript", SiJavascript, "#e6bd78"],
    ["React", SiReact, "#8fcef1"],
    ["Next.js", SiNextdotjs, "#d9c5ec"],
    ["TypeScript", SiTypescript, "#a88ce9"],
    ["Tailwind CSS", SiTailwindcss, "#87cdd9"],
    ["HTML", SiHtml5, "#e8ab9b"],
    ["CSS", SiCss, "#bda4ef"],
    ["Neon", SiNeon, "#a4e1cb"],
    ["PostgreSQL", SiPostgresql, "#91afe3"],
    ["Prisma", SiPrisma, "#d1b5e8"],
    ["Vite", SiVite, "#dca4e8"],
    ["GitHub", SiGithub, "#cbb9d6"],
    ["Vercel", SiVercel, "#efcba7"],
    ["Anthropic API", SiAnthropic, "#e6b7a8"],
  ] as const;
  return (
    <section className="shell section toolkit">
      <SectionTitle
        number="04"
        label="THE TOOLKIT"
        title="The right tools for the problem."
        copy="Technologies used across the linked projects. Each case study shows where and how they fit."
      />
      <ul
        className="toolkit-grid"
        aria-label="Technologies used across projects"
      >
        {tools.map(([name, Icon, accent]) => (
          <li
            className="toolkit-tile"
            key={name}
            style={{ "--tile-accent": accent } as CSSProperties}
          >
            <div className="toolkit-emblem" aria-hidden="true">
              <Icon />
            </div>
            <span>{name}</span>
          </li>
        ))}
      </ul>
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
          I'm a Full-Stack Developer and AI-Augmented Builder who enjoys
          bringing ideas to life through technology.
        </p>
        <p>
          My path into technology hasn't been traditional. I chose to give
          myself a second chance and pursue something entirely new. Along the
          way, I've challenged my own expectations, pushed beyond what I once
          thought possible, and continually discovered that I'm capable of more
          than I imagined. That perspective has shaped how I approach
          challenges: with resourcefulness, adaptability, initiative, and a
          willingness to think differently.
        </p>
        <p>
          I believe great software brings together logic and creativity,
          functionality and experience, technology with human understanding. I
          take the engineering seriously, but I also believe there's room for
          imagination, experimentation, and a little magic along the way.
        </p>
        <p className="personal-motto">
          <strong>
            I think critically. I create boldly. I build purposefully.
          </strong>
        </p>
        {full && (
          <Link className="text-link" href="/projects">
            Explore the work <ArrowUpRight size={18} />
          </Link>
        )}
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
        <ContactForm />
        <div className="button-row contact-socials">
          <a
            className="button secondary"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> Find me on GitHub
          </a>
          <a
            className="button secondary"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
