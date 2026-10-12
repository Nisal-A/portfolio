import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { LuCircleAlert, LuCheck, LuSend } from 'react-icons/lu';
import { CONTACT_ENDPOINT, submitContact, validateContact, type ContactErrors, type ContactValues } from '../lib/contact';

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'error'; message: string };

const empty: ContactValues = { name: '', email: '', subject: '', message: '' };

const failureMessages: Record<'not-configured' | 'server' | 'network', string> = {
  'not-configured':
    'The contact form is not connected to a delivery service yet. Please use the email or LinkedIn links above instead.',
  server: 'Something went wrong on the server, so your message was not sent. Please try again later.',
  network: 'We could not reach the server. Check your connection and try again.',
};

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const update = (field: keyof ContactValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    // Once a field has an error, re-check it live so the message clears as soon as it's fixed.
    if (errors[field]) setErrors(validateContact(next));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ kind: 'idle' });
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    setStatus({ kind: 'submitting' });
    const result = await submitContact(values);
    if (result.ok) {
      setValues(empty);
      setErrors({});
      setStatus({ kind: 'success' });
    } else {
      setStatus({ kind: 'error', message: failureMessages[result.reason] });
    }
  }

  const busy = status.kind === 'submitting';

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate aria-describedby="form-status">
      <div className="form-row">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={update('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={update('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
        </Field>
      </div>
      <Field id="subject" label="Subject" error={errors.subject}>
        <input id="subject" name="subject" type="text" value={values.subject} onChange={update('subject')} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" name="message" rows={6} value={values.message} onChange={update('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
      </Field>

      <div className="form-footer">
        <button type="submit" className="btn btn-primary" disabled={busy}>
          <LuSend aria-hidden="true" /> {busy ? 'Sending…' : 'Send message'}
        </button>
      </div>

      <div id="form-status" role="status" aria-live="polite" className="form-status">
        {status.kind === 'success' && (
          <p className="notice notice-success">
            <LuCheck aria-hidden="true" /> Thank you. Your message has been sent.
          </p>
        )}
        {status.kind === 'error' && (
          <p className="notice notice-error">
            <LuCircleAlert aria-hidden="true" /> {status.message}
          </p>
        )}
        {status.kind === 'idle' && !CONTACT_ENDPOINT && (
          <p className="muted small">Form delivery is not configured yet. See the README to connect it before deployment.</p>
        )}
      </div>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
