import { CategoryType } from "@/types";
import {
  CloudHailIcon as DrizzleIcon,
  LayoutTemplateIcon as ShadcnUiIcon,
  ZapIcon as SupabaseIcon,
  PanelsTopLeft as TailwindCssIcon,
  TreePalmIcon as TanStackQueryIcon,
} from "lucide-react";
import "react-icons/ri";
import { truncateDescription } from "@/lib/seo";
import {
  RssIcon as BlogBigIcon,
  RssIcon as BlogIcon,
  FileCode2Icon as NextJsIcon,
  PawPrintIcon as ZustandIcon,
} from "lucide-react";

const categories: CategoryType[] = [
  {
    name: "All Articles",
    slug: "/blog",
    icon: BlogIcon,
    bigIcon: BlogBigIcon,
    description: truncateDescription("Read all articles", 30),
    weight: 1,
  },
  {
    name: "Next.js",
    slug: "nextjs",
    icon: NextJsIcon,
    description: truncateDescription("Articles about Next.js", 30),
    weight: 2,
  },
  {
    name: "Supabase",
    slug: "supabase",
    icon: SupabaseIcon,
    description: truncateDescription("Articles about Supabase", 30),
    weight: 2,
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind-css",
    icon: TailwindCssIcon,
    description: truncateDescription("Articles about Tailwind CSS", 30),
    weight: 2,
  },
  {
    name: "Shadcn UI",
    slug: "shadcn-ui",
    icon: ShadcnUiIcon,
    description: truncateDescription("Articles about Shadcn UI", 30),
    weight: 3,
  },
  {
    name: "Tanstack Query",
    slug: "tanstack-query",
    icon: TanStackQueryIcon,
    description: truncateDescription("Articles about Tanstack Query", 30),
    weight: 3,
  },
  {
    name: "Zustand",
    slug: "zustand",
    icon: ZustandIcon,
    description: truncateDescription("Articles about Zustand", 30),
    weight: 3,
  },
  {
    name: "Drizzle",
    slug: "drizzle",
    icon: DrizzleIcon,
    description: truncateDescription("Articles about Drizzle", 30),
    weight: 3,
  },
];

export default categories;
