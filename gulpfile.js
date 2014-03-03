var gulp = require('gulp');
var clean = require('gulp-clean');
var minifycss = require('gulp-minify-css');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('default', ['styles','htmlpages','scripts','fonts'],function(){
    // place code for your default task here
});

gulp.task('clean', function(){
// clean up your output dir name dist or build
// maybe change the die name build to something sensible -- like your app_name
    gulp.src('build', {read: false})
        .pipe(clean());
});


gulp.task('styles', function(){
    //minify and move your styles
    gulp.src('./src/css/*.css')
        .pipe(gulp.dest('build/css/'));
    gulp.src('./bootstrap/dist/css/*.css')
        .pipe(gulp.dest('build/bootstrap/'))

});


gulp.task('htmlpages', function(){
    //html task
    gulp.src(['./src/*.html','./src/*.png','./src/fonts/'])
        .pipe(gulp.dest('build/'));//html task
    gulp.src('./src/images/*.*')
        .pipe(gulp.dest('build/images/'));
});

gulp.task('scripts',function(){
    //javascripts tasks
    gulp.src('./src/js/*.*')
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
    gulp.src('./src/js/vendor/*.*')
        .pipe(uglify())
        .pipe(gulp.dest('build/js/vendor/'));
});

gulp.task('fonts',function(){
    gulp.src('./src/fonts/font-awesome/css/*.*')
        .pipe(gulp.dest('build/fonts/font-awesome/css/'));
    gulp.src(['./src/fonts/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/fonts/font-awesome/fonts/'));
    gulp.src(['./src/fonts/open-sans/*.*'])
        .pipe(gulp.dest('build/fonts/open-sans/'));
});

//    copy files/dependencies froom root to the source folder
gulp.task("srcbuild", function(){
    gulp.src('./bootstrap/dist/css/*.css')
        .pipe(gulp.dest('./src/build/bootstrap/dist/'))
});


