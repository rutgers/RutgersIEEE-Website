//about.controller.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("About")
        .controller("AboutController", ["$scope", "$http", "AboutInfo",
            AboutController]);

    function AboutController($scope, $http, AboutInfo) {
        //Set about IEEE info
        AboutInfo.aboutIEEE.success(function(response) {
            $scope.aboutIEEEHeader = response.header;
            $scope.aboutIEEEDescriptions = response.descriptions;
        });

        //Set about Rutgers IEEE info
        AboutInfo.aboutRutgersIEEE.success(function(response) {
            $scope.aboutRutgersIEEEHeader = response.header;
            $scope.aboutRutgersIEEEDescriptions = response.descriptions;
        });
    }
})();
