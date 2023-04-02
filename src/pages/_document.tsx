import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { notchColor } from "@src/core/config/style/color";
import { portalType } from "@src/components/ui/utils/Portal";

export default class MyDocument extends Document {
  render() {
    const { light } = notchColor;

    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            as="style"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          {/* <!-- Chrome, Firefox, Opera --> */}
          <meta content={light} name="theme-color" />
          {/* <!-- Windows Phone --> */}
          <meta content={light} name="msapplication-navbutton-color" />
          {/* <!-- iOS Safari --> */}
          <meta content={light} name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
        </Head>
        <body>
          <Main />
          {portalType.map((item) => {
            return <div key={item} id={item} />;
          })}
          <NextScript />
        </body>
      </Html>
    );
  }
}
