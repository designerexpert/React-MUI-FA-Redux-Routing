const path = require('path');
module.exports = function({ config }) {
	config.module.rules.push({
		test: /\.jsx?$/,
		include: path.resolve('./src/stories'),
		loaders: [ require.resolve('@storybook/addon-storysource/loader') ],
		enforce: 'pre'
	});

	return config;
};
