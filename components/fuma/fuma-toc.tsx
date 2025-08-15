"use client";

import type { TOCItemType } from "fumadocs-core/server";
import * as Primitive from "fumadocs-core/toc";
import { TocThumb } from "fumadocs-ui/components/layout/toc-thumb";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { usePageStyles } from "fumadocs-ui/contexts/layout";
import { cn } from "fumadocs-ui/utils/cn";
import {
  useRef,
  type ComponentProps,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export interface TOCProps {
  /**
   * Custom content in TOC container, before the main TOC
   */
  header?: ReactNode;

  /**
   * Custom content in TOC container, after the main TOC
   */
  footer?: ReactNode;

  children: ReactNode;
}

export function Toc(props: HTMLAttributes<HTMLDivElement>) {
  const { toc } = usePageStyles();

  return (
    <div
      id="nd-toc"
      {...props}
      className={cn(
        "sticky top-[calc(var(--fd-banner-height)+var(--fd-nav-height))] h-(--fd-toc-height) pt-12 pb-2",
        toc,
        props.className,
      )}
      style={
        {
          ...props.style,
          "--fd-toc-height":
            "calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))",
        } as object
      }
    >
      <div className="flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4">
        {props.children}
      </div>
    </div>
  );
}

export function TocItemsEmpty() {
  const { text } = useI18n();

  return (
    <div className="bg-fd-card text-fd-muted-foreground rounded-lg border p-3 text-xs">
      {text.tocNoHeadings}
    </div>
  );
}

export function TOCScrollArea(props: ComponentProps<"div">) {
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      ref={viewRef}
      className={cn(
        "relative ms-px min-h-0 overflow-auto [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3 text-sm [scrollbar-width:none]",
        props.className,
      )}
    >
      <Primitive.ScrollProvider containerRef={viewRef}>
        {props.children}
      </Primitive.ScrollProvider>
    </div>
  );
}

export function TOCItems({ items }: { items: TOCItemType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return <TocItemsEmpty />;

  return (
    <>
      <TocThumb
        containerRef={containerRef}
        className="bg-fd-primary absolute top-(--fd-top) h-(--fd-height) w-px transition-all"
      />
      <div
        ref={containerRef}
        className="border-fd-foreground/10 flex flex-col border-s"
      >
        {items.map((item) => (
          <TOCItem key={item.url} item={item} />
        ))}
      </div>
    </>
  );
}

function TOCItem({ item }: { item: TOCItemType }) {
  return (
    <Primitive.TOCItem
      href={item.url}
      className={cn(
        "prose text-fd-muted-foreground data-[active=true]:text-fd-primary py-1.5 text-sm [overflow-wrap:anywhere] transition-colors first:pt-0 last:pb-0",
        item.depth <= 2 && "ps-3",
        item.depth === 3 && "ps-6",
        item.depth >= 4 && "ps-8",
      )}
    >
      {item.title}
    </Primitive.TOCItem>
  );
}
