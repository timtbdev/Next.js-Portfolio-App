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
    title: "Blog App",
    description: "A blog app built with Next.js, Tailwind CSS",
    image: "/images/navigation/featured-project-01.jpg",
    href: "https://ubdotcafe.vercel.app/",
    icon: BlogIcon,
  },
  {
    title: "Energy Project",
    description: "A hydro power plant project's website.",
    image: "/images/navigation/featured-project-02.jpg",
    href: "https://ioco-5c746.web.app/eg/index.html",
    icon: DamIcon,
  },
  {
    title: "Mongol Food App",
    description: "Next.js, Tailwind CSS, TypeScript",
    href: "https://mongol.food",
    icon: MongolFoodIcon,
  },
  {
    title: "Portfolio App v2",
    description: "Android, Kotlin, MVVM",
    href: "https://www.youtube.com/watch?v=YjVJyqcv5I8",
    icon: RoundUserIcon,
  },
  {
    title: "Portfolio App v1",
    description: "Android, Java, MVC",
    href: "https://www.youtube.com/watch?v=j56fSGqF7Ho",
    icon: SquareUserIcon,
  },
  {
    title: "Portfolio Web",
    description: "Next.js, Tailwind CSS, TypeScript",
    href: "https://personal-website-76368.web.app/index.html",
    icon: WebIcon,
  },
];

export default projects;
