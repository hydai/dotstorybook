import { cn } from "@/shared/utils/cn";

interface ArchImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

export function ArchImage({
  src,
  alt,
  aspectRatio = "3/4",
  className,
}: ArchImageProps) {
  return (
    <div
      className={cn("botanical-arch-top overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-105"
      />
    </div>
  );
}
