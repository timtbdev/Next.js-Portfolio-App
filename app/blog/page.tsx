import SingleBlogPostLoading from "@/components/blog/single-blog-post/loading";
import SingleBlogPost from "@/components/blog/single-blog-post/main";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import MainTitle from "@/components/ui/main-title";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { allPosts } from "content-collections";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "Blog";

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

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    params: { slug: post._meta.path },
  }));
}

export default async function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <Fragment>
      <Header />
      <Heading variant="default">
        <MainTitle
          title={page.page}
          description={page.description}
          className="mx-auto mt-6 mb-4 max-w-3xl px-4 sm:px-6 lg:px-8"
        />
      </Heading>
      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-3 py-10 md:grid-cols-3 lg:px-4 xl:px-0">
          {posts?.map((post, index) => (
            <Suspense key={index} fallback={<SingleBlogPostLoading />}>
              <SingleBlogPost key={index} post={post} />
            </Suspense>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
