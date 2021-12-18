import React, { useEffect, useState } from "react";
import styles from "./Range.module.scss";

interface Props {
	max?: number;
	placeholder?: string;
	onClick?: () => void;
}

export default function Range({
	max = 50000,
	placeholder = "",
}: Props): JSX.Element {
	const [value, setValue] = useState<number>(max / 2);

	const onSliderMove = (e) => {
		const { value, style } = e.target;
		style.setProperty(
			"--bgColor",
			"linear-gradient(90deg, #ffd951 0%, #ff7051 " +
				(value / max) * 100 +
				"%, #d5d4d3 " +
				(value / max) * 100 +
				"%, #d5d4d3 100%)",
		);
		setValue(value);
	};

	useEffect(() => {
		const inputElem = document.querySelector("input");
		inputElem.style.setProperty(
			"--bgColor",
			"linear-gradient(90deg, #ffd951 0%, #ff7051 " +
				(value / max) * 100 +
				"%, #d5d4d3 " +
				(value / max) * 100 +
				"%, #d5d4d3 100%)",
		);
	}, [max, value]);

	return (
		<div className={styles.container}>
			<input
				type="range"
				placeholder={placeholder}
				min={0}
				max={max}
				step={max / 100}
				value={value}
				onChange={onSliderMove}
			/>
		</div>
	);
}
