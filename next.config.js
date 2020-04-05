const { parsed: env } = require('dotenv').config();
const path = require('path');
const withLess = require('@zeit/next-less');

const withNextConfig = {
  env,
  webpack: (config, { isServer }) => {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['gql'] = path.join(__dirname, 'src/gql');
    config.resolve.alias['models'] = path.join(__dirname, 'src/models');
    config.resolve.alias['pages'] = path.join(__dirname, 'src/pages');
    config.resolve.alias['static'] = path.join(__dirname, 'public');
    config.resolve.alias['utils'] = path.join(__dirname, 'src/utils');

    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};

module.exports = withLess({
  cssModules: true,
  ...withNextConfig,
});
