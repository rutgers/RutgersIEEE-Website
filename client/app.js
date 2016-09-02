//app.js
//Author: Jeremy Savarin

var stateConfig = require("./app.config");
var greeting = require("./home/greeting/greeting.component");
var about = require("./home/about/about.component");
var contact = require("./home/contact/contact.component");
var projectTeams = require("./home/project-teams/project-teams.component");
var eboard = require("./home/eboard/eboard.component");

angular.module("ieeeApp", [greeting.name, about.name, projectTeams.name, eboard
        .name, contact.name, "duScroll", "angular-loading-bar", "ngFlash", "ngMessages", "ngTouch",
        "ui.bootstrap", "ui.router"
    ])
    .config(["$stateProvider", "$urlRouterProvider", stateConfig]);
