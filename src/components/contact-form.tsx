"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type Status = { kind: "idle" | "sending" | "success" | "error"; message: string };

export function ContactForm() {
  const id = useId().replace(/:/g, "");
  const form = useRef<HTMLFormElement>(null);
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.current?.reportValidity() || status.kind === "sending") return;
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
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message || "Your message could not be sent. Please try again.");
      form.current.reset();
      startedAt.current = Date.now();
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
        <button className="button primary" type="submit" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={17} />
        </button>
        <span className="contact-form-status" role="status" aria-live="polite" data-kind={status.kind}>
          {status.message}
        </span>
      </div>
    </form>
  );
}
