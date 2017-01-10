'use strict';

const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync');
const del = require('del');
const bsCreate = browserSync.create();

const conf = require('./gulp/config');
const c_paths = conf.paths;
const c_folders = conf.folders;

const views = require('./gulp/views');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const images = require('./gulp/images');
const others = require('./gulp/others')
const watch = require('./gulp/watch');
const server = require('./gulp/server');
const clean = require('./gulp/clean');
const build = require('./gulp/build');


gulp.task('default', gulp.series(clean.clean, gulp.parallel(watch, views, scripts, styles, images, server.dev)));

gulp.task('dist', gulp.series(clean.clean, clean.cleanBuild, gulp.parallel(views, scripts, styles, images), build.views, build.styles, build.scripts, build.images, build.fonts));

// 不压缩css
gulp.task('dist:ncss', gulp.series(clean.clean, clean.cleanBuild, gulp.parallel(views, scripts, styles, images), build.views, build.noCompressStyles, build.scripts, build.images, build.fonts));

// 不压缩js
gulp.task('dist:njs', gulp.series(clean.clean, clean.cleanBuild, gulp.parallel(views, scripts, styles, images), build.views, build.styles, build.noCompressScripts, build.images, build.fonts));

// 全部不压缩
gulp.task('dist:nall', gulp.series(clean.clean, clean.cleanBuild, gulp.parallel(views, scripts, styles, images), build.views, build.noCompressStyles, build.noCompressScripts, build.images, build.fonts));
