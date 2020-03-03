const path = require('path');
const withLess = require('@zeit/next-less');

const withNextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['pages'] = path.join(__dirname, 'src/pages');
    config.resolve.alias['utils'] = path.join(__dirname, 'src/utils');
    config.resolve.alias['static'] = path.join(__dirname, 'public');

    if (isServer) {
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
