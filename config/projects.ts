import { truncateDescription } from "@/lib/seo";
import { ProjectSubNavType } from "@/types";
import {
  RssIcon as BlogIcon,
  DamIcon,
  BeefIcon as MongolFoodIcon,
  UserRoundIcon as RoundUserIcon,
  UserSquareIcon as SquareUserIcon,
  EarthIcon as WebIcon,
} from "lucide-react";

const projects: ProjectSubNavType[] = [
  {
    title: "All Projects",
    description: truncateDescription("Overview of all projects", 30),
    image: "/images/navigation/all-projects.jpg",
    href: "/projects",
    icon: BlogIcon,
  },
  {
    title: "Full Stack Blog App",
    description: truncateDescription(
      "A blog app built with Next.js, Tailwind CSS",
      30,
    ),
    image: "/images/navigation/featured-project-01.jpg",
    href: "https://ubdotcafe.vercel.app/",
    icon: BlogIcon,
  },
  {
    title: "Energy Project",
    description: truncateDescription("HTML, CSS, JavaScript, PHP, MySQL", 30),
    href: "https://ioco-5c746.web.app/eg/index.html",
    icon: DamIcon,
  },
  {
    title: "Mongol Food App",
    description: truncateDescription("Next.js, Tailwind CSS, TypeScript", 30),
    href: "https://mongol.food",
    icon: MongolFoodIcon,
  },
  {
    title: "Portfolio App",
    description: truncateDescription(
      "Android, Kotlin, MVVM, Room, Retrofit, Coroutine",
      30,
    ),
    href: "https://www.youtube.com/watch?v=YjVJyqcv5I8",
    icon: RoundUserIcon,
  },
  {
    title: "Portfolio Web",
    description: truncateDescription("Next.js, Tailwind CSS, TypeScript", 30),
    href: "https://personal-website-76368.web.app/index.html",
    icon: WebIcon,
  },
];

export default projects;
