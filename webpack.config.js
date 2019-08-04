const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const envConfig = require('./config/env.config');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'public', 'index.html'),
  inject: true
});

module.exports = {
  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
    fs: 'empty'
  },
  entry: ['@babel/polyfill', './src/index.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: envConfig.PORT,
    publicPath: '/',
    historyApiFallback: true,
    hotOnly: true,
    open: false
  },
  plugins: [
    htmlWebpackPlugin,
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new Dotenv({ path: path.resolve(__dirname, '.env') }),
    new ManifestPlugin(),
    new CopyPlugin([
      { from: path.join(__dirname, 'public/', 'css/'), to: path.join(__dirname, 'build', 'css/') },
      {
        from: path.join(__dirname, 'public/', 'webfonts/'),
        to: path.join(__dirname, 'build', 'webfonts/')
      },
      {
        from: path.join(__dirname, 'public/', 'icon.png'),
        to: path.join(__dirname, 'build', 'icon.png')
      }
    ])
  ]
};
