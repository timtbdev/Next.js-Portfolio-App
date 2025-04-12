"use client";

import { useTableOfContents } from "@/hooks/useTableOfCotents";
import { cn, slugify } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlignLeftIcon } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes, useCallback, useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

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

      // Smooth scroll to the heading
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [setVisibleSections],
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, headingText: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(headingText);
      }
    },
    [handleClick],
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      {...props}
      role="navigation"
      aria-label="Table of contents"
    >
      <p className="text-foreground -ml-0.5 flex items-center gap-1.5 text-sm font-medium">
        <AlignLeftIcon className="size-4" aria-hidden="true" />
        On this page
      </p>
      <div className="border-border mt-4 grid gap-3 border-l-2">
        {allHeadings.map((heading, i) => {
          const isVisible = visibleSections.some(
            (section) => section === slugify(heading.text),
          );
          const indentLevel = heading.level - 2; // h2 starts at 0

          return (
            <Link
              key={heading.text}
              data-active={isVisible ? "true" : "false"}
              href={`#${slugify(heading.text)}`}
              onClick={() => handleClick(heading.text)}
              onKeyDown={(e) => handleKeyDown(e, heading.text)}
              className={cn(
                "hover:text-foreground relative -ml-0.5 transition-colors",
                isVisible ? "text-foreground" : "text-muted-foreground",
                indentLevel > 0 && "ml-4",
              )}
              style={{ paddingLeft: `${16 + indentLevel * 12}px` }}
              role="link"
              tabIndex={0}
              aria-current={isVisible ? "location" : undefined}
            >
              <p className="text-sm transition-colors">{heading.text}</p>
              <motion.div
                className={cn(
                  "bg-border absolute top-0 left-0 h-full w-0.5 transition-colors duration-300 ease-in-out",
                  isVisible ? "bg-foreground" : "bg-transparent",
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
