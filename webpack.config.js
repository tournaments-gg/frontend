'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  entry: {
    main: './src/index.jsx',
    vendor: ['react']
  },
  output: {
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new CommonsChunkPlugin('vendor', 'vendor.js'),
    new HtmlWebpackPlugin()
  ],
	module: {
		loaders: [
			{ test: /\.jsx$/, include: /src/, loader: 'babel?stage=1' }
    ]
  },
  devServer: {
    host: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    contentBase: './public',
    historyApiFallback: true
  }
}

