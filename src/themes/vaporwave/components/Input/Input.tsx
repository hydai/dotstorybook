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
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex items-center gap-2 h-9 w-full bg-transparent px-1 text-sm text-[var(--color-text-primary)]",
            "border-b-2 border-[var(--color-accent)]",
            "transition-all duration-200",
            "focus-within:border-[var(--color-secondary)] focus-within:shadow-[0_2px_10px_rgba(0,255,255,0.3)]",
            error && "border-[var(--color-error)]"
          )}
        >
          <span className="text-[var(--color-accent)] select-none shrink-0 font-bold">
            $
          </span>
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "flex-1 bg-transparent outline-none text-[var(--color-secondary)] placeholder:text-[var(--color-text-muted)] caret-[var(--color-accent)] font-[var(--font-mono)]",
              "disabled:cursor-not-allowed disabled:opacity-40",
              className
            )}
            {...props}
          />
          <span
            className="w-2 h-4 bg-[var(--color-accent)] shrink-0"
            style={{ animation: "vapor-blink 1s step-end infinite" }}
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
