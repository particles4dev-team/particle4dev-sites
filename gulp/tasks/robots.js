// http://www.robotstxt.org/
/**
 * NOT USE
 */
var gulp        = require('gulp');
var robots      = require('gulp-robots');
var url         = require('../config').url;
var handleErrors = require('../util/handleErrors');

gulp.task('robots', function () {
    gulp.src('.build/index.html')
    .pipe(robots({
        useragent: '*',
        allow: null,
        disallow: null,
        url: url,
        out: '.build/robots.txt',
        callback: function (err, config) {
            console.log(err, config);
        }
    }))
    .on('error', handleErrors);
});