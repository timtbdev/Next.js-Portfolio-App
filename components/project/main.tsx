import Card from "@/components/ui/card";
import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProjectType } from "types";
import { FadeUp } from "../ui/animations/fade-up";
import { GitHubStarsButton } from "../ui/animations/github-stars-button";
import { MotionEffect } from "../ui/animations/motion-effect";
import BrowserWrapper from "./browser";
import Category from "./category";
import LinkButtons from "./link-buttons";

interface Props {
  project: ProjectType;
  className?: string;
}

const renderMdxComponents = {
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="text-foreground my-2 text-lg leading-relaxed text-pretty"
      {...props}
    />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => {
    const className =
      "text-foreground hover:text-accent-foreground underline underline-offset-4";
    if (props.href?.startsWith("/")) {
      return (
        <Link href={props.href} className={className} {...props}>
          {props.children}
        </Link>
      );
    }
    if (props.href?.startsWith("#")) {
      return (
        <a href={props.href} className={className} {...props}>
          {props.children}
        </a>
      );
    }
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {props.children}
      </a>
    );
  },
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong className="text-foreground font-medium" {...props} />
  ),
};

const ProjectImages: FC<{ image: string; title: string }> = ({
  image,
  title,
}) => (
  <>
    <Image
      className="z-1 mx-auto hidden max-w-full grayscale group-hover:grayscale-0 sm:block"
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
      className="z-1 mx-auto block max-w-full grayscale group-hover:grayscale-0 sm:hidden"
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
    <FadeUp delay={0.6} duration={0.3}>
      <Card className={className}>
        <MotionEffect
          fade
          blur="10px"
          delay={0.5}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <article className="z-1 mx-auto mt-4 gap-x-4 px-8 py-4 pb-3 text-center sm:px-10 sm:pb-0">
            <h2 className="text-accent-foreground text-3xl font-bold tracking-tight text-pretty sm:text-4xl">
              {project.title}
            </h2>

            <div className="mx-auto mt-4 flex justify-center">
              {project.githubUrl ? (
                <GitHubStarsButton
                  username="timtbdev"
                  repo={project.githubUrl.split("/").pop() || ""}
                  className="mx-auto"
                />
              ) : (
                <Category
                  category={project.category}
                  className="text-md text-foreground font-semibold"
                />
              )}
            </div>

            {/* Description */}
            <div className="prose prose-sm dark:prose-invert mx-auto mt-4">
              <MDXContent code={project.mdx} components={renderMdxComponents} />
            </div>

            <LinkButtons
              learnMoreUrl={project.githubUrl || ""}
              liveDemoUrl={
                project.webUrl === null
                  ? project.youtubeUrl || ""
                  : project.webUrl
              }
            />
          </article>
        </MotionEffect>
        <div className="mt-6 px-8">
          <Link href={project.webUrl || ""} target="_blank" className="group">
            <BrowserWrapper>
              <ProjectImages image={project.image} title={project.title} />
            </BrowserWrapper>
          </Link>
        </div>
      </Card>
    </FadeUp>
  );
};

export default ProjectItem;
