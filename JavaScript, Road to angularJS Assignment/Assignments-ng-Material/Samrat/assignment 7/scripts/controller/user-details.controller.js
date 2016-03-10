(function (angular) {
    "use strict";

    function constructor($location, usersService, $stateParams) {
        var vm = this;
        var index = $stateParams.index;
        vm.selectedPerson = {
            index: "",
            name: "",
            age: " ",
            _class: "",
            section: "",
            roll: "",
            DateOfBirth: ""

        };

        function getUserList() {

            vm.users = usersService.getAllUser();
        }


        function updateSelectedUser(userUp, index) {

            vm.selectedPerson.index = index;
            vm.selectedPerson.name = userUp.name;
            vm.selectedPerson.age = userUp.age;
            vm.selectedPerson._class = userUp._class;
            vm.selectedPerson.section = userUp.section;
            vm.selectedPerson.roll = userUp.roll;
            vm.selectedPerson.DateOfBirth = userUp.DateOfBirth;
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