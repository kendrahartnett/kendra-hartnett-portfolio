import {
  AboutSection,
  Philosophy,
  Toolkit,
  ContactSection,
} from "@/components/sections";
export const metadata = {
  title: "About",
  description:
    "Meet Kendra Hartnett, full-stack developer and AI-augmented builder.",
};
export default function About() {
  return (
    <main id="main">
      <div className="shell page-intro compact">
        <span className="eyebrow">ABOUT / THE PERSON BEHIND THE WORK</span>
        <h1>
          Curiosity.
          <br />
          <em>With purpose.</em>
        </h1>
      </div>
      <AboutSection full />
      <Philosophy />
      <Toolkit />
      <ContactSection />
    </main>
  );
}
