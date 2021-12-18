import React from "react";
import { ComponentMeta } from "@storybook/react";
import ListCarousel from ".";
import { images } from "@src/data/sample-images";

export default {
	title: "Components/ListCarousel",
	component: ListCarousel,
} as ComponentMeta<typeof ListCarousel>;

export const Primary = (): JSX.Element => {
	return <ListCarousel images={images} />;
};
