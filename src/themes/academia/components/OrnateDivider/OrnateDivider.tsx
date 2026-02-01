import { cn } from "@/shared/utils/cn";

interface OrnateDividerProps {
  glyph?: string;
  className?: string;
}

export function OrnateDivider({
  glyph = "\u2736",
  className,
}: OrnateDividerProps) {
  return (
    <div className={cn("academia-ornate-divider", className)}>{glyph}</div>
  );
}
