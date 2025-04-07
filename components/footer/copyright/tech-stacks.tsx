import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface TechLink {
  label: string;
  href: string;
}

const defaultClass =
  "text-muted-foreground hover:text-accent-foreground underline underline-offset-4 transition-colors";

const techLinks: TechLink[] = [
  { label: "Figma", href: "https://www.figma.com/" },
  { label: "Cursor", href: "https://www.cursor.com/" },
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { label: "Vercel", href: "https://vercel.com/" },
  { label: "Inter", href: "https://fonts.google.com/specimen/Inter" },
  {
    label: "GitHub",
    href: "https://github.com/timtbdev/Next.js-Portfolio-App-v2",
  },
];

const TechLinkButton: React.FC<{ link: TechLink }> = ({ link }) => (
  <Button
    variant="link"
    asChild
    className="text-foreground group-hover:text-accent-foreground transition-colors duration-200"
  >
    <Link href={link.href} aria-label={`View ${link.label}`}>
      {link.label}
    </Link>
  </Button>
);

const TechStacks: React.FC = () => (
  <div className="mx-auto mt-4 max-w-xl items-center justify-center">
    <p className="text-foreground text-center text-sm leading-5">
      Loosely designed in{" "}
      <Link
        href={techLinks[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[0].label}
      </Link>{" "}
      and coded in{" "}
      <Link
        href={techLinks[1].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[1].label}
      </Link>{" "}
      . Built with{" "}
      <Link
        href={techLinks[2].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[2].label}
      </Link>{" "}
      and{" "}
      <Link
        href={techLinks[3].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[3].label}
      </Link>{" "}
      , deployed with{" "}
      <Link
        href={techLinks[4].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[4].label}
      </Link>
      . All text is set in the{" "}
      <Link
        href={techLinks[5].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[5].label}
      </Link>{" "}
      typeface.
    </p>
    <p className="text-foreground text-center text-sm leading-5">
      Code is available on{" "}
      <Link
        href={techLinks[6].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[6].label}
      </Link>
      .
    </p>
  </div>
);

export default TechStacks;
