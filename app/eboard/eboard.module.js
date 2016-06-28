//eboard.module.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("EBoard", [])
        .factory("EBoardInfo", ["$http", EBoardInfo]);

    function EBoardInfo($http) {
        var eBoardInfo = {};

        //Load in E-board .json file
        eBoardInfo = $http.get("data/eboard.json");

        return eBoardInfo;
    }
})();
