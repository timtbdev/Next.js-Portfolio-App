import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import navigationLinks from "@/config/navigation-links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, memo, Suspense, useCallback } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Playlist from "../shared/playlist";
import SearchButton from "../shared/search";
import { ThemeSwitcher } from "../shared/theme-switcher";
import LogoButton from "./logo";
import NavigationAbout from "./navigations/about/navigation-about";
import NavigationBlog from "./navigations/blog/navigation-blog";
import NavigationProjects from "./navigations/projects/navigation-projects";

interface Props {
  activePath: string;
}

// Reusable styles
const navItemStyles = {
  base: "text-md font-semibold transition-colors duration-200",
  active: "bg-accent text-md font-semibold",
};

const NavigationContentFallback = () => (
  <div className="w-[540px] p-4">
    <Skeleton className="h-24 w-full" />
  </div>
);

const NavigationErrorFallback = () => (
  <div className="w-[540px] p-4 text-center text-sm text-red-500">
    Failed to load navigation content. Please try again.
  </div>
);

const DesktopHeader: FC<Props> = memo(({ activePath }) => {
  const isActive = useCallback(
    (path: string) => {
      if (path === "/") return activePath === "/";
      if (path === "/blog") return activePath.startsWith("/blog");
      return activePath === path;
    },
    [activePath],
  );

  const getNavItemClassName = useCallback(
    (path: string) =>
      cn(
        navigationMenuTriggerStyle(),
        isActive(path) ? navItemStyles.active : navItemStyles.base,
      ),
    [isActive],
  );

  const renderNavigationItem = useCallback(
    (link: (typeof navigationLinks)[0]) => {
      const isDropdown =
        link.subNavigationLinks && link.subNavigationLinks.length > 0;

      if (isDropdown) {
        return (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuTrigger
              aria-current={isActive(link.href) ? "page" : undefined}
              className={getNavItemClassName(link.href)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1"
                prefetch
              >
                {link.label}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ErrorBoundary FallbackComponent={NavigationErrorFallback}>
                <Suspense fallback={<NavigationContentFallback />}>
                  {link.label === "About" && <NavigationAbout />}
                  {link.label === "Blog" && <NavigationBlog />}
                  {link.label === "Projects" && <NavigationProjects />}
                </Suspense>
              </ErrorBoundary>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }

      return (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuLink
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={getNavItemClassName(link.href)}
          >
            <div className="flex items-center gap-1">{link.label}</div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      );
    },
    [isActive, getNavItemClassName],
  );

  return (
    <NavigationMenu className="mx-auto hidden w-full max-w-5xl md:block">
      <div className="flex h-18 w-full items-center justify-between">
        <div className="flex flex-1 justify-start">
          <LogoButton />
        </div>
        <NavigationMenuList
          className="flex items-center gap-5"
          aria-label="Main navigation"
        >
          {navigationLinks.map(renderNavigationItem)}
        </NavigationMenuList>

        <div className="flex flex-1 justify-end gap-2">
          <SearchButton />
          <ThemeSwitcher />
          <Playlist />
        </div>
      </div>
    </NavigationMenu>
  );
});

DesktopHeader.displayName = "DesktopHeader";

export default DesktopHeader;
