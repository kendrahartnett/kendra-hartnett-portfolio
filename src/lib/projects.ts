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
const projectEntries: Project[] = [
  {
    slug: "eevora",
    name: "EEVORA",
    category: "Independent product · Practical AI",
    summary:
      "An independent product direction for small businesses, beginning with a deployed service website and a human-reviewed document workflow concept.",
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
      "A full-stack application coordinating Chicago community needs with approved organizations, using privacy screening and human review before requests can go public.",
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
    role: "Kendra Anne Hartnett designed the privacy boundaries and role-specific workflow, evaluated screening behavior, and tested request and claim rules. Claude Code and Codex supported implementation and iteration.",
  },
  {
    slug: "goodneighbor",
    name: "GoodNeighbor",
    category: "Community technology · Full-stack application",
    summary:
      "A Chicago volunteer-opportunity guide with searchable verified listings and a protected editorial publishing workflow.",
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
    role: "Kendra Anne Hartnett shaped the Chicago-only scope, verification model, and protected editorial workflow, and built the application in collaboration with Codex, as documented in the repository.",
  },
  {
    slug: "ethical-apple",
    name: "Ethical Apple",
    category: "Mission-driven · Food affordability",
    summary:
      "A browser-based meal and grocery planner that turns household needs and a budget into a sample shopping list with predictable rule-based logic.",
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
    slug: "kendra-hartnett-services",
    name: "Kendra Hartnett Services",
    category: "Independent practice · Business website",
    summary:
      "A website for my independent software and automation practice, explaining my services and giving prospective clients a way to start a project conversation.",
    status: "Deployed website",
    image: "kendra-hartnett-services.webp",
    alt: "Screenshot of the Kendra Hartnett Services homepage with a light pink and cream design",
    live: "https://www.kendrahartnett.dev/",
    repo: "https://github.com/kendrahartnett/kendra-hartnett-services",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Resend"],
    problem:
      "Businesses need a clear way to understand the software and automation services I offer and begin a conversation about their own needs.",
    audience: "Businesses considering custom software, automation, or practical AI work.",
    features: [
      "Service descriptions for custom software, business automation, and practical AI.",
      "A four-step process from discovery through launch and support.",
      "A project inquiry form with server-side validation and email delivery through Resend.",
      "Links to my portfolio and professional profiles.",
    ],
    architecture:
      "A Next.js App Router site built with TypeScript, Tailwind CSS, and Motion. A server route validates contact submissions and sends email through Resend.",
    decision:
      "Present the practice around business problems and a clear inquiry path, with custom software, automation, and AI described as possible approaches.",
    limits:
      "The website describes services and a process; it does not establish completed client engagements or measured business outcomes.",
    role: "Designed and built by Kendra Hartnett for her independent software and automation practice.",
  },
];
const projectOrder = ["the-bridge", "ethical-apple", "eevora", "goodneighbor", "kendra-hartnett-services"];
export const projects = projectOrder.map((slug) => {
  const project = projectEntries.find((entry) => entry.slug === slug);
  if (!project) throw new Error(`Missing portfolio project: ${slug}`);
  return project;
});
export const github = "https://github.com/kendrahartnett";
export const linkedin =
  "https://www.linkedin.com/in/kendra-hartnett-7877ab422/";
