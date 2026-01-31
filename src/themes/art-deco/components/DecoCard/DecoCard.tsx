import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface DecoCardProps {
  children: React.ReactNode;
  title?: string;
  tier?: "I" | "II" | "III";
  showCorners?: boolean;
  hoverable?: boolean;
  className?: string;
}

function SteppedCorners() {
  return (
    <>
      {/* Top-left */}
      <div className="absolute top-0 left-0">
        <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
        <div className="w-[2px] h-8 bg-[var(--color-accent)]" />
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-0 right-0">
        <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-[var(--color-accent)]" />
        <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-[var(--color-accent)]" />
      </div>
    </>
  );
}

function TitleDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-px bg-[var(--color-accent)] opacity-40" />
      <span className="text-xs font-normal uppercase tracking-[0.3em] text-[var(--color-accent)] font-[var(--font-heading)]">
        {title}
      </span>
      <div className="flex-1 h-px bg-[var(--color-accent)] opacity-40" />
    </div>
  );
}

export function DecoCard({
  children,
  title,
  tier,
  showCorners = true,
  hoverable = true,
  className,
}: DecoCardProps) {
  const Comp = hoverable ? motion.div : "div";
  const motionProps = hoverable
    ? {
        whileHover: {
          y: -8,
          boxShadow:
            "0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1)",
        },
        transition: transitions.slow,
      }
    : {};

  return (
    <Comp
      className={cn(
        "relative bg-[var(--color-surface-2)] border border-[var(--color-border)] p-8 transition-all duration-500 overflow-hidden",
        hoverable && "hover:border-[var(--color-border-hover)] cursor-pointer",
        className
      )}
      {...motionProps}
    >
      {showCorners && <SteppedCorners />}

      {/* Tier watermark */}
      {tier && (
        <div className="absolute top-4 right-6 text-6xl font-normal text-[var(--color-accent)] opacity-10 font-[var(--font-heading)] select-none">
          {tier}
        </div>
      )}

      {/* Title with decorative divider */}
      {title && <TitleDivider title={title} />}

      {/* Content */}
      <div className="relative">{children}</div>
    </Comp>
  );
}
