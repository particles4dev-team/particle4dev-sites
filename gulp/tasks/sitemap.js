var gulp        = require('gulp');
var sitemap     = require('gulp-sitemap');
var url         = require('../config').url;

gulp.task('sitemap', function () {
    gulp.src([
        'build/**/*.html',
        'build/*.html'
    ])
    .pipe(sitemap({
        siteUrl: url
    }))
    .pipe(gulp.dest('./build'));
});