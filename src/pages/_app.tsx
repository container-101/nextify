import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "@src/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import Analytics from "@src/components/analytics";
import { siteMetadata } from "@src/core/config/siteMetadata";
import { envConfig } from "@src/core/config/envConfig";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>{envConfig.appTitle}</title>
        <link rel="icon" href="/logo.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <RecoilRoot>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
