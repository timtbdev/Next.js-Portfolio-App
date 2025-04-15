import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import {
  ArrowUpRightIcon,
  CheckIcon,
  PaperclipIcon as FileIcon,
  TextIcon as LearnMoreIcon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "About";

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

export default async function AboutPage() {
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

      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="relative mx-auto -mt-10 max-w-3xl items-center px-4 sm:px-6 lg:px-8">
          <Card className="mb-6 overflow-hidden">
            <div className="shrink-0">
              <Image
                title="Cover Image"
                alt="Cover Image"
                src="/images/cover.jpg"
                layout="responsive"
                width={1200}
                height={630}
                quality={100}
                className="h-128 w-full object-cover"
                priority
              />
            </div>
            <div className="relative mx-auto flex max-w-3xl flex-col px-8 pt-6 pb-8 text-pretty sm:px-14">
              <div className="flex items-center justify-start">
                <h2 className="text-accent-foreground w-full text-center text-3xl font-semibold tracking-tight sm:w-auto sm:text-left">
                  Why Hire Tim?
                </h2>
              </div>
              <article id="about-me" className="mt-4">
                <p className="text-foreground w-full text-center text-lg sm:w-auto sm:text-left">
                  Here&apos;s Why He&apos;s the Perfect Addition to Your Team!
                </p>

                <ul
                  role="list"
                  className="text-foreground wrap-everywhere mt-6 max-w-xl space-y-4"
                >
                  <li className="flex items-center gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-primary mt-1 size-5 flex-none"
                    />
                    <span>
                      He is based in the 🌉{" "}
                      <strong className="font-semibold">
                        San Francisco Bay Area
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-primary mt-1 size-5 flex-none"
                    />
                    <span>
                      He has a{" "}
                      <strong className="font-semibold">
                        Computer Science degree
                      </strong>{" "}
                      from the University of Applied Sciences Mittweida in 🇩🇪
                      Germany.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-primary mt-1 size-5 flex-none"
                    />
                    <span>
                      He loves working with{" "}
                      <strong className="font-semibold">JavaScript</strong>,{" "}
                      <strong className="font-semibold">TypeScript</strong>,{" "}
                      <strong className="font-semibold">Next.js</strong>,{" "}
                      <strong className="font-semibold">React</strong>,{" "}
                      <strong className="font-semibold">Tailwind CSS</strong>,{" "}
                      <strong className="font-semibold">Supabase</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-primary mt-1 size-5 flex-none"
                    />
                    <span>
                      He has built{" "}
                      <a
                        href="https://github.com/timtbdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent-foreground font-semibold underline transition-colors"
                      >
                        three open-source apps
                      </a>
                      , one of which has{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent-foreground font-semibold underline transition-colors"
                      >
                        🌟380+ GitHub stars
                      </a>{" "}
                      and is used by over{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent-foreground font-semibold underline transition-colors"
                      >
                        👨‍💻60 developers
                      </a>
                      .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-primary mt-1 size-5 flex-none"
                    />
                    <span>
                      He speaks{" "}
                      <strong className="font-semibold">🇺🇸English</strong>
                      {", "}
                      <strong className="font-semibold">🇩🇪German</strong>
                      {", "} and{" "}
                      <strong className="font-semibold">🇲🇳Mongolian</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-primary mt-1 size-5 flex-none"
                    />
                    <span>
                      He learns ⚡fast, and has a good eye for 🎨design.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-primary mt-1 size-5 flex-none"
                    />
                    <span>When he is not 🧑‍💻coding, he is out for a 🏃‍♂️run.</span>
                  </li>
                </ul>
              </article>
              <div className="mt-8 flex w-fit max-w-xs flex-col gap-3 sm:flex-row">
                <Link href="/story">
                  <Button className="group w-full transition-colors duration-200">
                    <LearnMoreIcon className="size-4" aria-hidden="true" />
                    Learn more
                  </Button>
                </Link>
                <Link
                  href="/files/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="group w-full transition-colors duration-200"
                  >
                    <FileIcon className="size-4" aria-hidden="true" />
                    Download Resume
                    <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
