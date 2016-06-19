//app.js
//Author: Jeremy Savarin

//Declare module
var app = angular.module("ieeeApp", []);

//Set controllers
app.controller("AboutIEEEController", ["$scope", "$http", function AboutIEEEController($scope, $http) {
    //Section header
    $scope.header = "About IEEE";

    //Set about IEEE descriptions
    $http.get("data/about_IEEE.json")
        .success(function(data) {
            $scope.descriptions = data;
            console.log("Success!");
        })
        .error(function(data, status) {
            console.log("Something went horribly wrong!");
        });
}]);

app.controller("AboutRutgersIEEEController", ["$scope", "$http", function AboutRutgersIEEEController($scope, $http) {
    //Section header
    $scope.header = "About Rutgers IEEE";

    //Set about Rutgers IEEE descriptions
    $http.get("data/about_RutgersIEEE.json")
        .success(function(data) {
            $scope.descriptions = data;
            console.log("Success!");
        })
        .error(function(data, status) {
            console.log("Something went horribly wrong!");
        });
}]);

app.controller("ProjectTeamsController", ["$scope", "$http", function ProjectTeamsController($scope, $http) {
    //Section header
    $scope.header = "Project Teams";

    //Set Project team descriptions
    $http.get("data/project_teams.json")
        .success(function(data) {
            $scope.teams = data;
            console.log("Success!")
        })
        .error(function(data, status) {
            console.log("Something went horribly wrong!");
        });

}]);

app.controller("EboardController", ["$scope", "$http", function EboardController($scope, $http) {
    //Section header
    $scope.header = "2016-2017 E-Board"

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
