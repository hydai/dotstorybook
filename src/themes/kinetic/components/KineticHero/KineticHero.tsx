import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/shared/utils/cn";

interface KineticHeroProps {
  headline: string;
  subline?: string;
  className?: string;
}

export function KineticHero({
  headline,
  subline,
  className,
}: KineticHeroProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.section
      style={{ scale, opacity }}
      className={cn(
        "relative flex flex-col items-start justify-center min-h-screen px-4 md:px-8 max-w-[95vw] mx-auto overflow-hidden",
        className
      )}
    >
      <h1 className="text-[clamp(3rem,12vw,14rem)] font-bold uppercase tracking-tighter leading-[0.8] text-[var(--color-text-primary)]">
        {headline}
      </h1>
      {subline && (
        <p className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-2xl leading-tight">
          {subline}
        </p>
      )}
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-4 md:right-8 text-[8rem] md:text-[12rem] font-bold leading-none text-[var(--color-surface-3)] select-none tracking-tighter"
      >
        01
      </div>
    </motion.section>
  );
}
