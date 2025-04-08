import AndroidIcon from "@/icons/android-icon";
import HtmlIcon from "@/icons/html-icon";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { RiNextjsFill as NextJsIcon } from "react-icons/ri";

interface Props {
  category: string;
  className?: string;
}

const Category: FC<Props> = ({ category, className }) => {
  const renderIcon = () => {
    switch (category) {
      case "Android":
        return <AndroidIcon className="size-5" aria-hidden="true" />;
      case "Next.js":
        return <NextJsIcon className="size-5" aria-hidden="true" />;
      case "Web":
      case "HTML, CSS, JS":
        return <HtmlIcon className="size-5" aria-hidden="true" />;
      default:
        return <HtmlIcon className="size-5" aria-hidden="true" />;
    }
  };

  return (
    <div
      className={cn(
        "relative mx-auto inline-flex items-center justify-center gap-x-1 rounded-full border border-black/20 px-4 py-2 tracking-tight transition-colors hover:border-black/30",
        className,
      )}
      role="status"
      aria-label={`Project category: ${category}`}
    >
      {renderIcon()}
      <span>{category}</span>
    </div>
  );
};

export default Category;
