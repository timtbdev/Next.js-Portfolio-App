import AndroidIcon from "@/icons/android-icon";
import HtmlIcon from "@/icons/html-icon";
import NextJsIcon from "@/icons/nextjs-icon";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  category: string;
  className?: string;
}

const Category: FC<Props> = ({ category, className }) => {
  const renderIcon = () => {
    switch (category) {
      case "Android":
        return <AndroidIcon className="size-5" />;
      case "Next.js":
        return <NextJsIcon className="size-5" />;
      default:
        return <HtmlIcon className="size-5" />;
    }
  };

  return (
    <div
      className={cn(
        "relative mx-auto inline-flex items-center justify-center gap-x-1 rounded-full border border-black/20 px-4 py-2 tracking-tight",
        className,
      )}
    >
      {renderIcon()}
      {category}
    </div>
  );
};

export default Category;
