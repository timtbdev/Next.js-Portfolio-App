import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ProfileProps {
  className?: string;
}

const Profile: FC<ProfileProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl items-center justify-center text-center",
        className,
      )}
    >
      <Image
        src="/images/profile.jpg"
        alt="Tim's profile picture"
        width={128}
        height={128}
        className="ring-border mx-auto mb-4 size-32 rounded-full object-cover shadow-lg ring-4"
        priority
        quality={90}
        sizes="(max-width: 768px) 128px, 128px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiS0hHSUZJPVBVQkZGRkZGRkb/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />

      <h1 className="text-accent-foreground mb-4 text-center text-5xl leading-none font-bold tracking-tight">
        <span className="relative inline-block">
          <span className="bg-accent absolute -top-[2.5%] -left-[2.5%] z-0 h-[105%] w-[105%] -rotate-1" />
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
    </div>
  );
};

export default Profile;
