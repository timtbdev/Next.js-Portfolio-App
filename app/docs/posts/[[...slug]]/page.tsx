import Footer from "@/components/footer/main";
import { DocsLayout } from "@/components/fuma/fuma-layout";
import { DocsBody, DocsPage } from "@/components/fuma/fuma-page";
import Header from "@/components/header/main";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return (
    <Fragment>
      <Header />
      <div className="border-border bg-background relative min-h-52 max-w-full border-t">
        <div className="mx-auto w-full max-w-5xl">
          <DocsLayout tree={source.pageTree}>
            <DocsPage toc={page.data.toc}>
              <DocsBody>
                <MDXContent
                  code={page.data.body}
                  components={getMDXComponents()}
                />
              </DocsBody>
            </DocsPage>
          </DocsLayout>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
