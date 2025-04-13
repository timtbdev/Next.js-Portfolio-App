import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import AnimatedArrow from "../animated-arrow";

interface Props {
  title: string;
  description: string;
  href: string;
  image: string;
}

const ProjectItem: FC<Props> = ({ title, description, href, image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      key={title}
      className="group border-border bg-accent/50 hover:bg-accent relative flex flex-col overflow-hidden rounded-xl border mask-r-from-30% transition-all duration-300 hover:mask-r-from-60% hover:shadow-sm"
      target={href !== "/projects" ? "_blank" : undefined}
      rel={href !== "/projects" ? "noopener noreferrer" : undefined}
      href={href}
      aria-label={`View ${title} project`}
    >
      <div className="p-5 pb-0">
        <span className="text-foreground group-hover:text-accent-foreground text-sm font-medium">
          {title}
        </span>
        <p className="text-foreground mt-3 max-w-56 text-sm">{description}</p>
      </div>
      <div
        className="relative mt-7 grow overflow-hidden pl-5"
        role="img"
        aria-label={`${title} project preview`}
      >
        <div className="relative size-full overflow-hidden rounded-tl-lg border-t border-l border-black/10 [mask-image:linear-gradient(black_50%,transparent)]">
          {isLoading && (
            <div className="bg-border absolute inset-0 animate-pulse" />
          )}
          {hasError ? (
            <div className="bg-background absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                Failed to load image
              </span>
            </div>
          ) : (
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              className="bg-background object-cover object-left-top grayscale transition-all duration-300 group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              decoding="async"
              data-nimg="fill"
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
