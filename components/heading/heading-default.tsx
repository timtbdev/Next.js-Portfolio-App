import React from "react";

interface Props {
  children: React.ReactNode;
}

const HeadingDefault: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative mx-auto w-full">
      <svg
        className="pointer-events-none absolute inset-[unset] top-0 left-1/2 -z-10 h-40 w-full -translate-x-1/2 text-gray-300/50 [mask-image:linear-gradient(transparent,black_60%)]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-:r1i:"
            x="35"
            y="43"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1"
            ></path>
          </pattern>
        </defs>
        <rect fill="url(#grid-:r1i:)" width="100%" height="100%"></rect>
      </svg>

      {children}
    </div>
  );
};

export default HeadingDefault;
