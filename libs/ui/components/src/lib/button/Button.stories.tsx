import { StoryFn } from '@storybook/react';
import { Button } from './Button';
import { theme } from '@chakra-ui/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';

export default {
  component: Button,
  title: 'Atoms/Button',
};

export const Basic: StoryFn = (props) => <Button {...props} />;
Basic.argTypes = {
  ...getThemingArgTypes(theme, 'Button'),
  onClick: { action: 'clicked' },
  children: { type: 'string' },
};
Basic.args = {
  children: 'Button',
};
