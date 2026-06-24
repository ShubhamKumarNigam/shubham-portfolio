"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    institution: "",
    country: "",
    purpose: "",
    mode: "",
    date: "",
    time: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!form.consent) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          institution: "",
          country: "",
          purpose: "",
          mode: "",
          date: "",
          time: "",
          message: "",
          consent: false,
          honeypot: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = "w-full rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-4 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Full Name *</label>
          <input required name="name" value={form.name} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Institution / Organization</label>
          <input name="institution" value={form.institution} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Country</label>
          <input name="country" value={form.country} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Purpose of Meeting *</label>
          <select required name="purpose" value={form.purpose} onChange={handleChange} className={inputClass}>
            <option value="">Select purpose</option>
            <option value="Research Collaboration">Research Collaboration</option>
            <option value="PhD Guidance">PhD Guidance</option>
            <option value="Internship Discussion">Internship Discussion</option>
            <option value="Industry Collaboration">Industry Collaboration</option>
            <option value="Invited Talk">Invited Talk</option>
            <option value="Healthcare AI Discussion">Healthcare AI Discussion</option>
            <option value="Legal AI Discussion">Legal AI Discussion</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Preferred Meeting Mode</label>
          <select name="mode" value={form.mode} onChange={handleChange} className={inputClass}>
            <option value="">Select mode</option>
            <option value="Online">Online</option>
            <option value="In-person">In-person</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Preferred Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Preferred Time</label>
          <input type="time" name="time" value={form.time} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">Message / Agenda</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={inputClass} />
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-hairline dark:border-hairline-dark text-accent focus:ring-accent bg-paper dark:bg-paper-dark" />
        <label className="text-sm text-ink2 dark:text-ink2-dark">
          I consent to having my information stored and used to respond to my inquiry. *
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !form.consent}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
      >
        {loading ? "Sending..." : <><Send size={16} /> Request Meeting</>}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-ok text-sm">
          <CheckCircle size={16} /> Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-signal text-sm">
          <AlertCircle size={16} /> Something went wrong. Please try again.
        </div>
      )}
    </motion.form>
  );
}
