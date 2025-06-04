import TanStackQueryProvider from "@/components/providers/tanstack-query-provider";
import TailwindIndicator from "@/components/ui/tailwind-indicator";
import { AUTHOR, FAVICONS, HEAD, KEYWORDS, OPEN_GRAPH } from "@/config/seo";
import { cn, getBaseUrl } from "@/lib/utils";
import "@/styles/tailwind.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { HeadType } from "@/types";
import { Analytics } from "@vercel/analytics/next";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata, Viewport } from "next";
import { Geist as FontSans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}
if (!KEYWORDS || KEYWORDS.length === 0) {
  console.warn("🔍 No keywords defined for SEO");
}
if (!AUTHOR || !AUTHOR.name) {
  console.error("❌ Author information is missing");
}
if (!FAVICONS || !FAVICONS.icon || FAVICONS.icon.length === 0) {
  console.warn("🖼️ No favicons configured");
}
if (!OPEN_GRAPH || !OPEN_GRAPH.image || !OPEN_GRAPH.twitterImage) {
  console.error("📱 OpenGraph configuration is incomplete");
}

// Define the current page for SEO configuration
const PAGE = "Home";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

// Configure the Geist font with Latin subset and variable font support
// This sets up the primary font for the application
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Configure viewport settings for responsive design
// This ensures proper scaling and display on different devices
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Configure comprehensive metadata for SEO and social sharing
// This includes all necessary meta tags for search engines and social media platforms
export const metadata: Metadata = {
  // Basic metadata
  title: page.title,
  generator: AUTHOR.name,
  applicationName: page.title,
  description: page.description,
  referrer: "origin-when-cross-origin",
  keywords: (KEYWORDS ?? []).join(", "),

  // Author information for content attribution
  authors: [
    {
      name: AUTHOR.name,
      url: AUTHOR.twitterUrl,
    },
  ],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,

  // URL configurations for canonical links and RSS feed
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: getBaseUrl(),
    types: {
      "application/rss+xml": `${getBaseUrl("/rss.xml")}`,
    },
    languages: {
      "en-US": getBaseUrl(),
      "x-default": getBaseUrl(),
    },
  },

  // Apple web app configuration for iOS devices
  appleWebApp: {
    title: page.title,
    statusBarStyle: "default",
    capable: true,
  },

  // Search engine crawling configuration
  robots: {
    index: true,
    follow: true,
  },

  // Favicon configuration for browser tabs and bookmarks
  icons: FAVICONS,

  // OpenGraph metadata for social media sharing
  // This enables rich previews when the site is shared on social platforms
  openGraph: {
    type: "website",
    locale: "en",
    url: getBaseUrl(),
    title: page.title,
    description: page.description,
    siteName: page.title,
    images: [
      {
        url: OPEN_GRAPH.image,
        width: 1200,
        height: 630,
        alt: page.title,
        type: "image/png",
      },
    ],
  },

  // Twitter card metadata for Twitter sharing
  // This enables rich previews when the site is shared on Twitter
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    site: AUTHOR.twitterAddress,
    images: [
      {
        url: OPEN_GRAPH.twitterImage,
        width: 1200,
        height: 675,
        alt: page.title,
        type: "image/png",
      },
    ],
    creator: AUTHOR.twitterAddress,
  },
};

// Root layout component that wraps all pages
// This component provides the basic HTML structure and global providers
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
      suppressHydrationWarning={true}
    >
      <body
        className={cn(
          "dark:selection:bg-sunset-500 bg-white antialiased selection:bg-blue-500 selection:text-white dark:bg-zinc-900",
          fontSans.variable,
        )}
        suppressHydrationWarning={true}
      >
        {/* URL query state management provider */}
        <NuqsAdapter>
          {/* React Query provider for data fetching */}
          <TanStackQueryProvider>
            {/* Theme provider for dark/light mode support */}
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              disableTransitionOnChange
            >
              {/* Root provider for Fumadocs UI components */}
              <RootProvider>
                {/* Main content */}
                {children}
              </RootProvider>
              {/* Vercel Analytics for tracking */}
              <Analytics />
              {/* Tailwind CSS breakpoint indicator (development only) */}
              <TailwindIndicator />
            </ThemeProvider>
          </TanStackQueryProvider>
        </NuqsAdapter>
        {/* Toast notifications provider */}
        <Toaster />
      </body>
    </html>
  );
}
