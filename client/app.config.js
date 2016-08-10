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
                        template: "<ru-ieee-about></ru-ieee-about>",
                    },
                    "project-teams@home": {
                        template: "<ru-ieee-project-teams></ru-ieee-project-teams>"
                    },
                    "eboard@home": {
                        template: "<ru-ieee-eboard></ru-ieee-eboard>"
                    }
                }
            });
    }
})();
