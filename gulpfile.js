var gulp = require('gulp');
var watcher = require('gulp-watch');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

function compileLESS(){
  return gulp.src('./main.less')
    .pipe(less())
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true })); //using reload instead of files option in browsersync call doesn't matter
}

gulp.task('compile-less', function(){ return compileLESS(); });

gulp.task('browser-sync', function(){
  browserSync({
    //files: ['main.css'],
    proxy: 'backbonebrowsersync.localhost',
    port: 3001
  })
});

gulp.task('default', ['compile-less', 'browser-sync'], function(){
  watcher(['main.less'], compileLESS);
});