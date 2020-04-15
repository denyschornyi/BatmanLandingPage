const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const less         = require('gulp-less');
const cleanCSS     = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');


// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);

});


gulp.task('styles', function(){
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('imgmin', function(){
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('imgmin', function(){
    return gulp.src('src/img/actors/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/actors'))
});

gulp.task('watch', function(){
    gulp.watch('src/less/*.less', gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'imgmin'));