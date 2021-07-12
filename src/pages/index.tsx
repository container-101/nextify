import React from "react";
import { Contact, Footer, Header, Main, Menu } from "@src/components";

export default function Home(): JSX.Element {
	// useEffect(() => {
	// 	document.querySelector("body").classList.add("is-preload");
	// }, []);

	return (
		<div id="wrapper">
			<Header />
			<Menu />
			<Main />
			<Contact />
			<Footer />
		</div>
	);
}
