// Contact form configuration and validation.
//
// The form only sends messages when CONTACT_ENDPOINT is set to a service you control
// (for example a Formspree, Web3Forms, or your own API endpoint that validates and forwards mail).
// The endpoint URL is public by nature; never put API secrets in the frontend.
// If it is empty, the form shows an honest "not connected yet" message instead of pretending to send.

export const CONTACT_ENDPOINT: string = ''; // e.g. 'https://formspree.io/f/your-form-id'

export interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!email) errors.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address, such as name@example.com.';
  if (subject.length < 3) errors.subject = 'Please enter a subject (at least 3 characters).';
  if (message.length < 10) errors.message = 'Please write a message (at least 10 characters).';
  else if (message.length > 2000) errors.message = 'Please keep your message under 2000 characters.';

  return errors;
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'server' | 'network' };

/** Sends the message to CONTACT_ENDPOINT. Returns a result the UI can show. */
export async function submitContact(values: ContactValues): Promise<SubmitResult> {
  if (!CONTACT_ENDPOINT) return { ok: false, reason: 'not-configured' };
  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
    });
    return response.ok ? { ok: true } : { ok: false, reason: 'server' };
  } catch {
    return { ok: false, reason: 'network' };
  }
}
