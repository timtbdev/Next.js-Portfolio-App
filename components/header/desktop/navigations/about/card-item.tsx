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
  external?: boolean;
}

const Card: FC<Props> = ({
  href,
  title,
  description,
  icon: Icon,
  external,
}) => (
  <Link
    className="group border-border bg-accent/50 hover:bg-accent relative flex flex-col justify-center overflow-hidden rounded-xl border mask-r-from-30% transition-all duration-200 hover:mask-r-from-80%"
    href={href}
    aria-label={`${title} - ${description}`}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    <div className="flex flex-col gap-1 px-5 py-4">
      <div className="inline-flex items-center gap-1">
        <Icon
          className="text-foreground group-hover:text-accent-foreground size-5 transition-colors duration-200"
          aria-hidden="true"
        />
        <span className="text-foreground group-hover:text-accent-foreground text-sm font-medium">
          {title}
        </span>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </Link>
);

export default Card;
