const gulp = require('gulp');
const less = require('gulp-less');
const cssMin = require('gulp-cssmin');

function handLess (cb) {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(cssMin())
        .pipe(gulp.dest('./style'));
    cb();
}

exports.default = handLess;