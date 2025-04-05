import navigationLinks from "@/config/navigation-links";
import socialConfig from "@/config/social";
import { CircleUserIcon } from "lucide-react";
import Card from "./card-item";
import SocialLink from "./social-link";

const NavigationAbout = () => {
  const aboutSection = navigationLinks.find((item) => item.label === "About");
  const aboutLinks = aboutSection?.subNavigationLinks || [];

  return (
    <div className="divide-border grid w-[540px] grid-cols-[60%_40%] divide-x">
      <div className="flex flex-col gap-4 p-4">
        {aboutLinks.map((item) => (
          <Card
            key={item.href}
            href={item.href}
            title={item.label}
            description={item.description || ""}
            icon={item.icon || CircleUserIcon}
            external={
              item.href.startsWith("http") || item.href.endsWith(".pdf")
            }
          />
        ))}
      </div>
      <div className="px-6 py-4">
        <div className="grid grid-cols-1">
          {socialConfig.map((link) => (
            <SocialLink key={link.href} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationAbout;
