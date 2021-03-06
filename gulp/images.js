'use strict';

const gulp = require('gulp');

const conf = require('./config.js');
const c_paths = conf.paths;
const c_folders = conf.folders;
const server = require('./server');

function images(){
	return gulp.src(c_paths.src +'/**/*.{eot,svg,ttf,woff,woff2,jpg,png,gif}')
		.pipe(gulp.dest(c_paths.tmp))
}

module.exports = images;