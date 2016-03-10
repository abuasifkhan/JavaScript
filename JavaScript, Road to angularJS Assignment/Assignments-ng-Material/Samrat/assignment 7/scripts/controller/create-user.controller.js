(function (angular) {
    "use strict";

    function constructor($location, usersService) {
        var vm = this;
        vm._classes = ['1st', '2nd', '3rd', '4th'];
        function init() {
            vm.user = {
                name: "",
                age: "",
                _class: "",
                section: "",
                roll: "",
                DateOfBirth: ""
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