(function (angular) {
    "use strict";
    function constructor() {
        var vm = this;
        vm.user = {
            username: "demo",
            email: "demo@demo"

        };
        vm.selectedPerson = {
            username: "",
            email: ""

        };
        vm.users = [
        { username: 'MisuBeImp', email: 'misu@misu' },
        { username: 'Maiyur', email: 'maiyur@maiyur' }

        ];

        function addUser(user) {
            vm.users.push(user);
            clearFileds();

        }

        function clearFileds() {
            vm.user = {
                username:"demo",
                email: "demo@demo"

            };

        }

        function getDetails(person) {
            vm.selectedPerson = {
                username: person.username,
                email: person.email
            }

        }

        function deleteUser(person) {
            vm.users.pop(person);

        }

        vm.addUser = addUser;
        vm.getDetails = getDetails;
        vm.deleteUser = deleteUser;
    }


    constructor.$inject = [];
    angular.module("mainApp").controller("usersController", constructor);

})(window.angular);