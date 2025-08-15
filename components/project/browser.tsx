import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const BrowserWrapper: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "group bg-accent rounded-t-lg border border-b-0 text-sm",
        className,
      )}
    >
      <div className="flex gap-2 p-2">
        <span className="size-3 rounded-full bg-white group-hover:bg-red-500 dark:bg-white/20 dark:group-hover:bg-red-500"></span>
        <span className="size-3 rounded-full bg-white group-hover:bg-yellow-500 dark:bg-white/20 dark:group-hover:bg-yellow-500"></span>
        <span className="size-3 rounded-full bg-white group-hover:bg-green-500 dark:bg-white/20 dark:group-hover:bg-green-500"></span>
      </div>
      <div className="border-border bg-background dark:bg-accent/50 border border-r-0 border-b-0 border-l-0">
        {children}
      </div>
    </div>
  );
};

export default BrowserWrapper;
