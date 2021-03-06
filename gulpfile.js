const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const stylus = require('gulp-stylus');
const tscConfig = typescript.createProject('tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
gulp.task('clean:all', function () {
  return del('dist/**/*');
});

gulp.task('clean:styles', function() {
  return del('dist/styles/*');
});

gulp.task('clean:js', function() {
  return del('dist/app/*');
});

gulp.task('clean:libs', function() {
  return del('dist/lib/*');
});

// TypeScript compile
gulp.task('compile', ['clean:js'], function () {
  return tscConfig
    .src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig))
    .js.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('styles', ['clean:styles'], function() {
  return gulp
    .src('styles/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('libs', ['clean:libs'], function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/material-design-lite/material.min.css',
      'node_modules/material-design-lite/material.min.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.styl', ['styles']);
  gulp.watch('app/**/*.ts', ['compile'])
});

gulp.task('build', ['compile', 'styles', 'libs']);
gulp.task('default', ['build']);
