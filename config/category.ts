import { CategoryType } from "@/types";
import {
  CloudHailIcon as DrizzleIcon,
  LayoutTemplateIcon as ShadcnUiIcon,
  ZapIcon as SupabaseIcon,
  PanelsTopLeft as TailwindCssIcon,
  TreePalmIcon as TanStackQueryIcon,
} from "lucide-react";
import "react-icons/ri";
import {
  FileCode2Icon as NextJsIcon,
  PawPrintIcon as ZustandIcon,
} from "lucide-react";
import { RiNextjsFill as NextJsBigIcon } from "react-icons/ri";

const categories: CategoryType[] = [
  {
    name: "Next.js",
    slug: "nextjs",
    icon: NextJsIcon,
    bigIcon: NextJsBigIcon,
    description: "Articles about Next.js",
    weight: 1,
  },
  {
    name: "Supabase",
    slug: "supabase",
    icon: SupabaseIcon,
    description: "Articles about Supabase",
    weight: 2,
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind-css",
    icon: TailwindCssIcon,
    description: "Articles about Tailwind CSS",
    weight: 2,
  },
  {
    name: "Shadcn UI",
    slug: "shadcn-ui",
    icon: ShadcnUiIcon,
    description: "Articles about Shadcn UI",
    weight: 2,
  },
  {
    name: "Tanstack Query",
    slug: "tanstack-query",
    icon: TanStackQueryIcon,
    description: "Articles about Tanstack Query",
    weight: 3,
  },
  {
    name: "Zustand",
    slug: "zustand",
    icon: ZustandIcon,
    description: "Articles about Zustand",
    weight: 3,
  },
  {
    name: "Drizzle",
    slug: "drizzle",
    icon: DrizzleIcon,
    description: "Articles about Drizzle",
    weight: 3,
  },
];

export default categories;
