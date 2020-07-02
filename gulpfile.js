let gulp = require('gulp');
let jsdoc = require('gulp-jsdoc3');

gulp.task('doc', function (cb) {
    var config = require('./conf.json');
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});

gulp.task('default', function (cb) {
    let runSequence = require('run-sequence');
    runSequence('doc', cb);

    gulp.watch(['./template/**/*.*', './src/**/*.js'], ["doc"]);
});
