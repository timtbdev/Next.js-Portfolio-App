import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { TweetErrorFallback } from "@/components/shoutouts/tweet-error-fallback";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import { Button } from "@/components/ui/button";
import MainTitle from "@/components/ui/main-title";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FaSquareXTwitter as XIcon } from "react-icons/fa6";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

// Optimize tweet caching with better error handling and revalidation
const getTweet = unstable_cache(
  async (id: string) => {
    try {
      const tweet = await _getTweet(id);
      if (!tweet) {
        console.warn(`Tweet ${id} not found`);
        return null;
      }
      return tweet;
    } catch (error) {
      console.error(`Failed to fetch tweet ${id}:`, error);
      return null;
    }
  },
  ["tweet"],
  { revalidate: 3600 * 24 }, // Cache for 24 hours
);

// Separate tweet component for better organization
const TweetPage = async ({ id }: { id: string }) => {
  const tweet = await getTweet(id);
  if (!tweet) {
    return <TweetNotFound />;
  }
  return <EmbeddedTweet tweet={tweet} />;
};

// Validate SEO configuration
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

const PAGE = "Shoutouts";
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

export const metadata: Metadata = {
  title: page.title,
  applicationName: page.title,
  description: page.description,
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

// Predefined tweet IDs for better maintainability
const TWEET_IDS = [
  "1930094628885471387",
  "1916331166984245599",
  "1932667733964886198",
  "1937084213175456041",
  "1949919177437003788",
] as const;

export default async function ShoutoutsPage() {
  const tweetText = encodeURIComponent("Someone hire Tim! @hire_tim_com");
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  return (
    <div>
      <Header />
      <Heading variant="default">
        <MotionEffect
          fade
          blur="10px"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <MainTitle
            title={page.page}
            description={page.description}
            className="mx-auto mt-6 max-w-3xl px-4 sm:px-6 lg:px-8"
          />
          <div className="mt-4 mb-10 flex justify-center">
            <Button asChild variant="outline">
              <Link href={tweetUrl} target="_blank" rel="noopener noreferrer">
                <XIcon className="mr-2 size-6" />
                Give a Shoutout
              </Link>
            </Button>
          </div>
        </MotionEffect>
      </Heading>

      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <main className="mx-auto max-w-7xl items-center justify-center text-center">
          <div className="mx-auto mt-4 flex flex-col items-center justify-center px-4">
            {TWEET_IDS.map((id, index) => (
              <MotionEffect
                key={id}
                fade
                zoom
                inView
                delay={0.3 + index * 0.1}
                className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center"
              >
                <ErrorBoundary FallbackComponent={TweetErrorFallback}>
                  <Suspense fallback={<TweetSkeleton />}>
                    <TweetPage id={id} />
                  </Suspense>
                </ErrorBoundary>
              </MotionEffect>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
