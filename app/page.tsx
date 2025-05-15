import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import Intro from "@/components/home/intro";
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
      <Heading variant="home">
        <Profile className="z-10 mt-8 mb-14" />
      </Heading>
      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="relative mx-auto -mt-10 max-w-5xl items-center px-4 sm:px-6 lg:px-8">
          <Intro className="mb-6" />
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
