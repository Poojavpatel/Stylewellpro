/*jshint esversion: 6 */
// sudo npm i gulp-cli
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
// var csso = require('gulp-csso');
let cleanCSS = require('gulp-clean-css');
// const minify = require('gulp-minify');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var pump = require('pump');
// var smushit = require('gulp-smushit');

gulp.task('sayhello', function() {
    console.log('Hello');
});

// Gulp task to minify HTML files
gulp.task('minifyhtml', function() {
    return gulp.src(['./index.html','./form.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./build/'));
  });

// Gulp task to minify CSS files
// gulp.task('minifycss', function() {
//     return gulp.src('./css/*.css')
//       // Minify the file
//       .pipe(csso())
//       // Output
//       .pipe(gulp.dest('./build/css/'));
//   });
gulp.task('minifycss', () => {
    return gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: '*'}))
      .pipe(gulp.dest('./build/css/'));
});

// Gulp task to minify JavaScript files
// gulp.task('minifyjs', function() {
    // return gulp.src('./script.js')
    //   // Minify the file
    //   .pipe(uglify())
    //   // Output
    //   .pipe(gulp.dest('./build'));
// gulp.task('minifyjs', function(done) {
//     gulp.src('./js/script.js')
//     .pipe(minify())
//     .pipe(gulp.dest('./build/js/'))
//     done();
//   });
  gulp.task('minifyjs', function (cb) {
    pump([
          gulp.src('./js/script.js'),
          uglify(),
          gulp.dest('./build/js/')
      ],
      cb
    );
  });

// //Optimizing images
// gulp.task('minifyimg', function () {
//     return gulp.src('./img/*.{jpg,png}')
//         .pipe(smushit())
//         .pipe(gulp.dest('./build/img'));
// });

// Gulp task to minify all files
gulp.task('rockit', function () {
    runSequence(
      'minifyhtml',
      'minifycss',
      'minifyjs'      
    );
  });