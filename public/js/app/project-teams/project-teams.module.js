//project-teams.module.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ProjectTeams", [])
        .factory("ProjectTeams", ["$http", ProjectTeams]);

    function ProjectTeams($http) {
        var projectTeams = {};

        //Load in project team info
        projectTeams = $http.get("data/project_teams.json");

        return projectTeams;
    }
})();
