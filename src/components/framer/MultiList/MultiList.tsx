import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import styles from "./MultiList.module.scss";

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 5000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};

export default function MultiList(): JSX.Element {
	const [position, setPosition] = useState(1);

	const paginate = (newDirection) => {
		setPosition(position + newDirection);
	};

	return (
		<div className={styles.container}>
			<div className={styles.CarouselSlider}>
				{images.map((image, index) => (
					<motion.div
						className={styles.imageContainer}
						key={index}
						animate={{
							left: `${(index - position) * 31 - 30}vw`,
							scale: index === position ? 0.5 : 0.5,
						}}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0.5}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);
							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
							// console.log(offset, velocity);
						}}
					>
						<img src={image} alt="d" />
					</motion.div>
				))}
			</div>
			<div className={styles.next} onClick={() => paginate(1)}>
				{"‣"}
			</div>
			<div className={styles.prev} onClick={() => paginate(-1)}>
				{"‣"}
			</div>
		</div>
	);
}
