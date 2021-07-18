import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@styles/template/noscript.scss";
import "@styles/template/main.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>template</title>
				<link rel="icon" href="/images/favicon.ico" />
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=no"
				/>
				<script defer src="/utils/jquery.min.js"></script>
				<script defer src="/utils/jquery.scrolly.min.js"></script>
				<script defer src="/utils/jquery.scrollex.min.js"></script>
				<script defer src="/utils/browser.min.js"></script>
				<script defer src="/utils/breakpoints.min.js"></script>
				<script defer src="/utils/util.js"></script>
				<script defer src="/utils/main.js"></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
