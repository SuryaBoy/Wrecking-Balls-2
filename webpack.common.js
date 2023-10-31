const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    boot: './src/boot.js',  	
  	splashScene: './src/splashScene.js',
  	menu: './src/menu.js',
  	gameScene: './src/gameScene.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Development',
      template: './index.html',
      // filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav|mpe?g)$/i,
         type: 'asset/resource'
      },
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};