/* eslint-disable @typescript-eslint/no-var-requires */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const tsconfig = require('../../../tsconfig.base.json');
import path from 'path';

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    // Add tsconfig-paths-webpack-plugin to the resolve.plugins array
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../../../tsconfig.base.json'),
      }),
    ];

    // Add aliases from tsconfig.base.json to the resolve.alias object
    if (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) {
      const aliases = tsconfig.compilerOptions.paths;
      for (const alias in aliases) {
        const paths = aliases[alias].map((p) => path.resolve(__dirname, '../../../', p));
        config.resolve.alias[alias.replace('/*', '')] =
          paths.length > 1 ? paths : paths[0];
      }
    }

    return config;
  },
};
