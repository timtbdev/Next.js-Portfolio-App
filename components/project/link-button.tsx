import { cn } from "@/lib/utils";
import { TypeIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  url: string;
  Icon: IconType;
  className?: string;
}

const LinkButton: FC<Props> = ({ title, url, Icon, className = "" }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative mt-4 inline-flex h-14 w-full max-w-xs items-center justify-center gap-x-1 rounded-md bg-linear-to-br from-blue-500 to-blue-600 font-semibold shadow-md transition hover:scale-[0.98] active:scale-[0.95]",
        className,
      )}
    >
      <Icon className="size-5 text-white" />
      <span className="text-white">{title}</span>
      <div className="absolute -top-[50px] -left-[75px] -z-10 h-[125px] w-8 rotate-[15deg] bg-white opacity-20 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:left-[120%]" />
    </Link>
  );
};

export default LinkButton;
