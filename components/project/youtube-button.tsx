import { cn } from "@/lib/utils";
import { YoutubeIcon } from "lucide-react";
import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
  className?: string;
}

const YoutubeButton: FC<Props> = ({ title, url, className = "" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative mx-auto inline-flex items-center justify-center gap-x-1 border-b border-gray-600 font-medium tracking-tight text-gray-600 hover:border-blue-600 hover:text-blue-600",
        className,
      )}
    >
      <YoutubeIcon className="size-5 text-gray-600 group-hover:text-blue-600" />
      {title}
    </a>
  );
};

export default YoutubeButton;
