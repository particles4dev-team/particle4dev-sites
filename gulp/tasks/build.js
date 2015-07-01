var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'handlebars', 'copyStatic', 'sitemap']);