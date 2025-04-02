import Link from "next/link";
import { FC } from "react";

interface CategoryLinkProps {
  href: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  background?: React.ReactNode;
  gradientColor?: string;
  className?: string;
}

const CategoryLink: FC<CategoryLinkProps> = ({
  href,
  title,
  description,
  icon,
  background,
  gradientColor = "#0f1726",
  className = "",
}) => {
  return (
    <Link
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 transition-all duration-200 hover:border-neutral-200 hover:shadow-sm ${className}`}
      href={href}
      aria-label={`View articles about ${title}`}
    >
      {background && (
        <div className="relative grow overflow-hidden">{background}</div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--gradient-color),transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-[0.2]"
        style={{ "--gradient-color": gradientColor } as React.CSSProperties}
      ></div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-neutral-900">
              {title}
            </span>
            <p className="mt-1 text-sm text-neutral-500">{description}</p>
          </div>
          {icon && (
            <div
              className="text-neutral-700 transition-colors duration-200 group-hover:text-[var(--hover-color)]"
              style={{ "--hover-color": gradientColor } as React.CSSProperties}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CategoryLink;
