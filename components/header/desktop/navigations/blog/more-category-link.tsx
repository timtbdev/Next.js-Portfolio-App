import Link from "next/link";
import { FC } from "react";
import AnimatedArrow from "../animated-arrow";

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
      className={`group hover:bg-accent -mx-2 rounded-[8px] mask-r-from-80% p-2 transition-colors ${className}`}
      href={href}
      aria-label={`View articles about ${title}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="border-border bg-background shrink-0 rounded-[10px] border p-2">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-foreground group-hover:text-accent-foreground text-sm font-medium">
            {title}
          </p>
          <p className="text-muted-foreground line-clamp-1 text-xs">
            {description}
          </p>
        </div>
        <AnimatedArrow />
      </div>
    </Link>
  );
};

export default MoreCategoryLink;
