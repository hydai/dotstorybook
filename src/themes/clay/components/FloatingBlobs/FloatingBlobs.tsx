import { cn } from "@/shared/utils/cn";

interface FloatingBlobsProps {
  className?: string;
}

const blobs = [
  {
    color: "bg-[#A78BFA]",
    size: "w-72 h-72",
    position: "top-0 left-[10%]",
    animation: "clay-float",
    duration: "8s",
    delay: "0s",
  },
  {
    color: "bg-[#F472B6]",
    size: "w-64 h-64",
    position: "top-[20%] right-[5%]",
    animation: "clay-float-delayed",
    duration: "10s",
    delay: "2s",
  },
  {
    color: "bg-[#38BDF8]",
    size: "w-80 h-80",
    position: "bottom-[10%] left-[20%]",
    animation: "clay-float-slow",
    duration: "12s",
    delay: "4s",
  },
  {
    color: "bg-[#34D399]",
    size: "w-56 h-56",
    position: "bottom-[5%] right-[15%]",
    animation: "clay-float",
    duration: "9s",
    delay: "1s",
  },
];

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full opacity-10 blur-3xl",
            blob.color,
            blob.size,
            blob.position
          )}
          style={{
            animation: `${blob.animation} ${blob.duration} ease-in-out infinite`,
            animationDelay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
