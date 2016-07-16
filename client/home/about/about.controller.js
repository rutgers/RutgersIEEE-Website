//about.controller.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("About")
        .controller("AboutController", ["$scope", "$http", "AboutService",
            AboutController]);

    function AboutController($scope, $http, AboutService) {
        $scope.aboutIEEEHeader = {};
        $scope.aboutIEEEDescriptions = {};
        $scope.aboutRutgersIEEEHeader = {};
        $scope.aboutRutgersIEEEDescriptions = {};

        getAboutIEEE();
        getAboutRutgersIEEE();

        //Set info
        function getAboutIEEE() {
            AboutService.getAboutIEEE()
                .success(successCallback);

                function successCallback(data) {
                    $scope.aboutIEEEHeader = data.header;
                    $scope.aboutIEEEDescriptions = data.descriptions;
                }
        }

        function getAboutRutgersIEEE() {
            AboutService.getAboutRutgersIEEE()
                .success(successCallback);

                function successCallback(data) {
                    $scope.aboutRutgersIEEEHeader = data.header;
                    $scope.aboutRutgersIEEEDescriptions = data.descriptions;
                }
        }
    }
})();
