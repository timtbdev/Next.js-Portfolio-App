import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";
import { FaSitemap, FaSquareRss } from "react-icons/fa6";
import CopyrightText from "./copyright-text";

interface FooterLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel?: string;
}

const defaultStyle =
  "text-foreground group-hover:text-accent-foreground transition-colors duration-200";

const FooterLink = ({ href, icon, label, ariaLabel }: FooterLinkProps) => (
  <Button variant="link" asChild className="group">
    <Link
      href={href}
      className="group flex items-center gap-2"
      aria-label={ariaLabel || label}
      prefetch={true}
    >
      {icon}
      <span className={cn(defaultStyle)}>{label}</span>
    </Link>
  </Button>
);

const DesktopFooterLinks = () => {
  return (
    <Fragment>
      <div className="mx-auto mt-6 hidden max-w-5xl items-center justify-between px-4 lg:flex">
        <div className="flex flex-1 items-center justify-start">
          <FooterLink
            href="/sitemap.xml"
            icon={
              <FaSitemap
                aria-hidden="true"
                className={cn(defaultStyle, "size-[18px]")}
              />
            }
            label="Sitemap"
            ariaLabel="View website sitemap"
          />
        </div>
        <CopyrightText />
        <div className="flex flex-1 justify-end">
          <FooterLink
            href="/rss.xml"
            icon={
              <FaSquareRss
                aria-hidden="true"
                className={cn(defaultStyle, "size-[18px]")}
              />
            }
            label="RSS Feed"
            ariaLabel="Subscribe to RSS feed"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopFooterLinks;
