import { cn } from "@/shared/utils/cn";

interface CyberGlitchProps {
  children: string;
  variant?: "chromatic" | "glitch" | "flicker";
  as?: "span" | "h1" | "h2" | "h3" | "p";
  intensity?: "subtle" | "medium" | "intense";
  className?: string;
}

const intensityDuration: Record<
  NonNullable<CyberGlitchProps["intensity"]>,
  string
> = {
  subtle: "4s",
  medium: "2s",
  intense: "0.5s",
};

export function CyberGlitch({
  children,
  variant = "chromatic",
  as: Tag = "span",
  intensity = "medium",
  className,
}: CyberGlitchProps) {
  const duration = intensityDuration[intensity];

  if (variant === "flicker") {
    return (
      <Tag
        className={cn(
          "text-[var(--color-text-primary)] inline-block",
          className
        )}
        style={{ animation: `flicker-cyber ${duration} infinite` }}
      >
        {children}
      </Tag>
    );
  }

  if (variant === "glitch") {
    return (
      <Tag
        className={cn(
          "cyber-chromatic text-[var(--color-text-primary)] inline-block",
          className
        )}
        data-text={children}
        style={{
          animationDuration: duration,
        }}
      >
        {children}
      </Tag>
    );
  }

  // chromatic
  return (
    <Tag
      className={cn(
        "text-[var(--color-text-primary)] inline-block",
        className
      )}
      style={{
        animation: `chromatic-shift ${duration} infinite linear`,
      }}
    >
      {children}
    </Tag>
  );
}
