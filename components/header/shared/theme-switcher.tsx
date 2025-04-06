"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Moon, Sun, MonitorIcon as SystemIcon } from "lucide-react";
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
        className={cn("group animate-pulse rounded-full", className)}
        aria-label="Loading theme"
        disabled
      >
        <div className="bg-muted size-5 rounded-full" />
      </Button>
    );
  }

  if (variant === "toggle") {
    return (
      <Button
        variant="outline"
        size="icon"
        className={cn("group rounded-full", className)}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? (
          <Sun className="text-foreground group-hover:text-accent-foreground size-5" />
        ) : (
          <Moon className="text-foreground group-hover:text-accent-foreground size-5" />
        )}
      </Button>
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
        >
          <Sun className="text-foreground group-hover:text-accent-foreground size-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="group flex items-center gap-2"
        >
          <Moon className="text-foreground group-hover:text-accent-foreground size-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="group flex items-center gap-2"
        >
          <SystemIcon className="text-foreground group-hover:text-accent-foreground size-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
