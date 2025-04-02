import { SocialType } from "@/types";
import Link from "next/link";
import { FC } from "react";
import AnimatedArrow from "../animated-arrow";

const SocialLink: FC<SocialType> = ({ href, icon: Icon, label }) => (
  <Link
    className="group -mx-2 rounded-[8px] p-2 transition-colors hover:bg-neutral-50 active:bg-neutral-100"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <div className="flex items-center justify-between gap-3">
      <div className="shrink-0 rounded-[10px] border border-neutral-200 bg-white/50 p-1.5">
        <Icon
          className="size-4 text-neutral-700 transition-colors duration-200 group-hover:text-neutral-900"
          aria-hidden="true"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-neutral-700">{label}</p>
      </div>
      <AnimatedArrow />
    </div>
  </Link>
);

export default SocialLink;
