import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
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
          <Card className="mb-6">
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
              />
            </div>
            <div className="relative mx-auto flex max-w-3xl flex-col px-8 pt-4 pb-6 text-pretty sm:px-14">
              <div className="flex items-center justify-start">
                <h2 className="text-accent-foreground w-full text-center text-3xl font-semibold tracking-tight sm:w-auto sm:text-left">
                  Why Hire Tim?
                </h2>
              </div>
              <article id="about-me" className="mt-2">
                <p className="text-foreground w-full text-center text-lg sm:w-auto sm:text-left">
                  Here’s Why He’s the Perfect Addition to Your Team!
                </p>

                <ul
                  role="list"
                  className="text-foreground mt-4 max-w-xl space-y-4"
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
                        className="text-foreground hover:text-accent-foreground font-semibold underline"
                      >
                        three open-source apps
                      </a>
                      , one of which has{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        className="text-foreground hover:text-accent-foreground font-semibold underline"
                      >
                        🌟370+ GitHub stars
                      </a>{" "}
                      and is used by over{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        className="text-foreground hover:text-accent-foreground font-semibold underline"
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
              <div className="mt-6 flex w-fit max-w-xs gap-2">
                <Link href="/story" target="_blank" rel="noopener noreferrer">
                  <Button className="hover:ring-border px-5 py-2 hover:ring-2">
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
                    className="hover:ring-border px-5 py-2 hover:border-black/20 hover:ring-2 dark:hover:border-white/20"
                  >
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
