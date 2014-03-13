var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var print = require('gulp-print');
var watch = require('gulp-watch');
var changed = require('gulp-changed');

var srcDir = './src/';
var scriptsPath = srcDir +'js/';
var buildPath = 'build/';

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('scripts', function() {



    var folders = getFolders(scriptsPath);

    var tasks = folders.map(function(folder) {

        var src_folders = path.join(scriptsPath, folder + '/*.js');
        var js_folder = path.join(srcDir, 'js/*.js');

        // find/join the directories
        // minify
        // write to output
        return gulp.src(src_folders)
            .pipe(changed(buildPath+'/js/'))
            .pipe(print())
            .pipe(gulp.dest(buildPath + '/js/' + folder));

    });

    return es.concat.apply(null, tasks);
});

gulp.task('html_files', function(){
    //get any file in src/root
   gulp.src([srcDir + '/*.*'])
       .pipe(print())
       .pipe(gulp.dest(buildPath));
});



gulp.task('cleanup', function(){

    gulp.src('./build/', {read: false})

        .pipe(clean());

});



gulp.task('default', ['html_files','scripts'], function(){});