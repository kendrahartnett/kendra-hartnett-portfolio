import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";
import { Navigation, Footer } from "@/components/interactive";
const origin = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(origin ? { metadataBase: new URL(origin) } : {}),
  title: {
    default: "Kendra Hartnett - Thoughtful Builder",
    template: "%s | Kendra Hartnett",
  },
  description:
    "Full-stack developer and AI-augmented builder. Purposeful applications, practical AI, and independent products by Kendra Hartnett.",
  openGraph: {
    title: "Kendra Hartnett - Thoughtful Builder",
    description: "Purposeful technology. Thoughtfully built.",
    images: [
      {
        url: "/images/kh-emblem.webp",
        width: 1672,
        height: 941,
        alt: "Kendra Hartnett KH orbital monogram",
      },
    ],
  },
  icons: { icon: "/icon.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
