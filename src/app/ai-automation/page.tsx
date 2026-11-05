import {
  AISection,
  ResponsibleAI,
  ContactSection,
} from "@/components/sections";
export const metadata = {
  title: "AI & Automation",
  description:
    "Practical AI, responsible engineering, and illustrative workflows for everyday business problems.",
};
export default function AI() {
  return (
    <main id="main">
      <div className="shell page-intro compact">
        <span className="eyebrow">AI & AUTOMATION / A THOUGHTFUL APPROACH</span>
        <h1>
          Practical AI.
          <br />
          <em>Human intention.</em>
        </h1>
        <p>
          The best solution starts with understanding the problem. AI is one
          tool in the toolkit; reliability, privacy, and human judgment shape
          the decision.
        </p>
      </div>
      <AISection full />
      <ResponsibleAI />
      <ContactSection />
    </main>
  );
}
