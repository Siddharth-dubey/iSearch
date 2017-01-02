var gulp=require('gulp');
var path=require('path');
var gutil=require('gulp-util');
var sass=require('gulp-sass');
var sourcemaps=require('gulp-sourcemaps');
var concat=require('gulp-concat');
// var webpack=require('webpack');
var webpackDevServer=require('webpack-dev-server');

gulp.task('compile-scss',()=>{
	return gulp.src(path.join(__dirname,'./source/scss/**/*.scss'))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(concat('build.css'))
	.pipe(gulp.dest(path.join(__dirname,'/build/css/')));
});

const webpack_config={
	entry:'./main.js',
	output:{
		//filename:'[hash].js' Better in production for caching
		filename:'bundle.js' //better for development
	},
	watch:true,
	devtool:'source-map',
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:'/node_modules',
				loader:'babel',
				query:{
					presets:['es2015','react','stage-0']
				}
			}
		]
	}
};

gulp.task('webpack',()=>{
	return gulp.src('main.js')
	.pipe(webpack(webpack_config))
	.pipe(gulp.dest('dist/'));	
});

gulp.task('watcher',()=>{
	gulp.watch(path.join(__dirname,'./source/scss/**/*.scss'),['compile-scss'])
})