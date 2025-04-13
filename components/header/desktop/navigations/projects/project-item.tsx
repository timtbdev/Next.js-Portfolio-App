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

type ImageLoadingState = "loading" | "loaded" | "error";

const ProjectItem: FC<Props> = ({ title, description, href, image }) => {
  const [imageState, setImageState] = useState<ImageLoadingState>("loading");

  const handleImageLoad = () => {
    setImageState("loaded");
  };

  const handleImageError = () => {
    setImageState("error");
  };

  return (
    <Link
      key={title}
      className="group border-border bg-accent/50 hover:bg-accent focus-visible:ring-ring relative flex flex-col overflow-hidden rounded-xl border mask-r-from-30% transition-all duration-300 hover:mask-r-from-60% hover:shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      target={href !== "/projects" ? "_blank" : undefined}
      rel={href !== "/projects" ? "noopener noreferrer" : undefined}
      href={href}
      aria-label={`View ${title} project - ${description}`}
    >
      <div className="p-5 pb-0">
        <span className="text-foreground group-hover:text-accent-foreground text-sm font-medium transition-colors duration-200">
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
          {imageState === "loading" && (
            <div className="bg-border absolute inset-0 animate-pulse" />
          )}
          {imageState === "error" ? (
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
              quality={85}
              placeholder="blur"
              blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
              onLoadingComplete={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
      </div>
      <div className="absolute right-4 bottom-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <AnimatedArrow />
      </div>
    </Link>
  );
};

export default ProjectItem;
