//eboard.component.js
//Author: Jeremy Savarin

var EBoardService = require("./eboard.service");

module.exports = angular.module("EBoard", [])
    .component("ruIeeeEboard", {
        templateUrl: "client/home/eboard/eboard.component.html",
        controller: EBoardController
    })
    .factory("EBoardService", EBoardService);

EBoardController.$inject = ["EBoardService"];

function EBoardController(EBoardService) {
    var vm = this;

    vm.$onInit = function() {
        vm.header = getEBoardInfo()
            .header;
        vm.membersTop = getEBoardInfo()
            .membersTop;
        vm.membersBottom = getEBoardInfo()
            .membersBottom;
    };

    function getEBoardInfo() {
        return EBoardService.getEBoardInfo();
    }
}
