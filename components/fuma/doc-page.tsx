import type { TableOfContents } from "fumadocs-core/server";
import { AnchorProvider, type AnchorProviderProps } from "fumadocs-core/toc";
import {
  Toc,
  TOCItems,
  TOCScrollArea,
  type TOCProps,
} from "fumadocs-ui/components/layout/toc";
import ClerkTOCItems from "fumadocs-ui/components/layout/toc-clerk";
import { I18nLabel } from "fumadocs-ui/contexts/i18n";
import { slot } from "fumadocs-ui/layouts/shared";
import { cn } from "fumadocs-ui/utils/cn";
import { Text } from "lucide-react";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import {
  PageBody,
  TocPopover,
  TocPopoverContent,
  TocPopoverTrigger,
} from "./doc-page-client";

// Define types for table of contents configuration
type TableOfContentOptions = Omit<TOCProps, "items" | "children"> &
  Pick<AnchorProviderProps, "single"> & {
    enabled: boolean; // Whether the TOC is enabled
    component: ReactNode; // Custom component to replace default TOC

    /**
     * Style variant for the table of contents
     * @defaultValue 'normal'
     */
    style?: "normal" | "clerk";
  };

// Define types for popover table of contents configuration
type TableOfContentPopoverOptions = Omit<TableOfContentOptions, "single">;

// Main props interface for the DocsPage component
export interface DocsPageProps {
  toc?: TableOfContents; // Table of contents data

  /**
   * Whether to extend the page to fill all available space
   * @defaultValue false
   */
  full?: boolean;

  tableOfContent?: Partial<TableOfContentOptions>; // TOC configuration
  tableOfContentPopover?: Partial<TableOfContentPopoverOptions>; // Popover TOC configuration

  lastUpdate?: Date | string | number; // Last update timestamp

  container?: HTMLAttributes<HTMLDivElement>; // Container element props
  article?: HTMLAttributes<HTMLElement>; // Article element props
  children: ReactNode; // Page content
}

/**
 * Main documentation page component that handles layout and table of contents
 * @param props - Documentation page configuration
 */
export function DocsPage({
  toc = [],
  full = false,
  tableOfContentPopover: {
    enabled: tocPopoverEnabled,
    component: tocPopoverReplace,
    ...tocPopoverOptions
  } = {},
  tableOfContent: {
    enabled: tocEnabled,
    component: tocReplace,
    ...tocOptions
  } = {},
  ...props
}: DocsPageProps) {
  // Determine if TOC is required based on content or custom components
  const isTocRequired =
    toc.length > 0 ||
    tocOptions.footer !== undefined ||
    tocOptions.header !== undefined;

  // Configure TOC visibility
  tocEnabled ??= !full && isTocRequired;
  tocPopoverEnabled ??=
    toc.length > 0 ||
    tocPopoverOptions.header !== undefined ||
    tocPopoverOptions.footer !== undefined;

  return (
    <AnchorProvider toc={toc} single={tocOptions.single}>
      {/* Main page body with container styling */}
      <PageBody
        {...props.container}
        className={cn(props.container?.className)}
        style={
          {
            "--fd-tocnav-height": !tocPopoverEnabled ? "0px" : undefined,
            ...props.container?.style,
          } as object
        }
      >
        {/* Table of contents popover for mobile/small screens */}
        {slot(
          { enabled: tocPopoverEnabled, component: tocPopoverReplace },
          <TocPopover className="h-10">
            <TocPopoverTrigger className="w-full" items={toc} />
            <TocPopoverContent>
              {tocPopoverOptions.header}
              <TOCScrollArea isMenu>
                {tocPopoverOptions.style === "clerk" ? (
                  <ClerkTOCItems items={toc} />
                ) : (
                  <TOCItems items={toc} />
                )}
              </TOCScrollArea>
              {tocPopoverOptions.footer}
            </TocPopoverContent>
          </TocPopover>,
          {
            items: toc,
            ...tocPopoverOptions,
          },
        )}
      </PageBody>

      {/* Sidebar table of contents for desktop/large screens */}
      {slot(
        { enabled: tocEnabled, component: tocReplace },
        <Toc>
          {tocOptions.header}
          <h3 className="text-fd-muted-foreground inline-flex items-center gap-1.5 text-sm">
            <Text className="size-4" />
            <I18nLabel label="toc" />
          </h3>
          <TOCScrollArea>
            {tocOptions.style === "clerk" ? (
              <ClerkTOCItems items={toc} />
            ) : (
              <TOCItems items={toc} />
            )}
          </TOCScrollArea>
          {tocOptions.footer}
        </Toc>,
        {
          items: toc,
          ...tocOptions,
        },
      )}
    </AnchorProvider>
  );
}

/**
 * Component for documentation content with typography styles
 * Wraps content in a div with prose styling
 */
export const DocsBody = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div ref={ref} {...props} className={cn("prose", props.className)}>
    {props.children}
  </div>
));

DocsBody.displayName = "DocsBody";
