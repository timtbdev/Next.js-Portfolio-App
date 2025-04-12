import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface TocThumbProps {
  containerRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

export function TocThumb({ containerRef, className }: TocThumbProps) {
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !thumbRef.current) return;

    const container = containerRef.current;
    const thumb = thumbRef.current;

    function updateThumb() {
      const activeLink = container.querySelector<HTMLAnchorElement>(
        'a[data-active="true"]',
      );
      if (!activeLink) return;

      const { top: containerTop } = container.getBoundingClientRect();
      const { top: linkTop, height: linkHeight } =
        activeLink.getBoundingClientRect();

      thumb.style.setProperty("--fd-top", `${linkTop - containerTop}px`);
      thumb.style.setProperty("--fd-height", `${linkHeight}px`);
    }

    const observer = new MutationObserver(updateThumb);
    observer.observe(container, { attributes: true, subtree: true });

    updateThumb();
    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div
      ref={thumbRef}
      className={cn(
        "absolute start-0 top-0 w-px transition-all duration-200",
        className,
      )}
    />
  );
}
