'use strict';

var gulp = require('gulp');

var path = require('path');

var paths = gulp.paths;

var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();

gulp.task('styles:css', function () {
    return gulp.src(path.join(paths.src, '/**/*.css'))
        .pipe(gulp.dest(paths.tmp + '/serve/'))
        .pipe($.size());
});

gulp.task('styles', function(){
    runSequence('clean:css', 'styles:css', 'inject');
});