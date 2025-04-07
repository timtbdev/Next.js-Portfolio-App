import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaSitemap, FaSquareRss } from "react-icons/fa6";

const MobileFooterLinks = () => {
  return (
    <div className="mx-auto mt-6 mb-4 flex max-w-4xl items-center justify-center gap-x-4 lg:hidden">
      <Button
        variant="link"
        asChild
        className="hover:text-primary flex items-center gap-2"
      >
        <Link href="/sitemap.xml">
          <FaSitemap size={18} />
          <span>Sitemap</span>
        </Link>
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant="link"
        asChild
        className="hover:text-primary flex items-center gap-2"
      >
        <Link href="/rss.xml">
          <FaSquareRss size={18} />
          <span>RSS Feed</span>
        </Link>
      </Button>
    </div>
  );
};

export default MobileFooterLinks;
