"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  CircleXIcon,
  EllipsisVerticalIcon as MoreMenuIcon,
  SearchIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../shared/theme-switcher";

const MoreMenuButton = () => {
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearchClick = () => {
    // Dispatch a custom event to trigger the search dialog
    window.dispatchEvent(new CustomEvent("openSearchDialog"));
    setIsDrawerOpen(false);
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="group hover:bg-accent animate-pulse rounded-full"
        aria-label="Loading settings"
        disabled
      >
        <div className="bg-muted size-6 rounded-full" />
      </Button>
    );
  }

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group hover:bg-accent rounded-full"
          aria-label="Open settings menu"
          aria-expanded={isDrawerOpen}
          aria-haspopup="dialog"
        >
          <MoreMenuIcon className="text-foreground group-hover:text-accent-foreground size-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerDescription>Search and theme settings</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-6 p-4">
            <div className="flex items-center justify-center space-x-2">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  aria-label="Search"
                  className="group text-foreground hover:text-accent-foreground w-full gap-2"
                  onClick={handleSearchClick}
                >
                  <SearchIcon className="size-4" />
                  Search
                </Button>
              </DrawerClose>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Theme</h3>
              <ThemeSwitcher variant="toggle" />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" aria-label="Close settings menu">
                <CircleXIcon className="size-4" />
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MoreMenuButton;
