'use client';

import { useState } from 'react';

const FIELD_CLASS =
  'w-full bg-[var(--card)] border border-[var(--line)] rounded-[14px] px-4 py-3.5 text-[14px] text-ink placeholder:text-muted font-light outline-none transition-colors duration-300 focus:border-[var(--orange)]';

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="paper-card p-8 sm:p-10 text-center">
        <span className="tick anim-breathe inline-block mb-4" style={{ background: 'var(--green)' }} />
        <h3 className="font-display text-2xl text-ink mb-3">Message sent</h3>
        <p className="text-[14px] leading-[1.8] text-ink-soft font-light">
          Thanks, {values.name.split(' ')[0] || 'there'} — we&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="paper-card p-6 sm:p-10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="eyebrow block mb-2">Name</label>
          <input id="name" type="text" required value={values.name} onChange={update('name')} className={FIELD_CLASS} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block mb-2">Email</label>
          <input id="email" type="email" required value={values.email} onChange={update('email')} className={FIELD_CLASS} placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="eyebrow block mb-2">Company</label>
        <input id="company" type="text" value={values.company} onChange={update('company')} className={FIELD_CLASS} placeholder="Company name (optional)" />
      </div>
      <div>
        <label htmlFor="message" className="eyebrow block mb-2">Message</label>
        <textarea id="message" required rows={5} value={values.message} onChange={update('message')} className={`${FIELD_CLASS} resize-none`} placeholder="Tell us about your facility and emissions profile" />
      </div>
      <button type="submit" className="btn-fill w-full sm:w-auto justify-center">
        Send Message <span className="arr">→</span>
      </button>
    </form>
  );
}
