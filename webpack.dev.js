const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: ['src/**/*'],
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    allowedHosts: ['all'],
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
});
