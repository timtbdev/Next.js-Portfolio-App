import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com"],
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
