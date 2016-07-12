const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const stylus = require('gulp-stylus');
const tscConfig = typescript.createProject('tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return tscConfig
    .src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig))
    .js.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('styles', ['clean'], function() {
  return gulp
    .src('styles/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.styl', ['build']);
  gulp.watch('app/**/*.ts', ['build'])
});



gulp.task('build', ['clean', 'compile', 'styles']);
gulp.task('default', ['build']);
