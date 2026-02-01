import React from "react";
import { cn } from "@/shared/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-secondary)] font-[var(--font-label)]"
          >
            // {label}
          </label>
        )}
        <div
          className={cn(
            "flex items-center gap-2 h-9 w-full border bg-[var(--color-surface-1)] px-3 text-sm text-[var(--color-text-primary)]",
            "border-[var(--color-border)] cyber-chamfer-sm",
            "transition-all duration-200",
            "focus-within:border-[var(--color-border-accent)] focus-within:shadow-[var(--shadow-glow)]",
            error && "border-[var(--color-error)]"
          )}
        >
          <span className="text-[var(--color-accent)] select-none shrink-0 font-bold">
            {">"}
          </span>
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "flex-1 bg-transparent outline-none text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] caret-[var(--color-accent)] font-[var(--font-mono)]",
              "disabled:cursor-not-allowed disabled:opacity-40",
              className
            )}
            {...props}
          />
          <span
            className="w-2 h-4 bg-[var(--color-accent)] shrink-0"
            style={{ animation: "cyber-blink 1s step-end infinite" }}
          />
        </div>
        {error && (
          <p className="text-xs text-[var(--color-error)] font-bold font-[var(--font-label)]">
            ERR: {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
