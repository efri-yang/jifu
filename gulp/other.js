var gulp = require("gulp");
var filter = require('gulp-filter');
var browserSync = require('browser-sync');
var conf = require('./conf');

gulp.task('other', function() {
    gulp.src([conf.paths.src + '/**/*', '!' + conf.paths.src + '/**/*.{html,js,scss,png,jpg,gif,ico}'])
        //过滤空文件夹住
        .pipe(filter(function(file) {
            return file.stat.isFile();
        }))
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
});


gulp.task('other-dist', function() {
    gulp.src([conf.paths.src + '/**/*', '!' + conf.paths.src + '/**/*.{html,js,scss,png,jpg,gif,ico}'])
        .pipe(filter(function(file) {
            return file.stat.isFile();
        }))
        .pipe(gulp.dest(conf.paths.dist))
        .pipe(browserSync.stream());
});
