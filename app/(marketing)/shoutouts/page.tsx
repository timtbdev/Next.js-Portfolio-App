import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
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
import { FaSquareXTwitter as XIcon } from "react-icons/fa6";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

const getTweet = unstable_cache(
  async (id: string) => {
    try {
      return await _getTweet(id);
    } catch (error) {
      console.error(`Failed to fetch tweet ${id}:`, error);
      return null;
    }
  },
  ["tweet"],
  { revalidate: 3600 * 24 },
);

const TweetPage = async ({ id }: { id: string }) => {
  const tweet = await getTweet(id);
  if (!tweet) {
    return <TweetNotFound />;
  }
  return <EmbeddedTweet tweet={tweet} />;
};

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "Shoutout";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

// Configure comprehensive metadata for SEO and social sharing
// This includes all necessary meta tags for search engines and social media platforms
export const metadata: Metadata = {
  // Basic metadata
  title: page.title,
  applicationName: page.title,
  description: page.description,

  // URL configurations for canonical links and RSS feed
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

export default async function ShoutoutPage() {
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
          <div className="mx-auto mt-4 flex w-full flex-col items-center justify-center">
            <Suspense fallback={<TweetSkeleton />}>
              <TweetPage id="1930094628885471387" />
            </Suspense>
            <Suspense fallback={<TweetSkeleton />}>
              <TweetPage id="1916331166984245599" />
            </Suspense>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
