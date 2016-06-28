//eboard.controller.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("EBoard")
        .controller("EBoardController", ["$scope", "$http", "EBoardInfo", EBoardController]);

    function EBoardController($scope, $http, EBoardInfo) {
        //Set E-Board Info
        EBoardInfo.success(function(response) {
            $scope.header = response.header;
            $scope.membersTop = response.membersTop;
            $scope.membersBottom = response.membersBottom;
        });
    }
})();
