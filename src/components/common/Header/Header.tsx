import React from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";

interface Props {
	className?: string;
	children?: string;
	onExitClick?: () => void;
}

export default function Header({
	className,
	children,
	onExitClick,
}: Props): JSX.Element {
	return (
		<header className={classNames(className, styles.container)}>
			<div className={styles.upper}>
				<span>
					<button onClick={onExitClick}>
						<text>X</text>
					</button>
				</span>
				<span className={styles.title}>{children}</span>
				<span />
			</div>
			<div className={styles.bottom_line} />
		</header>
	);
}
