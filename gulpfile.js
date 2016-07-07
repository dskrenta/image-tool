var gulp = require('gulp');
var connect = require('gulp-connect');
var riot = require('gulp-riot');

var paths = {
  src: 'src',
  build: 'build',
  riotSrcPath: 'src/components/*.tag',
  riotBuildPath: 'build/js',
  assetsSrcPath: 'src/assets/**/**',
  assetsBuildPath: 'build/assets',
  srcIndex: 'src/*.html'
};

gulp.task('webserver', function() {
  connect.server({
    root: paths.build
  });
});

gulp.task('riot', function() {
  gulp.src(paths.riotSrcPath)
    .pipe(riot())
    .pipe(gulp.dest(paths.riotBuildPath));
});

gulp.task('copyAssets', function() {
  gulp.src(paths.assetsSrcPath)
    .pipe(gulp.dest(paths.assetsBuildPath));
});

gulp.task('copyIndex', function() {
  gulp.src(paths.srcIndex)
    .pipe(gulp.dest(paths.build));
});

gulp.task('default', ['webserver', 'riot', 'copyAssets', 'copyIndex']);
