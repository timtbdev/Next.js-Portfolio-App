import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  title: string;
  description?: string;
  className?: string;
}

const MainTitle: FC<Props> = ({ title, description, className = "" }) => {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      <h1 className="text-accent-foreground mb-2 justify-start text-3xl font-bold tracking-tight capitalize md:text-4xl">
        {title}
      </h1>
      {description && (
        <h2 className="text-foreground mb-2 text-lg">{description}</h2>
      )}
    </div>
  );
};

export default MainTitle;
