import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import MultiList from "./MultiList";

export default {
	title: "Components/MultiList",
	component: MultiList,
} as ComponentMeta<typeof MultiList>;

type ImageDatas = {
	id: number;
	url: string;
};

const imageList: Array<ImageDatas> = [
	{
		url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
		id: 1,
	},
	{
		url: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		id: 2,
	},
	{
		url: "https://images.unsplash.com/photo-1596957470345-deea5fbadd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80",
		id: 3,
	},
	{
		url: "https://images.unsplash.com/photo-1596957470345-deea5fbadd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80",
		id: 4,
	},
	{
		url: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		id: 5,
	},
	{
		url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
		id: 6,
	},
];

export const DefaultMultiList = (): JSX.Element => {
	return (
		<div>
			<MultiList />
		</div>
	);
};
