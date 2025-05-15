import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../ui/animations/fade-up";
import { MotionEffect } from "../ui/animations/motion-effect";

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
                <Image
                  src="/images/about/about_me_01.jpg"
                  alt="Wedding photo"
                  className="z-2 translate-x-12 -rotate-3 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                  width={200}
                  height={300}
                  priority={true}
                />
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
                <Image
                  src="/images/about/about_me_02.jpg"
                  alt="Family photo"
                  className="z-1 rotate-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                  width={200}
                  height={300}
                  priority={true}
                />
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
                <Image
                  src="/images/about/about_me_03.jpg"
                  alt="Running photo"
                  className="z-0 -translate-x-12 rotate-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                  width={200}
                  height={300}
                  priority={true}
                />
              </MotionEffect>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-2xl px-6 text-center md:px-2 lg:px-2">
            <h1 className="text-accent-foreground mb-4 text-3xl font-bold">
              Frontend Developer & Runner
            </h1>
            <div className="text-foreground space-y-6 text-lg leading-8">
              <p className="text-foreground text-left text-lg">
                Hi, I&apos;m{" "}
                <span className="text-accent-foreground">
                  Tumur Bazarragchaa
                </span>{" "}
                (preferred name:{" "}
                <span className="text-accent-foreground">Tim</span>). I&apos;m a{" "}
                <span className="text-accent-foreground">
                  frontend developer
                </span>{" "}
                with <span className="text-accent-foreground">4 years</span> of
                experience in{" "}
                <span className="text-accent-foreground">
                  React, Next.js, TailwindCSS, JavaScript, and TypeScript
                </span>
                . I live in{" "}
                <span className="text-accent-foreground">Walnut Creek, CA</span>{" "}
                with my wife and daughter.
              </p>
              <p className="text-foreground text-left text-lg">
                Originally from{" "}
                <span className="text-accent-foreground">Mongolia</span>, I
                studied Computer Science at the{" "}
                <span className="text-accent-foreground">
                  University of Mittweida
                </span>{" "}
                in Germany and speak{" "}
                <span className="text-accent-foreground">English</span>,{" "}
                <span className="text-accent-foreground">German</span>, and{" "}
                <span className="text-accent-foreground">Mongolian</span>.
              </p>
              <p className="text-foreground text-left text-lg">
                I drive for <span className="text-accent-foreground">Uber</span>{" "}
                for flexibility while constantly improving my skills—grinding{" "}
                <span className="text-accent-foreground">LeetCode</span> and
                learning the latest frontend technologies. Right now, I&apos;m
                building a{" "}
                <Link
                  href="/projects/nextjs-supabase-boilerplate"
                  className="text-accent-foreground hover:text-accent-foreground/80 underline"
                  target="_blank"
                >
                  Next.js & Supabase boilerplate template
                </Link>{" "}
                to help{" "}
                <span className="text-accent-foreground">
                  restaurants and food trucks
                </span>{" "}
                get online more easily and quickly.
              </p>
              <p className="text-foreground mb-10 text-left text-lg">
                I enjoy running outdoors and listening to{" "}
                <span className="text-accent-foreground">good music</span>
                —here&apos;s my{" "}
                <Link
                  href="https://open.spotify.com/playlist/37i9dQZF1DX9wC2gBpHpJ3?si=1b10000000000000"
                  className="text-accent-foreground hover:text-accent-foreground/80 underline"
                  target="_blank"
                >
                  playlist
                </Link>
                . Please find below my selected{" "}
                <Link
                  href="/projects"
                  className="text-accent-foreground hover:text-accent-foreground/80 underline"
                >
                  works
                </Link>
                , and you can view my{" "}
                <Link
                  href="/resume"
                  className="text-accent-foreground hover:text-accent-foreground/80 underline"
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
