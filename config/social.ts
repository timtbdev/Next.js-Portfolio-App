import {
  FaEnvelope as EmailIcon,
  FaFacebook as FacebookIcon,
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedInIcon,
  FaXTwitter as XPlatformIcon,
} from "react-icons/fa6";
import { SocialType } from "../types";

const socialConfig: SocialType[] = [
  {
    href: "mailto:timtb.dev@gmail.com",
    icon: EmailIcon,
    label: "Email",
  },
  {
    href: "https://x.com/hire_tim_com",
    icon: XPlatformIcon,
    label: "X (Twitter)",
  },
  {
    href: "https://github.com/timtbdev",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/timtbdev/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/timtbaz/",
    icon: FacebookIcon,
    label: "Facebook",
  },
];

export default socialConfig;
