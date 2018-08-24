const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: [
            'syntax-dynamic-import',
            'transform-regenerator',
            'transform-class-properties',
            ['react-css-modules', {
              filetypes: { '.scss': { syntax: 'postcss-scss' } },
              generateScopedName: '[name]__[local]___[hash:base64:5]',
            }],
          ],
        },
      },
      {
        test: /\.scss$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({ grid: true })],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: prod ? '[name].[hash].css' : '[name].css',
      chunkFilename: prod ? '[id].[hash].css' : '[id].css',
    }),
  ],
  optimization: { splitChunks: { chunks: 'all' } },
};
