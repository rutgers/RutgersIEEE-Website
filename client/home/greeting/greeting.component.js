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


GreetingController.$inject = ["$uibModal"];

function GreetingController($uibModal) {
    var vm = this;

    vm.openSignupModal = function() {
        $uibModal.open({
            animation: true,
            component: "ruIeeeSignup"
        });
    };
}

function SignupController() {
    var vm = this;

    vm.signupForm = {};

    vm.submit = function() {
        console.log(vm.signupForm);
    };

    vm.cancel = function() {
        vm.dismiss({
            $value: "cancel"
        });
    };
}
