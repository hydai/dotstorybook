import React from "react";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/crimson-pro/300.css";
import "@fontsource/crimson-pro/400.css";
import "@fontsource/crimson-pro/600.css";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div
      data-theme="academia"
      className="font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface-0)] antialiased"
    >
      {children}
    </div>
  );
}
