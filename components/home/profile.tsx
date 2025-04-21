import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Variants } from "framer-motion";
import { UserIcon } from "lucide-react";
import { FC, memo } from "react";
import { MotionEffect } from "../ui/animations/motion-effect";
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

  return (
    <section
      className={cn(
        "mx-auto max-w-2xl items-center justify-center text-center",
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
          <p className="text-foreground text-xl font-medium">
            The Best Frontend Developer
          </p>
          <p className="text-foreground text-lg font-medium">
            in the 🇺🇸 San Francisco Bay Area
          </p>
        </div>
      </MotionEffect>
    </section>
  );
});

Profile.displayName = "Profile";

export default Profile;
