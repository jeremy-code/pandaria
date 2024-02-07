import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";

const config = {
  logo: "Pandaria",
  docsRepositoryBase: "https://github.com/jeremy-code/pandaria/blob/main/apps/docs",
  project: {
    link: "https://github.com/jeremy-code/pandaria",
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") return { titleTemplate: "%s - Pandaria" };
  },
} satisfies DocsThemeConfig;

export default config;
