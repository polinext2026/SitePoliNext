import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showTagline = false, className }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <div className="relative flex h-10 w-10 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue via-cyan to-purple opacity-80" />
        <div className="absolute inset-[2px] rounded-full bg-base flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <circle cx="12" cy="12" r="3" className="fill-blue" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              className="stroke-cyan"
              strokeWidth="1"
              transform="rotate(-30 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              className="stroke-purple"
              strokeWidth="1"
              transform="rotate(30 12 12)"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            isDark ? "text-neutral" : "text-text"
          )}
        >
          {SITE.name}
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-widest uppercase text-text-muted">
            {SITE.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
