export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  status: string;
  image: string;
  alt: string;
  live: string;
  repo: string;
  stack: string[];
  problem: string;
  audience: string;
  features: string[];
  architecture: string;
  decision: string;
  limits: string;
  role: string;
  flagship?: boolean;
};
export const projects: Project[] = [
  {
    slug: "eevora",
    name: "EEVORA",
    category: "Independent product · Practical AI",
    summary:
      "Making practical AI approachable for small businesses. An independent brand built around real work, useful automation, and human control.",
    status: "Website deployed",
    image: "eevora.png",
    alt: "The EEVORA website with its original Beyond Automation visual identity",
    live: "https://eevora.vercel.app/",
    repo: "https://github.com/kendrahartnett/eevora",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Resend"],
    problem:
      "Small business owners need a clear way to understand where AI fits into their work and where human judgment still matters.",
    audience: "Small business owners exploring AI and workflow improvements.",
    features: [
      "Service pages for AI guidance, workflow discovery, automation, and integration.",
      "An interactive document workflow with selectable steps and a pause control.",
      "A contact form with server-side validation and a Resend email integration.",
    ],
    architecture:
      "Next.js and React pages with TypeScript, Tailwind CSS, Motion, and Radix UI. A server-side contact route validates submissions and delivers email through Resend; messages are not stored in a database.",
    decision:
      "Start with the business process, then choose the technology. The product presentation keeps human review visible and separates working website features from future automation ideas.",
    limits:
      "The website is deployed. Service descriptions are offerings, not evidence of completed client engagements or measured business results. EEVORADocs remains in development.",
    role: "Created and branded by Kendra Hartnett; independent product work.",
    flagship: true,
  },
  {
    slug: "the-bridge",
    name: "The Bridge",
    category: "Mission-driven · Full-stack application",
    summary:
      "Connecting Chicago outreach workers and community members with approved organizations, with privacy and dignity at the center.",
    status: "Deployed application",
    image: "the-bridge.png",
    alt: "Original The Bridge artwork showing a golden bridge and the Chicago skyline",
    live: "https://the-bridge-one.vercel.app/",
    repo: "https://github.com/kendrahartnett/the-bridge",
    stack: [
      "Next.js",
      "TypeScript",
      "Neon PostgreSQL",
      "Drizzle",
      "Anthropic API",
    ],
    problem:
      "Outreach workers and community members need a way to communicate needs and coordinate support without exposing identifying details of vulnerable people.",
    audience:
      "Chicago outreach workers, community members, and approved support organizations.",
    features: [
      "Post needs, browse a needs board, and coordinate claims and fulfillment.",
      "Manual organization approval and role-specific dashboards.",
      "Deterministic privacy checks, AI screening, and an admin review path.",
      "An informational AI assistant and English/Spanish interface.",
    ],
    architecture:
      "Next.js App Router and React connect to Neon PostgreSQL through Drizzle. Neon Auth handles sign-in. Server-side Anthropic calls support privacy screening and an informational assistant.",
    decision:
      "The database does not ask for exact locations or identifying details of people being served. Screening failures do not publish requests, and uncertain submissions require human review.",
    limits:
      "Screening can miss details. Chat does not have the request form’s local privacy filter. The assistant has no access to accounts or the database. Organization verification is manual.",
    role: "Created and developed by Kendra Anne Hartnett, with Claude Code and Codex supporting implementation and iteration.",
  },
  {
    slug: "goodneighbor",
    name: "GoodNeighbor",
    category: "Community technology · Full-stack application",
    summary:
      "A focused guide to verified Chicago volunteer opportunities, connecting people directly with local organizers.",
    status: "Deployed application",
    image: "goodneighbor.png",
    alt: "Authentic GoodNeighbor homepage screenshot from the project repository",
    live: "https://goodneighbor-psi.vercel.app/",
    repo: "https://github.com/kendrahartnett/goodneighbor",
    stack: ["Next.js", "TypeScript", "Neon PostgreSQL", "Prisma", "Auth.js"],
    problem:
      "Finding local ways to help means sorting scattered information and checking whether opportunities are still relevant.",
    audience:
      "People looking for volunteer opportunities in Chicago and the administrator curating those listings.",
    features: [
      "Search and filter opportunities by cause, neighborhood, and timing.",
      "Official organizer links and listing verification dates.",
      "A protected single-admin publishing and review workflow.",
      "Text-only visitor suggestions for private admin review.",
    ],
    architecture:
      "Server-rendered Next.js pages read Neon PostgreSQL through Prisma. Same-origin REST endpoints validate writes, while Auth.js and a server-side GitHub allowlist protect admin actions.",
    decision:
      "Keep the scope local and the source visible. Organizers handle participation; GoodNeighbor focuses on discovery and editorial stewardship.",
    limits:
      "Chicago-only. No public accounts, volunteer registration, messaging, or payments. Listing verification requires ongoing human review.",
    role: "Designed and built by Kendra Anne Hartnett in collaboration with Codex, as documented in the repository.",
  },
  {
    slug: "ethical-apple",
    name: "Ethical Apple",
    category: "Mission-driven · Food affordability",
    summary:
      "A budget-first meal and grocery planning prototype, using transparent sample prices and predictable planning logic.",
    status: "Deployed prototype",
    image: "ethical-apple.png",
    alt: "Authentic Ethical Apple landing page from the project repository",
    live: "https://ethical-apple-grocery-plan.vercel.app/",
    repo: "https://github.com/kendrahartnett/ethical-apple-grocery-plan",
    stack: ["JavaScript", "HTML", "CSS", "Vite"],
    problem:
      "Households shopping on a tight budget need to understand how meals and ingredients might fit the money available.",
    audience: "Chicago households planning meals and grocery spending.",
    features: [
      "Budget, household-size, and planning-duration inputs.",
      "Rule-based meal selection and aggregated shopping lists.",
      "Pantry quantity adjustments and sample basket comparisons.",
      "Download, copy, and share options for the shopping list.",
    ],
    architecture:
      "A client-side JavaScript application built with Vite. A data catalog supplies sample prices and meal templates; a separate planning module calculates meals, quantities, and budget fit.",
    decision:
      "After exploring a local Ollama model and grocery-price integration, the shipped prototype uses deterministic browser-side logic for a more reliable deployed experience.",
    limits:
      "Prices are illustrative planning estimates, not checkout quotes. Distances are fixed examples. Dietary tags are preferences, not allergy or nutrition guidance. No runtime AI model or live pricing API.",
    role: "Authored by Kendra Hartnett for the Next Chapter Project. The planning module documents her own decision logic.",
  },
  {
    slug: "just-doing-the-books",
    name: "Just Doing the Books",
    category: "Business website · Frontend development",
    summary:
      "A clear, focused web presence for a bookkeeping and tax service, connecting visitors with services, background, and contact information.",
    status: "Deployed website",
    image: "just-doing-the-books.png",
    alt: "Authentic Just Doing the Books business website screenshot",
    live: "https://just-doing-the-books.vercel.app/",
    repo: "https://github.com/kendrahartnett/just-doing-the-books",
    stack: ["HTML", "CSS", "JavaScript"],
    problem:
      "A small bookkeeping and tax service needed an understandable online introduction and a direct way for visitors to take the next step.",
    audience:
      "Personal and small-business clients exploring the services of Joanna Plues in Payson, Arizona.",
    features: [
      "Three focused sections: services, about, and get in touch.",
      "A direct email call to action.",
      "A lightweight single-page layout without a framework.",
    ],
    architecture:
      "Static HTML, CSS, and vanilla JavaScript. There is no application backend or financial-record processing workflow.",
    decision:
      "Work within a deliberately constrained brief: communicate the service, maintain three sections, and provide one clear primary action.",
    limits:
      "This is a business marketing website, not bookkeeping software or a financial advice application. Email links rely on a configured email client.",
    role: "Built by Kendra Hartnett for Joanna Plues as part of the Next Chapter Project AI-Augmented Builders program.",
  },
];
export const github = "https://github.com/kendrahartnett";
