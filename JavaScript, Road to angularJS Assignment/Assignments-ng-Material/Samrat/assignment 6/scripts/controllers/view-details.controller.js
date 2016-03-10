(function (angular) {
    "use strict";
    function constructor($location, usersService) {
        var vm = this;

        function init() {
            getUserDetails();
        }


        vm.deleteUser = function () {
            usersService.removeUser(vm.currentUser);
            $location.path("/list");
        }

     
        function getUserDetails() {
            vm.user = usersService.getUserDetails();
            vm.currentUser = usersService.getCurrentUserIndex();
        }
        init();
    }


    constructor.$inject = ["$location", 'usersService'];
    angular.module("mainApp").controller("viewDetailsController", constructor);

})(window.angular);


