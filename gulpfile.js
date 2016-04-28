var gulp = require('gulp');
var connect = require('gulp-connect'); // Run local dev server
var open = require('gulp-open'); // Open url in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files
var eslint = require('gulp-eslint'); // Lint JS files, including JSX

var config = {
    dist: './dist/',
    port: 9000,
    devBaseUrl: 'http://localhost',
    jsFiles: './src/**/*.js',
    htmlFiles: './src/*.html',
    mainJs: './src/main.js',
    cssFiles: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'

    ]
}

// Run local dev server
gulp.task('connect', function() {
    connect.server({
        root: config.dist,
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// Open in browser
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

// Move files to ./dist
gulp.task('html', function() {
    gulp.src(config.htmlFiles)
        .pipe(gulp.dest(config.dist))
        .pipe(connect.reload());
});

// bundle all js files
gulp.task('js', function() {
    browserify(config.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.dist + '/scripts'))
        .pipe(connect.reload());
});

// Bundle CSS in one file in dist folder
gulp.task('css', function() {
  gulp.src(config.cssFiles)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.dist + '/css'))
});

// Linting JS files
gulp.task('lint', function() {
  return gulp.src(config.jsFiles)
    .pipe(eslint({config: 'eslint.config.json'}))
    .pipe(eslint.format())
})

// Add watchers
gulp.task('watch', function() {
    gulp.watch(config.htmlFiles, ['html']);
    gulp.watch(config.jsFiles, ['js', 'lint']);

});

gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);

