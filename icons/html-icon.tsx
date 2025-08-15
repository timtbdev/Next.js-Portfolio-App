import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  className?: string;
}

const HtmlIcon: FC<Props> = ({ className = "" }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("icon", className)}
    >
      <g id="html5">
        <g id="html5_2">
          <path
            id="Vector"
            d="M14.0214 90.0345L6 0.000488281H94.1867L86.1653 89.9859L50.0204 100"
            fill="currentColor"
          />
          <path
            id="Vector_2"
            d="M50.093 92.3445V7.39062H86.1407L79.2617 84.2015"
            fill="currentColor"
          />
          <path
            id="Vector_3"
            d="M22.3831 18.4014H50.0933V29.4369H34.4881L35.509 40.7397H50.0933V51.7509H25.3972L22.3831 18.4014ZM25.8833 57.293H36.9674L37.7452 66.1165L50.0933 69.4223V80.9439L27.439 74.624"
            fill="white"
          />
          <path
            id="Vector_4"
            d="M77.7058 18.4014H50.0442V29.4369H76.6849L77.7058 18.4014ZM75.6883 40.7397H50.0442V51.7752H63.6562L62.368 66.1165L50.0442 69.4223V80.8953L72.6499 74.624"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

export default HtmlIcon;
