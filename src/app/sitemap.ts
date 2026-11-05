import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  return origin
    ? [
        "",
        "/projects",
        "/about",
        "/ai-automation",
        "/contact",
        ...projects.map((p) => `/projects/${p.slug}`),
      ].map((path) => ({ url: `${origin}${path}/` }))
    : [];
}
