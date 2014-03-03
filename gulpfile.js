var gulp = require('gulp');
var clean = require('gulp-clean');
var minifycss = require('gulp-minify-css');
var util = require('gulp-util');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
  // place code for your default task here
});

gulp.task('clean', function(){
// clean up your output dir name dist or build
// maybe change the die name build to something sensible -- like your app_name
  gulp.src('build/', {read: false})
  .pipe(clean());
});


gulp.task('styles', function(){
   //minify and move your styles
});

gulp.task('htmlpages', function(){
    //html task
});

gulp.task('scripts',function(){
    //javascripts tasks
});


