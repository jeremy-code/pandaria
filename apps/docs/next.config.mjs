import bundleAnalyzer from "@next/bundle-analyzer";
import nextra from "nextra";

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });
const withNextra = nextra({ theme: "nextra-theme-docs", themeConfig: "./theme.config.tsx" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  logging: { fetches: { fullUrl: true } },
  experimental: {
    ppr: true,
    webpackBuildWorker: true,
  },
};

export default withBundleAnalyzer(withNextra(nextConfig));
