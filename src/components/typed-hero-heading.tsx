"use client";

import { useEffect, useState } from "react";

const firstLine = "Hi, I'm";
const secondLine = "Kendra Hartnett";
const fullLength = firstLine.length + secondLine.length;

export function TypedHeroHeading() {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) {
      setLength(fullLength);
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setLength((current) => {
          if (current >= fullLength) {
            clearInterval(interval);
            return current;
          }
          return current + 1;
        });
      }, 72);
    }, 180);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 className="typed-hero-heading" aria-label="Hi, I'm Kendra Hartnett">
      <span className="typed-heading-space" aria-hidden="true">
        {firstLine}
        <br />
        <span>{secondLine}</span>
      </span>
      <span className="typed-heading-reveal" aria-hidden="true">
        {firstLine.slice(0, length)}
        {length <= firstLine.length && length < fullLength && (
          <i className="typed-heading-caret" />
        )}
        <br />
        <span>
          {secondLine.slice(0, Math.max(0, length - firstLine.length))}
        </span>
        {length > firstLine.length && length < fullLength && (
          <i className="typed-heading-caret" />
        )}
      </span>
    </h1>
  );
}
