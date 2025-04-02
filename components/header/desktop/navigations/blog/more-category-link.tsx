import Link from "next/link";
import { FC } from "react";
import AnimatedArrow from "./animated-arrow";

interface Props {
  href: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const MoreCategoryLink: FC<Props> = ({
  href,
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <Link
      className={`group -mx-2 rounded-[8px] p-2 transition-colors hover:bg-neutral-50 active:bg-neutral-100 ${className}`}
      href={href}
      aria-label={`View articles about ${title}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="shrink-0 rounded-[10px] border border-neutral-200 bg-white/50 p-2">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-700">{title}</p>
          <p className="line-clamp-1 text-xs text-neutral-500">{description}</p>
        </div>
        <div className="group relative size-4 shrink-0 items-center justify-end">
          <AnimatedArrow />
        </div>
      </div>
    </Link>
  );
};

export default MoreCategoryLink;
