import { cn } from "@/lib/utils";
import React from "react";

type HeadingVariant = "default" | "home" | "blog";

interface HeadingStyles {
  height: string;
  patternSize: number;
  patternOffset: { x: number; y: number };
  mask: string;
}

interface Props {
  children: React.ReactNode;
  variant?: HeadingVariant;
  className?: string;
  /** Optional aria-label for accessibility */
  ariaLabel?: string;
}

const HEADING_VARIANTS: Record<HeadingVariant, HeadingStyles> = {
  home: {
    height: "h-100",
    patternSize: 80,
    patternOffset: { x: 35, y: 43 },
    mask: "mask-t-from-50% mask-r-from-90% mask-l-from-90%",
  },
  blog: {
    height: "h-100",
    patternSize: 70,
    patternOffset: { x: 35, y: 43 },
    mask: "mask-t-from-50% mask-r-from-90% mask-l-from-90% mask-b-from-20% mask-b-to-45%",
  },
  default: {
    height: "h-40",
    patternSize: 60,
    patternOffset: { x: 35, y: 43 },
    mask: "mask-t-from-50% mask-r-from-90% mask-l-from-90%",
  },
};

/**
 * A reusable heading component with a decorative grid pattern background.
 * Supports different variants for home, blog, and default layouts.
 */
const Heading: React.FC<Props> = ({
  children,
  variant = "default",
  className = "",
  ariaLabel,
}) => {
  const styles = HEADING_VARIANTS[variant];

  return (
    <div
      className={cn("relative mx-auto w-full", className)}
      role="heading"
      aria-level={1}
      aria-label={ariaLabel}
    >
      <svg
        className={cn(
          "text-border pointer-events-none absolute inset-[unset] top-0 left-1/2 -z-10 w-full -translate-x-1/2",
          styles.mask,
          styles.height,
        )}
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-pattern-${variant}`}
            x={styles.patternOffset.x}
            y={styles.patternOffset.y}
            width={styles.patternSize}
            height={styles.patternSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          fill={`url(#grid-pattern-${variant})`}
          width="100%"
          height="100%"
        />
      </svg>

      {children}
    </div>
  );
};

export default Heading;
