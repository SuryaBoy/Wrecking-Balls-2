const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:'development',
  entry: {
  	index: './src/index.js',
  	print: './src/print.js',
    boot: './src/boot.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Development',
      template: './index.html',
      // filename: './index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
  	https: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    client: {
    	progress: true,
    }
  },
};