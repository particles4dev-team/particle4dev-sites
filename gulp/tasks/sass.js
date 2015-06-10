'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var config      = require('../config').sass;
// http://alfanso.com/concatinating-all-css-files-into-a-single-css-file-using-gulp-js/

gulp.task('sass', function () {
    gulp.src(config.src)
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(config.output))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('sass:watch', function () {
  	gulp.watch(config.src, ['sass']);
});