import { cn } from "@/shared/utils/cn";

interface GrainOverlayProps {
  opacity?: number;
  fixed?: boolean;
  className?: string;
}

export function GrainOverlay({
  opacity = 0.035,
  fixed = true,
  className,
}: GrainOverlayProps) {
  return (
    <div
      className={cn("organic-grain-overlay", !fixed && "!absolute", className)}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
