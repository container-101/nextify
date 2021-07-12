import React from "react";
import classNames from "classnames";
import styles from "@styles/components/Button.module.scss";

interface Props {
	className?: string;
	children?: string;
	type?: string;
	size?: "small" | "medium" | "long";
	onClick?: () => void;
}

export default function Button({
	className,
	children,
	type,
	size,
	onClick,
}: Props): JSX.Element {
	return (
		<div className={classNames(className, styles.container, size)}>
			<button className={styles.btn} onClick={onClick}>
				{children}
			</button>
		</div>
	);
}