//gulpfile.js
//Author: Jeremy Savarin

var gulp = require("gulp");

var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var connect = require("gulp-connect");
var del = require("del");
var gutil = require("gulp-util");
var jshint = require("gulp-jshint");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var sassLint = require("gulp-sass-lint");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var stylish = require("jshint-stylish");
var uglify = require("gulp-uglify");
var watchify = require("watchify");

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
    index: [
        "./index.html",
        "./favicon.ico"
    ],
    img: [
        "./img/*"
    ]
};

//Set up server
gulp.task("connect", ["bundle:js:app", "bundle:js:vendor", "move:html"],
    function() {
        connect.server({
            root: "dist",
            livereload: true
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
        .pipe(sassLint({
            configFile: "./config/.sass-lint.yml"
        }))
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
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload());
});

var watchifyBundleApp = watchify(browserify({
    entries: "./client/app.js",
    debug: true
}));

var watchifyBundleVendor = watchify(browserify({
    entries: "./client/vendor.js",
    debug: true
}));

gulp.task("bundle:js:app", ["lint:js"], bundleApp);
gulp.task("bundle:js:vendor", ["lint:js"], bundleVendor);
watchifyBundleApp.on("update", bundleApp);
watchifyBundleApp.on("log", gutil.log);
watchifyBundleVendor.on("update", bundleVendor);
watchifyBundleVendor.on("log", gutil.log);

function bundleApp() {
    return watchifyBundleApp
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
        .pipe(gulp.dest("./dist/js"))
        .pipe(connect.reload());
}

function bundleVendor() {
    return watchifyBundleVendor
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
        .pipe(gulp.dest("./dist/js"))
        .pipe(connect.reload());
}
//Bundle app JS files
gulp.task("bundle:js:app", ["lint:js"], bundleApp);
//Bundle vendor JS files
gulp.task("bundle:js:vendor", ["lint:js"], bundleVendor);

//Move index.html
gulp.task("move:index", function() {
    return gulp.src(path.index)
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
});

//Move views html files
gulp.task("move:html", ["move:index", "move:img"], function() {
    return gulp.src(path.html)
        .pipe(gulp.dest("dist/views"))
        .pipe(connect.reload());
});

//Move images
gulp.task("move:img", function() {
    return gulp.src(path.img)
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
});

//Watch for changes
gulp.task("watch", function() {
    gulp.watch(path.appScripts, ["bundle:js:app"]);
    gulp.watch(path.vendorScripts, ["bundle:js:vendor"]);
    gulp.watch("./scss/**/*.scss", ["minify:scss"]);
    gulp.watch(path.html, ["move:html"]);
    gulp.watch(path.img, ["move:img"]);
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
