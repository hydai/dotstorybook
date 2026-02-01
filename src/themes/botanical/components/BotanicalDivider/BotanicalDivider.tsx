import { cn } from "@/shared/utils/cn";

interface BotanicalDividerProps {
  glyph?: string;
  className?: string;
}

export function BotanicalDivider({
  glyph = "\u2766",
  className,
}: BotanicalDividerProps) {
  return (
    <div className={cn("botanical-divider", className)}>
      <span className="botanical-leaf-sway">{glyph}</span>
    </div>
  );
}
