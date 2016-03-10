(function (angular) {
    "use strict";

    function constructor($location, usersService, $state) {
        var vm = this;

        function getUserList() {

            vm.users = usersService.getAllUser();
        }

        function init() {

            getUserList();
        }

        function getDetails(index) {
            $state.go('user-details', { index: index });
        };



        function deleteUser(index) {
            usersService.removeUser(index);
           
        }

        function editUser(index) {

            $state.go('update-user', { index: index });
            

        }


        vm.getDetails = getDetails;
        vm.deleteUser = deleteUser;
        vm.editUser = editUser;

        init();
    }

    constructor.$inject = ["$location", "usersService", "$state"];
    angular.module("mainApp").controller("userListController", constructor);

})(window.angular);