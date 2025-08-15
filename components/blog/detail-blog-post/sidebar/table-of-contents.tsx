"use client";

import { TocItemsEmpty } from "@/components/blog/detail-blog-post/sidebar/toc-items-empty";
import { TocThumb } from "@/components/blog/detail-blog-post/sidebar/toc-thumb";
import { useTableOfContents } from "@/hooks/useTableOfCotents";
import { cn, slugify } from "@/lib/utils";
import { AlignLeftIcon } from "lucide-react";
import Link from "next/link";
import {
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import scrollIntoView from "scroll-into-view-if-needed";

interface TableOfContentsProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional label for the table of contents */
  label?: string;
  /** Optional description for the table of contents */
  description?: string;
}

interface SvgData {
  path: string;
  width: number;
  height: number;
}

/**
 * TableOfContents component displays a navigation sidebar for blog posts
 * It shows all headings in the article and highlights the current section
 * Includes a visual progress indicator and smooth scrolling functionality
 */
export const TableOfContents = ({
  className,
  label = "On this page",
  description = "Navigate through the sections of this article",
  ...props
}: TableOfContentsProps) => {
  // Get the currently visible sections and all headings from the global state
  const visibleSections = useTableOfContents((state) => state.visibleSections);
  const allHeadings = useTableOfContents((state) => state.allHeadings);
  const setVisibleSections = useTableOfContents(
    (state) => state.setVisibleSections,
  );

  // Refs and state for managing the visual elements
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<SvgData>();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Process headings to add slugs for navigation
  const processedHeadings = useMemo(() => {
    return allHeadings.map((heading) => ({
      ...heading,
      slug: slugify(heading.text),
    }));
  }, [allHeadings]);

  // Initialize visible sections with the first heading when the component mounts
  useEffect(() => {
    if (!allHeadings[0]) return;

    if (allHeadings.length > 0 && visibleSections.length === 0) {
      const firstHeadingSlug = slugify(allHeadings[0].text);
      setVisibleSections([firstHeadingSlug]);
    }
  }, [allHeadings, visibleSections, setVisibleSections]);

  // Track scroll progress to show percentage completion
  useEffect(() => {
    const handleScroll = () => {
      const main = document.querySelector("main");
      if (!main) return;

      const scrollTop = main.scrollTop;
      const scrollHeight = main.scrollHeight - main.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const main = document.querySelector("main");
    if (main) {
      main.addEventListener("scroll", handleScroll);
      return () => main.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Calculate and update the SVG path for the visual indicator when container size changes
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    function onResize(): void {
      if (container.clientHeight === 0) return;

      const svgData = calculateSvgData(container, processedHeadings);
      setSvg(svgData);
    }

    const observer = new ResizeObserver(onResize);
    onResize();

    observer.observe(container);
    return () => observer.disconnect();
  }, [processedHeadings]);

  // Handle click on a heading to scroll to that section
  const handleClick = useCallback(
    (headingText: string) => {
      const slug = slugify(headingText);
      setVisibleSections([slug]);

      const element = document.getElementById(slug);
      if (element) {
        scrollIntoView(element, {
          behavior: "smooth",
          block: "start",
          scrollMode: "if-needed",
          boundary: document.querySelector("main") || undefined,
        });
      }
    },
    [setVisibleSections],
  );

  // Handle keyboard navigation for accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, headingText: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(headingText);
      }
    },
    [handleClick],
  );

  // Show empty state if no headings are available
  if (allHeadings.length === 0) return <TocItemsEmpty />;

  return (
    <nav
      ref={containerRef}
      className={cn("relative", className)}
      {...props}
      aria-label={label}
      aria-describedby="toc-description"
    >
      {/* Header section with label and progress indicator */}
      <div className="flex items-center justify-between">
        <p className="text-foreground -ml-0.5 flex items-center gap-1.5 text-sm font-medium">
          <AlignLeftIcon className="size-4" aria-hidden="true" />
          {label}
        </p>
      </div>
      <p id="toc-description" className="sr-only">
        {description}
      </p>

      {/* Visual indicator showing the current section */}
      {svg && (
        <div
          className="bg-border absolute start-0 top-0 rtl:-scale-x-100"
          style={{
            width: svg.width,
            height: svg.height,
            maskImage: `url("data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`,
            )}")`,
          }}
        >
          <TocThumb
            containerRef={containerRef as React.RefObject<HTMLDivElement>}
            className="bg-foreground mt-(--fd-top) h-(--fd-height) transition-all"
          />
        </div>
      )}

      {/* List of headings with proper indentation */}
      <div className="mt-4 grid gap-3">
        {processedHeadings.map((heading) => {
          const isVisible = visibleSections.includes(heading.slug);
          const indentLevel = heading.level - 2;

          return (
            <Link
              key={heading.text}
              data-active={isVisible ? "true" : "false"}
              href={`#${heading.slug}`}
              onClick={() => handleClick(heading.text)}
              onKeyDown={(e) => handleKeyDown(e, heading.text)}
              className={cn(
                "group relative transition-colors",
                "hover:text-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                isVisible ? "text-foreground" : "text-muted-foreground",
              )}
              style={{ paddingLeft: `${getItemOffset(heading.level)}px` }}
              role="link"
              tabIndex={0}
              aria-current={isVisible ? "location" : undefined}
            >
              <p className="text-sm transition-colors">{heading.text}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

/**
 * Calculates the SVG path data for the visual indicator
 * Creates a line connecting all heading elements
 */
function calculateSvgData(
  container: HTMLElement,
  headings: Array<{ text: string; level: number }>,
): SvgData {
  let w = 0,
    h = 0;
  const d: string[] = [];

  for (let i = 0; i < headings.length; i++) {
    const element: HTMLElement | null = container.querySelector(
      `a[href="#${slugify(headings[i].text)}"]`,
    );
    if (!element) continue;

    const styles = getComputedStyle(element);
    const offset = getLineOffset(headings[i].level) + 1,
      top = element.offsetTop + parseFloat(styles.paddingTop),
      bottom =
        element.offsetTop +
        element.clientHeight -
        parseFloat(styles.paddingBottom);

    w = Math.max(offset, w);
    h = Math.max(h, bottom);

    d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
    d.push(`L${offset} ${bottom}`);
  }

  return {
    path: d.join(" "),
    width: w + 1,
    height: h,
  };
}

/**
 * Returns the left padding offset for a heading based on its level
 * Creates visual hierarchy in the table of contents
 */
function getItemOffset(depth: number): number {
  if (depth <= 2) return 14;
  if (depth === 3) return 26;
  return 36;
}

/**
 * Returns the line offset for the visual indicator based on heading depth
 * Adjusts the position of the connecting line
 */
function getLineOffset(depth: number): number {
  return depth >= 3 ? 10 : 0;
}
