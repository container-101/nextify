import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styles from "./List.module.scss";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function FramerList(): JSX.Element {
	return (
		<div className={styles.container}>
			<AnimateSharedLayout>
				<motion.ul layout initial={{ borderRadius: 25 }}>
					{items.map((item) => (
						<Item key={item} />
					))}
				</motion.ul>
			</AnimateSharedLayout>
		</div>
	);
}

function Item() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
			<motion.div className={styles.avatar} layout />
			<AnimatePresence>{isOpen && <Content />}</AnimatePresence>
		</motion.li>
	);
}

function Content() {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={styles.row} />
			<div className={styles.row} />
			<div className={styles.row} />
		</motion.div>
	);
}

const items = [0, 1, 2];