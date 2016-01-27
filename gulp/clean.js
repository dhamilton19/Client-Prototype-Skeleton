'use strict';

var gulp = require('gulp');
var path = require('path');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

gulp.task('clean:css', function () {
    return gulp.src(path.join(paths.tmp, '/serve/css/*.css'), {read: false})
        .pipe($.clean());
});

gulp.task('clean:js', function () {
    return gulp.src(path.join(paths.tmp, '/serve/scripts/*.js'), {read: false})
        .pipe($.clean());
});

gulp.task('clean', ['clean:css', 'clean:js']);