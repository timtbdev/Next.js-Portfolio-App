import { Button } from "@/components/ui/button";
import {
  TextIcon as LearnMoreIcon,
  ArrowUpRightIcon as LinkIcon,
  ChromeIcon as LiveDemoIcon,
} from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  liveDemoUrl: string;
  learnMoreUrl: string;
  className?: string;
}

const LinkButtons: FC<Props> = ({ learnMoreUrl, liveDemoUrl }) => {
  return (
    <div className="mx-auto mt-4 flex w-fit max-w-xs gap-2">
      <Link href={learnMoreUrl} target="_blank" rel="noopener noreferrer">
        <Button className="hover:ring-border px-5 py-2 hover:border-black/20 hover:ring-2 dark:hover:border-white/20">
          <LearnMoreIcon className="size-4" aria-hidden="true" />
          Learn more
        </Button>
      </Link>
      <Link href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          className="hover:ring-border cursor-pointer overflow-hidden rounded-lg px-5 py-2 [--liquid-button-color:var(--accent)] [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] hover:ring-2 hover:[--liquid-button-delay:0.3s] hover:[--liquid-button-fill:100%]"
        >
          <LiveDemoIcon className="size-4" aria-hidden="true" />
          Live Demo
          <LinkIcon className="size-4" aria-hidden="true" />
        </Button>
      </Link>
    </div>
  );
};

export default LinkButtons;
