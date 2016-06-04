var gulp = require("gulp");
var fileInclude = require("gulp-file-include");
var cache = require('gulp-cached');
var browserSync = require('browser-sync');

var conf=require('./conf');

gulp.task('html', function() {
    gulp.src([conf.paths.src + '/**/*.html', "!" + conf.paths.src + '/**/_*.html'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .on('error', conf.errorHandler("html-tmp"))
        .pipe(cache())
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
});


gulp.task('html-dist', function() {
	gulp.src([conf.paths.src + '/**/*.html', "!" + conf.paths.src + '/**/_*.html'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .on('error', conf.errorHandler("html-dist"))
        .pipe(cache())
        .pipe(gulp.dest(conf.paths.dist))
        .pipe(browserSync.stream());
        // .pipe(browserSync.reload({ stream: true }));
});
