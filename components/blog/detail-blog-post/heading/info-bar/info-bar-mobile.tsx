import CalendarIcon from "@/icons/calendar-icon";
import ClockIcon from "@/icons/clock-icon";
import FolderIcon from "@/icons/folder-icon";
import { cn, getMinutes } from "@/lib/utils";
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

const InfoBarDetailMobile: FC<Props> = ({
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
        "grid grid-cols-2 items-center justify-start pt-2",
        className,
      )}
    >
      <div className="border-border flex flex-row items-center gap-2 border-r border-b pb-2">
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
      <div className="border-border inline-flex items-center gap-2 border-b px-4 pb-2">
        <FolderIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">{category}</span>
      </div>
      <div className="border-border inline-flex items-center gap-2 border-r py-2">
        <CalendarIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">
          {format(parseISO(date), "MMM dd, yyyy")}
        </span>
      </div>
      <div className="inline-flex items-center gap-x-1 px-4 py-2">
        <ClockIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">{getMinutes(readTime)}</span>
      </div>
    </div>
  );
};

export default InfoBarDetailMobile;
