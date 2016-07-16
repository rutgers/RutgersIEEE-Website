//project-teams.directive.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ProjectTeams")
        .directive("projectTeam", ProjectTeam);

    function ProjectTeam() {
        return {
            restrict: "E",
            templateUrl: "client/home/project-teams/project-team.html"
        };
    }
})();
