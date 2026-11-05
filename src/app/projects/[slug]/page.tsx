import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
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
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
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
            {p.flagship
              ? "FLAGSHIP INDEPENDENT PRODUCT"
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
              : "Project image from the source repository"}{" "}
            · Preserving the project’s own visual identity
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
              Reviewed November 5, 2026. Descriptions reflect documented
              implementation, not independently measured outcomes.
            </p>
          </aside>
          <div className="case-story">
            <section>
              <span className="eyebrow">01 / THE PROBLEM</span>
              <h2>Start with a real need.</h2>
              <p>{p.problem}</p>
              <h3>Who it is for</h3>
              <p>{p.audience}</p>
            </section>
            <section>
              <span className="eyebrow">02 / THE SOLUTION</span>
              <h2>
                {p.slug === "eevoradocs"
                  ? "What the demonstration shows."
                  : "What is implemented."}
              </h2>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
            <section>
              <span className="eyebrow">03 / THE ENGINEERING</span>
              <h2>How it comes together.</h2>
              <p>{p.architecture}</p>
              <h3>The important decision</h3>
              <p>{p.decision}</p>
            </section>
            <section>
              <span className="eyebrow">04 / STATUS & BOUNDARIES</span>
              <h2>Clear about what it does.</h2>
              <p>{p.limits}</p>
            </section>
          </div>
        </div>
      </section>
      <div className="shell next-project">
        <span className="eyebrow">EXPLORE THE NEXT PROJECT</span>
        <Link href={`/projects/${next.slug}`}>
          {next.name}
          <ArrowUpRight />
        </Link>
      </div>
    </main>
  );
}
