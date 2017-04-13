var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['watch']);

gulp.task('copy', function() {
    return gulp.src(['src/**'], {base: "./src/"})
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js', ['copy'], function() {
    return gulp.src(['src/**/*.js'], {base: "./src/"})
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['js'], function() {
    gulp.watch('./src/**/*.js', ['js']);
});