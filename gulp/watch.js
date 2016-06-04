var gulp = require("gulp");
var conf = require('./conf');



gulp.task('watch',function() {
    gulp.watch(conf.paths.src + '/**/*.html',["html"]);
    gulp.watch(conf.paths.src + '/**/*.scss', ["style"]);
    gulp.watch(conf.paths.src + "/**/*.{png,jpg,gif,ico}", ["image"]);
    gulp.watch([conf.paths.src + '/**/*', '!' + conf.paths.src + '/**/*.{html,css,js,scss,png,jpg,gif,ico}'], ["other"]);


});


gulp.task('watch-dist', function() {
    gulp.watch(conf.paths.src + '/**/*.html', ["html-dist"]);
    gulp.watch(conf.paths.src + '/**/*.scss', ["style-dist"]);
    gulp.watch(conf.paths.src + "/**/*.{png,jpg,gif,ico}", ["image-dist"]);
    gulp.watch([conf.paths.src + '/**/*', '!' + conf.paths.dist + '/**/*.{html,css,js,scss,png,jpg,gif,ico}'], ["other-dist"]);
});
