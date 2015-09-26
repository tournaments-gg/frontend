'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  entry: {
    main: './src/index.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'formsy-react': '../../src/main'
    }
  },
  plugins: [
    new CommonsChunkPlugin('vendor', 'vendor.js'),
    new HtmlWebpackPlugin({
			template: 'template.html',
			inject: 'body'
		})
  ],
	module: {
		loaders: [
			{ test: /\.jsx$/, include: /src/, loaders: ['babel?stage=1', 'standard'] }
    ]
  },
  devServer: {
    host: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    contentBase: './public',
    historyApiFallback: true
  }
}

