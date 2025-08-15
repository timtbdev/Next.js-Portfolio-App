import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
  icon?: React.ReactNode;
  className?: string;
}

const BigButton: FC<Props> = ({ title, url, icon, className = "" }) => {
  const baseClass =
    "group relative inline-flex h-14 w-full max-w-xs items-center justify-center gap-x-1 rounded-md font-semibold shadow-md transition duration-100 ease-in-out hover:scale-[0.98] active:scale-[0.95]";

  if (url.startsWith("/")) {
    return (
      <Link href={url} className={cn(baseClass, className)}>
        {icon}
        {title}
      </Link>
    );
  } else {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClass, className)}
      >
        {icon}
        {title}
      </a>
    );
  }
};

export default BigButton;
