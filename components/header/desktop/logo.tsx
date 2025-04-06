import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
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
      <Avatar>
        <AvatarImage
          src="/images/logo.png"
          alt="Tim's avatar"
          width={176}
          height={176}
          className="size-8 transform rounded-full"
          title="Tim's avatar"
        />
        <AvatarFallback>TB</AvatarFallback>
      </Avatar>
      <span className="text-md text-foreground group-hover:text-accent-foreground font-semibold">
        Tim
      </span>
    </Link>
  );
};

export default LogoButton;
