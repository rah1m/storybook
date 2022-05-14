import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Uhuru/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  color: "primary",
  outlined: false,
}
