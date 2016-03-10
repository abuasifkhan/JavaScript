(function (angular) {
    "use strict";

    function constructor($location, usersService) {
        var vm = this;
        
        function init() {
            vm.user = {
                username: "demo",
                email: "demo@demo"

            };

        }

        function addUser(userAdd) {
            
            var index = usersService.addUser(userAdd);
            $location.path("/home/user-list");
        }

        vm.addUser = addUser;
        init();

    }

    constructor.$inject = ["$location", "usersService"];
    angular.module("mainApp").controller("createUserController", constructor);

})(window.angular);