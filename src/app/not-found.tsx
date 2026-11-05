import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell page-intro">
      <span className="eyebrow">404 / OFF THE MAP</span>
      <h1>
        Let’s get
        <br />
        <em>you back.</em>
      </h1>
      <p>This page could not be found.</p>
      <Link className="button primary" href="/projects">
        Explore the projects ↗
      </Link>
    </main>
  );
}
