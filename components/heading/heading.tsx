import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "default" | "home" | "blog";
  className?: string;
}

const Heading: React.FC<Props> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "home":
        return {
          height: "h-80",
          mask: "[mask-image:linear-gradient(transparent,black_70%,black_90%)]",
          textColor: "text-border",
        };
      case "blog":
        return {
          height: "h-100",
          mask: "[mask-image:linear-gradient(black_5%,transparent,transparent)]",
          textColor: "text-gray-300/50",
          responsive: "max-sm:opacity-50",
        };
      default:
        return {
          height: "h-40",
          mask: "[mask-image:linear-gradient(transparent,black_60%)]",
          textColor: "text-gray-300/50",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`relative mx-auto w-full ${className}`}>
      <svg
        className={`pointer-events-none absolute inset-[unset] top-0 left-1/2 -z-10 w-full -translate-x-1/2 ${styles.height} ${styles.textColor} ${styles.mask} ${styles.responsive || ""}`}
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-pattern"
            x="35"
            y="43"
            width={variant === "default" ? "60" : "70"}
            height={variant === "default" ? "60" : "70"}
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
        <rect fill="url(#grid-pattern)" width="100%" height="100%" />
      </svg>

      {children}
    </div>
  );
};

export default Heading;
