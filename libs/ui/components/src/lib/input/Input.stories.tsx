import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { theme } from '@chakra-ui/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { Input } from './Input';

const Story: ComponentMeta<typeof Input> = {
  component: Input,
  title: 'Input',
};
export default Story;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.argTypes = {};
Primary.args = { label: 'This is a label' };

export const Required = Template.bind({});
Required.argTypes = {
  isRequired: {
    type: 'boolean',
  },
};
Required.args = { label: 'This is a label', isRequired: true };
