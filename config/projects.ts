import { ProjectSubNavType } from "@/types";
import {
  SmartphoneIcon as MobileAppIcon,
  BeefIcon as MongolFoodIcon,
  UserRoundIcon as RoundUserIcon,
  UserSquareIcon as SquareUserIcon,
  EarthIcon as WebIcon,
} from "lucide-react";

const projects: ProjectSubNavType[] = [
  {
    title: "Blog App",
    description: "A blog app built with Next.js, Tailwind CSS, and TypeScript.",
    image: "/images/navigation/featured-project-01.jpg",
    href: "https://ubdotcafe.vercel.app/",
  },
  {
    title: "Energy Project",
    description: "A hydro power plant project's website.",
    image: "/images/navigation/featured-project-02.jpg",
    href: "https://ioco-5c746.web.app/eg/index.html",
  },
  {
    title: "Mongol Food App",
    description: "A Mongolian food ordering app.",
    href: "https://mongol.food",
    icon: MongolFoodIcon,
  },
  {
    title: "Portfolio Android App v2",
    description: "My portfolio app for Android.",
    href: "https://www.youtube.com/watch?v=YjVJyqcv5I8",
    icon: RoundUserIcon,
  },
  {
    title: "Portfolio Android App v1",
    description: "First version of my portfolio app for Android.",
    href: "https://www.youtube.com/watch?v=j56fSGqF7Ho",
    icon: SquareUserIcon,
  },
  {
    title: "Portfolio Web",
    description: "My portfolio website.",
    href: "https://personal-website-76368.web.app/index.html",
    icon: WebIcon,
  },
];

export default projects;
