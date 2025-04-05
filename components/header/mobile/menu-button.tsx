"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navigationLinks from "@/config/navigation-links";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { FC, memo, useState } from "react";
import SubNavigationItem from "./sub-navigation-item";

interface Props {
  currentPath: string;
  className?: string;
}

const extractActivePath = (path: string): string => {
  return path.split("/")[1] ? `/${path.split("/")[1]}` : path;
};

const MenuButton: FC<Props> = memo(({ currentPath, className }) => {
  const activePath = extractActivePath(currentPath);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={toggleSheet}
          className="hover:bg-accent flex rounded-md p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="z-1 mt-10">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>

        <div className="bg-background">
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <Accordion type="single" collapsible>
              {navigationLinks.map((menuItem) => {
                const isActive = activePath === menuItem.href;
                return menuItem.subNavigationLinks ? (
                  <AccordionItem key={menuItem.href} value={menuItem.href}>
                    <AccordionTrigger
                      className={cn(
                        "group inline-flex w-full gap-2 px-6 py-4",
                        {
                          "bg-accent/50 shadow-xs": isActive,
                          "hover:bg-accent hover:shadow-xs": !isActive,
                        },
                      )}
                    >
                      <span className="text-foreground group-hover:text-accent-foreground">
                        {menuItem.label}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="divide-border divide-y">
                        {menuItem.subNavigationLinks.map((subItem) => (
                          <li key={subItem.href}>
                            <SubNavigationItem
                              href={subItem.href}
                              onClick={toggleSheet}
                              label={subItem.label ?? ""}
                              description={subItem.description ?? ""}
                              icon={
                                subItem.icon
                                  ? React.createElement(subItem.icon)
                                  : null
                              }
                              className="group flex w-full gap-2 px-6 py-4"
                            />
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <li key={menuItem.href} className="list-none">
                    <Link
                      href={menuItem.href}
                      className={cn(
                        "group inline-flex w-full gap-2 px-6 py-4",
                        {
                          "bg-accent/50 shadow-xs": isActive,
                          "hover:bg-accent hover:shadow-xs": !isActive,
                        },
                      )}
                      onClick={toggleSheet}
                    >
                      <span className="text-foreground group-hover:text-accent-foreground font-medium">
                        {menuItem.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </Accordion>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MenuButton.displayName = "MenuButton";

export default MenuButton;
