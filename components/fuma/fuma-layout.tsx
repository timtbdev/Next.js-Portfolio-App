import type { PageTree } from "fumadocs-core/server";
import { StylesProvider, type PageStyles } from "fumadocs-ui/contexts/layout";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";
import { layoutVariables } from "fumadocs-ui/layouts/docs/shared";
import { type BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { cn } from "fumadocs-ui/utils/cn";
import { type HTMLAttributes, type ReactNode } from "react";

export interface DocsLayoutProps extends BaseLayoutProps {
  tree: PageTree.Root;

  /**
   * Props for the `div` container
   */
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function DocsLayout({
  i18n = false,
  children,
  ...props
}: DocsLayoutProps): ReactNode {
  const variables = cn(
    "[--fd-tocnav-height:36px] lg:[--fd-toc-width:286px] lg:[--fd-tocnav-height:0px]",
  );

  const pageStyles: PageStyles = {
    tocNav: cn("lg:hidden"),
    toc: cn("max-lg:hidden"),
  };

  return (
    <TreeContextProvider tree={props.tree}>
      <main
        id="nd-docs-layout"
        {...props.containerProps}
        className={cn(
          "flex flex-1 flex-row pe-(--fd-layout-offset)",
          variables,
          props.containerProps?.className,
        )}
        style={{
          ...layoutVariables,
          ...props.containerProps?.style,
        }}
      >
        <StylesProvider {...pageStyles}>{children}</StylesProvider>
      </main>
    </TreeContextProvider>
  );
}
