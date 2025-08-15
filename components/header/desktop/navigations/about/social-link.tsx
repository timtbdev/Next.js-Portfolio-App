import { SocialType } from "@/types";
import Link from "next/link";
import { FC } from "react";
import AnimatedArrow from "../animated-arrow";

const SocialLink: FC<SocialType> = ({ href, icon: Icon, label }) => (
  <Link
    className="group bg-background hover:bg-accent -mx-2 rounded-[8px] p-2 transition-colors hover:mask-r-from-80%"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <div className="flex items-center justify-between gap-3">
      <div className="border-border bg-background/50 shrink-0 rounded-[10px] border p-1.5">
        <Icon
          className="text-foreground group-hover:text-accent-foreground size-4 transition-colors duration-200"
          aria-hidden="true"
        />
      </div>
      <div className="flex-1">
        <p className="text-foreground group-hover:text-accent-foreground text-sm font-medium">
          {label}
        </p>
      </div>
      <AnimatedArrow />
    </div>
  </Link>
);

export default SocialLink;
