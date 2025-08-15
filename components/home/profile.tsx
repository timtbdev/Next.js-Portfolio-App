import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Variants } from "framer-motion";
import { UserIcon } from "lucide-react";
import { FC, memo } from "react";
import { FaReact as ReactLogo } from "react-icons/fa";
import {
  RiNextjsFill as NextJsLogo,
  RiSupabaseFill as SupabaseLogo,
  RiTailwindCssFill as TailwindcssLogo,
} from "react-icons/ri";
import { InfiniteSlider } from "../ui/animations/infinite-slider";
import { MotionEffect } from "../ui/animations/motion-effect";
import { ProgressiveBlur } from "../ui/animations/progressive-blur";
import WordReveal from "../ui/animations/word-reveal";

interface ProfileProps {
  className?: string;
}

const Profile: FC<ProfileProps> = memo(({ className }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  const techStack = [
    {
      name: "React",
      icon: ReactLogo,
    },
    {
      name: "Next.js",
      icon: NextJsLogo,
    },
    {
      name: "TailwindCSS",
      icon: TailwindcssLogo,
    },
    {
      name: "Supabase",
      icon: SupabaseLogo,
    },
  ];

  return (
    <section
      className={cn(
        "mx-auto mb-4 max-w-2xl items-center justify-center text-center",
        className,
      )}
      aria-label="Profile section"
    >
      <Avatar
        className="ring-border bg-background hover:ring-accent/50 mx-auto size-32 rounded-full object-cover shadow-lg ring-4 transition-all duration-300"
        role="img"
        aria-label="Tim's profile picture"
      >
        <AvatarImage
          src="/images/profile.jpg"
          alt="Tim's profile picture"
          width={128}
          height={128}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <AvatarFallback className="bg-accent">
          <UserIcon className="text-foreground size-16" aria-hidden="true" />
        </AvatarFallback>
      </Avatar>

      <WordReveal text="Hire Tim" delay={0.15} />

      <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.15,
        }}
        inView
      >
        <div className="space-y-2">
          <p className="text-foreground text-xl font-semibold">
            The Best Frontend Developer
          </p>
        </div>
      </MotionEffect>
      <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.25,
        }}
        inView
      >
        <div className="relative mt-6 w-full overflow-hidden">
          <InfiniteSlider
            speed={40}
            className="flex h-full w-full items-center mask-x-from-80% mask-x-to-90% sm:mask-x-from-70% sm:mask-x-to-90%"
          >
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 transition-all duration-300"
              >
                <tech.icon className={cn("text-muted-foreground size-6")} />
                <span className="text-foreground/80 text-xl font-semibold">
                  {tech.name}
                </span>
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[50px] sm:w-[100px]"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[50px] sm:w-[100px]"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </MotionEffect>
    </section>
  );
});

Profile.displayName = "Profile";

export default Profile;
