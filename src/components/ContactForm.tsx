"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_FORM_ID = "xpqegzgk";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass = "w-full rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-4 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">
            Full Name *
          </label>
          <input required id="name" type="text" name="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">
            Email Address *
          </label>
          <input required id="email" type="email" name="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">
          Subject *
        </label>
        <select required id="subject" name="subject" className={inputClass}>
          <option value="">Select a subject</option>
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
        <label htmlFor="message" className="block text-sm font-medium text-ink2 dark:text-ink2-dark mb-1">
          Message *
        </label>
        <textarea required id="message" name="message" rows={5} className={inputClass} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
      >
        {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-ok text-sm">
          <CheckCircle size={16} /> Message sent successfully! I will get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-signal text-sm">
          <AlertCircle size={16} /> Something went wrong. Please make sure the Formspree form ID is configured correctly.
        </div>
      )}
    </form>
  );
}
