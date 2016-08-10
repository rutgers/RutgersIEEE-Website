//eboard.module.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("EBoard", [])
        .component("ruIeeeEboard", {
            templateUrl: "client/home/eboard/eboard.html",
            controller: EBoardController
        });

    EBoardController.$inject = ["EBoardService"];

    function EBoardController(EBoardService) {
        var vm = this;

        vm.$onInit = function() {
            vm.header = getEBoardInfo().header;
            vm.membersTop = getEBoardInfo()
                .membersTop;
            vm.membersBottom = getEBoardInfo().membersBottom;
        };

        function getEBoardInfo() {
            return EBoardService.getEBoardInfo();
        }
    }
})();
