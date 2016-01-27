'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

gulp.task('inject', function () {

  var injectStyles = gulp.src([
    paths.tmp + '/serve/**/*.css'
  ], { read: false });

  var injectScripts = gulp.src([
    paths.tmp + '/serve/**/*.js'
  ], { read: false });

  var injectOptions = {
    ignorePath: [paths.src, paths.tmp + '/serve'],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components',
    exclude: []
  };

  return gulp.src(paths.src + '/index.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp + '/serve'));
});