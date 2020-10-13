const webpack = require('webpack');

const configs = {
	getServer: require('./webpack.server.config'),
	getClient: require('./webpack.client.config')
};

function logErrors(err, stats) {
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
	const { getHtmlPlugins } = require('./.build-server/main');

	getHtmlPlugins().then(plugins => {
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