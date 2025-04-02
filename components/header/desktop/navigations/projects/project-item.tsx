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
      className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-100/80 hover:shadow-sm"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={`View ${title} project`}
    >
      <div className="p-5 pb-0">
        <span className="text-sm font-medium text-neutral-900">{title}</span>
        <p className="mt-3 max-w-56 text-sm text-neutral-500">{description}</p>
      </div>
      <div
        className="relative mt-7 grow overflow-hidden pl-5 [mask-image:linear-gradient(90deg,black_50%,transparent)]"
        role="img"
        aria-label={`${title} project preview`}
      >
        <div className="relative size-full overflow-hidden rounded-tl-lg border-t border-l border-black/10 [mask-image:linear-gradient(black_50%,transparent)]">
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-neutral-200" />
          )}
          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
              <span className="text-sm text-neutral-500">
                Failed to load image
              </span>
            </div>
          ) : (
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              className="bg-white object-cover object-left-top grayscale transition-all duration-300 group-hover:grayscale-0"
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
