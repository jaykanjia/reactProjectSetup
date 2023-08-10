const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "main.bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
	],
};
