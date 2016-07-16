//app.config.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ieeeApp")
        .config(["$routeProvider", "$locationProvider", RouteConfig]);

    function RouteConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./client/home/home.html",
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    }
})();
