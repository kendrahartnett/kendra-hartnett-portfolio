import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { caseSections } from "@/lib/case-studies";

const workflowSteps: Record<string, string[]> = {
  "the-bridge": ["Post a need", "Run privacy checks", "Review uncertain drafts", "Approved organization claims", "Poster marks fulfilled"],
  "ethical-apple": ["Enter budget and household", "Choose meals with rules", "Adjust for pantry quantities", "Review list and estimates"],
  eevora: ["Explore a service", "Inspect illustrative workflow", "Pause for human review", "Contact EEVORA"],
  goodneighbor: ["Search verified listings", "Filter by place or cause", "Check the source", "Visit the organizer"],
  "kendra-hartnett-services": ["Explore services", "Review the process", "Describe a project", "Send an inquiry"],
};
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p?.name ?? "Project not found", description: p?.summary };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const previous = projects[(projects.indexOf(p) - 1 + projects.length) % projects.length];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const sections = caseSections(p);
  return (
    <main id="main">
      <section className="shell case-intro">
        <Link className="back-link" href="/projects">
          <ArrowLeft size={16} /> All projects
        </Link>
        <span className="eyebrow">{p.category}</span>
        <h1>{p.name}</h1>
        <p className="case-summary">{p.summary}</p>
        <div className="case-meta">
          <span className="status">
            <i />
            {p.status}
          </span>
          <span>
            {p.slug === "the-bridge"
              ? "FEATURED FULL-STACK APPLICATION"
              : p.flagship
                ? "INDEPENDENT PRODUCT DIRECTION"
                : "SELECTED PORTFOLIO WORK"}
          </span>
        </div>
        <div className="button-row">
          <a
            className="button primary"
            href={p.live}
            target="_blank"
            rel="noreferrer"
          >
            {p.slug === "eevoradocs"
              ? "View illustrative workflow"
              : "Visit website"}{" "}
            <ArrowUpRight size={17} />
          </a>
          <a
            className="button secondary"
            href={p.repo}
            target="_blank"
            rel="noreferrer"
          >
            Explore source <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="case-workflow" aria-label={`${p.name} documented workflow`}>
          <span className="eyebrow">WORKFLOW AT A GLANCE · DOCUMENTED IMPLEMENTATION</span>
          <ol>
            {workflowSteps[p.slug].map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <figure className="case-image">
          <Image
            src={`/images/${p.image.replace(".png", ".webp")}`}
            alt={p.alt}
            width={1500}
            height={950}
            priority
            sizes="100vw"
          />
          <figcaption>
            {p.slug === "the-bridge"
              ? "Original project artwork"
              : p.slug === "goodneighbor"
                ? "Homepage screenshot from the project repository; the original capture includes a development indicator"
                : p.slug === "kendra-hartnett-services"
                  ? "Homepage preview from the project repository"
                : "Project image from the source repository"}
          </figcaption>
        </figure>
      </section>
      <section className="light-section case-content">
        <div className="shell case-content-grid">
          <aside>
            <span className="eyebrow">PROJECT CONTEXT</span>
            <h3>Contribution</h3>
            <p>{p.role}</p>
            <h3>Technology</h3>
            <div className="tags">
              {p.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <h3>Source</h3>
            <a href={`${p.repo}#readme`} target="_blank" rel="noreferrer">
              Repository documentation <ArrowUpRight size={14} />
            </a>
            <p className="source-note">
              Descriptions reflect repository documentation and implementation,
              not independently measured outcomes.
            </p>
          </aside>
          <div className="case-story">
            {sections.map((section) => (
              <section key={section.label}>
                <span className="eyebrow">{section.label}</span>
                <h2>{section.title}</h2>
                {section.body && <p>{section.body}</p>}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.source && <a className="case-source-link" href={section.source.url} target="_blank" rel="noreferrer">{section.source.label} <ArrowUpRight size={15} /></a>}
              </section>
            ))}
          </div>
        </div>
      </section>
      <div className="shell case-navigation">
        <div className="next-project">
          <span className="eyebrow">PREVIOUS PROJECT</span>
          <Link href={`/projects/${previous.slug}`}><ArrowLeft /> {previous.name}</Link>
        </div>
        <div className="next-project">
          <span className="eyebrow">NEXT PROJECT</span>
          <Link href={`/projects/${next.slug}`}>{next.name} <ArrowUpRight /></Link>
        </div>
      </div>
    </main>
  );
}
