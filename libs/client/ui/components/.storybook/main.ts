import type { StorybookConfig } from '@storybook/react-webpack5';

const isCI = !!process.env.GITHUB_EVENT_NAME; // Check if running in CI

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
    '@nrwl/react/plugins/storybook',
  ],
  features: {
    storyStoreV7: !isCI,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
