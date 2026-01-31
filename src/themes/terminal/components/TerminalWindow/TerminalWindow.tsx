import React from "react";
import { cn } from "@/shared/utils/cn";

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function TerminalWindow({
  children,
  title = "terminal",
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "border border-[var(--color-accent)] bg-[var(--color-surface-0)] overflow-hidden",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-[var(--color-accent)] bg-[var(--color-surface-1)]">
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <span className="text-[var(--color-error)] cursor-pointer hover:text-[var(--color-error)]">
            [x]
          </span>
          <span className="text-[var(--color-warning)] cursor-pointer hover:text-[var(--color-warning)]">
            [-]
          </span>
          <span className="text-[var(--color-success)] cursor-pointer hover:text-[var(--color-success)]">
            [+]
          </span>
        </div>
        <span className="text-xs text-[var(--color-text-muted)] font-bold uppercase tracking-wider">
          {title}
        </span>
        <div className="w-16" />
      </div>

      {/* Content area */}
      <div className="p-4 text-sm text-[var(--color-text-primary)]">
        {children}
      </div>
    </div>
  );
}
