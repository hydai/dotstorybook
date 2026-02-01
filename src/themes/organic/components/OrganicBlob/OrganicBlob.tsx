import { cn } from "@/shared/utils/cn";

interface OrganicBlobProps {
  color?: "moss" | "clay" | "sand" | "muted";
  size?: "sm" | "md" | "lg" | "xl";
  blur?: boolean;
  animated?: boolean;
  className?: string;
}

const colorStyles: Record<NonNullable<OrganicBlobProps["color"]>, string> = {
  moss: "bg-[var(--color-accent)]",
  clay: "bg-[var(--color-secondary)]",
  sand: "bg-[var(--color-surface-3)]",
  muted: "bg-[var(--color-accent-muted)]",
};

const sizeStyles: Record<NonNullable<OrganicBlobProps["size"]>, string> = {
  sm: "w-24 h-24",
  md: "w-40 h-40",
  lg: "w-64 h-64",
  xl: "w-96 h-96",
};

export function OrganicBlob({
  color = "moss",
  size = "md",
  blur = false,
  animated = false,
  className,
}: OrganicBlobProps) {
  return (
    <div
      className={cn(
        "absolute organic-blob-shape opacity-60",
        colorStyles[color],
        sizeStyles[size],
        blur && "blur-3xl",
        animated && "animate-[organic-float_8s_ease-in-out_infinite]",
        className
      )}
      aria-hidden="true"
    />
  );
}
