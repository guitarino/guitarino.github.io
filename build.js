const webpack = require('webpack');

const configs = {
	getServer: require('./webpack.server.config'),
	getClient: require('./webpack.client.config')
};

function logErrors(err, stats) {
	if (err) {
		console.error(err.stack || err);
		if (err.details) {
			throw err.details;
		}
		throw err.stack || err;
	}
	
	const info = stats.toJson();

	if (stats.hasWarnings()) {
		console.warn(info.warnings);
	}

	if (stats.hasErrors()) {
		throw info.errors;
	}
}

webpack(configs.getServer(), (err, stats) => {
	logErrors(err, stats);

	console.log('<Server side>');
	console.log(stats.toString({
		chunks: false,
		colors: true
	}));
	console.log('</Server side>');

	console.log('<Require />');
	const { getPlufinInfos } = require('./.build-server/main');

	getPlufinInfos().then(plugins => {
		webpack(configs.getClient(plugins), (err, stats) => {
			logErrors(err, stats);

			console.log('<Client side>');
			console.log(stats.toString({
				chunks: false,
				colors: true
			}));
			console.log('</Client side>');
		});
	});
});