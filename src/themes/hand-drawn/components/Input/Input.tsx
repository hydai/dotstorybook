import React from "react";
import { cn } from "@/shared/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const wobblyRadius = "45% 55% 52% 48% / 52% 45% 55% 48%";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          style={{ borderRadius: wobblyRadius }}
          className={cn(
            "h-12 w-full px-4 text-base text-[var(--color-text-primary)] font-[var(--font-body)]",
            "bg-[var(--color-surface-1)]",
            "border-2 border-[var(--color-border)]",
            "shadow-[var(--shadow-sm)]",
            "transition-all duration-100",
            "placeholder:text-[var(--color-text-muted)]",
            "focus:outline-none focus:border-[var(--color-secondary)] focus:shadow-[2px_2px_0px_0px_#2d5da1]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error &&
              "border-[var(--color-accent)] shadow-[2px_2px_0px_0px_#ff4d4d] focus:border-[var(--color-accent)] focus:shadow-[2px_2px_0px_0px_#ff4d4d]",
            className,
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-[var(--color-accent)] font-[var(--font-body)]">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
