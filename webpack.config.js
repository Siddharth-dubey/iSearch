var path=require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        path:path.join(__dirname,'./'),
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    watch:true,
    devtool: '#source-map',
    module: {
        loaders: [
            {
            	exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
					presets:['es2015','stage-0','react']
				},
               
            }
        ]
    }
}