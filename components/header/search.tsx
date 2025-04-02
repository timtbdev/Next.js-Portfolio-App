"use client";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import categories from "@/config/category";
import navigationLinks from "@/config/navigation-links";
import { useDebounce } from "@/hooks/useDebounce";
import { highlightMatches, renderMarkdownContent } from "@/lib/search";
import { cn } from "@/lib/utils";
import { PostType } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const queryClient = useQueryClient();
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 150);

  const prevResultsRef = useRef<any>([]);

  const {
    data: results,
    isRefetching,
    isLoading,
    error: queryError,
  } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: async () => {
      if (!debouncedSearchTerm) return [];
      try {
        const res = await fetch(`/api/search?query=${debouncedSearchTerm}`);
        if (!res.ok) {
          throw new Error("Search request failed");
        }
        const newResults: PostType[] = await res.json();
        prevResultsRef.current = newResults;

        // Add to search history if not empty
        if (newResults.length > 0) {
          setSearchHistory((prev) => {
            const newHistory = [
              debouncedSearchTerm,
              ...prev.filter((term) => term !== debouncedSearchTerm),
            ];
            return newHistory.slice(0, 5); // Keep only last 5 searches
          });
        }

        return newResults;
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        return [];
      }
    },
    initialData: [],
    enabled: debouncedSearchTerm.length > 0,
    placeholderData: () => prevResultsRef.current,
  });

  const displayedResults = isRefetching ? prevResultsRef.current : results;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex < (results?.length ?? 0) - 1 ? prevIndex + 1 : prevIndex,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results?.[selectedIndex]?.data) {
          handleResultClick(results[selectedIndex].fileName);
        }
        break;
      case "Escape":
        e.preventDefault();
        closeSearch();
        break;
      case "Tab":
        if (selectedIndex >= 0 && results?.[selectedIndex]?.data) {
          e.preventDefault();
          handleResultClick(results[selectedIndex].fileName);
        }
        break;
    }
  };

  const handleResultClick = (slug: string) => {
    router.push(`/blog/post/${slug}`);
    closeSearch();
  };

  const closeSearch = () => {
    setSearchTerm("");
    setIsOpen(false);
    setSelectedIndex(-1);
    setError(null);
  };

  useEffect(() => {
    if (isOpen && resultsRef.current) {
      const selectedElement = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
      >
        <SearchIcon className="size-5 text-neutral-700" />
      </Button>

      <CommandDialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (open === false) {
            queryClient.removeQueries({
              queryKey: ["search", debouncedSearchTerm],
            });
            setSearchTerm("");
            setSelectedIndex(-1);
            setError(null);
          }
        }}
      >
        <CommandInput
          ref={inputRef}
          value={searchTerm ?? ""}
          onValueChange={setSearchTerm}
          onKeyDown={handleKeyDown}
          placeholder="Search blog posts..."
          aria-label="Search blog posts"
        />
        <CommandList>
          {isLoading && (
            <div className="flex items-center justify-center p-4">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-neutral-700" />
            </div>
          )}

          {error && <div className="p-4 text-sm text-red-500">{error}</div>}

          {!isLoading && !error && (
            <>
              <CommandEmpty>No results found.</CommandEmpty>

              {searchHistory.length > 0 && !searchTerm && (
                <CommandGroup heading="Recent Searches">
                  {searchHistory.map((term, index) => (
                    <CommandItem
                      key={index}
                      value={term}
                      onSelect={() => setSearchTerm(term)}
                      className="flex items-center gap-2"
                    >
                      <SearchIcon className="size-4 text-neutral-700" />
                      {term}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {displayedResults?.length > 0 && (
                <CommandGroup heading="Search Results">
                  {displayedResults.map((result: PostType, index: number) => (
                    <CommandItem
                      key={index}
                      value={result.fileName}
                      onSelect={() => handleResultClick(result.fileName)}
                      className={cn(
                        "mt-2 cursor-pointer rounded-md px-4 py-5",
                        index === selectedIndex && "bg-neutral-100",
                        index !== selectedIndex && "hover:bg-neutral-100",
                      )}
                      aria-selected={index === selectedIndex}
                    >
                      <div>
                        <h3
                          className={cn(
                            "text-lg font-semibold text-neutral-800",
                            {
                              "text-neutral-700": index === selectedIndex,
                            },
                          )}
                        >
                          {highlightMatches(result.fileName || "", searchTerm)}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {highlightMatches(
                            result.data?.title || "",
                            searchTerm,
                          )}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                          {result.content &&
                            renderMarkdownContent({
                              content: result.content,
                            }).map((element, index) =>
                              typeof element === "string" ? (
                                highlightMatches(element, searchTerm)
                              ) : (
                                <span key={index}>{element}</span>
                              ),
                            )}
                        </p>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              <CommandGroup heading="Blog Categories">
                {categories.map((category) => (
                  <CommandItem
                    key={category.slug}
                    value={category.name}
                    onSelect={() =>
                      router.push(`/blog/category/${category.slug}`)
                    }
                    className="flex items-center gap-2"
                  >
                    {category.icon && (
                      <category.icon className="size-4 text-neutral-700 group-hover:text-neutral-900" />
                    )}
                    {category.name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Navigation links">
                {navigationLinks.map((link) => (
                  <CommandItem
                    key={link.href}
                    value={link.label}
                    onSelect={() => router.push(link.href)}
                    className="flex items-center gap-2"
                  >
                    {link.icon && (
                      <link.icon className="size-4 text-neutral-700 group-hover:text-neutral-900" />
                    )}
                    {link.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
