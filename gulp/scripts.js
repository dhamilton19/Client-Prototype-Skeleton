'use strict';

var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('scripts:js', function () {
    return gulp.src(path.join(paths.src, '/**/*.js'))
        .pipe(gulp.dest(paths.tmp + '/serve/'))
        .pipe($.size());
});

gulp.task('scripts:ts', function () {
    return gulp.src(path.join(paths.src, '/**/*.ts'))
        .pipe($.typescript({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest(paths.tmp + '/serve/'))
        .pipe($.size());
});

gulp.task('scripts', function(){
    runSequence('clean:js', 'scripts:js', 'scripts:ts', 'inject');
});