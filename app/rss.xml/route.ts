import { allPosts } from "@/.content-collections/generated";
import { getBaseUrl } from "@/lib/utils";
import { Feed } from "feed";

export async function GET() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const feed = new Feed({
    title: "Tim's Blog's RSS Feed",
    description: "Latest blog posts from Tim",
    id: getBaseUrl(),
    link: getBaseUrl(),
    language: "en",
    image: getBaseUrl("/favicons/favicon-32x32.png"),
    favicon: getBaseUrl("/favicons/favicon.ico"),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(),
  });

  posts.forEach((post) => {
    const slug = post._meta.path.replace(/\.mdx?$/, "");
    feed.addItem({
      title: post.title,
      id: getBaseUrl(`/blog/post/${slug}`),
      link: getBaseUrl(`/blog/post/${slug}`),
      description: post.description,
      content: post.description,
      date: new Date(post.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
