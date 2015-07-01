var gulp       = require('gulp');
var config     = require('../config');
var minifyHTML = require('gulp-htmlmin');
var size       = require('gulp-size');

// See https://github.com/kangax/html-minifier#options-quick-reference
var options = {
    caseSensitive: false,
    collapseBooleanAttributes: false,
    collapseWhitespace: true,
    removeAttributeQuotes: false,
    removeComments: true,
    removeOptionalTags: false,
    removeRedundantAttributes: false,
    minifyJS: true
};

gulp.task('minifyHtml', function() {
    return gulp.src(config.htmlSrc)
    .pipe(minifyHTML(options))
    .pipe(gulp.dest(config.htmlDest))
    .pipe(size({title: 'minifyHtml'}));
});