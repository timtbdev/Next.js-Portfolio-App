import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { IconType } from "react-icons";

export type HeadType = {
  page: string;
  title: string;
  slug: string;
  description: string;
};

export type AuthorType = {
  name: string;
  twitterUrl: string;
  twitterAddress: string;
  email: string;
};

export type SocialType = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

export type SubMenuItemType = {
  title: string;
  slug: string;
  description: string;
  icon: IconType;
};

export type MenuItemType = {
  emoji: string;
  title: string;
  slug: string;
  description?: string;
  icon?: React.ReactNode;
  subcategories?: SubMenuItemType[];
};

export type PostType = {
  fileName: string;
  content: string;
  mdx: MDXRemoteSerializeResult;
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
};

export type ProjectCategory =
  | "Android"
  | "Next.js"
  | "Web"
  | "Mobile"
  | "Other";

// This is return type of content-collections
export type ProjectType = {
  order: number;
  title: string;
  category: string;
  created_at: string;
  image: string;
  featured: boolean;
  webUrl: string | null;
  youtubeUrl: string | null;
  githubUrl: string | null;
  mdx: string;
  content: string;
  _meta: {
    filePath: string;
    fileName: string;
    directory: string;
    path: string;
    extension: string;
  };
};

type SearchResult = {
  id: string;
  metadata: any;
  content: string;
};

export type Heading = {
  level: number;
  text: string;
};

export type CategoryType = {
  name: string;
  slug: string;
  background?: React.ComponentType<{ className?: string }>;
  icon?: React.ComponentType<{ className?: string }>;
  bigIcon?: React.ComponentType<{ className?: string }>;
  description: string;
  weight: number;
};

export type NavigationLink = {
  href: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  subNavigationLinks?: NavigationLink[];
};

export type ProjectSubNavType = {
  title: string;
  description: string;
  image?: string;
  href: string;
  icon?: IconType;
};
