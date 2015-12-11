var gulp = require('gulp'),
    del = require('del'),
    exec = require('child_process').exec;
var babel = require('gulp-babel');

gulp.task('clean', function() {
  del(['build/*.js','build/*.css'],{force: true});
});

gulp.task('babel',['clean',],function(cb){
  return gulp.src('src/*.js')
         .pipe(
            babel({
              plugins: ["transform-flow-strip-types"]
            })
          )
         .pipe(babel({
            presets: ['react','es2015']
         }))
         .pipe(gulp.dest('build/'));
})
gulp.task('transform-flow',['clean'],function(cb){
  return gulp.src('src/*.js')
         .pipe(babel({
            plugins: ["transform-flow-strip-types"]
         }))
         .pipe(gulp.dest('dist/'));
})

gulp.task('flow',function(cb) {
  exec('flow',function(error, stdout, stderr){
    console.log(error);
    console.log(stdout);
    console.log(stderr);
  })
})

gulp.task('default', ['clean', 'scripts', 'style']);

gulp.task('watch', function() {
  gulp.watch(['./src/*.js'], ['flow']);
});

// start
gulp.task('start',['default','watch']);

module.exports = gulp;
