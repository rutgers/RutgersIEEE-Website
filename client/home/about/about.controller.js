//about.controller.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("About")
        .controller("AboutController", ["$scope", "$http", "AboutService",
            AboutController]);

    function AboutController($scope, $http, AboutService) {
        $scope.aboutIEEEHeader = getAboutIEEE().header;
        $scope.aboutIEEEDescriptions = getAboutIEEE().descriptions;
        $scope.aboutRutgersIEEEHeader = getAboutRutgersIEEE().header;
        $scope.aboutRutgersIEEEDescriptions = getAboutRutgersIEEE().descriptions;

        //Set info
        function getAboutIEEE() {
            return AboutService.getAboutIEEE();
        }

        function getAboutRutgersIEEE() {
            return AboutService.getAboutRutgersIEEE();
        }
    }
})();
