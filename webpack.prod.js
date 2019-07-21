/* eslint-disable */
const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { param, common } = require('./webpack.common.js')
/* eslint-enable */

const extConfig = {
  mode: 'production',
}

const extPlugins = [new CleanWebpackPlugin({ verbose: true })]
const commonConfig = common(true)

module.exports = {
  ...commonConfig,
  ...extConfig,
  plugins: [...commonConfig.plugins, ...extPlugins],
}
