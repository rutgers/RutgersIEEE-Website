//app.config.js
//Author: Jeremy Savarin

module.exports = function StateConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            views: {
                "": {
                    templateUrl: "./client/home/home.html"
                },
                "greeting@home": {
                    template: "<ru-ieee-greeting></ru-ieee-greeting>"
                },
                "about@home": {
                    template: "<ru-ieee-about></ru-ieee-about>",
                },
                "project-teams@home": {
                    template: "<ru-ieee-project-teams></ru-ieee-project-teams>"
                },
                "eboard@home": {
                    template: "<ru-ieee-eboard></ru-ieee-eboard>"
                },
                "contact@home": {
                    template: "<ru-ieee-contact></ru-ieee-contact>"
                }
            }
        });
};
