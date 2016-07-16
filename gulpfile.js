//gulpfile.js
//Author: Jeremy Savarin

var gulp = require("gulp");

var jshint = require("gulp-jshint");
var cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var stylish = require("jshint-stylish");
var del = require("del");

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
        "./client/**/*.module.js",
        "./client/**/*.service.js",
        "./client/**/*.controller.js",
        "./client/**/*.directive.js",
    ],
    css: [
        "./public/css/*.css"
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

//Minify CSS files
gulp.task("css", function() {
    return gulp
        .src(path.css)
        .pipe(rename("style.min.css"))
        .pipe(cleanCSS({
            keepBreaks: true
        }))
        .pipe(gulp.dest("./public/css"));
});

//Minify JS files
gulp.task("scripts", function() {
    return gulp
        .src(path.scripts)
        .pipe(concat("all.js"))
        .pipe(rename("all.min.js"))
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./public/js"));
});

//Watch for changes
gulp.task("watch", function() {
    gulp.watch([path.scripts, path.css, path.html], ["lint", "css", "scripts"]);
});

//Clean files
gulp.task("clean", function() {
    del(["./public/js/all.min.js", "./public/css/style.min.css"]);
});

//Default tasks
gulp.task("default", ["lint", "css", "scripts", "watch", "connect"]);
