//project-teams.service.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ProjectTeams")
        .factory("ProjectTeamsService", ["$http", ProjectTeamsService]);

    function ProjectTeamsService($http) {
        return {
            getProjectTeams: getProjectTeams
        };

        //Load in project team info
        function getProjectTeams() {
            return $http.get("data/project_teams.json");
        }
    }
})();
