import { truncateDescription, truncateTitle } from "@/lib/seo";
import type { HeadType } from "@/types";

const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle("Looking for the Best Frontend Developer? | Hire Tim"),
    description: truncateDescription(
      "Hire Tim – A Skilled Frontend Developer for Fast, Reliable, and High-Performing Web Applications!",
    ),
    slug: "/",
  },
  {
    page: "About",
    title: truncateTitle("About | Frontend Developer for Hire | Tim"),
    description: truncateDescription(
      "Looking for a top Frontend Developer in San Francisco? Hire Tim.",
    ),
    slug: "/about",
  },
  {
    page: "Story",
    title: truncateTitle("Story | Frontend Developer for Hire | Tim"),
    description: truncateDescription(
      "Learn more about Tim's journey and experiences as a frontend developer.",
    ),
    slug: "/story",
  },
  {
    page: "Blog",
    title: truncateTitle("Blog | Next.js, Tailwind CSS, and Supabase | Tim"),
    description: truncateDescription("Explore Tim's latest blog posts"),
    slug: "/blog",
  },
  {
    page: "Projects",
    title: truncateTitle("Projects | Showcasing Tim's Work | Tim"),
    description: truncateDescription("Next.js, Tailwind CSS, and Supabase!"),
    slug: "/projects",
  },
  {
    page: "Contact",
    title: truncateTitle("Contact | Get in Touch with Tim"),
    description: truncateDescription(
      "Thinking about hiring Tim? Drop him a message.",
    ),
    slug: "/contact",
  },
];

export default HEAD;
