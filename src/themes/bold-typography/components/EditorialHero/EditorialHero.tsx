import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/shared/utils/cn";

interface EditorialHeroProps {
  headline: string;
  subline?: string;
  decorativeNumber?: string;
  className?: string;
}

export function EditorialHero({
  headline,
  subline,
  decorativeNumber = "01",
  className,
}: EditorialHeroProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  return (
    <motion.section
      style={{ opacity, y }}
      className={cn(
        "relative flex flex-col items-start justify-center min-h-screen px-4 md:px-8 max-w-[95vw] mx-auto overflow-hidden",
        className
      )}
    >
      {/* Decorative oversized number */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-4 md:right-8 text-[12rem] md:text-[20rem] font-bold leading-none text-[var(--color-surface-3)] opacity-50 select-none tracking-tighter"
      >
        {decorativeNumber}
      </div>

      {/* Accent bar */}
      <div
        aria-hidden="true"
        className="h-0.5 w-16 bg-[var(--color-accent)] mb-8"
      />

      {/* Massive headline */}
      <h1 className="relative z-10 text-[clamp(3rem,10vw,10rem)] font-extrabold uppercase tracking-tight leading-[1.1] text-[var(--color-text-primary)]">
        {headline}
      </h1>

      {subline && (
        <p className="relative z-10 mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          {subline}
        </p>
      )}
    </motion.section>
  );
}
