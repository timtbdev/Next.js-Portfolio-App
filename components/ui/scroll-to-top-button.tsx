"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpIcon as UpArrowIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scrollIntoView(document.body, {
      behavior: "smooth",
      block: "start",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className="group bg-background border-border fixed right-5 bottom-5 size-10 rounded-full border p-2.5 shadow-xs"
      aria-label="Scroll to top"
    >
      <UpArrowIcon className="text-foreground group-hover:text-accent-foreground size-5" />
    </Button>
  );
};

export default ScrollToTopButton;
