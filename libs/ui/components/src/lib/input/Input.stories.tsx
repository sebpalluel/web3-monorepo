import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { theme } from '@chakra-ui/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { Input } from './Input';

const labelText = 'This is a label';

const Story: ComponentMeta<typeof Input> = {
  component: Input,
  title: 'Atoms/Input',
  args: {
    label: labelText,
  },
  argTypes: {
    label: { control: 'text' },
    helper: { control: 'text' },
    error: { control: 'text' },
    input: { control: 'text' },
  },
};
export default Story;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.argTypes = {
  ...getThemingArgTypes(theme, 'Input'),
};

export const Required = Template.bind({});
Required.argTypes = {
  isRequired: {
    type: 'boolean',
  },
};
Required.args = { isRequired: true };

export const TypeText = Template.bind({});
TypeText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByLabelText(labelText);
  console.log({ input });
  await expect(canvas.getByText(labelText)).toBeVisible();
  await userEvent.click(input);
  const text = 'This is some text';
  await userEvent.type(input, text);
  await expect(canvas.getByText(labelText)).toBeVisible();
  expect(input).toHaveValue(text);
};
