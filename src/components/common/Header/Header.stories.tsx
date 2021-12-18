import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
	title: "Components/Header",
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "Login & Sign up",
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Booking completed",
};