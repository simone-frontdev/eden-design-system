const path = require('path');
module.exports = {
  stories: ["../src/**/**/*.stories.mdx", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  staticDirs: ['../public', '../src/fonts'],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};