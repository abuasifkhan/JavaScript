(function (angular) {
    "use strict";

    function constructor($location) {
        var vm = this;

        function showUserList() {
            $location.path("/home/user-list");
        }


        function showUserForm() {
            $location.path("/home/create-user");

        }

        vm.showUserList = showUserList;
        vm.showUserForm = showUserForm;

        

    }

    constructor.$inject = ["$location"];
    angular.module("mainApp").controller("homeController", constructor);

})(window.angular);