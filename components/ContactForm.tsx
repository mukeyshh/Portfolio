"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulate sending — wire up EmailJS or Resend here
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white/[0.04] backdrop-blur-sm border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? "border-rose-500/40 focus:ring-rose-500/20"
        : "border-white/[0.08] focus:ring-indigo-500/25 focus:border-indigo-500/40"
    }`;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-8 space-y-5"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={inputClass("name")}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={inputClass("email")}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : status === "success" ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent!
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-400 text-center">
          Thanks! I&apos;ll get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-400 text-center">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </motion.form>
  );
}
