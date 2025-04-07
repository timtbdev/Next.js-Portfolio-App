import socialConfig from "@/config/social";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";

const SocialMediaAccounts: FC = () => {
  return (
    <div className="mt-6 flex justify-center space-x-4">
      {socialConfig.map((social) => (
        <Button
          key={social.label}
          variant="ghost"
          size="icon"
          asChild
          className="group text-foreground transition-colors"
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="group text-foreground transition-colors"
          >
            <social.icon className="text-foreground group-hover:text-accent-foreground size-5 transition-colors duration-200" />
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
