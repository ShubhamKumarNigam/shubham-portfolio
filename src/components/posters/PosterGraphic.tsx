"use client";

import { motion } from "framer-motion";
import { PosterType, getPosterGradient, getPosterAcronym } from "./posterUtils";

interface PosterGraphicProps {
  type: PosterType;
  title: string;
  className?: string;
}

export default function PosterGraphic({ type, title, className = "" }: PosterGraphicProps) {
  const gradient = getPosterGradient(type);
  const acronym = getPosterAcronym(title);

  const motifs: Record<PosterType, React.ReactNode> = {
    "legal-judgment": (
      <>
        <ScalesIcon />
        <GavelIcon />
        <DocumentIcon />
      </>
    ),
    "healthcare-dialogue": (
      <>
        <ChatBubbleIcon />
        <MedicalCrossIcon />
        <LanguageNodesIcon />
      </>
    ),
    "rag-retrieval": (
      <>
        <DatabaseIcon />
        <SearchIcon />
        <LinkChainIcon />
      </>
    ),
    "rhetorical-segmentation": (
      <>
        <SegmentBarsIcon />
        <DocumentSplitIcon />
      </>
    ),
    "legal-document-generation": (
      <>
        <FormGridIcon />
        <SparkIcon />
        <TemplateBlockIcon />
      </>
    ),
    "ocr-translation": (
      <>
        <HandwrittenIcon />
        <ScannerBeamIcon />
        <TranslateArrowIcon />
      </>
    ),
    "reinforcement-learning": (
      <>
        <LoopIcon />
        <NetworkIcon />
        <RewardBadgeIcon />
      </>
    ),
    "bias-fairness": (
      <>
        <BalanceScaleIcon />
        <TransformIcon />
      </>
    ),
    "question-answering": (
      <>
        <QuestionBubbleIcon />
        <BookIcon />
        <AnswerCardIcon />
      </>
    ),
    "shared-task-benchmark": (
      <>
        <LeaderboardIcon />
        <TrophyIcon />
        <MetricsGridIcon />
      </>
    ),
    "sarcasm-social-nlp": (
      <>
        <SocialBubbleIcon />
        <SarcasmMarkIcon />
        <TransformerNodeIcon />
      </>
    ),
    "peer-grading-tool": (
      <>
        <RubricGridIcon />
        <SubmissionStackIcon />
        <AutoGradeIcon />
      </>
    ),
    "pricing-network": (
      <>
        <PeopleNodesIcon />
        <SharedGoodsIcon />
        <GraphIcon />
      </>
    ),
    "environmental-media": (
      <>
        <ElephantIcon />
        <NewspaperGridIcon />
        <MapIcon />
      </>
    ),
    "tutorial-survey": (
      <>
        <PresentationBoardIcon />
        <NlpMapIcon />
        <PathIcon />
      </>
    ),
  };

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

      <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4">
        <div className="flex items-center gap-3 text-white/90">
          {motifs[type]}
        </div>
        <span className="text-white font-bold text-lg tracking-wider drop-shadow-lg">
          {acronym}
        </span>
      </div>

      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/5 blur-xl" />
      <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/5 blur-xl" />
    </motion.div>
  );
}

function ScalesIcon() { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 7l9-4 9 4M3 7v10a9 9 0 0 0 18 0V7"/><path d="M3 7l4 4M21 7l-4 4"/></svg>; }
function GavelIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 17l6-6M5 17l-2 2M11 11l2-2M11 11l6 6M13 9l4-4"/></svg>; }
function DocumentIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>; }
function ChatBubbleIcon() { return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>; }
function MedicalCrossIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>; }
function LanguageNodesIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7l-5.5 10M12 7l5.5 10"/></svg>; }
function DatabaseIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>; }
function SearchIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>; }
function LinkChainIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>; }
function SegmentBarsIcon() { return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="9" y="8" width="4" height="12" rx="1"/><rect x="15" y="6" width="4" height="14" rx="1"/></svg>; }
function DocumentSplitIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>; }
function FormGridIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>; }
function SparkIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>; }
function TemplateBlockIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>; }
function HandwrittenIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.5 7.5"/></svg>; }
function ScannerBeamIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/><path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M12 7v10"/><path d="M8 7v10M16 7v10"/></svg>; }
function TranslateArrowIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 8l4 4-4 4"/><path d="M12 20h7"/><path d="M12 4h7"/><path d="M15 4v16"/></svg>; }
function LoopIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>; }
function NetworkIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7l-5.5 10M12 7l5.5 10"/></svg>; }
function RewardBadgeIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>; }
function BalanceScaleIcon() { return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 7l9-4 9 4M3 7v10a9 9 0 0 0 18 0V7"/></svg>; }
function TransformIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 9l4-4-4-4"/><path d="M19 15l-4 4 4 4"/><path d="M3 9h12a4 4 0 0 1 4 4v1"/><path d="M21 15H9a4 4 0 0 1-4-4v-1"/></svg>; }
function QuestionBubbleIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M9 10h.01M12 10a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5c0 1.5-1.5 2-2.5 2.5V14"/></svg>; }
function BookIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>; }
function AnswerCardIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>; }
function LeaderboardIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>; }
function TrophyIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>; }
function MetricsGridIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>; }
function SocialBubbleIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>; }
function SarcasmMarkIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg>; }
function TransformerNodeIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7l-5.5 10M12 7l5.5 10"/></svg>; }
function RubricGridIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>; }
function SubmissionStackIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>; }
function AutoGradeIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg>; }
function PeopleNodesIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7l-5.5 10M12 7l5.5 10"/></svg>; }
function SharedGoodsIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>; }
function GraphIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98"/><path d="M15.41 6.51l-6.82 3.98"/></svg>; }
function ElephantIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 16a4 4 0 0 0 4-4c0-2-1.5-3-3-3s-3 1-3 3a4 4 0 0 0 4 4z"/><path d="M12 16v4"/><path d="M8 20h8"/></svg>; }
function NewspaperGridIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><path d="M10 6h8"/><path d="M10 10h8"/><path d="M10 14h5"/></svg>; }
function MapIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="1 6 1 22 8 18 16 22 21 18 21 2 16 6 8 2 1 6"/><path d="M8 2v16"/><path d="M16 6v16"/></svg>; }
function PresentationBoardIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h20"/><path d="M4 3v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>; }
function NlpMapIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="1 6 1 22 8 18 16 22 21 18 21 2 16 6 8 2 1 6"/><path d="M8 2v16"/><path d="M16 6v16"/></svg>; }
function PathIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-5"/></svg>; }
