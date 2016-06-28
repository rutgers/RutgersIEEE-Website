//about.module.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("About", [])
        .factory("AboutInfo", ["$http", AboutInfo]);

    function AboutInfo($http) {
        var aboutInfo = {};

        //Load in about info .json files
        aboutInfo.aboutIEEE = $http.get("data/about_IEEE.json");
        aboutInfo.aboutRutgersIEEE = $http.get("data/about_RutgersIEEE.json");

        return aboutInfo;
    }
})();
