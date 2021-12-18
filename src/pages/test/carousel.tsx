import React from "react";
import { images } from "@src/data/sample-images";
import {
	Carousel,
	ListCarousel,
	MultiListCarousel,
} from "@src/components/common";

export default function FramerPage(): JSX.Element {
	return (
		<div>
			<Carousel images={images} />
			{/* <ListCarousel /> */}
			{/* <MultiListCarousel images={images} /> */}
		</div>
	);
}
