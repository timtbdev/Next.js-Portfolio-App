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
      className="group -mx-2 rounded-[8px] p-2 transition-all duration-200 hover:bg-neutral-50 hover:shadow-sm active:bg-neutral-100"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={description ? `${title} - ${description}` : title}
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className="shrink-0 rounded-[10px] border border-neutral-200 bg-white/50 p-1 transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          <Icon className="size-5 text-neutral-700 group-hover:text-neutral-900" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-neutral-700">
            {title}
          </p>
          {description && (
            <p className="truncate text-xs text-neutral-500">{description}</p>
          )}
        </div>
        <AnimatedArrow />
      </div>
    </Link>
  );
};

export default MoreProjectItem;
