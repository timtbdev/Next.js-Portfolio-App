import NextJsIcon from "@/icons/nextjs-icon";
import { getBaseUrl } from "@/lib/utils";
import Link from "next/link";
import { FaSitemap, FaSquareRss } from "react-icons/fa6";

const MobileCopyright = () => {
  const defaultClass =
    "text-md inline-flex items-center gap-1.5 text-gray-600 font-medium hover:text-black hover:underline hover:underline-offset-4";
  return (
    <div className="lg:hidden">
      <div className="mx-auto mt-10 flex max-w-4xl justify-center gap-x-2">
        <Link
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass}
        >
          <FaSitemap size={18} />
          Sitemap
        </Link>
        <span> | </span>
        <Link
          href={getBaseUrl("/rss.xml")}
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass}
        >
          <FaSquareRss size={18} />
          RSS Feed
        </Link>
      </div>
      <div className="text-md mx-auto mt-4 flex max-w-4xl justify-center text-center leading-5 text-gray-600">
        © {new Date().getFullYear()} All rights reserved.
      </div>

      <div className="mx-auto mt-4 max-w-xl items-center justify-center">
        <p className="text-center text-sm leading-5 text-gray-600">
          Loosely designed in{" "}
          <Link
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={defaultClass}
          >
            Figma
          </Link>{" "}
          and coded in{" "}
          <Link
            href="https://www.cursor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={defaultClass}
          >
            Cursor.
          </Link>{" "}
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={defaultClass}
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={defaultClass}
          >
            Tailwind CSS
          </Link>{" "}
          , deployed with{" "}
          <Link
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={defaultClass}
          >
            Vercel
          </Link>
          . All text is set in the{" "}
          <Link
            href="https://fonts.google.com/specimen/Inter"
            target="_blank"
            rel="noopener noreferrer"
            className={defaultClass}
          >
            Inter
          </Link>{" "}
          typeface. Code is available on{" "}
          <Link
            href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
            target="_blank"
            rel="noopener noreferrer"
            className={defaultClass}
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MobileCopyright;
