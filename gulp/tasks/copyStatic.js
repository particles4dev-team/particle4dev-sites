var gulp 	= require('gulp');
var config 	= require('../config').markup;

gulp.task('copyStatic', function() {
  	return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});