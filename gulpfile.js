'use strict';

var gulp = require('gulp');

gulp.paths = {
    src: 'app',
    tmp: '.tmp'
};

gulp.port = '3000';

require('require-dir')('./gulp');