/* eslint-disable import/extensions */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: 'Firefox',
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
});
