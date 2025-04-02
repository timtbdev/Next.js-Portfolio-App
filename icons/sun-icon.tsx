interface Props {
  className?: string;
}

export default function SunIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none">
        <path
          opacity=".3"
          d="M12 7.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
          fill="currentColor"
        ></path>
        <path
          d="M5.34 6.25l1.42-1.41-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1v-2zM11 .55h2V3.5h-2V.55zm7.66 5.705l-1.41-1.407 1.79-1.79 1.406 1.41-1.786 1.787zM17.24 18.16l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5h3v2h-3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2V19.5zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}
