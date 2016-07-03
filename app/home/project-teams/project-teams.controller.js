//project-teams.controller.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ProjectTeams")
        .controller("ProjectTeamsController", ["$scope", "$http",
            "ProjectTeams", ProjectTeamsController]);

    function ProjectTeamsController($scope, $http, ProjectTeams) {
        //Set Project team info
        ProjectTeams.success(function(response) {
            $scope.header = response.header;
            $scope.teams = response.teams;
        });
    }
})();
