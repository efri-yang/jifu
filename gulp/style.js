var gulp = require("gulp");
var sass = require("gulp-ruby-sass");
var sourcemaps = require("gulp-sourcemaps");
var cleanCSS = require("gulp-clean-css");
var cache = require('gulp-cached');
var browserSync = require('browser-sync');

var conf = require('./conf');



gulp.task('style', function() {
    sass(conf.paths.src + '/**/*.scss',{sourcemap:true})
        .pipe(sourcemaps.init({
            sourcemap:true
        }))
        .pipe(cache("cached"))
        .on('error', conf.errorHandler("style-tmp"))
        .pipe(sourcemaps.write())
       
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
});


gulp.task('style-dist', function() {
    sass(conf.paths.src + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(cache("cached"))
        .pipe(cleanCSS())
        .on('error',conf.errorHandler("style-dist"))
        .pipe(gulp.dest(conf.paths.dist))
        .pipe(browserSync.stream());
});
