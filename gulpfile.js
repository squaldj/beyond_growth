const { src, dest, series, watch } = require('gulp')
const stylus = require('gulp-stylus')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')
const clean = require('gulp-clean')

const server = browserSync.create();

const url = 'site.local'; // Change me

const path = {
    stylus: {
      src: './assets/css/style.styl',
      dist: './dist/css',
    }
}

async function cleanTask() {
  await src('./dist/', { read: false, allowEmpty: true })
    .pipe(clean())
}

function stylusTask() {
  return src(path.stylus.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({ compress: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(path.stylus.dist))
    .pipe(server.stream())
}

function reloadTask(done) {
  server.reload();
  done();
}

function startTask(done) {
  server.init({
    proxy: url,
    open: false,
    ghostMode: false
  });
  done();
}

function watchTask() {
  watch('assets/*/*.styl', stylusTask);
  watch('includes/*/*.php', reloadTask);
  watch('assets/js/*.js', reloadTask);
  watch('admin/js/*.js', reloadTask);
}

exports.default = series(cleanTask, stylusTask, startTask, watchTask);