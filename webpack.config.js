var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: __dirname + "/ts/main.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/"
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "eval-source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [{
				test: /(\.tsx|\.ts)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"es2015", "react"
						]
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader?module', 'less-loader']
				})
//				loader: "style-loader!css-loader?modules!less-loader"
			}
		]
	},

	devServer: {
		contentBase: "./", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	plugins: [
		// 提取 CSS 到单独的文件中
		new ExtractTextPlugin('./css/bundle.css')
	],

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};