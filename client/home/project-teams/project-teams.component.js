//project-teams.component.js
//Author: Jeremy Savarin

var ProjectTeamsService = require("./project-teams.service");

module.exports = angular.module("ProjectTeams", [])
    .component("ruIeeeProjectTeams", {
        templateUrl: "client/home/project-teams/project-teams.component.html",
        controller: ProjectTeamsController
    })
    .factory("ProjectTeamsService", ProjectTeamsService);

ProjectTeamsController.$inject = ["ProjectTeamsService"];

function ProjectTeamsController(ProjectTeamsService) {
    var vm = this;

    vm.$onInit = function() {
        vm.header = getProjectTeams()
            .header;
        vm.teams = getProjectTeams()
            .teams;
    };

    function getProjectTeams() {
        return ProjectTeamsService.getProjectTeams();
    }
}
