//app.config.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ieeeApp")
        .config(["$stateProvider", "$urlRouterProvider", StateConfig]);

    function StateConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                views: {
                    "": {
                        templateUrl: "./client/home/home.html"
                    },
                    "about@home": {
                        templateUrl: "./client/home/about/about.html",
                        controller: "AboutController"
                    },
                    "project-teams@home": {
                        templateUrl: "./client/home/project-teams/project-teams.html",
                        controller: "ProjectTeamsController"
                    },
                    "eboard@home": {
                        templateUrl: "./client/home/eboard/eboard.html",
                        controller: "EBoardController"
                    }
                }
            });
    }
})();
