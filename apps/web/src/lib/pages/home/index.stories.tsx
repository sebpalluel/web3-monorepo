import Home from './index';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {};
