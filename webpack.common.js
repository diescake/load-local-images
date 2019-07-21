/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/* eslint-enable */

const param = {
  title: 'load-local-images',
  entryPath: './src/index.ts',
  distPath: './public',
  templatePath: './src/template.html',
}

const optimization = {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 524288, // 500KB
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    automaticNameMaxLength: 30,
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
}

const plugins = [
  new HtmlWebpackPlugin({
    templateParameters: { title: param.title },
    template: param.templatePath,
  }),
]

const common = isProd => ({
  entry: param.entryPath,
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, param.distPath),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.sass', '.css', '.yaml', '.yml'],
  },
  module: {
    rules: [{ test: /\.(ts|tsx)$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  optimization,
  plugins,
})

module.exports = { param, common }
