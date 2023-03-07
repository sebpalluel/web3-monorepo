import type { StorybookConfig } from '@storybook/nextjs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@nrwl/react/plugins/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
};

export default config;
