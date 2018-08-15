/*jshint esversion: 6 */
var gulp = require('gulp');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
// var uglify = require('gulp-uglify');
const minify = require('gulp-minify');
var smushit = require('gulp-smushit');

gulp.task('sayhello', function() {
    console.log('Hello');
});

// Gulp task to minify CSS files
gulp.task('minifycss', function () {
    return gulp.src('./style.css')
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('./build'));
  });

// Gulp task to minify JavaScript files
gulp.task('minifyjs', function() {
    // return gulp.src('./script.js')
    //   // Minify the file
    //   .pipe(uglify())
    //   // Output
    //   .pipe(gulp.dest('./build'));
    gulp.src('./script.js')
    .pipe(minify())
    .pipe(gulp.dest('./build'));
  });

// Gulp task to minify HTML files
gulp.task('minifyhtml', function() {
    return gulp.src(['./*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./build'));
  });

//Optimizing images
gulp.task('minifyimg', function () {
    return gulp.src('./img/*.{jpg,png}')
        .pipe(smushit())
        .pipe(gulp.dest('./build/img'));
});

// Gulp task to minify all files
gulp.task('rockit', function () {
    runSequence(
      'minifyhtml',
      'minifycss',
      'minifyimg',
      'minifyjs'      
    );
  });