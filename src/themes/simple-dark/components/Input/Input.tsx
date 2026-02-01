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
            className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] font-[var(--font-mono)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 w-full rounded-[var(--radius-md)] px-3 text-sm",
            "bg-[rgba(26,26,36,0.6)] backdrop-blur-[8px]",
            "border border-[var(--color-border)]",
            "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
            "caret-[var(--color-accent)]",
            "font-[var(--font-sans)]",
            "transition-all duration-200",
            "focus:outline-none focus:border-[var(--color-border-accent)] focus:shadow-[var(--shadow-glow)] focus:ring-1 focus:ring-[var(--color-accent)]/30",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error && "border-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-error)] font-[var(--font-sans)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
