'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var bsCreate = browserSync.create();

var conf = require('./config.js');
var c_paths = conf.paths;
var c_folders = conf.folders;

module.exports = {
	reload: bsCreate.reload,
	dev: ()=>{
		bsCreate.init({
			server: {
				baseDir: c_paths.tmp,
				directory: true,
			}
			
		});
	}
}