var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
   return gulp.src('src/sass/style.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/css'))
});
