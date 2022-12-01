import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';
import { Button } from './Button';
import { theme } from '@chakra-ui/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { delayData } from '@test-utils/functions';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.argTypes = {
  ...getThemingArgTypes(theme, 'Button'),
  children: { type: 'string' },
};
Primary.args = {
  action: async () => await delayData(2000, null),
  children: 'Button',
};

export const Clicked = Template.bind({});
Clicked.args = {
  action: async () => await delayData(2000, null),
  children: 'Button being clicked',
};
Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  // // 👇 Assert DOM structure
  await expect(canvas.getByText('Button being clicked')).not.toBeVisible();
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  children: 'External loading',
};

Loading.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText('External loading')).not.toBeVisible();
};
