import React, { Fragment } from "react";

const AnimatedArrow = () => {
  return (
    <Fragment>
      <svg
        className="invisible absolute -ml-2 h-4 w-4 text-neutral-700 transition-all group-hover:translate-x-1 group-hover:opacity-0 group-aria-selected:visible sm:group-hover:visible"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
        ></path>
      </svg>
      <svg
        className="invisible absolute -ml-2 h-4 w-4 text-neutral-700 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-aria-selected:visible sm:group-hover:visible"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
        ></path>
      </svg>
    </Fragment>
  );
};

export default AnimatedArrow;
