export type PosterType =
  | "legal-judgment"
  | "healthcare-dialogue"
  | "rag-retrieval"
  | "rhetorical-segmentation"
  | "legal-document-generation"
  | "ocr-translation"
  | "reinforcement-learning"
  | "bias-fairness"
  | "question-answering"
  | "shared-task-benchmark"
  | "sarcasm-social-nlp"
  | "peer-grading-tool"
  | "pricing-network"
  | "environmental-media"
  | "tutorial-survey";

export function getPosterTypeFromTitle(title: string): PosterType {
  const t = title.toLowerCase();
  if (t.includes("medaid") || t.includes("indicmed")) return "healthcare-dialogue";
  if (t.includes("nyayarag")) return "rag-retrieval";
  if (t.includes("legalseg") || t.includes("rhetorical") || t.includes("semantic segmentation")) return "rhetorical-segmentation";
  if (t.includes("vidhik") || t.includes("document generation")) return "legal-document-generation";
  if (t.includes("seeing justice") || t.includes("ocr") || t.includes("handwritten")) return "ocr-translation";
  if (t.includes("regal") || t.includes("ppo") || t.includes("reinforcement")) return "reinforcement-learning";
  if (t.includes("debias")) return "bias-fairness";
  if (t.includes("ailqa") || t.includes("question answering")) return "question-answering";
  if (t.includes("semeval") || t.includes("coliee") || t.includes("shared task")) return "shared-task-benchmark";
  if (t.includes("plumeria") || t.includes("sarcasm")) return "sarcasm-social-nlp";
  if (t.includes("swagrader")) return "peer-grading-tool";
  if (t.includes("pricing") || t.includes("charge your friends")) return "pricing-network";
  if (t.includes("elephant") || t.includes("environmental")) return "environmental-media";
  if (t.includes("legal ir and nlp") || t.includes("tutorial") || t.includes("overview of the") || t.includes("report on the")) return "tutorial-survey";
  return "legal-judgment";
}

export function getPosterGradient(type: PosterType): string {
  const map: Record<PosterType, string> = {
    "legal-judgment": "poster-gradient-legal",
    "healthcare-dialogue": "poster-gradient-health",
    "rag-retrieval": "poster-gradient-rag",
    "rhetorical-segmentation": "poster-gradient-segment",
    "legal-document-generation": "poster-gradient-docgen",
    "ocr-translation": "poster-gradient-ocr",
    "reinforcement-learning": "poster-gradient-rl",
    "bias-fairness": "poster-gradient-bias",
    "question-answering": "poster-gradient-qa",
    "shared-task-benchmark": "poster-gradient-shared",
    "sarcasm-social-nlp": "poster-gradient-sarcasm",
    "peer-grading-tool": "poster-gradient-peer",
    "pricing-network": "poster-gradient-pricing",
    "environmental-media": "poster-gradient-env",
    "tutorial-survey": "poster-gradient-tutorial",
  };
  return map[type] || "poster-gradient-legal";
}

export function getPosterAcronym(title: string): string {
  const words = title.split(/[:\s]+/).filter(w => w.length > 2);
  const acronym = words.slice(0, 3).map(w => w[0].toUpperCase()).join("");
  return acronym || "AI";
}
