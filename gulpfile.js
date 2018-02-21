var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');


// combine and minify css
gulp.task('css', function() {
   gulp.src([
      './css/bio.css',
      './css/header.css',
      './css/ie-fixes.css',
      './css/main.css',
      './css/media.css',
      './css/normalize.css',
      './css/partnerships.css'
   ])
   .pipe(concat('app.css'))
   .pipe(gulp.dest('./build'));

});


gulp.task('scripts', function() {
   gulp.src([
      './js/app.js',
      './js/lazyload.js',
      './js/scrolltotop.js',
      './js/parallax.js',
   ])
   .pipe(concat('main.js'))
   .pipe(uglify())
   .pipe(gulp.dest('./build'));

   gulp.src([
      './js/insta.js',
      './js/carousel.js',
   ])
   .pipe(concat('app.js'))
   .pipe(uglify())
   .pipe(gulp.dest('./build'));

});

gulp.task('default', ['css', 'scripts']);
