const maxBodyBytes = 8_000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fail(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    let originHost: string;
    try { originHost = new URL(origin).host; } catch { return fail("Invalid request origin.", 403); }
    const allowedHosts = [new URL(request.url).host, request.headers.get("host"), request.headers.get("x-forwarded-host")];
    const localDevelopment = process.env.NODE_ENV === "development" && /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(originHost);
    if (!allowedHosts.includes(originHost) && !localDevelopment) return fail("Invalid request origin.", 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) return fail("Invalid request format.", 415);
  const length = Number(request.headers.get("content-length"));
  if (Number.isFinite(length) && length > maxBodyBytes) return fail("Message is too long.", 413);

  let payload: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > maxBodyBytes) return fail("Message is too long.", 413);
    payload = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return fail("Invalid request format.", 400);
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return fail("Invalid request format.", 400);
  if (payload.website) return Response.json({ message: "Message sent. Thank you for reaching out!" });
  if (typeof payload.startedAt !== "number" || Date.now() - payload.startedAt < 3_000 || Date.now() - payload.startedAt > 86_400_000) {
    return fail("Please wait a moment and try again.", 400);
  }
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 254 || !subject || subject.length > 150 || message.length < 10 || message.length > 5_000) {
    return fail("Please check your name, email, subject, and message.", 400);
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !from || !to) return fail("The contact form is not configured yet. Please use LinkedIn to get in touch.", 503);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio: ${subject.replace(/[\r\n]/g, " ")}`,
        text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      }),
      cache: "no-store",
    });
    if (!response.ok) return fail("Your message could not be sent right now. Please try again later or connect on LinkedIn.", 502);
    return Response.json({ message: "Message sent. Thank you for reaching out!" }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return fail("Your message could not be sent right now. Please try again later or connect on LinkedIn.", 502);
  }
}
