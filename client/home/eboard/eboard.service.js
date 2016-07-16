//eboard.service.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("EBoard")
        .factory("EBoardService", ["$http", EBoardService]);

    function EBoardService($http) {
        return {
            getEBoardInfo: getEBoardInfo
        };

        //Load in E-board .json file
        function getEBoardInfo() {
            return $http.get("data/eboard.json");
        }
    }
})();
