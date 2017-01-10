'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const conf = require('./config.js');
const c_paths = conf.paths
const c_folders = conf.folders;
const server = require('./server');

function styles(){
	return gulp.src(c_paths.src +'/**/*.{scss,sass,css}')
		.pipe(sourcemaps.init({sourcemap:true}))
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write({includeContent: false}))
		.pipe(autoprefixer({
			browsers: ['> 1%', 'IE 7']
		}))
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest(c_paths.tmp))
		.pipe(server.reload({stream:true}))
}

module.exports = styles;