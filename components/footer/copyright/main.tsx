import { Fragment } from "react";
import CopyrightText from "./copyright-text";
import DesktopFooterLinks from "./desktop-footer-links";
import MobileFooterLinks from "./mobile-footer-links";
import TechStacks from "./tech-stacks";

const FooterCopyright = () => {
  return (
    <Fragment>
      <DesktopFooterLinks />
      <div className="lg:hidden">
        <MobileFooterLinks />
        <CopyrightText />
      </div>
      <TechStacks />
    </Fragment>
  );
};

export default FooterCopyright;
