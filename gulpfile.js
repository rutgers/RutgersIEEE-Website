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
var sassLint = require("gulp-sass-lint");
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
        "./client/**/*.js"
    ],
    appScripts: [
        "./client/**/.js",
        "!./client/vendor.js"
    ],
    vendorScripts: ["./client/vendor.js"],
    scss: [
        "./scss/style.scss"
    ],
    html: [
        "./client/**/*.html"
    ],
    img: [
        "./img/*",
    ]
};

//Set up server
gulp.task("connect", ["bundle:js:app", "bundle:js:vendor", "move:html"],
    function() {
        connect.server({
            root: "dist"
        });
    });

//Lint JS files
gulp.task("lint:js", function() {
    return gulp
        .src(path.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

//Lint SCSS files
gulp.task("lint:scss", function() {
    return gulp
        .src(path.scss)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

//Compile and minify sass
gulp.task("minify:scss", ["lint:scss"], function() {
    return gulp
        .src(path.scss)
        .pipe(sass())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(concat("style.css"))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/css"));
});

//Bundle app JS files
gulp.task("bundle:js:app", ["lint:js"], function() {
    return browserify({
            entries: "./client/app.js",
            debug: true
        })
        .bundle()
        .pipe(source("app.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/js"));
});

//Bundle vendor JS files
gulp.task("bundle:js:vendor", ["lint:js"], function() {
    return browserify({
            entries: "./client/vendor.js",
            debug: true
        })
        .bundle()
        .pipe(source("vendor.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/js"));
});

//Move index.html
gulp.task("move:index", function() {
    return gulp.src("./index.html")
        .pipe(gulp.dest("dist"));
});

//Move views html files
gulp.task("move:html", ["move:index", "move:img"], function() {
    return gulp.src(path.html)
        .pipe(gulp.dest("dist/views"));
});

//Move images
gulp.task("move:img", function() {
    return gulp.src(path.img)
        .pipe(gulp.dest("dist/img"));
})

//Watch for changes
gulp.task("watch", function() {
    gulp.watch(path.appScripts, ["bundle:js:app"]);
    gulp.watch(path.vendorScripts, ["bundle:js:vendor"]);
    gulp.watch(path.scss, ["minify:scss"]);
    gulp.watch(path.html, ["move:html"]);
});

//Clean files
gulp.task("clean", function() {
    del("dist");
});

//Default tasks
gulp.task("default", ["lint:js", "lint:scss", "minify:scss", "bundle:js:app",
    "bundle:js:vendor", "move:index", "move:img", "move:html", "watch",
    "connect"
]);
