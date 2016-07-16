//eboard.controller.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("EBoard")
        .controller("EBoardController", ["$scope", "$http", "EBoardService",
            EBoardController]);

    function EBoardController($scope, $http, EBoardService) {
        $scope.header = {};
        $scope.membersTop = {};
        $scope.membersBottom = {};

        getEBoardInfo();

        //Set E-Board Info
        function getEBoardInfo() {

            EBoardService.getEBoardInfo()
                .success(successCallback);

                function successCallback(data) {
                    $scope.header = data.header;
                    $scope.membersTop = data.membersTop;
                    $scope.membersBottom = data.membersBottom;
                }
        }
    }
})();
