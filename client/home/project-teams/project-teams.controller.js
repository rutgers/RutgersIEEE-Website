//project-teams.controller.js
//Author: Jeremy Savarin

(function() {
    "use strict";

    angular.module("ProjectTeams")
        .controller("ProjectTeamsController", ["$scope", "$http",
            "ProjectTeamsService", ProjectTeamsController]);

    function ProjectTeamsController($scope, $http, ProjectTeamsService) {
        //Set Project team info
        $scope.header = {};
        $scope.teams = {};

        getProjectTeams();

        function getProjectTeams() {
            ProjectTeamsService.getProjectTeams()
                .success(successCallback);

            function successCallback(data) {
                $scope.header = data.header;
                $scope.teams = data.teams;
            }
        }
    }
})();
