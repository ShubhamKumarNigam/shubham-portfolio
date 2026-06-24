import Image from "next/image";
import Link from "next/link";
import icon from "../../public/brand/icon.png";

interface BrandMarkProps {
  showSubtitle?: boolean;
}

export function BrandMark({ showSubtitle = true }: BrandMarkProps) {
  return (
    <Link href="/" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-lg" aria-label="Home — Shubham Kumar Nigam">
      <Image
        src={icon}
        alt="Shubham Kumar Nigam"
        width={40}
        height={40}
        priority
        className="h-10 w-10 rounded-[10px] shrink-0"
      />
      <span className="leading-tight hidden sm:block">
        <span className="block font-heading font-semibold text-[15px] text-ink dark:text-ink-dark tracking-tight transition-colors">
          Shubham Kumar Nigam
        </span>
        {showSubtitle && (
          <span className="block text-[11.5px] text-muted mt-0.5">
            Research Fellow · UoB Dubai
          </span>
        )}
      </span>
    </Link>
  );
}
