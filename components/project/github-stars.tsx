"use client";

import { getGitHubStars } from "@/actions/github";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AndroidIcon from "@/icons/android-icon";
import { Separator } from "@radix-ui/react-separator";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FC, Suspense } from "react";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill as NextJsIcon } from "react-icons/ri";

interface Props {
  url: string;
  liveUrl: string;
  repo: string;
  className?: string;
  category?: string;
}

const GithubStars: FC<Props> = ({
  repo,
  url,
  liveUrl,
  className,
  category,
}) => {
  const {
    data: stars,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["github-stars", repo],
    queryFn: async () => {
      try {
        const data = await getGitHubStars(repo);
        return data.stars;
      } catch (err) {
        console.error("Failed to fetch GitHub stars:", err);
        return 0;
      }
    },
    enabled: !!repo,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (error) {
    return (
      <div className="text-sm text-red-500" role="alert">
        Failed to load GitHub stars
      </div>
    );
  }

  return (
    <div
      className="group flex flex-col items-center justify-end"
      role="region"
      aria-label="GitHub repository information"
    >
      <Suspense fallback={<Skeleton className="h-4 w-20" />}>
        <div
          className="flex items-center gap-x-2"
          role="status"
          aria-live="polite"
        >
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-foreground"
            aria-label={`${stars} ${stars === 1 ? "Star" : "Stars"} on GitHub`}
          >
            <Button
              variant="ghost"
              className="group text-foreground"
              aria-label={`${stars} ${stars === 1 ? "Star" : "Stars"} on GitHub`}
              disabled={isLoading}
            >
              <FaGithub className="text-foreground" aria-hidden="true" />
              {isLoading ? (
                <Skeleton className="ml-2 h-4 w-8" />
              ) : (
                `${stars} ${stars === 1 ? "Star" : "Stars"}`
              )}
            </Button>
          </Link>
          <Separator
            orientation="vertical"
            className="bg-border h-4 w-[1px]"
            aria-hidden="true"
          />
          {category === "Next.js" && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground"
              aria-label="Next.js project"
            >
              <Button
                variant="ghost"
                className="text-foreground"
                aria-label="Next.js project"
              >
                <NextJsIcon
                  className="text-foreground size-4"
                  aria-hidden="true"
                />{" "}
                {category}
              </Button>
            </Link>
          )}
          {category === "Android" && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground"
              aria-label="Android project"
            >
              <Button
                variant="ghost"
                className="text-foreground"
                aria-label="Android project"
              >
                <AndroidIcon
                  className="text-foreground size-4"
                  aria-hidden="true"
                />{" "}
                {category}
              </Button>
            </Link>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default GithubStars;
