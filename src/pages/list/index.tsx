import React from "react";
import { Button, Range } from "@src/components/common";
import { Login } from "@src/components/modal";

import styles from "@styles/Home.module.scss";

export default function Home(): JSX.Element {
	return (
		<div className={styles.container}>
			<Button primary={true} size="large" social="google">
				Button
			</Button>
			<Range />
			<Login />
		</div>
	);
}
