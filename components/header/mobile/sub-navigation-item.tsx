import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  href: string;
  label: string;
  description: string;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const SubNavigationItem: FC<Props> = ({
  href,
  label,
  description,
  icon,
  className,
  onClick,
  isLoading = false,
}) => {
  return (
    <Link
      className={cn(
        "group flex w-full items-center gap-3",
        "hover:bg-accent hover:shadow-xs",
        isLoading && "pointer-events-none opacity-50",
        className,
      )}
      href={href}
      onClick={onClick}
      aria-disabled={isLoading}
    >
      <div className="border-border bg-accent/50 flex size-10 items-center justify-center rounded-lg border p-2">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-foreground group-hover:text-accent-foreground text-sm font-medium">
            {label}
          </h2>
        </div>
        <p className="text-muted-foreground group-hover:text-accent-foreground line-clamp-1 truncate text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SubNavigationItem;
