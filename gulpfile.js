import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import clean from 'gulp-clean';
import cleancss from 'gulp-clean-css';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';

import terser from 'gulp-terser';

const BS = browserSync.create();
const sass = gulpSass(dartSass);


const cleanDist = () => gulp.src('./dist', { read: false }).pipe(clean());

const minImg = () =>
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    
    
   const buildStyles = () => gulp.src('./src/styles/**/*.scss')
  .pipe(sass())
  .pipe(concat('styles.min.css'))
  .pipe(autoprefixer())
  .pipe(cleancss())
  .pipe(gulp.dest('./dist/css/'))


const minJs = () => gulp.src('./src/scripts/*js')
  .pipe(terser())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('./dist'))


export const build = gulp.series(cleanDist, buildStyles, minImg, minJs);

export const dev = gulp.series(build, () => {
  BS.init({
    server: {
      baseDir: "./"

    }

  })

  gulp.watch('./src/**/*', gulp.series(buildStyles, minJs, (done) => {
    BS.reload();
    done();
  }))

})