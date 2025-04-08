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
        <Button className="px-5 py-2">Learn more</Button>
      </Link>
      <Link href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="px-5 py-2">
          Live Demo
          <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </Button>
      </Link>
    </div>
  );
};

export default LinkButtons;
