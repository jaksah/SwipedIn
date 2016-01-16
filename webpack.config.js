var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/public',
        filename: 'bundle.js'
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
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader" },
			{ test: /\.eot$/,    loader: "file-loader" },
			{ test: /\.svg$/,    loader: "file-loader" }
		],
	}
};

