const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function getExternals() {
	const package = require('./package.json');
	const externals = {};
	[package.devDependencies, package.dependencies].forEach(deps => {
		for (const dep in deps) {
			externals[dep] = `commonjs2 ${dep}`;
		}
	});
	return externals;
}

module.exports = function getWebpackConfig() {
	return {
		target: 'node',
		entry: {
			'main': './src/main-server.tsx',
		},
		mode: 'development',
		devtool: 'inline-source-map',
		output: {
			path: path.resolve(__dirname, '.build-server'),
			publicPath: '/',
			filename: '[name].js',
			chunkFilename: '[id].js',
			libraryTarget: 'commonjs2',
		},
		externals: getExternals(),
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
							configFile: path.resolve(__dirname, 'babel.server.config.json')
						}
					}
				},
				{
					test: /\.(s[ac]ss|css)$/i,
					use: [
						'raw-loader',
					],
				},
				{
					test: /\.md$/i,
					use: 'raw-loader',
				},
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
		],
	};
}