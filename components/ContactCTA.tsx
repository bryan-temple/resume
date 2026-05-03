'use client';

import { useState, useRef } from 'react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactCTA() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send failed');
      setState('success');
      setForm({ name: '', email: '', message: '' });
      formRef.current?.reset();
    } catch {
      setState('error');
    } finally {
      setTimeout(() => statusRef.current?.focus(), 100);
    }
  };

  return (
    <section
      className="section"
      id="contact"
      aria-labelledby="contact-heading"
      data-signal="9"
    >
      <div className="contact-wrap">

        {/* Left — intro copy */}
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2 className="heading" id="contact-heading" style={{ marginBottom: 20 }}>
            Your store is excluding people.<br />Let&apos;s fix that.
          </h2>
          <p className="contact-sub">
            If your site doesn&apos;t work with a screen reader, a keyboard, or a switch
            device – those users don&apos;t email you. They just leave. I fix that, for good.
            CPACC certified. WCAG 2.2 AA. Disability-first from line one.
          </p>
          <ul className="contact-chips" aria-label="Service highlights">
            {[
              'WCAG audit included',
              'Shopify specialist',
              'CPACC certified',
              'Quick turnaround',
            ].map((chip) => (
              <li key={chip} className="contact-chip">{chip}</li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          aria-label="Send a message to Bryan Temple"
          noValidate
        >
          {/* Live status region — announced to screen readers */}
          <div
            ref={statusRef}
            aria-live="polite"
            aria-atomic="true"
            tabIndex={-1}
            className="contact-status"
          >
            {state === 'success' && (
              <p className="contact-status__success" role="status">
                Message sent — I&apos;ll get back to you within 24 hours.
              </p>
            )}
            {state === 'error' && (
              <p className="contact-status__error" role="alert">
                Something went wrong. Please try again or reach out on{' '}
                <a href="https://www.linkedin.com/in/bryanonyenghan" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>.
              </p>
            )}
          </div>

          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, store, or accessibility goals..."
            />
          </div>

          <button
            type="submit"
            className="btn btn--brand"
            disabled={state === 'sending'}
            aria-disabled={state === 'sending'}
            style={{ width: '100%' }}
          >
            {state === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
