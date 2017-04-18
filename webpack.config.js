var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: {
		app: "./src/App.js"
	},
	output: {
		filename:"build/bundle.js",
        sourceMapFilename: "build/bundle.map"
	},
	  resolve: {
	    extensions: ['', '.js', '.jsx']
	  },
    devtool: '#source-map',	
	// plugins: [
 //    	new webpack.optimize.UglifyJsPlugin({minimize: true}),
	// ],	
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css' },
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	},
}