import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  title: string;
  className?: string;
}

const Title: FC<Props> = ({ title, className }) => {
  return (
    <h2 className={cn("font-bold tracking-tight text-pretty", className)}>
      {title}
    </h2>
  );
};

export default Title;
