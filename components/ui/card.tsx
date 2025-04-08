import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        "bg-background ring-border relative flex h-full max-w-full flex-col overflow-hidden shadow-xs ring-[0.8px] lg:rounded-[0.62rem]",
      )}
    >
      <svg
        className="text-border pointer-events-none absolute inset-[unset] top-0 left-1/2 w-[1200px] -translate-x-1/2 mask-t-from-50% mask-b-from-10% mask-b-to-80%"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-card"
            x="0"
            y="-53.5"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1"
            ></path>
          </pattern>
        </defs>
        <rect fill="url(#grid-card)" width="100%" height="100%"></rect>
      </svg>
      {children}
    </div>
  );
};

export default Card;
