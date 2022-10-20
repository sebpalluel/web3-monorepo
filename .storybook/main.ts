import type { StorybookConfig } from '@storybook/core-common';
import { propNames } from '@chakra-ui/react';
// https://github.com/chakra-ui/chakra-ui/issues/2009#issuecomment-852793946
const excludedPropNames = propNames.concat(['as', 'apply', 'sx', '__css']);

export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const isStyledSystemProp = excludedPropNames.includes(prop.name);
        const isHTMLElementProp = prop.parent?.fileName.includes('node_modules') ?? false;
        return !(isStyledSystemProp || isHTMLElementProp);
      },
    },
  },
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
