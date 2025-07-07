"use client";

import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../ui/animations/fade-up";
import { MotionEffect } from "../ui/animations/motion-effect";
import "react-photo-view/dist/react-photo-view.css";

const PhotoProvider = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoProvider),
  { ssr: false },
);
const PhotoView = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoView),
  { ssr: false },
);

interface Props {
  className?: string;
}

const Intro = ({ className }: Props) => {
  return (
    <FadeUp delay={0.6} duration={0.3}>
      <Card className={cn(className)}>
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
          <div className="relative mx-auto mt-8 flex w-full justify-center">
            <PhotoProvider>
              <div className="relative flex gap-4">
                <MotionEffect
                  slide={{
                    direction: "down",
                  }}
                  fade
                  zoom
                  inView
                  delay={0.5}
                >
                  <PhotoView src="/images/about/about_me_01.jpg">
                    <Image
                      src="/images/about/about_me_01.jpg"
                      alt="Wedding photo"
                      className="z-2 aspect-2/3 w-[500px] translate-x-12 -rotate-3 cursor-pointer rounded-lg object-cover shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px]"
                      width={200}
                      height={300}
                      priority={true}
                    />
                  </PhotoView>
                </MotionEffect>
                <MotionEffect
                  slide={{
                    direction: "down",
                  }}
                  fade
                  zoom
                  inView
                  delay={0.7}
                >
                  <PhotoView src="/images/about/about_me_02.jpg">
                    <Image
                      src="/images/about/about_me_02.jpg"
                      alt="Family photo"
                      className="z-1 aspect-2/3 w-[500px] rotate-2 cursor-pointer rounded-lg object-cover shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px]"
                      width={200}
                      height={300}
                      priority={true}
                    />
                  </PhotoView>
                </MotionEffect>
                <MotionEffect
                  slide={{
                    direction: "down",
                  }}
                  fade
                  zoom
                  inView
                  delay={0.9}
                >
                  <PhotoView src="/images/about/about_me_03.jpg">
                    <Image
                      src="/images/about/about_me_03.jpg"
                      alt="Running photo"
                      className="z-0 aspect-2/3 w-[500px] -translate-x-12 rotate-2 cursor-pointer rounded-lg object-cover shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px]"
                      width={200}
                      height={300}
                      priority={true}
                    />
                  </PhotoView>
                </MotionEffect>
              </div>
            </PhotoProvider>
          </div>

          <div className="mx-auto mt-6 max-w-2xl px-6 text-center md:px-2 lg:px-2">
            <h2 className="text-accent-foreground mb-4 text-2xl font-bold sm:text-3xl">
              Oh Hello There!
            </h2>
            <div className="text-foreground space-y-6 text-lg leading-8">
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                I&apos;m{" "}
                <span className="text-accent-foreground font-medium">
                  Tumur Bazarragchaa
                </span>{" "}
                (preferred name:{" "}
                <span className="text-accent-foreground font-medium">Tim</span>
                ). I&apos;m a{" "}
                <span className="text-accent-foreground font-medium">
                  frontend developer
                </span>{" "}
                with{" "}
                <span className="text-accent-foreground font-medium">
                  4 years
                </span>{" "}
                of experience in{" "}
                <span className="text-accent-foreground font-medium">
                  React, Next.js, TailwindCSS, JavaScript, and TypeScript
                </span>
                . I live in{" "}
                <span className="text-accent-foreground font-medium">
                  Walnut Creek, CA
                </span>{" "}
                with my wife and daughter.
              </p>
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                Originally from{" "}
                <span className="text-accent-foreground font-medium">
                  Mongolia
                </span>
                , I studied Computer Science at the{" "}
                <Link
                  href="https://www.hs-mittweida.de/en/"
                  className="text-accent-foreground hover:text-accent-foreground/80 font-medium underline underline-offset-4"
                  target="_blank"
                >
                  University of Mittweida
                </Link>{" "}
                in Germany and speak{" "}
                <span className="text-accent-foreground font-medium">
                  English
                </span>
                ,{" "}
                <span className="text-accent-foreground font-medium">
                  German
                </span>
                , and{" "}
                <span className="text-accent-foreground font-medium">
                  Mongolian
                </span>
                .
              </p>
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                I constantly improve my skills by grinding{" "}
                <span className="text-accent-foreground font-medium">
                  LeetCode
                </span>{" "}
                and learning the latest frontend technologies.
              </p>
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                Currently, I&apos;m building a{" "}
                <Link
                  href="https://playlist.fan"
                  className="text-accent-foreground hover:text-accent-foreground/80 font-medium underline underline-offset-4"
                  target="_blank"
                >
                  a platform
                </Link>{" "}
                to help{" "}
                <span className="text-md">
                  runners easily find and share battle-tested running tracks. I
                  enjoy running outdoors with good music. Here&apos;s my{" "}
                  <Link
                    href="https://open.spotify.com/playlist/28OAQven2H4fLmFsNEeVcY?si=Q7wYapo7RAmX4E-A72OdW"
                    className="text-accent-foreground hover:text-accent-foreground/80 font-medium underline underline-offset-4"
                    target="_blank"
                  >
                    playlist
                  </Link>
                  .
                </span>{" "}
              </p>
              <p className="text-foreground text-md mb-10 text-center sm:text-left sm:text-lg">
                Please find below my selected{" "}
                <Link
                  href="/projects"
                  className="text-accent-foreground hover:text-accent-foreground/80 font-medium underline underline-offset-4"
                >
                  works
                </Link>
                , and you can view my{" "}
                <Link
                  href="/files/resume.pdf"
                  className="text-accent-foreground hover:text-accent-foreground/80 font-medium underline underline-offset-4"
                  target="_blank"
                >
                  resume here
                </Link>
                .
              </p>
            </div>
          </div>
        </MotionEffect>
      </Card>
    </FadeUp>
  );
};

export default Intro;
