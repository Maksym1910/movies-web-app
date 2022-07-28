const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const getModule = require('./webpack.module');
const getDevServer = require('./webpack.dev-server');
const getResolve = require('./webpack.resolve');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: {
    app: path.resolve('src', 'index.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: env.production ? 'js/[chunkhash:6].[name].js' : 'js/[name].js',
    chunkFilename: env.production ? 'js/[chunkhash:6].[name].js' : 'js/[name].js',
  },
  module: getModule(),
  devServer: getDevServer(),
  resolve: getResolve(),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
});
