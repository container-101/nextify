import React from "react";
import classNames from "classnames";
import styles from "./Login.module.scss";
import { Header, Select, Button } from "@src/components/common";

interface Props {
	primary?: boolean;
	className?: string;
	backgroundColor?: string;
	onClick?: () => void;
}

export default function LogNSign({
	className,
	backgroundColor,
	onClick,
}: Props): JSX.Element {
	const mode = styles.modal_primary;
	return (
		<div className={classNames(styles.modal, className, mode)}>
			<Header className={styles.title_box}>{"Login & Sign Up"}</Header>
			<div className={styles.intro_box}>Welcome to Template</div>
			<Select className={styles.select_box} contentName="Country/Region">
				<option value="0">South Korea(+82)</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</Select>
			<Select className={styles.select_box} contentName="E-mail">
				<option value="0">woodi.daily@gmail.com</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</Select>
			<div className={styles.warning_box}>Sample Text for further alert</div>
			<Button className={styles.login_btn} primary={true} size="large">
				Continue
			</Button>
			<div className={styles.line_btw_login_btn} />
			<Button
				className={styles.social_btn}
				primary={true}
				social="google"
				size="large"
			>
				Sign in with Google
			</Button>
			<Button
				className={styles.social_btn}
				primary={true}
				social="kakao"
				size="large"
			>
				Sign in with Kakao
			</Button>
			<Button
				className={styles.social_btn}
				primary={true}
				social="naver"
				size="large"
			>
				Sign in with Naver
			</Button>
		</div>
	);
}
