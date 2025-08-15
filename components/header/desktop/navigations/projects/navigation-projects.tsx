import projects from "@/config/projects";
import MoreProjectItem from "./more-project-item";
import ProjectItem from "./project-item";

const NavigationProjects = () => {
  return (
    <div className="divide-border grid w-[1024px] grid-cols-[70%_30%] divide-x">
      <div className="grid grid-cols-2 gap-4 p-4">
        {projects.map(
          (project) =>
            project.image && (
              <ProjectItem
                key={project.title}
                title={project.title}
                description={project.description}
                href={project.href}
                image={project.image}
              />
            ),
        )}
      </div>
      <div className="flex flex-col gap-2 px-6 py-4">
        <div>
          <p className="text-muted-foreground mb-2 text-xs uppercase">
            More Projects
          </p>
          <div className="flex flex-col gap-0.5">
            {projects.map(
              (project) =>
                project.icon &&
                !project.image && (
                  <MoreProjectItem
                    key={project.title}
                    title={project.title}
                    href={project.href}
                    icon={project.icon}
                    description={project.description}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationProjects;
