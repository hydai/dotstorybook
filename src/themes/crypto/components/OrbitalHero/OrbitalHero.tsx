import { cn } from "@/shared/utils/cn";

interface StatItem {
  label: string;
  value: string;
}

interface OrbitalHeroProps {
  title: string;
  subtitle?: string;
  stats?: StatItem[];
  className?: string;
}

const statPositions = [
  "top-0 -right-4",
  "bottom-8 -right-8",
  "-left-8 top-8",
  "bottom-0 -left-4",
];

export function OrbitalHero({
  title,
  subtitle,
  stats = [],
  className,
}: OrbitalHeroProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center py-24 px-8 overflow-hidden",
        className
      )}
    >
      {/* Orbital system */}
      <div className="relative mb-12">
        {/* Orbital ring 2 (outer, reverse) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5"
          style={{ animation: "crypto-spin-reverse 15s linear infinite" }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[var(--color-tertiary)]" />
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
        </div>

        {/* Orbital ring 1 (inner) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[var(--color-accent)]/10"
          style={{ animation: "crypto-spin 10s linear infinite" }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
        </div>

        {/* Central orb */}
        <div className="relative w-40 h-40 mx-auto">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EA580C] to-[#F7931A] opacity-80 blur-xl"
            style={{ animation: "crypto-float 8s ease-in-out infinite" }}
          />
          <div
            className="relative w-full h-full rounded-full bg-gradient-to-br from-[#EA580C] to-[#F7931A] flex items-center justify-center"
            style={{ animation: "crypto-float 8s ease-in-out infinite" }}
          >
            <span className="text-2xl font-bold text-white font-[var(--font-heading)]">
              ₿
            </span>
          </div>
        </div>

        {/* Floating stat cards */}
        {stats.slice(0, 4).map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "absolute bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 min-w-[120px]",
              statPositions[i]
            )}
            style={{
              animation: `crypto-bounce 3s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <p className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]">
              {stat.value}
            </p>
            <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)] uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center font-[var(--font-heading)] bg-gradient-to-r from-[#EA580C] via-[#F7931A] to-[#FFD600] bg-clip-text text-transparent">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] text-center max-w-lg font-[var(--font-body)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
