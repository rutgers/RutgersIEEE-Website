//gulpfile.js
//Author: Jeremy Savarin

var gulp = require("gulp");

var jshint = require("gulp-jshint");
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
    scripts: ["./public/js/*.js", "./app/**/*.js"]
};

//Set up server
gulp.task("connect", function() {
    connect.server();
});

//Lint JS files
gulp.task("lint", function(){
    return gulp.src(path.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

//Minify JS files
gulp.task("scripts", function() {
    return gulp.src(path.scripts)
        .pipe(concat("all.js"))
        .pipe(rename("all.min.js"))
        .pipe(plumber({errorHandler: onError}))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
});

//Watch for changes
gulp.task("watch", function() {
    gulp.watch(path.scripts, ["lint", "scripts"]);
});

//Clean files
gulp.task("clean", function() {
    del(["./dist/js/all.min.js"]);
});

//Default task
gulp.task("default", ["lint", "scripts", "watch", "connect"]);
