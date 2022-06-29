import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@components/Button";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		size: {
			options: ["sm", "lg", "xl"],
		},
		onClick: {},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	size: "lg",
};
