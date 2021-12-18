import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import styles from "./MultiListCarousel.module.scss";

interface MultiListCarouselProps {
	images: string[];
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 5000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const MultiListCarousel: FC<MultiListCarouselProps> = ({ images }) => {
	const [position, setPosition] = useState(1);

	const paginate = (newDirection: number) => {
		const newPos = position + newDirection;
		let result;
		if (newPos > images.length) result = 1;
		else if (newPos < 1) result = images.length;
		else result = newPos;
		setPosition(result);
	};

	return (
		<div className={styles.container}>
			<div className={styles.CarouselSlider}>
				{images.map((image, index) => (
					<motion.div
						className={styles.imageContainer}
						key={`multicarousel-${index}`}
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
};

export default MultiListCarousel;
