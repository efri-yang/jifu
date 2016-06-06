var gulp = require("gulp");
var browserSync = require('browser-sync');
var conf=require('./conf');


gulp.task("serve",["watch"],function(){
	browserSync.init({
        server:{
            baseDir:conf.paths.tmp,
            directory:true
        }
    });
});



gulp.task("serve-dist",["watch-dist"],function(){
	browserSync.init({
        server:{
            baseDir:conf.paths.dist,
            directory:true
        }
    });
})