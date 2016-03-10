(function (angular) {
    "use strict";
    function constructor($location, usersService) {
        var vm = this;

        function init() {
            vm.users = usersService.getAllUser();
        }

        vm.viewDetails = function(index) {

            usersService.setUserDetails(index);
            console.log("Details" + index);
            $location.path("/details");
        }

        function deleteUser(index) {
            usersService.removeUser(index);
        }

        init();
        vm.deleteUser = deleteUser;
       
    }


    constructor.$inject = ['$location','usersService'];
    angular.module("mainApp").controller("listController", constructor);

})(window.angular);


