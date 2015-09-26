'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const path = require('path')

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
      // It is stupid that I need to do this, but this is because Formsy doesn't transpile
      // its code in a prepublish step (for whatever reason), and also for some reason, src/main.js doesn't
      // resolve correctly (even though it should)
      'formsy-react': path.resolve(__dirname, 'node_modules/formsy-react/release/formsy-react.js')
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
