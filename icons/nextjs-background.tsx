import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const NextjsBackground: FC<Props> = ({ className }) => {
  return (
    <svg
      width="336"
      height="336"
      viewBox="0 0 336 336"
      fill="none"
      className={cn(
        "pointer-events-none absolute bottom-0 h-auto w-full [mask-image:linear-gradient(transparent,black_80%,black_80%,transparent)]",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3)">
        <path
          d="M48 0H0V48M48 0V48M48 0H96M48 48H0M48 48H96M48 48V96M0 48V96M96 0V48M96 0H144M96 48H144M96 48V96M144 0V48M144 0H192M144 48H192M144 48V96M192 0V48M192 0H240M192 48H240M192 48V96M240 0V48M240 0H288M240 48H288M240 48V96M288 0V48M288 0H336V48M288 48H336M288 48V96M336 48V96M48 96H0M48 96H96M48 96V144M0 96V144M96 96H144M96 96V144M144 96H192M144 96V144M192 96H240M192 96V144M240 96H288M240 96V144M288 96H336M288 96V144M336 96V144M48 144H0M48 144H96M48 144V192M0 144V192M96 144H144M96 144V192M144 144H192M144 144V192M192 144H240M192 144V192M240 144H288M240 144V192M288 144H336M288 144V192M336 144V192M48 192H0M48 192H96M48 192V240M0 192V240M96 192H144M96 192V240M144 192H192M144 192V240M192 192H240M192 192V240M240 192H288M240 192V240M288 192H336M288 192V240M336 192V240M48 240H0M48 240H96M48 240V288M0 240V288M96 240H144M96 240V288M144 240H192M144 240V288M192 240H240M192 240V288M240 240H288M240 240V288M288 240H336M288 240V288M336 240V288M48 288H0M48 288H96M48 288V336M0 288V336H48M96 288H144M96 288V336M144 288H192M144 288V336M192 288H240M192 288V336M240 288H288M240 288V336M288 288H336M288 288V336M336 288V336H288M48 336H96M96 336H144M144 336H192M192 336H240M240 336H288"
          stroke="url(#paint0_linear_1_3)"
          strokeWidth="0.5"
        />
        <path
          d="M167.5 265.999C221.9 265.999 266 221.9 266 167.499C266 113.099 221.9 68.9994 167.5 68.9994C113.1 68.9994 69 113.099 69 167.499C69 221.9 113.1 265.999 167.5 265.999Z"
          fill="#6D6D6D"
        />
        <path
          d="M232.628 241.397L144.672 128.099H128.1V206.867H141.358V144.936L222.221 249.413C225.87 246.971 229.346 244.291 232.628 241.397Z"
          fill="url(#paint1_linear_1_3)"
        />
        <path
          d="M207.995 128.099H194.862V206.899H207.995V128.099Z"
          fill="url(#paint2_linear_1_3)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_3"
          x1="168"
          y1="0"
          x2="168"
          y2="336"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopColor="#E6E6E6" />
          <stop offset="1" stopColor="#666666" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_3"
          x1="188.294"
          y1="196.502"
          x2="227.147"
          y2="244.658"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_3"
          x1="201.428"
          y1="128.099"
          x2="201.208"
          y2="185.968"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_1_3">
          <rect width="336" height="336" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NextjsBackground;
