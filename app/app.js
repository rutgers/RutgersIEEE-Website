//app.js
//Author: Jeremy Savarin

//Declare module
var app = angular.module("ieeeApp", []);

//Set AboutInfo factory
app.factory("AboutInfo", ["$http", function AboutInfo($http) {
    var aboutInfo = {};

    //Load in about info .json files
    aboutInfo.aboutIEEE = $http.get("data/about_IEEE.json");
    aboutInfo.aboutRutgersIEEE = $http.get("data/about_RutgersIEEE.json");

    return aboutInfo;
}]);

//Set Project Teams factory
app.factory("ProjectTeams", ["$http", function ProjectTeams($http) {
    var projectTeams = {};

    //Load in project team info
    projectTeams = $http.get("data/project_teams.json");

    return projectTeams;
}]);

//Set E-Board factory
app.factory("EBoardInfo", ["$http", function EBoardInfo($http) {
    var eBoardInfo = {};

    //Load in E-board .json file
    eBoardInfo = $http.get("data/eboard.json");

    return eBoardInfo;
}]);

app.directive("projectTeam", function() {
    return {
        restrict: "E",
        templateUrl: "public/views/project-team.html"
    };
});

//Set controllers
app.controller("AboutIEEEController", ["$scope", "$http", "AboutInfo", function AboutIEEEController($scope, $http, AboutInfo) {
    //Set about IEEE info
    AboutInfo.aboutIEEE.success(function(response) {
        $scope.header = response.header;
        $scope.descriptions = response.descriptions;
    });
}]);

app.controller("AboutRutgersIEEEController", ["$scope", "$http", "AboutInfo", function AboutRutgersIEEEController($scope, $http, AboutInfo) {
    //Set about Rutgers IEEE info
    AboutInfo.aboutRutgersIEEE.success(function(response) {
        $scope.header = response.header;
        $scope.descriptions = response.descriptions;
    });
}]);

app.controller("ProjectTeamsController", ["$scope", "$http", "ProjectTeams", function ProjectTeamsController($scope, $http, ProjectTeams) {
    //Set Project team info
    ProjectTeams.success(function(response) {
        $scope.header = response.header;
        $scope.teams = response.teams;
    });
}]);

app.controller("EBoardController", ["$scope", "$http", "EBoardInfo", function EBoardController($scope, $http, EBoardInfo) {
    //Set E-Board Info
    EBoardInfo.success(function(response) {
        $scope.header = response.header;
        $scope.membersTop = response.membersTop;
        $scope.membersBottom = response.membersBottom;
    });
}]);
