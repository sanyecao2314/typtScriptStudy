var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProj = ts.createProject('tsconfig.json');

gulp.task('tsc', function() {
    var tsResult = gulp.src('app/**/*.ts')
        .pipe(ts(tsProj))
        .pipe(gulp.dest('wwwroot/app'));
});

gulp.task('tsc:w', ['tsc'], function() {
    gulp.watch('app/**/*.ts', ['tsc']);
});