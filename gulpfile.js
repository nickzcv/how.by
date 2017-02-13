var gulp = require("gulp"),//http://gulpjs.com/
    util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
    sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    minifycss = require('gulp-clean-css'),//https://www.npmjs.org/package/gulp-minify-css
    rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    log = util.log;


gulp.task("sass", function(){
  log("Generate CSS files " + (new Date()).toString());
  gulp.src('app/scss/main.scss')
  .pipe(sass({ includePaths : ['_/partials/'] }))
  .pipe(sass({ style: 'expanded' }))
  .pipe(gulp.dest("app/css"))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('app/css'));
});

gulp.task("watch", function(){
  log("Watching scss files for modifications");
  gulp.watch('app/scss/partials/*.scss', ["sass"]);
});