//about.service.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("About")
        .factory("AboutService", ["$http", AboutService]);

    function AboutService($http) {
        return {
            getAboutIEEE: getAboutIEEE,
            getAboutRutgersIEEE: getAboutRutgersIEEE
        };

        //Load in about info .json files
        function getAboutIEEE() {
            return $http.get("data/about_IEEE.json");
        }

        function getAboutRutgersIEEE() {
            return $http.get("data/about_RutgersIEEE.json");
        }
    }
})();
