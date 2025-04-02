import navigationLinks from "@/config/navigation-links";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

const NavigationLinks = ({ className }: Props) => {
  return (
    <nav
      aria-label="Bottom navigation"
      className={cn(
        "mx-auto flex w-full items-center justify-center gap-12",
        className,
      )}
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group inline-flex items-center gap-2 text-lg font-semibold text-neutral-600 transition-colors hover:text-black"
          prefetch={true}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLinks;
