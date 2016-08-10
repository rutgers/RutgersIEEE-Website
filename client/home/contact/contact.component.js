//contact.component.js
//Author: Jeremy Savarin

var ContactService = require("./contact.service");

module.exports = angular.module("Contact", [])
    .component("ruIeeeContact", {
        templateUrl: "client/home/contact/contact.component.html",
        controller: ContactController
    })
    .factory("ContactService", ContactService);

ContactController.$inject = ["ContactService"];

function ContactController(ContactService) {
    var vm = this;

    vm.$onInit = function() {
        vm.address = getAddress();
    };

    function getAddress() {
        return ContactService.getAddress();
    }
}
