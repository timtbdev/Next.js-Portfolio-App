import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  className?: string;
}

const AndroidIcon: FC<Props> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("fill-current", className)}
    >
      <title>android</title>
      <g fill="currentColor">
        <path
          d="M18.427,8.85,20.338,5.5a1,1,0,0,0-1.738-.99L16.646,7.934a12.022,12.022,0,0,0-9.292,0L5.4,4.505a1,1,0,1,0-1.738.99L5.573,8.85A12,12,0,0,0,0,18H24A12,12,0,0,0,18.427,8.85ZM6,15a1,1,0,1,1,1-1A1,1,0,0,1,6,15Zm12,0a1,1,0,1,1,1-1A1,1,0,0,1,18,15Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};

export default AndroidIcon;
