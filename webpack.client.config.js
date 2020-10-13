const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function getWebpackConfig(htmlPlugins) {
	return {
		entry: {
			'main': './src/main-client.ts',
		},
		mode: 'development',
		devtool: 'inline-source-map',
		output: {
			path: path.resolve(__dirname, '.build-client'),
			publicPath: '/',
			filename: '[name].js',
			chunkFilename: '[id].js',
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
			plugins: [
				PnpWebpackPlugin,
			],
		},
		resolveLoader: {
			plugins: [
				PnpWebpackPlugin.moduleLoader(module),
			],
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx|ts|tsx)$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: require.resolve('babel-loader'),
						options: {
							configFile: path.resolve(__dirname, 'babel.client.config.json')
						}
					}
				},
				{
					test: /\.(s[ac]ss|css)$/i,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.md$/i,
					use: 'raw-loader',
				},
			]
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.s?css$/,
						chunks: 'all',
						minChunks: 1,
						reuseExistingChunk: true,
						enforce: true,
					},
				},
			},
		},
		plugins: [
			new CleanWebpackPlugin(),
			...htmlPlugins,
			new MiniCssExtractPlugin(),
			new WebpackPwaManifest({
				"name": "Kirill Shestakov - Full Stack Developer",
				"short_name": "Kirill Shestakov",
				"description": "Kirill Shestakov - Full Stack Developer - Personal website",
				"start_url": "/",
				"theme_color": "#383548",
				"display": "standalone",
				"orientation": "natural",
				"icons": [
					{
						"src": "./assets/images/favicon/android-icon-36x36.png",
						"sizes": "36x36",
						"type": "image/png"
					},
					{
						"src": "./assets/images/favicon/android-icon-48x48.png",
						"sizes": "48x48",
						"type": "image/png"
					},
					{
						"src": "./assets/images/favicon/android-icon-72x72.png",
						"sizes": "72x72",
						"type": "image/png"
					},
					{
						"src": "./assets/images/favicon/android-icon-96x96.png",
						"sizes": "96x96",
						"type": "image/png"
					},
					{
						"src": "./assets/images/favicon/android-icon-144x144.png",
						"sizes": "144x144",
						"type": "image/png"
					},
					{
						"src": "./assets/images/favicon/android-icon-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					}
				]
			})
		],
	};
}