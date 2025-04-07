import FooterCopyright from "./copyright/main";
import NavigationLinks from "./navigation-links";
import SocialMediaAccounts from "./social-media-accounts";

const Footer = () => {
  return (
    <>
      <footer className="border-border bg-background border-y shadow-xs">
        <div className="mx-auto max-w-5xl overflow-hidden sm:py-10">
          <NavigationLinks className="hidden sm:flex" />
          <SocialMediaAccounts />
          <FooterCopyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
