import React from "react";
import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/900.css";
import "@fontsource/share-tech-mono/400.css";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div
      data-theme="vaporwave"
      className="font-[var(--font-mono)] text-[var(--color-text-primary)] bg-[var(--color-surface-0)] antialiased"
    >
      {children}
    </div>
  );
}
