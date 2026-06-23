"use client";

import { motion } from "framer-motion";
import { PosterType, getPosterGradient } from "./posterUtils";
import {
  Scale,
  HeartPulse,
  Search,
  Columns3,
  FileText,
  ScanLine,
  Languages,
  Target,
  HelpCircle,
  Trophy,
  MessageSquareWarning,
  ClipboardCheck,
  Network,
  Leaf,
  BookOpen,
  LucideIcon,
} from "lucide-react";

interface PosterGraphicProps {
  type: PosterType;
  title: string;
  className?: string;
}

const typeToIcon: Record<PosterType, LucideIcon> = {
  "legal-judgment": Scale,
  "healthcare-dialogue": HeartPulse,
  "rag-retrieval": Search,
  "rhetorical-segmentation": Columns3,
  "legal-document-generation": FileText,
  "ocr-translation": ScanLine,
  "reinforcement-learning": Target,
  "bias-fairness": Scale,
  "question-answering": HelpCircle,
  "shared-task-benchmark": Trophy,
  "sarcasm-social-nlp": MessageSquareWarning,
  "peer-grading-tool": ClipboardCheck,
  "pricing-network": Network,
  "environmental-media": Leaf,
  "tutorial-survey": BookOpen,
};

export default function PosterGraphic({ type, className = "" }: PosterGraphicProps) {
  const gradient = getPosterGradient(type);
  const Icon = typeToIcon[type] || BookOpen;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`relative overflow-hidden rounded-xl ${gradient} ${className} flex items-center justify-center`}
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id={`grid-${type}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${type})`} />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <Icon size={56} strokeWidth={1.5} className="text-white/90 drop-shadow-lg" />
      </div>

      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/5 blur-xl" />
      <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/5 blur-xl" />
    </motion.div>
  );
}
