import BlogPostDetailHeading from "@/components/blog/detail-blog-post/heading/blog-post-heading";
import Footer from "@/components/footer/main";
import { DocsLayout } from "@/components/fuma/fuma-layout";
import { DocsBody, DocsPage } from "@/components/fuma/fuma-page";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { source } from "@/lib/source";
import { getBaseUrl } from "@/lib/utils";
import { getMDXComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import readingTime from "reading-time";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // const post = allPosts.find((post) => post._meta.path === slug);
  const post = source.getPage([slug]);
  if (!post) notFound();
  if (!post) {
    return notFound();
  }
  return {
    title: post.data.title || "Blog Post",
    description:
      post.data.description.slice(0, 100) + ("..." as string) ||
      "Read this insightful blog post.",
    keywords: post.data.seo?.join(", ") || "blog, mdx, next.js",
    alternates: {
      canonical: getBaseUrl(`blog/post/${slug}`),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.data.title,
      description: post.data.description.slice(0, 100) + ("..." as string),
      images: [
        {
          url: post.data.image,
          width: 1200,
          height: 630,
          alt: post.data.title,
          type: "image/png",
        },
      ],
      type: "article",
      url: getBaseUrl(`blog/post/${slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.description.slice(0, 100) + ("..." as string),
      images: post.data.image ? [post.data.image] : undefined,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = source.getPage([slug]);
  if (!post) {
    return notFound();
  }

  return (
    <Fragment>
      <Header showProgressBar={true} />
      <Heading variant="blog">
        <MotionEffect
          fade
          blur="10px"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <BlogPostDetailHeading
            title={post.data.title}
            description={post.data.description}
            date={post.data.date}
            authorImage={post.data.authorAvatar}
            authorName={post.data.author}
            category={post.data.category}
            readTime={
              readingTime(post.data.content, { wordsPerMinute: 100 }).minutes
            }
            imageUrl={post.data.image}
          />
        </MotionEffect>
      </Heading>
      <div className="border-border bg-background relative border-t">
        <div className="mx-auto w-full max-w-5xl">
          <MotionEffect
            fade
            blur="10px"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            inView
          >
            <DocsLayout tree={source.pageTree}>
              <DocsPage toc={post.data.toc}>
                <DocsBody>
                  <MDXContent
                    code={post.data.body}
                    components={getMDXComponents()}
                  />
                </DocsBody>
              </DocsPage>
            </DocsLayout>
          </MotionEffect>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
