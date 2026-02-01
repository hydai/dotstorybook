import { cn } from "@/shared/utils/cn";

interface ArchImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  disableSepia?: boolean;
  className?: string;
}

export function ArchImage({
  src,
  alt,
  aspectRatio = "3/4",
  disableSepia = false,
  className,
}: ArchImageProps) {
  return (
    <div
      className={cn("academia-arch-top overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover",
          !disableSepia && "academia-sepia"
        )}
      />
    </div>
  );
}
