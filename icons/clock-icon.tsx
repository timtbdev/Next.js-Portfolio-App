import React, { FC } from "react";

interface Props {
  size: number;
  className?: string;
}

const ClockIcon: FC<Props> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <g>
        <path
          fill="#e3e3e3"
          d="M10.08 1.26a8.82 8.82 0 1 0 0 17.64 8.82 8.82 0 1 0 0-17.64z"
        ></path>
        <path
          d="M10.08 19.74a9.66 9.66 0 1 1 9.66-9.66 9.67 9.67 0 0 1-9.66 9.66z m0-17.64a7.98 7.98 0 1 0 7.98 7.98 7.99 7.99 0 0 0-7.98-7.98z"
          fill="#2a4b55"
        ></path>
        <path
          d="M6.3 15.12a0.42 0.42 0 0 1-0.32-0.69l3.78-4.62a0.42 0.42 0 0 1 0.65 0.54l-3.78 4.62a0.42 0.42 0 0 1-0.33 0.15z"
          fill="#ff7163"
        ></path>
        <path
          fill="#2a4b55"
          d="M10.08 8.82a1.26 1.26 0 1 0 0 2.52 1.26 1.26 0 1 0 0-2.52z"
        ></path>
        <path
          d="M13.86 10.5h-3.78a0.42 0.42 0 0 1-0.35-0.19l-3.36-5.04a0.42 0.42 0 1 1 0.7-0.46l3.23 4.85h3.56a0.42 0.42 0 0 1 0 0.84z"
          fill="#2a4b55"
        ></path>
        <path
          d="M10.08 4.62a0.42 0.42 0 0 1-0.42-0.42v-0.84a0.42 0.42 0 0 1 0.84 0v0.84a0.42 0.42 0 0 1-0.42 0.42z"
          fill="#aeaeae"
        ></path>
        <path
          d="M15.54 10.08a0.42 0.42 0 0 1 0.42-0.42h0.84a0.42 0.42 0 0 1 0 0.84h-0.84a0.42 0.42 0 0 1-0.42-0.42z"
          fill="#aeaeae"
        ></path>
        <path
          d="M10.08 15.54a0.42 0.42 0 0 1 0.42 0.42v0.84a0.42 0.42 0 0 1-0.84 0v-0.84a0.42 0.42 0 0 1 0.42-0.42z"
          fill="#aeaeae"
        ></path>
        <path
          d="M4.62 10.08a0.42 0.42 0 0 1-0.42 0.42h-0.84a0.42 0.42 0 0 1 0-0.84h0.84a0.42 0.42 0 0 1 0.42 0.42z"
          fill="#aeaeae"
        ></path>
      </g>
    </svg>
  );
};

export default ClockIcon;
