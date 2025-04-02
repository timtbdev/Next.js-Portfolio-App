import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  className?: string;
}

const LogoButton: FC<Props> = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2", className)}
    >
      <Image
        src="/images/logo.png"
        title="Tim's avatar"
        alt="Tim's avatar"
        width={176}
        height={176}
        className="ring-brand-600 size-8 transform rounded-full transition-all duration-200"
      />
      <span className="text-md font-semibold text-neutral-700 group-hover:text-neutral-900">
        Tim
      </span>
    </Link>
  );
};

export default LogoButton;
