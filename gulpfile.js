'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var renamed = require('gulp-rename');
var changed = require('gulp-changed');

// - SCSS/CSS

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

function compile_scss (done) {
    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(renamed({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
    done();
}

// detect changes in SCSS
function detect_change_scss (done) {
  gulp.watch(SCSS_SRC, gulp.series(compile_scss))
  done();
}

// Run tasks
gulp.task("compile_scss", gulp.series(compile_scss, detect_change_scss, ));