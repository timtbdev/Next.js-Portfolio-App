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
import { EllipsisVerticalIcon as MoreMenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import SearchButton from "../shared/search";
import { ThemeSwitcher } from "../shared/theme-switcher";

const MoreMenuButton = () => {
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              <SearchButton
                onOpenChange={() => {
                  setIsDrawerOpen(false);
                }}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Theme</h3>
              <ThemeSwitcher variant="toggle" />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" aria-label="Close settings menu">
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
