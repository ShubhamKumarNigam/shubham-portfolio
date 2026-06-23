"use client";

interface IconProps {
  size?: number;
  className?: string;
}

export function GoogleScholarIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Zm6.71 14.065a6.092 6.092 0 0 0-1.208-2.994 5.997 5.997 0 0 0-5.502-2.07 6 6 0 0 0-5.502 2.07 6.09 6.09 0 0 0-1.208 2.994A6.002 6.002 0 0 0 12 24a6.002 6.002 0 0 0 6.71-9.935Z" />
    </svg>
  );
}

export function GitHubIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function XIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function HuggingFaceIcon({ size = 20, className = "" }: IconProps) {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIE_n38XL656iRQSRKGWDm2XhN1PrGx5pHog&s"
      alt="HuggingFace"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}

export function ORCIDIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.902 18.285c-.387.393-.845.668-1.37.825-.52.157-1.074.236-1.66.236H10.48V5.393h3.759c.58 0 1.132.085 1.653.253.522.17.974.45 1.354.84.38.39.68.895.9 1.514.22.62.33 1.37.33 2.252 0 .876-.11 1.625-.33 2.244-.22.62-.52 1.124-.9 1.514-.38.39-.832.67-1.354.84-.52.168-1.073.252-1.653.252h-1.12v-1.67h1.12c.27 0 .52-.04.75-.12.23-.08.43-.21.6-.38.17-.17.3-.39.39-.66.09-.27.14-.6.14-.99v-1.83c0-.39-.05-.72-.14-.99-.09-.27-.22-.49-.39-.66-.17-.17-.37-.29-.6-.37-.23-.08-.48-.12-.75-.12h-1.61v10.72h1.393c.586 0 1.14-.08 1.66-.236.525-.157.983-.432 1.37-.825.39-.393.696-.902.92-1.527.224-.625.336-1.38.336-2.266 0-.886-.112-1.64-.336-2.266-.224-.625-.53-1.134-.92-1.527z" />
    </svg>
  );
}

export function DBLPIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3 6.4c.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .4-.1.8-.3 1.1-.2.3-.5.6-.8.8-.4.2-.8.3-1.3.3h-2.8V6.1h2.8c.5 0 .9.1 1.3.3zm-5 5.4h3.7c.7 0 1.3.1 1.9.4.5.3 1 .7 1.3 1.2.3.5.5 1.1.5 1.8 0 .7-.2 1.3-.5 1.8-.3.5-.8.9-1.3 1.2-.6.3-1.2.4-1.9.4h-3.7v-6.8zM2.7 3.7h9.6c1.6 0 3 .3 4.2.8 1.2.5 2.2 1.3 2.8 2.3.7 1 .9 2.2.9 3.5 0 1.4-.3 2.6-.9 3.6-.6 1-1.6 1.8-2.8 2.3-1.2.5-2.6.8-4.2.8H7.5v4.6H2.7V3.7z" />
    </svg>
  );
}
