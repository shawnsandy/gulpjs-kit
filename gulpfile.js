var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var clean = require('gulp-clean');
var minifycss = require('gulp-minify-css');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');



function getFolders(dir){
    return fs.readdirSync(dir)
        .filter(function(file){
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

/*********
 * folder varibles
 * *********/
var gulp_build = 'build'; //your build folder -- user friendly names are cool
// src directories
var src_scripts = 'src/sripts/',
    src_css = 'src/css/',
    src_files = 'src/',
    src_images = 'src_images/';

gulp.task('default', ['styles','htmlpages','scripts','fonts'],function(){
    // place code for your default task here
});

gulp.task('clean', function(){
// clean up your buildFolder dir name dist or build
    gulp.src('./'+gulp_build, {read: false})
        .pipe(clean());
});

//styles
gulp.task('styles', function(){
    //minify and move your styles
    gulp.src('./src/css/*.css')
        .pipe(gulp.dest(gulp_build+'/css/'));
    gulp.src('./bootstrap/dist/css/*.css')
        .pipe(gulp.dest(gulp_build+'/bootstrap/'))

});


gulp.task('htmlpages', function(){
    //html task
    gulp.src(['./src/*.html','./src/*.png','./src/fonts/*.*'])
        .pipe(gulp.dest(gulp_build+'/'));//html task
    gulp.src('./src/images/*.*')
        .pipe(gulp.dest(gulp_build+'/build/images/'));
});

gulp.task('scripts',function(){
    //javascripts tasks
    gulp.src('./src/js/*.*')
        .pipe(uglify())
        .pipe(gulp.dest(gulp_build+'/js/'));
    gulp.src('./src/js/vendor/*.*')
        .pipe(uglify())
        .pipe(gulp.dest(gulp_build+'/js/vendor/'));
});

gulp.task('fonts',function(){

});

//    copy files/dependencies froom root to the source folder
gulp.task("srcbuild", function(){
    gulp.src('./bootstrap/dist/css/*.css')
        .pipe(gulp.dest('src/bootstrap/css'))
});


gulp.task('test', function(){})
