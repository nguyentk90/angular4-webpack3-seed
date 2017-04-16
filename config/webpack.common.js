var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	resolve: {
		extensions: ['.ts', '.js']
	},

	module: {
		rules: [
			// angular2 typescript loader
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader?useBabel=true&useWebpackText=true'
					},
					{
						loader: 'angular2-template-loader'
					},
					{
						loader: 'angular-router-loader'
					}
				]
			},
			// html loader
			{
				test: /\.html$/,
				loader: 'raw-loader',
				exclude: [helpers.root('src/index.html')]
			},
			// static assets
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			// css global which not include in components
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				use: ExtractTextPlugin.extract({
					use: "raw-loader"
				})
			},
			// css loader and inject into components
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw-loader'
			},
			// SASS loader and inject into components      
			{
				test: /\.scss$/,
				include: helpers.root('src', 'app'),
				use: ['raw-loader', 'sass-loader']
			},
			// SASS global which not include in components
			{
				test: /\.scss$/,
				exclude: helpers.root('src', 'app'),
				use: ExtractTextPlugin.extract({
					use: ['raw-loader', 'sass-loader']
				})

			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),

		new CopyWebpackPlugin([
			{ from: 'src/assets', to: 'assets' }
		]),

		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			__dirname
		)
	]
};
