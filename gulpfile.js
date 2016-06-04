
var gulp = require("gulp");
var wrench=require("wrench");
var runSequence = require('run-sequence');



wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file);
});




/**
 * tmp任务
 */


gulp.task("default",function(){
  runSequence('clean',["html","style",'image','script'],'other',"serve");
});




/**
 * dist 任务
 */
gulp.task("dist",function(){
    runSequence('clean-dist',["html-dist","style-dist",'image-dist','script-dist'],'other-dist','serve-dist');
})







// var gulp = require("gulp");
// var sass = require("gulp-ruby-sass");
// var imagemin = require("gulp-imagemin");
// var sourcemaps = require("gulp-sourcemaps");
// var pngquant = require('imagemin-pngquant');
// var browserSync = require('browser-sync').create();
// var reload      = browserSync.reload;
// var filter      = require('gulp-filter');
// var watch=require("gulp-watch");
// var cache = require('gulp-cached');
// var plumber = require('gulp-plumber');
// var notify = require('gulp-notify');
// var del=require("del");
// var rename = require('gulp-rename');
// var fileInclude =require("gulp-file-include");
// var wrench=require("wrench");
// var autoPrefixer=require("gulp-autoprefixer");
// var cleanCSS=require("gulp-clean-css");
// var gulpUtil = require('gulp-util');
// var runSequence = require('run-sequence');


// function errorHanding(title) {
//   'use strict';
//   return function(err) {
//     gulpUtil.log("错误异常——执行任务"+gulpUtil.colors.magenta('[' + title + ']:\n'),err.message);
//     this.emit('end');//不让卡住文档流
//   };
// };
// gulp.task('sass',function() {  
//     return sass('src/**/*.scss',{ sourcemap: true})
//         .pipe(cache("cached"))
//         .on('error',errorHanding("sass"))
//         .pipe(sourcemaps.write('maps', {
//               includeContent: false,
//               sourceRoot: 'source'
//          }))
//         .pipe(gulp.dest(".tmp"))
//         .pipe(browserSync.reload({stream:true}));
// });
// gulp.task('html',function() {  
//     gulp.src(['src/**/*.html','!src/**/_*.html'])
//         .pipe(fileInclude({
//             prefix: '@@',
//             basepath: '@file'
//         }))
//         .on('error',errorHanding("html-build"))
//         .pipe(cache())
//         .pipe(gulp.dest(".tmp/"))
//         .pipe(browserSync.reload({stream:true}));
// });

// gulp.task("clean",function(){
//   return del(".tmp/**/*");
// });

// gulp.task("default",function(){
//    runSequence("clean",["html","sass"])
// });



/**
 * tmp任务
 */







/**
 * dist 任务
 */
gulp.task("dist",function(){
    runSequence('clean-dist',["html-dist","style-dist",'image-dist','script-dist'],'other-dist','serve-dist');
})





