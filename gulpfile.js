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
        "./public/js/app/app.js",
        "./public/js/app/**/*.module.js",
        "./public/js/app/**/*.controller.js",
        "./public/js/app/**/*.directive.js",
        "./public/js/*.js",
    ],
    css: [
        "./public/css/*.css"
    ],
    assets: "./public/img/*"
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
        .pipe(cleanCSS({
            keepBreaks: true
        }))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./dist/css"));
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
        .pipe(gulp.dest("./dist/js"));
});

//Move img folder
gulp.task("move-assets", function() {
    return gulp
        .src(path.assets)
        .pipe(gulp.dest("./dist/img"));
});

//Watch for changes
gulp.task("watch", function() {
    gulp.watch(path.scripts, ["lint", "scripts", ]);
});

//Clean files
gulp.task("clean", function() {
    del(["./dist/"]);
});

//Default tasks
gulp.task("default", ["lint", "css", "scripts", "move-assets", "watch",
    "connect"]);
