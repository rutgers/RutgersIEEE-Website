//webpack.config.js
//Author: Jeremy Savarin

var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    watch: true,
    entry: {
        "app": "./client/app.js"
    },
    output: {
        filename: "./dist/[name].js"
    },
    resolve: {
        extensions: ["", ".js", ".css", ".json"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["es2015"]
            }
        }, {
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.css$/,
            loaders: ["style", "css"]
        }],
    },
    htmlLoader: {
        caseSensitive: true
    },
    plugins: []
};
