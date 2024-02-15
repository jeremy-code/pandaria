import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  logging: { fetches: { fullUrl: true } },
  transpilePackages: ["@pandaria/panda-preset", "styled-system"],
  experimental: {
    ppr: true,
    webpackBuildWorker: true,
  },
};

export default withBundleAnalyzer(nextConfig);
