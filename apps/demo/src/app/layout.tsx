import React, { type ReactNode } from "react";

import "./globals.css";

import { Providers } from "../components/Providers";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
