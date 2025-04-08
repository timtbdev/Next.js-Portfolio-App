import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { FC, memo } from "react";

interface ProfileProps {
  className?: string;
}

const Profile: FC<ProfileProps> = memo(({ className }) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-2xl items-center justify-center text-center",
        className,
      )}
      aria-label="Profile section"
    >
      <Link
        href="/about"
        className="group relative mb-8 block"
        aria-label="View Tim's profile"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
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
                  <UserIcon
                    className="text-foreground size-16"
                    aria-hidden="true"
                  />
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Learn more about Tim</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <h1 className="text-accent-foreground mb-4 text-center text-5xl leading-none font-bold tracking-tight">
        <span className="relative inline-block">
          <span
            className="bg-accent absolute -top-[2.5%] -left-[2.5%] z-0 h-[105%] w-[105%] -rotate-1"
            aria-hidden="true"
          />
          <span className="relative">✨Hire</span>
        </span>{" "}
        Tim
      </h1>

      <div className="space-y-2">
        <p className="text-foreground text-xl font-semibold">
          The Best Frontend Developer
        </p>
        <p className="text-foreground text-lg font-semibold">
          in the 🇺🇸 San Francisco Bay Area
        </p>
      </div>
    </section>
  );
});

Profile.displayName = "Profile";

export default Profile;
