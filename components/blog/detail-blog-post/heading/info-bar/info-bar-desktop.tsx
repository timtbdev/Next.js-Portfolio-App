import CalendarIcon from "@/icons/calendar-icon";
import ClockIcon from "@/icons/clock-icon";
import FolderIcon from "@/icons/folder-icon";
import { cn, getMinutes } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { FC } from "react";

interface Props {
  authorImage: string;
  authorName: string;
  date: string;
  category: string;
  readTime: number;
  className?: string;
}

const InfoBarDetailDesktop: FC<Props> = ({
  authorImage,
  authorName,
  date,
  category,
  readTime,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex-row items-center justify-start gap-4 pt-2",
        className,
      )}
    >
      <div className="flex flex-row items-center gap-1">
        <Image
          src={authorImage}
          alt={authorName}
          width="24"
          height="24"
          className="size-6 rounded-full"
          loading="lazy"
        />

        <span className="text-md text-foreground flex font-medium">
          {authorName}
        </span>
      </div>
      <Separator orientation="vertical" className="bg-border h-4 w-[1px]" />
      <div className="inline-flex items-center gap-2">
        <FolderIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">{category}</span>
      </div>
      <Separator orientation="vertical" className="bg-border h-4 w-[1px]" />
      <div className="inline-flex items-center gap-2">
        <CalendarIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">
          {format(parseISO(date), "MMM dd, yyyy")}
        </span>
      </div>
      <Separator orientation="vertical" className="bg-border h-4 w-[1px]" />
      <div className="inline-flex items-center gap-2">
        <ClockIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">{getMinutes(readTime)}</span>
      </div>
    </div>
  );
};

export default InfoBarDetailDesktop;
