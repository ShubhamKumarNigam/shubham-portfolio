"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const BASE_COUNT = 1847; // seeded realistic starting count
const STORAGE_KEY = "skn_visitor_count";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let current = BASE_COUNT;
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= BASE_COUNT) {
          current = parsed;
        }
      }
      current += 1;
      localStorage.setItem(STORAGE_KEY, String(current));
      setCount(current);
    } catch {
      setCount(BASE_COUNT);
    }
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 rounded-full bg-surface dark:bg-surface-dark backdrop-blur-sm border border-hairline dark:border-hairline-dark px-4 py-2 text-sm text-ink2 dark:text-ink2-dark shadow-sm"
    >
      <Eye size={16} className="text-accent dark:text-accent-link" />
      <span className="font-medium text-ink dark:text-ink-dark">{count.toLocaleString()}</span>
      <span className="text-muted">visitors</span>
    </motion.div>
  );
}
