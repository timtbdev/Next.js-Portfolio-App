import { FaStrava as StravaIcon } from "react-icons/fa";
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
    href: "https://www.strava.com/athletes/128944314",
    icon: StravaIcon,
    label: "Strava",
  },
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
