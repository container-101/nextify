import React from "react";
import { ComponentMeta } from "@storybook/react";
import { MultiListCarousel } from "..";
import { images } from "@src/data/sample-images";

export default {
	title: "Components/MultiListCarousel",
	component: MultiListCarousel,
} as ComponentMeta<typeof MultiListCarousel>;

export const Default = (): JSX.Element => {
	return (
		<div>
			<MultiListCarousel images={images} />
		</div>
	);
};
