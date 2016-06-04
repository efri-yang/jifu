var gulp = require('gulp');
var cache = require('gulp-cached');
var browserSync = require('browser-sync');
var conf=require('./conf');
gulp.task('script', function() {
	gulp.src(conf.paths.src + '/**/*.js')
		.pipe(cache())
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
});
gulp.task('script-dist', function() {
	gulp.src(conf.paths.src + '/**/*.js')
		.pipe(cache())
        .pipe(gulp.dest(conf.paths.dist))
        .pipe(browserSync.stream());

});