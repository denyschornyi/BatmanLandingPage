const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const less         = require('gulp-less');
const cleanCSS     = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);

});


gulp.task('styles', function(){
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});


gulp.task('watch', function(){
    gulp.watch('less/*.less', gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));