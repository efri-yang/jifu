'use strict';

var gulp = require('gulp');

var conf = require('./config.js');
var c_paths = conf.paths;
var c_folders = conf.folders;

function othersTmp(){
	return gulp.src(
			[
				conf.paths.src + '/**',
				'!' + conf.paths.src + '/' + c_folders.images +'/**',
				'!' + conf.paths.src + '/' + c_folders.js +'/**',
				'!' + conf.paths.src + '/' + c_folders.css +'/**',
				'!' + conf.paths.src + '/' + c_folders.html +'/**'
			]
		)
		.pipe(gulp.dest(conf.paths.tmp + '/'))
}

module.exports = {
	tmp: othersTmp
}