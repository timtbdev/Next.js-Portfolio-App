import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaSitemap, FaSquareRss } from "react-icons/fa6";

const defaultStyle =
  "text-foreground group-hover:text-accent-foreground transition-colors duration-200";

const MobileFooterLinks = () => {
  return (
    <div className="mx-auto mt-6 mb-4 flex max-w-4xl items-center justify-center gap-x-4 lg:hidden">
      <Button variant="link" asChild className="group flex items-center gap-2">
        <Link href="/sitemap.xml" aria-label="Sitemap" prefetch={true}>
          <FaSitemap
            size={18}
            className={cn(defaultStyle)}
            aria-hidden="true"
          />
          <span className={cn(defaultStyle)}>Sitemap</span>
        </Link>
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button variant="link" asChild className="group flex items-center gap-2">
        <Link href="/rss.xml" aria-label="RSS Feed" prefetch={true}>
          <FaSquareRss
            size={18}
            className={cn(defaultStyle)}
            aria-hidden="true"
          />
          <span className={cn(defaultStyle)}>RSS Feed</span>
        </Link>
      </Button>
    </div>
  );
};

export default MobileFooterLinks;
