import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@styles/globals.scss";

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
			</Head>
			<Component {...pageProps} />
		</>
	);
}
