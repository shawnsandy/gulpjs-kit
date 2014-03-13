var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

var scriptsPath = './src/js/';

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('scripts', function() {
    var folders = getFolders(scriptsPath);

    var tasks = folders.map(function(folder) {
        // concat into foldername.js
        // write to output
        // minify
        // rename to folder.min.js
        // write to output again
        return gulp.src(path.join(scriptsPath, folder, '/*.js'))
            .pipe(concat(folder + '.js'))
            .pipe(gulp.dest('build/'))
            .pipe(uglify())
            .pipe(rename(folder + '.min.js'))
            .pipe(gulp.dest('build/'));
    });

    return es.concat.apply(null, tasks);
});

gulp.task('cleanup', function(){

    gulp.src('./build/', {read: false})
        .pipe(clean());

});

gulp.task('default', function(){});