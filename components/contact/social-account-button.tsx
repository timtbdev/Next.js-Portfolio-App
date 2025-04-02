import { cn } from "@/lib/utils";
import { SocialType } from "@/types";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  social: SocialType;
  className?: string;
}

const SocialAccountButton: FC<Props> = ({ social, className = "" }) => {
  const defaultClass = "block truncate text-sm font-semibold text-gray-600";
  return (
    <div className="flex items-center justify-center">
      <Link href={social.href} target="_blank" rel="noopener noreferrer">
        <social.icon className="size-8 transition-colors duration-200" />
      </Link>
    </div>
  );
};

export default SocialAccountButton;
