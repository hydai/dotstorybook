import React from "react";
import { cn } from "@/shared/utils/cn";

interface UnderlineLinkProps {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

export function UnderlineLink({
  children,
  href,
  active = false,
  className,
  onClick,
}: UnderlineLinkProps) {
  const Tag = href ? "a" : "button";
  const linkProps = href ? { href } : { type: "button" as const, onClick };

  return (
    <Tag
      className={cn(
        "bold-typo-underline",
        active && "bold-typo-underline--active",
        "text-sm font-semibold uppercase tracking-wider",
        "text-[var(--color-text-primary)]",
        "hover:text-[var(--color-accent)]",
        "transition-colors duration-200",
        "bg-transparent border-none cursor-pointer p-0",
        className
      )}
      {...linkProps}
    >
      {children}
    </Tag>
  );
}
