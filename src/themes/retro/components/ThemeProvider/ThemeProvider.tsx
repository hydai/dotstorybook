import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div
      data-theme="retro"
      className="font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface-0)] antialiased"
    >
      {children}
    </div>
  );
}
