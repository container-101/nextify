import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import "public/sass/main.scss";
import "public/sass/noscript.scss";

import { GlobalStyle } from "@src/styles/global-styles";
import { theme } from "@src/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Head>
				<title>boundary</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=no"
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
