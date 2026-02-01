import React from "react";
import { cn } from "@/shared/utils/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  goldRules?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  goldRules = false,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "business-section-label",
        goldRules && "business-section-label--gold",
        className
      )}
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-[var(--font-mono)] whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
