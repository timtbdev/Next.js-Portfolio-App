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
    title: "Blog App",
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
    image: "/images/navigation/featured-project-02.jpg",
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
    title: "Portfolio App v2",
    description: truncateDescription(
      "Android, Kotlin, MVVM, Room, Retrofit, Coroutine",
      30,
    ),
    href: "https://www.youtube.com/watch?v=YjVJyqcv5I8",
    icon: RoundUserIcon,
  },
  {
    title: "Portfolio App v1",
    description: truncateDescription(
      "Android, Java, MVC, XML, Butterknife, Retrofit, Coroutine",
      30,
    ),
    href: "https://www.youtube.com/watch?v=j56fSGqF7Ho",
    icon: SquareUserIcon,
  },
  {
    title: "Portfolio Web",
    description: truncateDescription("Next.js, Tailwind CSS, TypeScript", 30),
    href: "https://personal-website-76368.web.app/index.html",
    icon: WebIcon,
  },
];

export default projects;
