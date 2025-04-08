import { Button } from "@/components/ui/button";
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
        "mx-auto flex w-full items-center justify-center gap-6",
        className,
      )}
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group inline-flex items-center gap-2"
          prefetch={true}
          aria-label={link.label}
        >
          <Button
            variant="link"
            className="text-foreground group-hover:text-accent-foreground text-md font-semibold transition-colors duration-200"
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLinks;
