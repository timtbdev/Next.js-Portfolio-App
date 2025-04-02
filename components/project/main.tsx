import mdxComponents from "@/components/mdx/mdx-components";
import Card from "@/components/ui/card";
import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import { FC } from "react";
import {
  FaGlobeAmericas as EarthIcon,
  FaYoutube as YoutubeIcon,
} from "react-icons/fa";
import { ProjectType } from "types";
import Category from "./category";
import GithubButton from "./github-stars";
import LinkButton from "./link-button";
import Title from "./title";

interface Props {
  project: ProjectType;
  className?: string;
}

const ProjectImages: FC<{ image: string; title: string }> = ({
  image,
  title,
}) => (
  <>
    <Image
      className="mx-auto mt-6 hidden max-w-full sm:block"
      src={`/images/projects/${image}`}
      alt={`Screenshot of ${title}`}
      width={1024}
      height={300}
      priority
      quality={85}
      placeholder="blur"
      blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
      sizes="(max-width: 640px) 100vw, 1024px"
    />
    <Image
      className="mx-auto mt-6 block max-w-full sm:hidden"
      src={`/images/projects/mobile/${image}`}
      alt={`Screenshot of ${title} - Mobile view`}
      width={512}
      height={384}
      quality={85}
      placeholder="blur"
      blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
      sizes="(max-width: 640px) 512px, 100vw"
    />
  </>
);

const ProjectItem: FC<Props> = ({ project, className }) => {
  return (
    <Card className={className}>
      <div className="mx-auto mt-1 flex max-w-xs flex-col items-center justify-center gap-x-2 gap-y-2 text-center sm:flex sm:flex-row">
        {project.githubUrl ? (
          <div className="mx-auto flex justify-center">
            <GithubButton
              url={project.githubUrl}
              repo={project.githubUrl.split("/").pop() || ""}
              category={project.category}
            />
          </div>
        ) : (
          <Category
            category={project.category}
            className="text-md mt-6 mb-2 font-semibold text-gray-600"
          />
        )}
      </div>

      <article className="mx-auto px-8 pb-3 text-center sm:px-10 sm:pb-0">
        <Title
          title={project.title}
          className="text-3xl text-black sm:text-4xl"
        />

        {/* Description */}
        <div className="prose prose-sm dark:prose-invert mx-auto mt-4">
          <MDXContent code={project.mdx} components={mdxComponents} />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {project.webUrl && (
            <LinkButton
              title="Live Demo"
              Icon={EarthIcon}
              url={project.webUrl}
            />
          )}
          {project.youtubeUrl && (
            <LinkButton
              title="Watch on Youtube"
              Icon={YoutubeIcon}
              url={project.youtubeUrl}
            />
          )}
        </div>
      </article>

      <ProjectImages image={project.image} title={project.title} />
    </Card>
  );
};

export default ProjectItem;
