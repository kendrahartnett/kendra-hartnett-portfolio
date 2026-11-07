"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactCooldownMs } from "@/lib/contact-rate-limit";

type Status = { kind: "idle" | "sending" | "success" | "error"; message: string };
const cooldownStorageKey = "portfolio-contact-cooldown-until";

export function ContactForm() {
  const id = useId().replace(/:/g, "");
  const form = useRef<HTMLFormElement>(null);
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [now, setNow] = useState(0);
  const remainingSeconds = Math.max(0, Math.ceil((cooldownUntil - now) / 1000));

  useEffect(() => {
    try { setCooldownUntil(Number(localStorage.getItem(cooldownStorageKey)) || 0); } catch { /* Storage may be unavailable. */ }
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  function startCooldown(seconds: number) {
    const until = Date.now() + seconds * 1000;
    setCooldownUntil(until);
    setNow(Date.now());
    try { localStorage.setItem(cooldownStorageKey, String(until)); } catch { /* Server limit still applies. */ }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.current?.reportValidity() || status.kind === "sending" || remainingSeconds > 0) return;
    const data = new FormData(form.current);
    setStatus({ kind: "sending", message: "Sending your message…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"),
          startedAt: startedAt.current,
        }),
      });
      const result: { message?: string; retryAfterSeconds?: number } = await response.json();
      if (response.status === 429 && result.retryAfterSeconds) startCooldown(result.retryAfterSeconds);
      if (!response.ok) throw new Error(result.message || "Your message could not be sent. Please try again.");
      form.current.reset();
      startedAt.current = Date.now();
      startCooldown(contactCooldownMs / 1000);
      setStatus({ kind: "success", message: "Message sent. Thank you for reaching out!" });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Your message could not be sent. Please try again.",
      });
    }
  }

  return (
    <form ref={form} className="contact-form" onSubmit={submit} aria-label="Contact Kendra">
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor={`${id}-name`}>Name</label>
          <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={100} />
        </div>
        <div className="contact-field">
          <label htmlFor={`${id}-email`}>Email</label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor={`${id}-subject`}>Subject</label>
        <input id={`${id}-subject`} name="subject" required maxLength={150} />
      </div>
      <div className="contact-field">
        <label htmlFor={`${id}-message`}>Message</label>
        <textarea id={`${id}-message`} name="message" required minLength={10} maxLength={5000} rows={6} />
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Leave this field empty</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="contact-form-bottom">
        <button className="button primary" type="submit" disabled={status.kind === "sending" || remainingSeconds > 0}>
          {status.kind === "sending" ? "Sending…" : remainingSeconds > 0
            ? `Send another in ${Math.floor(remainingSeconds / 60)}:${String(remainingSeconds % 60).padStart(2, "0")}`
            : "Send message"} <ArrowUpRight size={17} />
        </button>
        <span className="contact-form-status" role="status" aria-live="polite" data-kind={status.kind}>
          {status.message}
        </span>
      </div>
    </form>
  );
}
