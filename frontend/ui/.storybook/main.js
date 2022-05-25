const {
  mergeConfig
} = require('vite');

const path = require('path');

module.exports = {
  stories: ['../components/stories/**/*.stories.mdx', '../components/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  },
  viteFinal: async config => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "../assets/styles/global.scss";'
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
          '~': path.resolve(__dirname, '../')
        }
      }
    });
  }
};