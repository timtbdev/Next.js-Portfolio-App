"use client";

import { useTableOfContents } from "@/hooks/useTableOfCotents";
import { cn, slugify } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlignLeftIcon } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes, useCallback, useEffect } from "react";

interface TableOfContentsProps extends HTMLAttributes<HTMLDivElement> {}

export const TableOfContents = ({
  className,
  ...props
}: TableOfContentsProps) => {
  const visibleSections = useTableOfContents((state) => state.visibleSections);
  const allHeadings = useTableOfContents((state) => state.allHeadings);
  const setVisibleSections = useTableOfContents(
    (state) => state.setVisibleSections,
  );

  useEffect(() => {
    if (!allHeadings[0]) return;

    if (allHeadings.length > 0 && visibleSections.length === 0) {
      const firstHeadingSlug = slugify(allHeadings[0].text);
      setVisibleSections([firstHeadingSlug]);
    }
  }, [allHeadings, visibleSections, setVisibleSections]);

  const handleClick = useCallback(
    (headingText: string) => {
      const slug = slugify(headingText);
      setVisibleSections([slug]);
    },
    [setVisibleSections],
  );

  return (
    <div>
      <p className="-ml-0.5 flex items-center gap-1.5 text-sm text-gray-500">
        <AlignLeftIcon className="size-4" />
        On this page
      </p>
      <div className="mt-4 grid gap-4 border-l-2 border-gray-200">
        {allHeadings.map((heading, i) => {
          const isVisible = visibleSections.some(
            (section) => section === slugify(heading.text),
          );
          return (
            <Link
              key={heading.text}
              data-active={isVisible ? "true" : "false"}
              href={`#${slugify(heading.text)}`}
              onClick={() => handleClick(heading.text)}
              className="relative -ml-0.5"
              style={{ paddingLeft: "16px" }}
            >
              <p className="text-sm text-black transition-colors">
                {heading.text}
              </p>
              <motion.div
                className={cn(
                  "absolute top-0 left-0 h-full w-0.5 bg-gray-500 transition-colors duration-300 ease-in-out",
                  isVisible ? "bg-black" : "bg-transparent",
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              ></motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
