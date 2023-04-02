import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { notchColor } from "@src/core/config/style/color";

export default class MyDocument extends Document {
  render() {
    const { light } = notchColor;

    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="icon" href="logo.ico" />
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
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
