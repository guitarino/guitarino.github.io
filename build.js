const path = require('path');
const webpack = require('webpack');

require("@babel/register")({
	"extensions": ['.js', '.jsx', '.ts', '.tsx'],
	"configFile": path.resolve(__dirname, 'babel.build.config.json'),
	"only": [
		fn => {
			const file = path.resolve(fn);
			return file.indexOf(path.resolve(__dirname, 'src')) === 0 ||
				file.indexOf(path.resolve(__dirname, 'build.getWebpackConfig.ts')) === 0;
		}
	],
});

const getWebpackConfig = require('./build.getWebpackConfig').default;

getWebpackConfig().then((config) => {
	webpack(config, (err, stats) => {
		if (err) {
			console.error(err.stack || err);
			if (err.details) {
				console.error(err.details);
			}
			return;
		}
		
		const info = stats.toJson();
	
		if (stats.hasErrors()) {
			console.error(info.errors);
		}
	
		if (stats.hasWarnings()) {
			console.warn(info.warnings);
		}

		console.log(stats.toString({
			chunks: false,
			colors: true
		}));
	});
});