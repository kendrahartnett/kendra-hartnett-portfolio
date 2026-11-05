import { ContactSection } from "@/components/sections";
export const metadata = {
  title: "Contact",
  description:
    "Connect with Kendra Hartnett about purposeful software, practical AI, and collaboration.",
};
export default function Contact() {
  return (
    <main id="main" className="contact-page">
      <ContactSection standalone />
    </main>
  );
}
