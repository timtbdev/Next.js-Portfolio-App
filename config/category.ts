import NextjsBackground from "@/icons/nextjs-background";
import SupabaseBackground from "@/icons/supabase-background";
import { CategoryType } from "@/types";
import { FaUmbrellaBeach as TanStackQueryIcon } from "react-icons/fa";
import {
  RiNextjsFill as NextjsIcon,
  RiSupabaseFill as SupabaseIcon,
  RiTailwindCssFill as TailwindCssIcon,
  RiBearSmileFill as ZustandIcon,
} from "react-icons/ri";
import {
  SiDrizzle as DrizzleIcon,
  SiShadcnui as ShadcnUiIcon,
} from "react-icons/si";

const categories: CategoryType[] = [
  {
    name: "Next.js",
    slug: "nextjs",
    background: NextjsBackground,
    icon: NextjsIcon,
    gradientColor: "#0f1726",
    description: "Articles about Next.js",
    weight: 9,
  },
  {
    name: "Supabase",
    slug: "supabase",
    background: SupabaseBackground,
    icon: SupabaseIcon,
    gradientColor: "#36D78F",
    description: "Articles about Supabase",
    weight: 8,
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind-css",
    icon: TailwindCssIcon,
    gradientColor: "#38B2AC",
    description: "Articles about Tailwind CSS",
    weight: 7,
  },
  {
    name: "Shadcn UI",
    slug: "shadcn-ui",
    icon: ShadcnUiIcon,
    description: "Articles about Shadcn UI",
    weight: 7,
  },
  {
    name: "Tanstack Query",
    slug: "tanstack-query",
    icon: TanStackQueryIcon,
    description: "Articles about Tanstack Query",
    weight: 6,
  },
  {
    name: "Zustand",
    slug: "zustand",
    icon: ZustandIcon,
    description: "Articles about Zustand",
    weight: 6,
  },
  {
    name: "Drizzle",
    slug: "drizzle",
    icon: DrizzleIcon,
    description: "Articles about Drizzle",
    weight: 6,
  },
];

export default categories;
