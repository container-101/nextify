import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Range from "./Range";

export default {
	title: "Components/Range",
	component: Range,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: "Range",
};
