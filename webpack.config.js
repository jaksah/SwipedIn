var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './public/bundle.js'
	},
	resolve: {
        root: [path.join(__dirname, 'src')]
    },    
	module: {
		loaders: [
			{
				test: /\.jsx$/,
  				exclude: /node_modules/,
  				loaders: ["babel-loader"],
			},
			{
				test: /\.js$/,
  				exclude: /node_modules/,
  				loaders: ["babel-loader"],
			}
		],
	}
};

