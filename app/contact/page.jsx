"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  description: "",
};

const emailRegex =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneRegex = /^\+?[0-9]{7,15}$/;

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!emailRegex.test(form.email))
      nextErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Mobile number is required.";
    else if (!phoneRegex.test(form.phone))
      nextErrors.phone = "Enter a valid mobile number (digits only).";
    if (!form.description.trim())
      nextErrors.description = "Description is required.";
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      // send to API here
      console.log("Contact data:", form);
      setForm(initialForm);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,169,74,0.25),_transparent_45%)]" />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left info panel */}
        <div className="space-y-6">
          <p className="uppercase tracking-[0.4em] text-sm text-white/70">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            Let&apos;s design your next climate milestone together.
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Tell us about your facility, timelines, and what success looks like.
            Our engineering team will respond within two business days with the
            next steps.
          </p>
          <div className="bg-white/5 border border-white/10 p-6 sm:p-7 space-y-4">
            <h2 className="text-xl font-semibold">Prefer a direct line?</h2>
            <div className="text-white/80">
              <p>
                <span className="text-white">Email:</span>{" "}
                <a
                  href="mailto:contact@tracexero.com"
                  className="underline underline-offset-4"
                >
                  info@tracexero.com
                </a>
              </p>
              
            </div>
            <p className="text-sm text-white/60">
              Offices in Jaipur & Delhi • Available Monday–Friday, 9am–7pm IST
            </p>
          </div>
        </div>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-lg flex flex-col gap-5 backdrop-blur"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              error={errors.name}
            />
            <Field
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />
          </div>
          <Field
            label="Mobile Number"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            error={errors.phone}
          />
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase mb-2 text-white/70">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full bg-black text-white border border-white/20 px-4 py-3 h-36 focus:border-white focus:outline-none resize-none"
              placeholder="Tell us about your project, timeline, and needs"
              required
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">
                {errors.description}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#FA7A50] hover:bg-[#fa7a5099] text-white tracking-[0.3em] py-3 uppercase"
          >
            Submit Request
          </button>
          {submitted && (
            <div className="bg-green-500/10 border border-green-500/40 text-green-300 text-sm px-4 py-3">
              Thank you! We&apos;ll be in touch soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.25em] uppercase mb-2 text-white/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-black text-white border border-white/20 px-4 py-3 focus:border-white focus:outline-none"
        placeholder={placeholder}
        required
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}


