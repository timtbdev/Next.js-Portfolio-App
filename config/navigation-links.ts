import { truncateDescription } from "@/lib/seo";
import { NavigationLink, ProjectSubNavType } from "@/types";
import {
  UserIcon as AboutMeIcon,
  RssIcon as BlogIcon,
  HomeIcon,
  MailIcon,
  UserPenIcon as MyStoryIcon,
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
        href: "/about/my-story",
        label: "My Story",
        description: truncateDescription("My coding journey", 30),
        icon: MyStoryIcon,
      },
      {
        href: "/files/resume.pdf",
        label: "Resume",
        description: truncateDescription("View my resume", 30),
        icon: ResumeIcon,
      },
    ],
  },
  {
    icon: ProjectsIcon,
    href: "/projects",
    label: "Projects",
    subNavigationLinks: projects.map((project: ProjectSubNavType) => ({
      icon: project.icon,
      href: project.href,
      label: project.title,
      description: project.description,
    })),
  },
  {
    icon: BlogIcon,
    href: "/blog",
    label: "Blog",
    subNavigationLinks: categories.map((category) => ({
      icon: category.icon,
      href: `/blog/${category.slug}`,
      label: category.name,
      description: category.description,
    })),
  },
  {
    icon: MailIcon,
    href: "/contact",
    label: "Contact",
  },
];

export default navigationLinks;
