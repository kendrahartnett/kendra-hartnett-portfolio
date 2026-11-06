"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CinematicEntry() {
  const overlay = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [replayEnabled, setReplayEnabled] = useState(false);
  const [iteration, setIteration] = useState(0);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const replay =
        new URLSearchParams(location.search).get("intro") === "replay";
      setReplayEnabled(replay);
      let seen = false;
      try {
        seen = sessionStorage.getItem("kh-entry") === "seen";
        sessionStorage.setItem("kh-entry", "seen");
      } catch {
        /* Storage is optional. */
      }
      if ((seen && !replay) || window.scrollY > 40 || location.hash) return;
      const image =
        document.querySelector<HTMLImageElement>(".personal-art img");
      // Never wait on a decorative asset or hide the server-rendered content.
      const ready = !!image?.complete && image.naturalWidth > 0;
      setActive(ready);
      const targets = document.querySelectorAll(
        ".site-header, .hero-copy h1, .hero-lead, .hero-description, .hero-copy .button, .personal-art",
      );
      const ctx = gsap.context(() => {
        gsap.fromTo(
          targets,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.09,
            delay: ready ? 1.15 : 0,
            ease: "power3.out",
            clearProps: "opacity,transform",
          },
        );
      });
      const finish = () => {
        setActive(false);
        gsap.killTweensOf(targets);
        gsap.set(targets, { clearProps: "opacity,transform" });
      };
      const timer = window.setTimeout(() => setActive(false), 2100);
      const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;
      events.forEach((event) =>
        window.addEventListener(event, finish, { passive: true, once: true }),
      );
      return () => {
        clearTimeout(timer);
        events.forEach((event) => window.removeEventListener(event, finish));
        ctx.revert();
        setActive(false);
      };
    });
    return () => media.revert();
  }, [iteration]);
  return (
    <>
      {replayEnabled && (
        <button
          className="intro-replay"
          onClick={() => setIteration((n) => n + 1)}
        >
          Replay intro
        </button>
      )}
      {active ? (
        <div className="cinematic-entry" ref={overlay}>
          <StarSprinkles />
          <div className="entry-halo" aria-hidden="true" />
          {/* Original animated file, never a generated or frozen approximation. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/kh-personal-brand.gif"
            width="414"
            height="414"
            alt=""
            className="entry-monogram"
          />
          <button className="entry-skip" onClick={() => setActive(false)}>
            Skip intro ↗
          </button>
        </div>
      ) : null}
    </>
  );
}

export function StarSprinkles() {
  return (
    <div className="star-sprinkles" aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 43 + 9) % 100}%`,
            top: `${(i * 29 + 3) % 100}%`,
            animationDelay: `${-(i % 7)}s`,
          }}
        />
      ))}
    </div>
  );
}
