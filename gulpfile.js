//gulpfile.js
//Author: Jeremy Savarin

var gulp = require("gulp");

var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var connect = require("gulp-connect");
var del = require("del");
var jshint = require("gulp-jshint");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var stylish = require("jshint-stylish");
var uglify = require("gulp-uglify");

//Error handler
function onError(err) {
    console.log(err.toString());
    this.emit("end");
}

//Path to scripts
var path = {
    scripts: [
        "./client/app.js",
        "./client/app.config.js",
        "./client/**/*.component.js",
        "./client/**/*.service.js"
    ],
    css: [
        "./public/css/style.css",
        "./public/css/ml-button.css"
    ],
    scss: [
        "./scss/**/*.scss"
    ],
    html: [
        "./index.html",
        "./app/**/*.html"
    ],
    img: [
        "./public/img/*",
    ]
};

//Set up server
gulp.task("connect", function() {
    connect.server();
});

//Lint JS files
gulp.task("lint", function() {
    return gulp
        .src(path.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

//Compile and minify sass
gulp.task("css", function() {
    return gulp
        .src(path.scss)
        .pipe(sass())
        .pipe(concat("style.min.css"))

        .pipe(gulp.dest("./public/css"));
});

//Minify JS files
gulp.task("scripts", function() {
    return browserify({
        entries: "./client/app.js",
        debug: true
    })
    .bundle()
    .pipe(source("all.min.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./public/js"));
    // return gulp
    //     .src(path.scripts)
    //     .pipe(concat("all.js"))
    //     .pipe(rename("all.min.js"))
    //     .pipe(plumber({
    //         errorHandler: onError
    //     }))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("./public/js"));
});

gulp.task("vendor", function() {
    return browserify({
        entries: "./client/vendor.js",
        debug: true
    })
    .bundle()
    .pipe(source("vendor.min.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./public/js"));
});

//Watch for changes
gulp.task("watch", function() {
    gulp.watch([path.scripts, path.css, path.html], ["lint", "css", "scripts", "vendor"]);
});

//Clean files
gulp.task("clean", function() {
    del(["./public/js/all.min.js", "./public/css/style.min.css"]);
});

//Default tasks
gulp.task("default", ["lint", "css", "scripts", "vendor", "watch", "connect"]);
