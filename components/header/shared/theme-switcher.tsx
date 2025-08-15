"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CheckIcon, Moon, Sun, Monitor as SystemIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

interface ThemeSwitcherProps {
  variant?: "dropdown" | "toggle";
  className?: string;
}

export function ThemeSwitcher({
  variant = "dropdown",
  className,
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "group bg-background animate-pulse rounded-full",
          className,
        )}
        aria-label="Loading theme"
      >
        <div className="bg-accent size-5 rounded-full" />
      </Button>
    );
  }

  if (variant === "toggle") {
    return (
      <Tabs
        defaultValue={theme}
        className="w-full"
        onValueChange={(value: string) => setTheme(value)}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="light" className="gap-2">
            <Sun className="size-4" />
            Light
          </TabsTrigger>
          <TabsTrigger value="dark" className="gap-2">
            <Moon className="size-4" />
            Dark
          </TabsTrigger>
          <TabsTrigger value="system" className="gap-2">
            <SystemIcon className="size-4" />
            System
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("group rounded-full", className)}
          aria-label="Open theme menu"
        >
          <Sun className="text-foreground group-hover:text-accent-foreground size-5 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
          <Moon className="text-foreground group-hover:text-accent-foreground absolute size-5 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="group flex items-center gap-2"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setTheme("light");
            }
          }}
        >
          <Sun className="text-foreground group-hover:text-accent-foreground size-4" />
          Light
          {theme === "light" && (
            <CheckIcon className="text-muted-foreground ml-auto size-4" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="group flex items-center gap-2"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setTheme("dark");
            }
          }}
        >
          <Moon className="text-foreground group-hover:text-accent-foreground size-4" />
          Dark
          {theme === "dark" && (
            <CheckIcon className="text-muted-foreground ml-auto size-4" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="group flex items-center gap-2"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setTheme("system");
            }
          }}
        >
          <SystemIcon className="text-foreground group-hover:text-accent-foreground size-4" />
          System
          {theme === "system" && (
            <CheckIcon className="text-muted-foreground ml-auto size-4" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
