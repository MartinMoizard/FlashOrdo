var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var browserSync = require('browser-sync').create();
var bower = require('gulp-bower');

var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  FONT: ['src/font/*.ttf', 'src/font/*.otf'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

var errorFct = function(err) {
  console.log(err);
  this.emit('end');
};

gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .on('error', errorFct)
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('font', function () {
  gulp.src(path.FONT)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(path.DEST + '/bower_components'));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'bower', 'font', 'copy']);
});

gulp.task('build', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function() {
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('serve:dev', ['transform', 'bower', 'font', 'copy'], function() {
    browserSync.init({
      server: {
        baseDir: path.DEST
      }
    });

    gulp.watch(path.ALL, ['transform', 'font', 'copy']);
    gulp.watch(path.ALL).on('change', browserSync.reload);
});

gulp.task('default', ['watch']);

gulp.task('production', ['replaceHTML', 'build']);
