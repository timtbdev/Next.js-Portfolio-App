import { truncateDescription } from "@/lib/seo";
import { NavigationLink, ProjectSubNavType } from "@/types";
import {
  UserIcon as AboutMeIcon,
  RssIcon as BlogIcon,
  UserPenIcon as ContactIcon,
  HomeIcon,
  MailIcon,
  ArchiveIcon as ProjectsIcon,
  FileTextIcon as ResumeIcon,
} from "lucide-react";
import categories from "./category";
import projects from "./projects";

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
        description: truncateDescription("Background and experience", 30),
        icon: AboutMeIcon,
      },
      {
        href: "/files/resume.pdf",
        label: "Resume",
        description: truncateDescription("View my resume", 30),
        icon: ResumeIcon,
      },
      {
        href: "/contact",
        label: "Contact",
        description: truncateDescription("Contact me", 30),
        icon: ContactIcon,
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
  },
  {
    icon: MailIcon,
    href: "/contact",
    label: "Contact",
  },
];

export default navigationLinks;
