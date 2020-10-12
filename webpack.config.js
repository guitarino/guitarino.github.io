const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
	entry: {
		'main': './src/main.ts',
	},
	output: {
		path: path.resolve(__dirname, '.build'),
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
						configFile: path.resolve(__dirname, 'babel.config.json')
					}
				}
			}
		]
	},
};