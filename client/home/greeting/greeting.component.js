//greeting.component.js
//Author: Jeremy Savarin

module.exports = angular.module("Greeting", [])
    .component("ruIeeeGreeting", {
        templateUrl: "views/home/greeting/greeting.component.html",
        controller: GreetingController
    })
    .component("ruIeeeSignup", {
        templateUrl: "views/home/greeting/signup.component.html",
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: SignupController
    });


GreetingController.$inject = ["$uibModal", "Flash"];

function GreetingController($uibModal, Flash) {
    var vm = this;

    vm.openSignupModal = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            component: "ruIeeeSignup"
        });

        modalInstance.result.then(function(name) {
            var message = "Thank you for signing up, <strong>" +
                name + "</strong>!";
            Flash.create("success", message);
        });
    };
}

SignupController.$inject = ["$http"];

function SignupController($http) {
    var vm = this;

    vm.signupForm = {};

    vm.submit = function() {
        var API_KEY = "6150782e6d5d22805f788803623c1c08";

        var config = {
            "Content-Type": "application/json"
        };

        var data = {
            email: vm.signupForm.email,
            fields: [{
                name: "name",
                value: vm.signupForm.firstName
            }, {
                name: "last_name",
                value: vm.signupForm.lastName
            }, {
                name: "major",
                value: vm.signupForm.major
            }, {
                name: "graduating_year",
                value: vm.signupForm.graduatingYear
            }]
        };

        $http.post(
                "https://app.mailerlite.com/api/v1/subscribers/4665263/?apiKey=" +
                API_KEY, data, config)
            .then(function(res) {
                vm.close({
                    $value: vm.signupForm.firstName
                });
            }, function(res) {
                console.log("Error: " + JSON.stringify(res.data));
            });


    };

    vm.cancel = function() {
        vm.dismiss({
            $value: "cancel"
        });
    };
}
