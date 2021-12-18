import React, { FC } from "react";
import { Button } from "@src/components/common";
import styles from "@styles/pages/test.module.scss";

const ButtonTest: FC<void> = () => {
	return (
		<div className={styles.container}>
			<h1>ButtonTest</h1>
			<Button btnSize="extra-small">ABC</Button>
			<Button btnSize="small">ABC</Button>
			<Button btnSize="medium">ABC</Button>
			<Button btnSize="large">ABC</Button>
			<Button btnSize="medium" btnStyles="primary">
				ABC
			</Button>
			<Button btnSize="medium" btnStyles="secondary">
				ABC
			</Button>
			<Button btnSize="medium" btnStyles="default">
				ABC
			</Button>
			<Button btnSize="medium" btnStyles="danger">
				ABC
			</Button>
			<Button btnSize="medium" btnStyles="link">
				ABC
			</Button>
		</div>
	);
};

export default ButtonTest;
