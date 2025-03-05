import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  currentPath: boolean;
  emoji: string;
  className?: string;
}

const MenuEmoji: FC<Props> = ({ currentPath, emoji, className = "" }) => {
  return (
    <span
      className={cn(
        "text-lg duration-100 ease-in-out",
        {
          "group-hover:scale-125 group-hover:rotate-3": !currentPath,
          "scale-125 rotate-3": currentPath,
        },
        className,
      )}
    >
      {emoji}
    </span>
  );
};

export default MenuEmoji;
