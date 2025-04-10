import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
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
          Learn more
        </Button>
      </Link>
      <Link href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          className="hover:ring-border px-5 py-2 hover:border-black/20 hover:ring-2 dark:hover:border-white/20"
        >
          Live Demo
          <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </Button>
      </Link>
    </div>
  );
};

export default LinkButtons;
