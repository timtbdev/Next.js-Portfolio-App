import { ContactForm } from "@/components/contact/contact-form";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { FadeUp } from "@/components/ui/animations/fade-up";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { Metadata } from "next";
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
    <div>
      <Header />
      <Heading variant="default">
        <MotionEffect
          fade
          blur="10px"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <MainTitle
            title={page.page}
            description={page.description}
            className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
          />
        </MotionEffect>
      </Heading>
      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="relative mx-auto -mt-12 mb-6 max-w-3xl px-4 sm:mb-10 sm:px-6 lg:px-8">
          <FadeUp delay={0.6} duration={0.3}>
            <Card>
              <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <MotionEffect
                  fade
                  blur="10px"
                  delay={0.7}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  inView
                >
                  <ContactForm />
                </MotionEffect>
              </div>
            </Card>
          </FadeUp>
        </div>
      </div>
      <Footer />
    </div>
  );
}
