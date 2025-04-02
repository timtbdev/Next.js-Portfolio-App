import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  hoverColor: string;
  external?: boolean;
}

const Card: FC<Props> = ({
  href,
  title,
  description,
  icon: Icon,
  hoverColor,
  external,
}) => (
  <Link
    className="group relative flex flex-col justify-center overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 transition-all duration-200 hover:border-neutral-200 hover:shadow-sm"
    href={href}
    aria-label={`${title} - ${description}`}
    style={{ "--hover-color": hoverColor } as React.CSSProperties}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    <div className="flex items-center justify-between px-5 py-4">
      <div>
        <span className="text-sm font-medium text-neutral-900">{title}</span>
        <p className="mt-1 text-sm text-neutral-500">{description}</p>
      </div>
      <Icon
        className="size-6 text-neutral-700 transition-colors duration-200 group-hover:text-[var(--hover-color)]"
        aria-hidden="true"
      />
    </div>
    <div
      className="pointer-events-none absolute inset-0 rounded-xl opacity-[0.07] transition-all duration-200 group-hover:opacity-[0.2] group-hover:backdrop-blur-[2px]"
      style={{
        background: `radial-gradient(circle at 10% 100%, var(--hover-color), transparent)`,
      }}
    />
  </Link>
);

export default Card;
