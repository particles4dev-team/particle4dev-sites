/* Notes:
   	- gulp/tasks/browserify.js handles js recompiling with watchify
   	- gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config').watch;

gulp.task('watch', ['setWatch', 'browserSync', 'sass:watch'], function() {
  	gulp.watch(config.src, ['handlebars', 'markup']);
});