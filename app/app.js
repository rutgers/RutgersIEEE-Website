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
    projectTeams.teams = $http.get("data/project_teams.json");

    return projectTeams;
}]);

app.directive('projectTeam', function() {
    return {
        restrict: "E",
        templateUrl: "public/views/project-team.html"
    };
});

//Set controllers
app.controller("AboutIEEEController", ["$scope", "$http", "AboutInfo", function AboutIEEEController($scope, $http, AboutInfo) {
    //Section header
    $scope.header = "About IEEE";

    //Set about IEEE descriptions
    AboutInfo.aboutIEEE.success(function(response) {
        $scope.descriptions = response;
    });
}]);

app.controller("AboutRutgersIEEEController", ["$scope", "$http", "AboutInfo", function AboutRutgersIEEEController($scope, $http, AboutInfo) {
    //Section header
    $scope.header = "About Rutgers IEEE";

    //Set about IEEE descriptions
    AboutInfo.aboutRutgersIEEE.success(function(response) {
        $scope.descriptions = response;
    });
}]);


app.controller("ProjectTeamsController", ["$scope", "$http", "ProjectTeams", function ProjectTeamsController($scope, $http, ProjectTeams) {
    //Section header
    $scope.header = "Project Teams";

    //Set Project team descriptions
    ProjectTeams.teams.success(function(response) {
        $scope.teams = response;
    });
}]);

app.controller("EboardController", ["$scope", "$http", function EboardController($scope, $http) {
    //Section header
    $scope.header = "2016-2017 E-Board";

    //E-board members
    $scope.membersTop = [{
        name: 'Niral Shah',
        position: 'President'
    }, {
        name: 'Ravi Bhankharia',
        position: 'Vice President'
    }, {
        name: 'Jeremy Savarin',
        position: 'Treasurer/Webmaster'
    }, {
        name: 'Kristian Wu',
        position: 'Secretary'
    }, {
        name: 'Deepti Upmaka',
        position: 'Professional Relations Chair'
    }, {
        name: 'Sam Lotsvin',
        position: 'Quartermaster'
    }];

    $scope.membersBottom = [{
        name: 'Samrat Darisipudi',
        position: 'EGC Representative'
    }, {
        name: 'Grisam Shah',
        position: 'Machine Learning Lead'
    }, {
        name: 'Shu Chen',
        position: 'ML Lead'
    }, {
        name: 'Ajay Srivastava',
        position: 'Robotics Team Lead'
    }, {
        name: 'Srihari Chekuri',
        position: 'Robotics Team Lead'
    }, {
        name: 'Michael Collins',
        position: 'ISN Lead'
    }];
}]);
