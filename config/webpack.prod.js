var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

//const extractCSS = new ExtractTextPlugin('[name]-one.css');
const extractSASS = new ExtractTextPlugin('[name].css');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      /*{
        test: /\.css$/,
        use: extractCSS.extract({loader: 'css-loader'})
      },*/
      {
        test: /\.scss$/i,
        loader: extractSASS.extract('css-loader!sass-loader')
      },
    ]
  },
  plugins: [ 
    //extractCSS,
		extractSASS
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});