//project-teams.module.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ProjectTeams", [])
        .component("ruIeeeProjectTeams", {
            templateUrl: "client/home/project-teams/project-teams.html",
            controller: ProjectTeamsController
        });

    ProjectTeamsController.$inject = ["ProjectTeamsService"];

    function ProjectTeamsController(ProjectTeamsService) {
        var vm = this;

        vm.$onInit = function() {
            vm.header = getProjectTeams().header;
            vm.teams = getProjectTeams().teams;
        };

        function getProjectTeams() {
            return ProjectTeamsService.getProjectTeams();
        }
    }
})();
