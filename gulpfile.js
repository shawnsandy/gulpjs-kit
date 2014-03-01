var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function(){
  // place code for your default task here
});
gulp.task('clean', function(){
  // place code for your default task here
  gulp.src('dist/', {read: false})
  .pipe(clean());
});