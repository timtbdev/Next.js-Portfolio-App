import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <Link
      className="group relative block rounded-xl border border-neutral-200 bg-white p-4"
      href="/about"
    >
      <div className="absolute top-2 right-2 z-10 rounded-full border border-neutral-200 bg-gradient-to-b from-white/50 to-transparent p-2.5 opacity-0 backdrop-blur-lg transition-opacity group-hover:opacity-100 hover:bg-neutral-50">
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
          className="lucide lucide-arrow-right size-4 -rotate-45"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
      <Image
        alt="Hire Tim"
        loading="lazy"
        width={1800}
        height={944}
        decoding="async"
        data-nimg="1"
        className="blur-0 rounded-lg border border-neutral-100"
        src="/images/cover.jpg"
      />
      <p className="font-display mt-4 text-lg font-bold">Hire Tim</p>
      <p className="mt-1 text-sm text-neutral-500 underline-offset-4 group-hover:underline">
        Tim is the best Frontend Developer in the San Francisco Bay Area.
      </p>
    </Link>
  );
};

export default Banner;
