var gulp = require('gulp'),
    sassSCSS = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('default', ['sass', 'watch']);

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('scss/*.scss', ['sass']).on('change', livereload.changed);
  gulp.watch('*.php', ['php']).on('change', livereload.changed);
});

//SCSS
gulp.task('sass', function(){
 gulp.src('scss/*.scss')
  .pipe(sassSCSS())
  .pipe(gulp.dest('styles'))
  .pipe(livereload());
});

//PHP
gulp.task('php', function(){
 gulp.src('*.php')
});