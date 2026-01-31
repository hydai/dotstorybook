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
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-[var(--font-heading)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full bg-transparent px-0 text-sm text-[var(--color-text-primary)]",
            "border-0 border-b-2 border-[var(--color-accent)]",
            "transition-all duration-300",
            "focus:outline-none focus:border-[var(--color-accent-hover)]",
            "focus:shadow-[0_4px_8px_-4px_rgba(212,175,55,0.4)]",
            "placeholder:text-[var(--color-text-muted)] placeholder:uppercase placeholder:tracking-wider",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error && "border-[var(--color-error)] focus:border-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
