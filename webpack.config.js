var webpack = require("webpack");
module.exports = {
	entry:'./entry.js', //被打包输出的文件
	output:{
		path:__dirname, //输出路径
		filename:'build.js'  //输出文件名字 
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	},
	plugins:[
	new webpack.BannerPlugin('This file is created by trek')
	]

}