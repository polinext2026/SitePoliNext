"use client";

export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center" aria-hidden="true">
      <div className="absolute inset-0 orbital-bg" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative">
        {/* Orbital rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full border border-blue/20 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-48 w-48 rounded-full border border-purple/20 animate-[spin_15s_linear_infinite_reverse]"
            style={{ transform: "rotate(30deg)" }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-80 w-80 rounded-full border border-cyan/10 animate-[spin_25s_linear_infinite]"
            style={{ transform: "rotate(-20deg)" }}
          />
        </div>

        {/* Central symbol */}
        <div className="relative z-10 flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/30 via-cyan/20 to-purple/30 blur-xl" />
          <div className="relative h-24 w-24 rounded-full border border-blue/40 bg-surface/80 backdrop-blur-sm flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
              <circle cx="24" cy="24" r="6" className="fill-blue" />
              <ellipse
                cx="24"
                cy="24"
                rx="20"
                ry="8"
                className="stroke-cyan"
                strokeWidth="1.5"
                transform="rotate(-30 24 24)"
              />
              <ellipse
                cx="24"
                cy="24"
                rx="20"
                ry="8"
                className="stroke-purple"
                strokeWidth="1.5"
                transform="rotate(30 24 24)"
              />
              <circle cx="24" cy="8" r="2" className="fill-cyan" />
              <circle cx="38" cy="32" r="1.5" className="fill-purple" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
