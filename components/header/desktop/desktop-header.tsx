import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SunIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import SearchButton from "../search";
import LogoButton from "./logo";
import NavigationAbout from "./navigations/about/navigation-about";
import NavigationBlog from "./navigations/blog/navigation-blog";
import NavigationProjects from "./navigations/projects/navigation-projects";

interface Props {
  activePath: string;
}

const DesktopHeader: FC<Props> = ({ activePath }) => {
  return (
    <NavigationMenu className="mx-auto w-full max-w-5xl">
      <div className="flex h-18 w-full items-center justify-between">
        <div className="flex flex-1 justify-start">
          <LogoButton />
        </div>
        <NavigationMenuList
          className="flex items-center gap-5"
          aria-label="Main navigation"
        >
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              aria-current={activePath === "/" ? "page" : undefined}
              className={cn(
                navigationMenuTriggerStyle(),
                activePath === "/" && "bg-accent",
                "text-md font-semibold text-neutral-700",
              )}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              aria-current={activePath === "/about" ? "page" : undefined}
              className={cn(
                activePath === "/about" && "bg-accent",
                "text-md cursor-pointer font-semibold text-neutral-700",
              )}
            >
              <Link href="/about">About</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationAbout />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              aria-current={activePath.startsWith("/blog") ? "page" : undefined}
              className={cn(
                activePath.startsWith("/blog") && "bg-accent",
                "text-md cursor-pointer font-semibold text-neutral-700",
              )}
            >
              <Link href="/blog">Blog</Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <NavigationBlog />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              aria-current={activePath === "/projects" ? "page" : undefined}
              className={cn(
                activePath === "/projects" && "bg-accent",
                "text-md cursor-pointer font-semibold text-neutral-700",
              )}
            >
              <Link href="/projects">Projects</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationProjects />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              aria-current={activePath === "/contact" ? "page" : undefined}
              className={cn(
                navigationMenuTriggerStyle(),
                activePath === "/contact" && "bg-accent",
                "text-md font-semibold text-neutral-700",
              )}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="flex flex-1 justify-end gap-2">
          <SearchButton />
          <Button variant="outline" size="icon" className="rounded-full">
            <SunIcon className="size-5 text-neutral-700" />
          </Button>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default DesktopHeader;
