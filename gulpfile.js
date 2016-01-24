
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('make',function(){
	gulp.src('./node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss')
		.pipe(gulp.dest('./scss'));
    gulp.src('./bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('./public/js'));
    gulp.src('./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js')
        .pipe(gulp.dest('./public/js'));
    gulp.src('./bower_components/modernizr/modernizr.js')
        .pipe(gulp.dest('./public/js'));
});