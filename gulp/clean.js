'use strict';

var gulp = require('gulp');
var del = require('del');

var conf = require('./config.js');
var c_paths = conf.paths;
var c_folders = conf.folders;

function clean(){
	return del(c_paths.tmp)
}

function cleanBuild(){
	return del(c_paths.dist)
}

module.exports = {
	clean: clean,
	cleanBuild: cleanBuild
}