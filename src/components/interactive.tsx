"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Pause,
  Play,
  GitBranch as Github,
} from "lucide-react";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { BorderBeam } from "./ui/border-beam";
import { github, linkedin } from "@/lib/projects";
const nav = [
  ["Projects", "/projects"],
  ["About", "/about"],
  ["AI & Automation", "/ai-automation"],
  ["Contact", "/contact"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Kendra Hartnett home"
          onClick={(event) => {
            setOpen(false);
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "auto"
                  : "smooth",
              });
            }
          }}
        >
          <Image
            src="/images/kh-monogram.webp"
            width={60}
            height={40}
            alt="KH"
          />
          <span>Full-Stack Developer | AI-Augmented Software Engineer</span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          <Link href="/" className="mobile-home" onClick={() => setOpen(false)}>
            Home
          </Link>
          {nav.map(([name, url]) => (
            <Link
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              aria-current={pathname.startsWith(url) ? "page" : undefined}
            >
              {name}
              {name === "Contact" && <ArrowUpRight size={15} />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="shell footer">
      <Link className="brand" href="/">
        <Image src="/images/kh-monogram.webp" alt="KH" width={52} height={35} />
        <span>
          KENDRA HARTNETT
          <small>Purposeful technology. Thoughtfully built.</small>
        </span>
      </Link>
      <div>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={14} />
        </a>
        <Link href="/contact">
          Let’s connect <ArrowUpRight size={14} />
        </Link>
        <span>© {new Date().getFullYear()} Kendra Hartnett</span>
      </div>
    </footer>
  );
}
export function HeroArtwork() {
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState<boolean | null>(null);
  const show = hidden === null ? !reduce : !hidden;
  return (
    <div className="hero-art personal-art">
      <div className="personal-art-glow" aria-hidden="true" />
      <div className="personal-art-image">
        {show && (
          <Image
            className="art-image"
            src="/images/kh-personal-brand.gif"
            alt="Animated KH monogram with Chicago skyline, books, plants, a squirrel mug, and purple and gold celestial light"
            width={414}
            height={414}
            unoptimized
            priority
            sizes="(max-width: 760px) 85vw, 43vw"
          />
        )}
      </div>
      <span className="art-coordinate">
        HUMAN IDEAS. DIGITAL POSSIBILITIES.
      </span>
      <button
        className="motion-control"
        onClick={() => setHidden(show)}
        aria-label={show ? "Hide animated artwork" : "Show animated artwork"}
      >
        {show ? <Pause size={13} /> : <Play size={13} />}
      </button>
    </div>
  );
}
export function GlowFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={`glow-frame ${className}`}
        whileHover={reduce ? undefined : { y: -3 }}
        transition={{ duration: 0.25 }}
      >
        {children}
        {!reduce && (
          <span className="beam-decoration" aria-hidden="true">
            <BorderBeam
              duration={12}
              size={120}
              colorFrom="#e7b778"
              colorTo="#a66bff"
            />
          </span>
        )}
      </motion.div>
    </MotionConfig>
  );
}
const scenarios = [
  {
    name: "Document requests",
    problem:
      "Client documents arrive across emails and spreadsheets, making follow-up hard to organize.",
    steps: [
      "Create checklist",
      "Track requests",
      "Draft with AI",
      "Human review",
    ],
    solution:
      "A checklist and tracking workflow could prepare a request email for a person to review and send.",
    oversight:
      "A person checks the recipient, requested documents, and wording before sending.",
    privacy:
      "Use only necessary client details, restrict access, and define retention before implementation.",
    benefit:
      "Potential benefit: clearer requests and fewer repeated drafting steps.",
  },
  {
    name: "Customer inquiries",
    problem:
      "A small team repeatedly sorts similar questions while sensitive requests need individual attention.",
    steps: [
      "Receive inquiry",
      "Classify topic",
      "Suggest response",
      "Review & reply",
    ],
    solution:
      "AI could propose categories and draft responses, with uncertain or sensitive cases routed to a person.",
    oversight:
      "The team approves replies; uncertain classifications stay in a human queue.",
    privacy:
      "Remove unnecessary personal information before model calls and limit who can view inquiries.",
    benefit:
      "Potential benefit: more consistent triage and less repeated typing.",
  },
  {
    name: "Disconnected systems",
    problem:
      "Staff manually copy information between business tools, introducing avoidable re-entry.",
    steps: [
      "Receive update",
      "Validate fields",
      "Sync via API",
      "Review exceptions",
    ],
    solution:
      "Deterministic API integrations could validate and move records, reserving AI for unstructured inputs only when useful.",
    oversight:
      "A person resolves validation failures and approves consequential changes.",
    privacy:
      "Use scoped credentials, access controls, and logs that omit sensitive values.",
    benefit:
      "Potential benefit: fewer manual handoffs and clearer exception handling.",
  },
  {
    name: "Repeated admin work",
    problem:
      "A team repeats the same administrative steps, but some decisions still require context.",
    steps: [
      "Define rules",
      "Automate steps",
      "Flag exceptions",
      "Human approval",
    ],
    solution:
      "A rules-based workflow could handle predictable tasks and flag ambiguous cases for review.",
    oversight:
      "A person approves consequential actions and reviews exceptions.",
    privacy:
      "Minimize collected data and grant only the access the task needs.",
    benefit: "Potential benefit: more time for work that needs judgment.",
  },
];
export function ProblemLab() {
  const [selected, setSelected] = useState(0);
  const s = scenarios[selected];
  return (
    <div className="problem-lab">
      <div className="lab-tabs" role="tablist" aria-label="Business scenarios">
        {scenarios.map((item, i) => (
          <button
            key={item.name}
            role="tab"
            id={`scenario-${i}`}
            aria-selected={selected === i}
            aria-controls="scenario-panel"
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const n =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 3
                      : (selected + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                setSelected(n);
                document.getElementById(`scenario-${n}`)?.focus();
              }
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div
        id="scenario-panel"
        role="tabpanel"
        aria-labelledby={`scenario-${selected}`}
        tabIndex={0}
      >
        <span className="eyebrow">
          CONCEPTUAL DEMONSTRATION · NOT A CLIENT ENGAGEMENT
        </span>
        <h3>{s.problem}</h3>
        <div className="workflow">
          {s.steps.map((step, i) => (
            <div key={step}>
              <span>0{i + 1}</span>
              {step}
              {i < 3 && <ArrowUpRight size={18} />}
            </div>
          ))}
        </div>
        <p>{s.solution}</p>
        <div className="lab-details">
          <p>
            <strong>Human oversight</strong>
            {s.oversight}
          </p>
          <p>
            <strong>Privacy by design</strong>
            {s.privacy}
          </p>
        </div>
        <p className="benefit">
          {s.benefit} This is a proposed approach, not a measured outcome.
        </p>
      </div>
    </div>
  );
}
