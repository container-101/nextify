import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface Props {
	className?: string;
	primary?: boolean;
	backgroundColor?: string;
	social?: "google" | "kakao" | "naver";
	size?: "small" | "medium" | "large";
	children?: string;
	onClick?: () => void;
}

export default function Button({
	className,
	primary = false,
	backgroundColor,
	social,
	size = "medium",
	children,
	onClick,
	...props
}: Props): JSX.Element {
	const mode = primary ? styles.btn_primary : styles.btn_secondary;
	const btn_size =
		size === "medium"
			? styles.btn_medium
			: size === "small"
			? styles.btn_small
			: styles.btn_large;
	const btn_social = !social
		? undefined
		: social === "google"
		? styles.google
		: social === "kakao"
		? styles.kakao
		: styles.naver;
	return (
		<div className={classNames(className)}>
			<button
				type="button"
				className={classNames(styles.btn, mode, btn_size, btn_social)}
				style={{ backgroundColor }}
				onClick={onClick}
				{...props}
			>
				{social && <img src={`/${social}.svg`} alt="" />}
				{children}
			</button>
		</div>
	);
}
