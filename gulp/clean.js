
var gulp = require('gulp');
var del = require('del');
var conf=require('./conf');

/**
 * [清除.tmp下的所有文件]
 */
gulp.task('clean', function () {
    return del(conf.paths.tmp+"/**/*");
});


/**
 * [清除.tmp下的所有文件]
 */
gulp.task('clean-dist', function () {
    return del(conf.paths.dist+"/**/*");
});
