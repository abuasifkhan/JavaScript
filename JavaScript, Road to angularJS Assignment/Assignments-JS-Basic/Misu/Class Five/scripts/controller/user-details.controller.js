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
        function deleteUser(index) {
            usersService.removeUser(index);
            $location.path("/home/user-list");

        }

        function init() {
            getUserList();
            updateSelectedUser(vm.users[index], index);
        }
        init();

        vm.deleteUser = deleteUser;
    }

    constructor.$inject = ["$location", "usersService", "$stateParams"];
    angular.module("mainApp").controller("userDetailsController", constructor);

})(window.angular);