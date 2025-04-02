import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import HeadingHome from "@/components/heading/heading-home";
import Profile from "@/components/home/profile";
import ProjectItem from "@/components/project/main";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { ProjectType } from "@/types";
import { allProjects } from "content-collections";
import { Fragment } from "react";

export default async function HomePage() {
  const projects: ProjectType[] = allProjects
    .filter((project) => project.featured === true)
    .sort((a, b) => a.order - b.order);

  return (
    <Fragment>
      <Header />
      <HeadingHome>
        <Profile className="z-10 mt-8 mb-14" />
      </HeadingHome>
      <div className="relative min-h-[50vh] max-w-full border-t border-neutral-300 bg-gradient-to-b from-neutral-50">
        <div className="relative mx-auto -mt-12 max-w-3xl items-center px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <ProjectItem project={project} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
