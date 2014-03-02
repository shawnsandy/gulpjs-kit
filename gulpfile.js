var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function(){
  // place code for your default task here
});

gulp.task('clean', function(){
// clean up your output dir name dist or build
// maybe change the dist to build or whatever you like
  gulp.src('dist/', {read: false})
  .pipe(clean());
});