import { cn } from "@/shared/utils/cn";
import { shadows, borderColors } from "../../tokens";

interface HitCounterProps {
  count?: number;
  label?: string;
  since?: string;
  className?: string;
}

export function HitCounter({
  count = 1234,
  label = "Visitors",
  since = "1995",
  className,
}: HitCounterProps) {
  const paddedCount = String(count).padStart(7, "0");

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 bg-[#000033] px-4 py-2",
        className
      )}
      style={{
        boxShadow: shadows.insetDeep,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: borderColors.inset,
        borderRadius: 0,
      }}
    >
      <span className="text-xs text-[#00FF00] font-[var(--font-mono)]">
        {label}:
      </span>
      <span className="text-lg text-[#00FF00] font-bold tracking-[0.2em] font-[var(--font-mono)]">
        {paddedCount}
      </span>
      <span className="text-[10px] text-[#00FF00] font-[var(--font-mono)] opacity-70">
        | Since {since}
      </span>
    </div>
  );
}
