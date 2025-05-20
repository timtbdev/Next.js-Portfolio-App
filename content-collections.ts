import { slugify } from "@/lib/utils";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {
  createDocSchema,
  createMetaSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeParseCodeBlocks } from "./shiki-rehype.mjs";

const docs = defineCollection({
  name: "docs",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    author: z.string(),
    authorAvatar: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    seo: z.array(z.string()),
  }),
  transform: transformMDX,
});

const metas = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
});

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: ["**/*.md", "**/*.mdx"],
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    author: z.string(),
    authorAvatar: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    seo: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [
        rehypeParseCodeBlocks,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    });

    const regXHeader = /^(?:[\n\r]|)(?<flag>#{1,6})\s+(?<content>.+)/gm;
    const headings = Array.from(document.content.matchAll(regXHeader)).map(
      ({ groups }) => {
        const flag = groups?.flag;
        const content = groups?.content;
        return {
          level: flag?.length,
          text: content,
          slug: slugify(content ?? "#"),
        };
      },
    );

    return {
      ...document,
      headings,
      mdx,
    };
  },
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: ["**/*.md", "**/*.mdx"],
  schema: (z) => ({
    order: z.number(),
    title: z.string(),
    category: z.enum([
      "Android",
      "Next.js",
      "Web",
      "Mobile",
      "HTML, CSS, JS",
      "Other",
    ] as const),
    created_at: z.string(),
    image: z.string(),
    featured: z.boolean(),
    webUrl: z.string().nullable(),
    youtubeUrl: z.string().nullable(),
    githubUrl: z.string().nullable(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [rehypeParseCodeBlocks],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, projects, docs, metas],
});
