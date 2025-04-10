import SocialAccountButton from "@/components/contact/social-account-button";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import { HEAD } from "@/config/seo";
import socialConfig from "@/config/social";
import { getBaseUrl, shimmer, toBase64 } from "@/lib/utils";
import { HeadType, SocialType } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "Contact";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

// Configure comprehensive metadata for SEO and social sharing
// This includes all necessary meta tags for search engines and social media platforms
export const metadata: Metadata = {
  // Basic metadata
  title: page.title,
  applicationName: page.title,
  description: page.description,

  // URL configurations for canonical links and RSS feed
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

export default async function ContactPage() {
  const title = "Contact";
  const description = "Please feel free to reach out to me.";
  const imageUrl = "/images/logo.png";
  const imageAlt = "Avatar";
  const initials = "TB";
  return (
    <Fragment>
      <Header />
      <Heading variant="default">
        <MainTitle
          title={page.page}
          description={page.description}
          className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
        />
      </Heading>
      <div className="">
        <div className="relative mx-auto -mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="mx-auto py-6 sm:py-8">
              <div>
                <div className="text-center">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    className="mx-auto size-24 rounded-full shadow-md ring-1 ring-gray-300"
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(96, 96))}`}
                    width={96}
                    height={96}
                  />
                </div>
              </div>
              <ul
                role="list"
                className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {socialConfig.map((social: SocialType) => (
                  <li key={social.href}>
                    <SocialAccountButton social={social} />
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
