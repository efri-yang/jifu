'use strict';

const gulp = require('gulp');
const path = require('path');
const fileinclude = require('gulp-file-include');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegoptim = require('imagemin-jpegoptim');
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');

const conf = require('./config');
const c_paths = conf.paths;
const c_folders = conf.folders;

function buildViews(){
	return gulp.src(
			[
				c_paths.src +'/**/*.html',
				'!'+c_paths.src +'/**/_*.html'
			] 
		)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cleanCss()))
		.pipe(gulp.dest(c_paths.dist))
}

function buildStyles(){
	return gulp.src(c_paths.tmp +'/**/*.{scss,sass,css}')
		.pipe(autoprefixer({
			browsers: ['> 1%', 'IE 7']
		}))
		.pipe(cleanCss())
		.pipe(gulp.dest(c_paths.dist))
}

function buildScripts(){
	return gulp.src(c_paths.tmp +'/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(c_paths.dist))
}

function buildImages(){
	return gulp.src(c_paths.tmp +'/**/*.{jpg,png,gif}')
		.pipe(imagemin(
			[imageminJpegoptim(),imageminPngquant()]
			)
		)
		.pipe(gulp.dest(c_paths.dist))
}

function buildFonts(){
	return gulp.src(c_paths.tmp +'/**/*.{eot,svg,ttf,woff,woff2}')
		.pipe(gulp.dest(c_paths.dist))
	
}

function noCompressStyles(){
	return gulp.src(c_paths.tmp +'/**/*.css')
		.pipe(autoprefixer({
			browsers: ['> 1%', 'IE 7']
		}))
		.pipe(gulp.dest(c_paths.dist))
}

function noCompressScripts(){
	return gulp.src(c_paths.tmp +'/**/*.js')
		.pipe(gulp.dest(c_paths.dist))
}

module.exports = {
	views: buildViews,
	styles: buildStyles,
	scripts: buildScripts,
	images: buildImages,
	fonts: buildFonts,
	noCompressStyles: noCompressStyles,
	noCompressScripts: noCompressScripts
};