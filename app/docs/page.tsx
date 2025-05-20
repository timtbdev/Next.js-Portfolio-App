import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { FadeUp } from "@/components/ui/animations/fade-up";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import MainTitle from "@/components/ui/main-title";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { HEAD } from "@/config/seo";
import { source } from "@/lib/source";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "Docs";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

export async function generateStaticParams() {
  return source.generateParams();
}

export default async function DocsPage() {
  const docs = source.getPages();

  return (
    <Fragment>
      <Header />

      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-3 py-10 md:grid-cols-3 lg:px-4 xl:px-0">
          {docs?.map((doc, index) => (
            <FadeUp key={index} delay={0.6} duration={0.3}>
              <Link href={`/docs/posts/${doc.data._meta.path}`}>
                <div className="bg-card hover:bg-accent rounded-lg p-6 transition-colors">
                  <h3 className="text-lg font-semibold">{doc.data.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {doc.data.date} • {doc.data.category}
                  </p>
                  {doc.data.description && (
                    <>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {doc.data.description}
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {doc.data.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-muted-foreground text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                    </>
                  )}
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
