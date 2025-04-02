import socialConfig from "@/config/social";
import Link from "next/link";
import { FC } from "react";

const SocialMediaAccounts: FC = () => {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {socialConfig.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group text-neutral-600 transition-colors"
        >
          <social.icon className="size-5 transition-colors duration-200 group-hover:text-neutral-900" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
