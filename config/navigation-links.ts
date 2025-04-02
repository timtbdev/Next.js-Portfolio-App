import { NavigationLink } from "@/types";
import {
  CircleUserIcon as AboutMeIcon,
  RssIcon as BlogIcon,
  HomeIcon,
  MailIcon,
  SquareUserRoundIcon as MyStoryIcon,
  ArchiveIcon as ProjectsIcon,
  FileTextIcon as ResumeIcon,
} from "lucide-react";
import categories from "./category";

const navigationLinks: NavigationLink[] = [
  {
    icon: HomeIcon,
    href: "/",
    label: "Home",
  },
  {
    icon: AboutMeIcon,
    href: "/about",
    label: "About",
    subNavigationLinks: [
      {
        href: "/about",
        label: "About Me",
        description: "Background and experience",
        icon: AboutMeIcon,
        hoverColor: "#4d6bb8",
      },
      {
        href: "/about/my-story",
        label: "My Story",
        description: "My coding journey",
        icon: MyStoryIcon,
        hoverColor: "#c48428",
      },
      {
        href: "/files/resume.pdf",
        label: "Resume",
        description: "View my resume",
        icon: ResumeIcon,
        hoverColor: "#b91c1c",
      },
    ],
  },
  {
    icon: ProjectsIcon,
    href: "/projects",
    label: "Projects",
  },
  {
    icon: BlogIcon,
    href: "/blog",
    label: "Blog",
    subNavigationLinks: categories.map((category) => ({
      icon: category.icon,
      href: `/blog/${category.slug}`,
      label: category.name,
    })),
  },
  {
    icon: MailIcon,
    href: "/contact",
    label: "Contact",
  },
];

export default navigationLinks;
