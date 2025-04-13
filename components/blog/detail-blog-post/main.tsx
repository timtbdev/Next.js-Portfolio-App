import { allPosts } from "@/.content-collections/generated";
import { slugify } from "@/lib/utils";
import { Heading } from "@/types";
import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ActiveSectionObserver } from "./sidebar/active-section-observer";
import Banner from "./sidebar/banner";
import { TableOfContents } from "./sidebar/table-of-contents";

interface Props {
  post: any;
}

const DetailBlogPost: FC<Props> = ({ post }) => {
  const { title, category, image, mdx, author, authorAvatar } = post;
  // Get 2 related posts from the same category
  const relatedPosts = allPosts;
  const headings = post!.headings as Heading[];

  const sections = headings.map((heading, i) => {
    return {
      id: i,
      title: heading.text,
      offsetRem: undefined,
    };
  });

  return (
    <div className="relative">
      <div className="bg-background absolute top-18 h-[calc(100%-13rem)] w-full"></div>
      <div className="mx-auto grid w-full max-w-screen-lg grid-cols-4 gap-5 px-0 pt-10 lg:gap-10 lg:px-4 xl:px-0">
        <div className="sm:border-border relative col-span-4 mb-10 sm:rounded-t-xl sm:border md:col-span-3">
          <div className="bg-background sm:rounded-t-xl">
            <Image
              alt={title}
              draggable={false}
              width={2282}
              height={1198}
              decoding="async"
              data-nimg="1"
              className="blur-0 aspect-[1200/630] overflow-hidden object-cover sm:rounded-t-xl"
              src={image}
            />
            <ActiveSectionObserver headings={headings}>
              <div className="prose max-w-2xl overflow-hidden px-6 pt-4 pb-8 sm:px-8 sm:pt-6 sm:pb-12">
                <MDXContent
                  components={{
                    Image: ({ src, alt, width, height }) => (
                      <div className="relative h-full w-full">
                        <Image
                          src={src}
                          alt={alt || ""}
                          width={width ?? 800}
                          height={height ?? 400}
                          className="h-full w-full object-cover"
                          quality={95}
                        />
                      </div>
                    ),
                    Frame: ({ children }) => (
                      <div className="ring-border bg-background my-8 inline-block h-full w-full rounded-xl p-2 ring-1 ring-inset lg:rounded-2xl lg:p-3">
                        <div className="h-full w-full overflow-hidden rounded-lg">
                          {children}
                        </div>
                      </div>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground text-base/7">
                        {children}
                      </p>
                    ),
                    strong: ({ children, ...props }) => {
                      return (
                        <b
                          className="text-muted-light font-semibold"
                          {...props}
                        >
                          {children}
                        </b>
                      );
                    },
                    hr: () => (
                      <div className="py-6">
                        <hr className="bg-border h-0.5 border-none" />
                      </div>
                    ),
                    code: (props) => {
                      return (
                        <code className="text-brand-400 bg-border rounded px-1.5 py-0.5 font-mono">
                          {props.children}
                        </code>
                      );
                    },
                    a: ({ children, ...props }) => {
                      return (
                        <Link
                          className="text-muted-light inline font-medium underline underline-offset-4"
                          href={props.href ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        >
                          {children}
                        </Link>
                      );
                    },
                    ul: ({ children }) => (
                      <ul className="text-muted-foreground list-inside list-disc space-y-2">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="text-muted-foreground ml-5 list-decimal space-y-8">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="space-y-6 pl-1 text-base/7">{children}</li>
                    ),
                    h1: ({ children }) => {
                      const element = sections.find(
                        (entry) => entry.title === children?.toString(),
                      );

                      if (!element) {
                        return null;
                      }

                      const slug = slugify(element.title.toLowerCase());

                      return (
                        <h1
                          id={slug}
                          className="text-muted-light relative scroll-mt-44 text-4xl font-medium tracking-tight lg:scroll-mt-32"
                        >
                          {children}
                        </h1>
                      );
                    },
                    h2: ({ children }) => {
                      const element = sections.find(
                        (entry) => entry.title === children?.toString(),
                      );

                      if (!element) {
                        return null;
                      }

                      const slug = slugify(element.title.toLowerCase());

                      return (
                        <h2
                          id={slug}
                          className="text-muted-light relative scroll-mt-44 text-3xl font-medium tracking-tight lg:scroll-mt-32"
                        >
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ children }) => {
                      const element = sections.find(
                        (entry) => entry.title === children?.toString(),
                      );

                      if (!element) {
                        return null;
                      }

                      const slug = slugify(element.title.toLowerCase());

                      return (
                        <h3
                          id={slug}
                          className="text-muted-light relative scroll-mt-44 text-xl font-medium tracking-tight lg:scroll-mt-32"
                        >
                          {children}
                        </h3>
                      );
                    },
                  }}
                  code={post.mdx}
                  className="space-y-6"
                />
              </div>
            </ActiveSectionObserver>
          </div>
          <div className="border-border bg-background border-t to-transparent p-10 backdrop-blur-lg">
            <div className="flex flex-col gap-y-4">
              <p className="font-display py-2 text-xl font-medium">Read more</p>
              <ul className="flex flex-col gap-y-6">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost._meta.path}>
                    <Link
                      className="group flex flex-col items-center gap-4 sm:flex-row"
                      href={`/blog/post/${relatedPost._meta.path}`}
                    >
                      <Image
                        alt={relatedPost.title}
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        data-nimg="1"
                        className="blur-0 border-border aspect-video w-full rounded-lg border sm:w-[200px]"
                        src={relatedPost.image}
                      />
                      <div className="flex flex-col space-y-2">
                        <p className="font-display text-foreground line-clamp-1 font-medium underline-offset-4 group-hover:underline">
                          {relatedPost.title}
                        </p>
                        <p className="text-muted-foreground line-clamp-2 text-sm underline-offset-2 group-hover:underline">
                          {relatedPost.description}
                        </p>
                        <p className="text-muted-foreground text-xs underline-offset-2 group-hover:underline">
                          {relatedPost.date}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="sticky mt-48 hidden flex-col sm:flex">
          <div className="flex flex-col gap-y-4 py-5">
            <p className="text-muted-foreground text-sm">Written by</p>
            <Image
              alt={author}
              loading="lazy"
              width={36}
              height={36}
              decoding="async"
              data-nimg="1"
              className="blur-0 rounded-full transition-all group-hover:brightness-90"
              src={authorAvatar}
            />
            <div className="flex flex-col">
              <p className="text-foreground text-sm font-medium whitespace-nowrap">
                {author}
              </p>
              <p className="text-muted-foreground text-sm">
                Frontend Developer
              </p>
            </div>
          </div>
          <div className="sticky top-16 col-span-1 self-start pt-4 pb-8">
            <div className="max-h-[58vh] overflow-y-auto pr-4 pb-8">
              <TableOfContents />
            </div>
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogPost;
