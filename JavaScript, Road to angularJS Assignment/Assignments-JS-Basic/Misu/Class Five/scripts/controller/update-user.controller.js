(function (angular) {
    "use strict";

    function constructor($location, usersService, $stateParams) {
        var vm = this;
        var index = $stateParams.index;
        vm.selectedPerson = {
            index: "",
            username: "",
            email: ""

        };
        function getUserList() {

            vm.users = usersService.getAllUser();
        }
        function updateSelectedUser(userUp, index) {

            vm.selectedPerson.index = index;
            vm.selectedPerson.username = userUp.username;
            vm.selectedPerson.email = userUp.email;
        }

        function init() {
            getUserList();
            updateSelectedUser(vm.users[index], index);
        }

        function updateUser(person) {
            
            if (person.index !== -1) {
                vm.users[person.index] = person;
            }
            $location.path("/home/user-list");
        }

        init();
        vm.updateUser =updateUser;

    }

    constructor.$inject = ["$location", "usersService", "$stateParams"];
    angular.module("mainApp").controller("updateUserController", constructor);

})(window.angular);