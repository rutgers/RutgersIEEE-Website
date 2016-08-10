//about.component.js
//Author: Jeremy Savarin

var AboutService = require("./about.service");

module.exports = angular.module("About", [])
    .component("ruIeeeAbout", {
        templateUrl: "client/home/about/about.component.html",
        controller: AboutController
    })
    .factory("AboutService", AboutService);

AboutController.$inject = ["AboutService"];

function AboutController(AboutService) {
    var vm = this;

    vm.$onInit = function() {
        vm.aboutIEEEHeader = getAboutIEEE()
            .header;
        vm.aboutIEEEDescriptions = getAboutIEEE()
            .descriptions;
        vm.aboutRutgersIEEEHeader = getAboutRutgersIEEE()
            .header;
        vm.aboutRutgersIEEEDescriptions = getAboutRutgersIEEE()
            .descriptions;
    };

    //Set info
    function getAboutIEEE() {
        return AboutService.getAboutIEEE();
    }

    function getAboutRutgersIEEE() {
        return AboutService.getAboutRutgersIEEE();
    }
}
