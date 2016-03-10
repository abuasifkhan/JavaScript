(function (angular) {
    "use strict";
    function constructor($location, usersService) {
        var vm = this;

        function addUser(user) {
            var index=usersService.addUser(user);
            $location.path("/list");
        }
        vm.addUser = addUser;
    }


    constructor.$inject = ['$location','usersService'];
    angular.module("mainApp").controller("createNewController", constructor);

})(window.angular);


