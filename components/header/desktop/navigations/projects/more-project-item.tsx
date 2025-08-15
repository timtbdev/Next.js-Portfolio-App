import Link from "next/link";
import React, { FC } from "react";
import { IconType } from "react-icons";
import AnimatedArrow from "../animated-arrow";

interface Props {
  title: string;
  href: string;
  icon: IconType;
  description?: string;
}

const MoreProjectItem: FC<Props> = ({
  title,
  href,
  icon: Icon,
  description,
}) => {
  return (
    <Link
      key={title}
      className="group bg-background hover:bg-accent -mx-2 rounded-[8px] mask-r-from-80% p-2 transition-all duration-200 hover:shadow-sm"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={description ? `${title} - ${description}` : title}
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className="border-border bg-background/50 shrink-0 rounded-[10px] border p-1 transition-transform duration-200"
          aria-hidden="true"
        >
          <Icon className="text-foreground group-hover:text-accent-foreground size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-foreground group-hover:text-accent-foreground truncate text-sm font-medium">
            {title}
          </p>
          {description && (
            <p className="text-muted-foreground truncate text-xs">
              {description}
            </p>
          )}
        </div>
        <AnimatedArrow />
      </div>
    </Link>
  );
};

export default MoreProjectItem;
