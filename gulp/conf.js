var gulpUtil = require('gulp-util');


module.exports = {
    paths: {
        src: 'src',
        tmp: '.tmp',
        dist: 'dist',
    },
    errorHandler:function(tasktitle){
    	return function(err){
    		//gulpUtil.colors.red attribute lose efficacy
    		gulpUtil.log(gulpUtil.log('[' + title + ']'), err.toString());
    		this.emit('end');
    	}
    }
}



