import type { Project } from "./projects";

export type CaseSection = {
  label: string;
  title: string;
  body?: string;
  bullets?: string[];
  source?: { label: string; url: string };
};

export function caseSections(project: Project): CaseSection[] {
  const shared = {
    problem: { label: "01 / THE PROBLEM", title: "The problem I identified", body: project.problem },
    built: { label: "02 / WHAT I BUILT", title: "What I built", bullets: project.features },
  };

  switch (project.slug) {
    case "the-bridge":
      return [
        shared.problem,
        shared.built,
        {
          label: "03 / KEY ENGINEERING DECISIONS",
          title: "Privacy before publication",
          body: "The request form avoids exact locations and identifying fields. Deterministic checks run before server-side Anthropic screening. Clear risks are returned for revision; uncertain submissions wait privately for an administrator to review a separately screened safe draft. A failed screening does not publish a request. The informational assistant has no access to accounts or the database and cannot take actions on a user's behalf.",
        },
        {
          label: "04 / ARCHITECTURE",
          title: "A full-stack, role-aware application",
          body: "Next.js App Router and React connect to Neon PostgreSQL through Drizzle. Neon Auth handles sign-in. Server-side rules determine who may post, browse, claim, fulfill, or review a need; approved organizations can claim, while the poster controls fulfillment. The English/Spanish interface renders from the selected language on the server. Anthropic calls stay server-side.",
        },
        {
          label: "05 / VALIDATION",
          title: "How I validated the boundaries",
          body: "The repository documents rule tests for claim conflicts, organization approval, contact visibility, notifications, and request state changes. Separate offline tests exercise privacy-screening boundaries and sanitized provider payloads. Browser suites cover navigation, roles, responsive layouts, language switching, and accessibility checks against a local development environment. These are development checks, not evidence of community adoption.",
          source: { label: "Explore the repository tests and notes", url: project.repo },
        },
        {
          label: "06 / CURRENT RESULT",
          title: "A working foundation for coordinated outreach",
          body: "The application is deployed with need posting, a board, claiming and fulfillment, administrative approval, privacy review, notifications, and English/Spanish navigation. It connects requests with approved organizations; it does not itself provide housing, health care, or other services.",
        },
        {
          label: "07 / KNOWN LIMITATIONS",
          title: "Where human review still matters",
          body: project.limits,
        },
      ];
    case "ethical-apple":
      return [
        { ...shared.problem, title: "The everyday budget problem" },
        shared.built,
        {
          label: "03 / PLANNING LOGIC",
          title: "From household profile to shopping list",
          body: "A visitor enters a total budget, household size, days to plan, dietary preferences, and optional pantry quantities. Browser-side JavaScript selects meal templates, aggregates ingredients, subtracts entered pantry quantities, rounds purchases to catalog units, and compares estimated costs with the budget. An infeasible sample-price plan is reported rather than shown as affordable.",
        },
        {
          label: "04 / TECHNICAL DECISION",
          title: "Predictable rules over a runtime model",
          body: "After exploring a local Ollama model and a grocery-price API, I shipped deterministic client-side planning. The deployed static app could not rely on a model or backend running on my computer. Rule-based calculations make the sample-price behavior inspectable and available in the browser.",
        },
        {
          label: "05 / VALIDATION",
          title: "How I checked the planner",
          body: "Repository tests cover budget fit, infeasible plans, dietary filtering, pantry quantities, catalog prices, and store-estimate behavior. The README documents the data sources and assumptions behind the illustrative prices.",
          source: { label: "Read the planning tests", url: `${project.repo}/blob/main/tests/planLogic.test.js` },
        },
        {
          label: "06 / CURRENT RESULT",
          title: "A deployed browser-based prototype",
          body: "The working prototype produces meals, an itemized shopping list, and sample basket comparisons from a household profile. It is a planning aid rather than a live grocery quote.",
        },
        { label: "07 / KNOWN LIMITATIONS", title: "Estimates, not checkout promises", body: project.limits },
      ];
    case "eevora":
      return [
        { ...shared.problem, title: "The business problem" },
        {
          label: "02 / PRODUCT DIRECTION",
          title: "Start with the workflow",
          body: "EEVORA is my independent direction for practical AI and operational improvement in small businesses. Document-heavy tasks and repeated administrative handoffs are a useful place to investigate friction. I begin with the actual process and the people responsible for it before deciding whether automation or AI belongs in the solution.",
        },
        { ...shared.built, label: "03 / DEPLOYED TODAY", title: "What the website does today" },
        {
          label: "04 / PRODUCT AND ENGINEERING DECISIONS",
          title: "A clear boundary between demo and product",
          body: "The deployed Next.js website uses TypeScript, Tailwind CSS, and Motion. Its interactive document workflow presents selectable steps, a pause control, keyboard access, and reduced-motion behavior. The contact route validates submissions on the server and sends email through Resend. The workflow is illustrative, with an explicit human-review step; it is not a document-processing application.",
        },
        {
          label: "05 / IN DEVELOPMENT",
          title: "EEVORADocs is still taking shape",
          body: "EEVORADocs is a document-request concept for accounting and tax businesses. Missing-document detection, automated reminders, status tracking, and a dedicated dashboard are planned ideas, not released features. The website does not demonstrate completed client projects or measured business results.",
        },
        {
          label: "06 / VALIDATION AND BOUNDARIES",
          title: "What has been checked",
          body: "The repository documents production build, type checking, linting, and browser checks of the website's routes, workflow controls, mobile navigation, and reduced-motion state. Email delivery through the deployed form still requires its own end-to-end verification. The current result is a deployed service website, not a released EEVORADocs product.",
          source: { label: "Read website verification notes", url: `${project.repo}/blob/main/VERIFICATION.md` },
        },
      ];
    case "goodneighbor":
      return [
        { ...shared.problem, title: "The community opportunity" },
        shared.built,
        {
          label: "03 / EDITORIAL WORKFLOW",
          title: "Verification stays with a person",
          body: "Published listings show an official organizer source and a last-verified date. Visitors can suggest an opportunity privately, while one authorized administrator reviews suggestions and controls drafts, publishing, and updates. Organizers handle volunteer registration; GoodNeighbor focuses on discovery and curation.",
        },
        {
          label: "04 / ENGINEERING DECISIONS",
          title: "Keep public reads and protected writes distinct",
          body: "Server-rendered Next.js pages read Neon PostgreSQL through Prisma. Same-origin REST routes validate writes. Auth.js with GitHub OAuth and a server-side allowlist protect the single-admin dashboard; drafts are excluded from public pages and API responses. The Chicago-only scope keeps the verification task manageable.",
        },
        {
          label: "05 / VALIDATION",
          title: "How the boundaries are checked",
          body: "The repository includes Vitest and Testing Library checks for validation, listings, request actions, and API authorization. Its release checklist also calls for manual verification of official sources, keyboard behavior, mobile layouts, and admin workflows. The checklist describes a gate, not a claim that every manual check has been completed.",
          source: { label: "Read the test plan", url: `${project.repo}/blob/main/docs/TEST_PLAN.md` },
        },
        {
          label: "06 / CURRENT RESULT",
          title: "A deployed Chicago opportunity guide",
          body: "The application offers searchable, filtered listings and a protected editorial path. It connects visitors to organizers' own sites rather than collecting volunteer registrations.",
        },
        { label: "07 / SCOPE AND LIMITATIONS", title: "Curation is ongoing work", body: project.limits },
      ];
    case "kendra-hartnett-services":
      return [
        shared.problem,
        shared.built,
        {
          label: "03 / EXPERIENCE DESIGN",
          title: "A clear path from service to conversation",
          body: "The homepage introduces the practice, presents three service areas, explains the discovery-to-launch process, and leads to an inquiry form. It also connects visitors to my portfolio for examples of my work.",
        },
        {
          label: "04 / IMPLEMENTATION",
          title: "A responsive Next.js site with a server-side inquiry route",
          body: "The site uses Next.js, TypeScript, Tailwind CSS, and Motion. The inquiry route validates input, checks a honeypot field and rate limit, and sends the message through Resend when configured. Provider failures return an error rather than reporting success.",
        },
        {
          label: "05 / CURRENT RESULT",
          title: "A deployed home for my independent practice",
          body: "The website is live with service information, a process overview, an About section, portfolio links, and a project inquiry form. Its service descriptions are offerings, not claims of completed client work.",
          source: { label: "Read the source repository", url: project.repo },
        },
        { label: "06 / SCOPE", title: "What the website represents", body: project.limits },
      ];
    default:
      return [];
  }
}
