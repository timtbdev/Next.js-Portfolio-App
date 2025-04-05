import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface CategoryLinkProps {
  href: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  weight: number;
  className?: string;
}

const CategoryLink: FC<CategoryLinkProps> = ({
  href,
  title,
  description,
  icon,
  weight,
  className,
}) => {
  return (
    <Link
      className={cn(
        "group bg-accent/50 border-border hover:bg-accent relative flex flex-col overflow-hidden rounded-xl border mask-r-from-30% transition-all duration-200 hover:mask-r-from-60% hover:shadow-sm",
        className,
      )}
      href={href}
      aria-label={`View articles about ${title}`}
    >
      {weight === 1 && icon && (
        <div className="relative mx-auto flex h-[200px] w-full items-center justify-center">
          <svg
            className={cn(
              "text-border pointer-events-none absolute inset-0 h-full w-full mask-b-from-10%",
              className,
            )}
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid-:r1i:"
                x="35"
                y="43"
                width="45"
                height="45"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="1"
                ></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-:r1i:)" width="100%" height="100%"></rect>
          </svg>
          {icon &&
            React.createElement(icon, {
              className:
                "text-foreground group-hover:text-accent-foreground size-40 relative z-10",
            })}
        </div>
      )}

      <div className="p-5">
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-1">
            {weight === 2 &&
              icon &&
              React.createElement(icon, {
                className:
                  "text-foreground group-hover:text-accent-foreground size-5",
              })}
            <span className="text-foreground group-hover:text-accent-foreground text-sm font-medium">
              {title}
            </span>
          </div>
          <p className="text-foreground mt-1 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryLink;
