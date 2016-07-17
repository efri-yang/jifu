var gulp = require("gulp");
var pngquant = require('imagemin-pngquant');
var imagemin = require("gulp-imagemin");
var cache = require('gulp-cached');
var browserSync = require('browser-sync');
var conf = require('./conf');

gulp.task("image", function() {
    return gulp.src(conf.paths.src + "/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}")
        .pipe(cache())
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
});


gulp.task("image-dist", function() {
    return gulp.src(conf.paths.src + "/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}")
        .pipe(cache(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
                        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
                        interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
                        multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            svgoPlugins: [{ removeViewBox: false }], //不要移除svg的viewbox属性
                        use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest(conf.paths.dist))
        .pipe(browserSync.stream());
});
