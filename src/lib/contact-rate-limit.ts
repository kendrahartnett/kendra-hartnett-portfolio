// A small single-process safeguard. Serverless deployments need a shared store
// or an edge firewall rule to enforce this limit across all instances.
export const contactCooldownMs = 5 * 60 * 1000;

const attempts = new Map<string, number>();

export function reserveContactSubmission(key: string, now = Date.now()) {
  for (const [existingKey, expiresAt] of attempts) {
    if (expiresAt <= now) attempts.delete(existingKey);
  }

  const expiresAt = attempts.get(key);
  if (expiresAt && expiresAt > now) {
    return { allowed: false as const, retryAfterSeconds: Math.ceil((expiresAt - now) / 1000) };
  }

  // Reserve before awaiting Resend so simultaneous requests cannot both pass.
  attempts.set(key, now + contactCooldownMs);
  return {
    allowed: true as const,
    release: () => attempts.delete(key),
  };
}
