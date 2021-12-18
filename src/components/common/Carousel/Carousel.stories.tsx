import React from "react";
import { ComponentMeta } from "@storybook/react";
import Carousel from ".";
import { images } from "@src/data/sample-images";

export default {
	title: "Components/Carousel",
	component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Primary = (): JSX.Element => {
	return <Carousel images={images} />;
};
