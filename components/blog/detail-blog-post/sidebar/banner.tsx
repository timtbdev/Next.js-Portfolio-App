import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BannerProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  linkUrl?: string;
}

const Banner: React.FC<BannerProps> = ({
  title = "Hire Tim",
  description = "Tim is the best Frontend Developer in the San Francisco Bay Area.",
  imageUrl = "/images/cover.jpg",
  linkUrl = "/about",
}) => {
  return (
    <Link
      href={linkUrl}
      className="group border-border bg-background hover:border-accent relative block overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:shadow-lg"
      aria-label={`Learn more about ${title}`}
    >
      <div className="border-border bg-background absolute top-2 right-2 z-10 rounded-full border p-2.5 opacity-0 backdrop-blur-lg transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right size-4 -rotate-45 transition-transform duration-300"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
      <div className="border-border relative aspect-[16/9] overflow-hidden rounded-lg border">
        <Image
          alt={title}
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-display text-foreground group-hover:text-accent-foreground text-lg font-bold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-foreground group-hover:text-accent-foreground text-sm transition-colors duration-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Banner;
