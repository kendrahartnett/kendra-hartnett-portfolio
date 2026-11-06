"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Content is visible in server HTML; enhancement runs only when motion is allowed.
export function ScrollChapters({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const host = root.current;
      if (!host) return;
      const selector =
        ".section-heading, .philosophy-heading, .process > div, .capability-grid > div, .project-card, .ai-intro, .lab-heading, .glow-frame, .responsibility-grid > div, .toolkit-grid > div, .about-art, .about-section > div:last-child, .signature-art, .contact-section > .shell";
      const candidates = Array.from(
        host.querySelectorAll<HTMLElement>(selector),
      );
      const targets = candidates.filter(
        (el) =>
          !candidates.some((parent) => parent !== el && parent.contains(el)),
      );
      const pending = targets.filter(
        (el) => el.getBoundingClientRect().top >= window.innerHeight * 0.9,
      );
      const ctx = gsap.context(() => {
        gsap.set(pending, { opacity: 0, y: 32 });
        ScrollTrigger.batch(pending, {
          start: "top 90%",
          once: true,
          interval: 0.08,
          batchMax: 4,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.1,
              ease: "power3.out",
              overwrite: true,
              clearProps: "opacity,transform",
            }),
        });
        host
          .querySelectorAll<HTMLElement>(".chapter-light")
          .forEach((light) => {
            gsap.fromTo(
              light,
              { scaleX: 0, opacity: 0, transformOrigin: "left" },
              {
                scaleX: 1,
                opacity: 0.8,
                duration: 1.25,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: light.parentElement,
                  start: "top 88%",
                  once: true,
                },
                onComplete: () => {
                  gsap.to(light, { opacity: 0.12, duration: 0.8 });
                },
              },
            );
          });
      }, host);
      // Never leave a keyboard-focused control visually hidden during a reveal.
      const showFocused = (event: FocusEvent) => {
        const target = targets.find((el) => el.contains(event.target as Node));
        if (target) {
          gsap.killTweensOf(target);
          gsap.set(target, { clearProps: "opacity,transform" });
        }
      };
      host.addEventListener("focusin", showFocused);
      return () => {
        host.removeEventListener("focusin", showFocused);
        ctx.revert();
      };
    });
    return () => media.revert();
  }, []);
  return (
    <div ref={root} className="scroll-chapters">
      {children}
    </div>
  );
}
export function Chapter({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="scroll-chapter" id={id}>
      <div className="chapter-light" aria-hidden="true" />
      {children}
    </div>
  );
}
