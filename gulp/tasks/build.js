var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'handlebars', 'markup', 'sitemap']);