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
        "bg-background ring-border relative flex h-full max-w-full flex-col overflow-hidden bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:20px_20px] shadow-xs ring-[0.8px] [--pattern-fg:var(--color-border)]/60 lg:rounded-[0.62rem]",
      )}
    >
      {children}
    </div>
  );
};

export default Card;
