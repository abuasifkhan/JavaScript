(function (angular) {
    "use strict";
    function constructor() {

        var users = [];

        function getAllUser() {

            return users;
        }

        function removeUser(index) {
            if (index > -1) {
                users.splice(index, 1);
            }
        }

        function getUserDetails(index) {

            return users[index];

        }

        function addUser(user) {
            users.push(user);
            var index = users.indexOf(user);
            return index;

        }


        function init() {
            var user = { name: 'MisuBeImp', age: '20', roll: '0516', _class: '4th', DateOfBirth: '2/2/2013', section: 'A' }
            users.push(user);

        }


        init();
        this.getAllUser = getAllUser;
        this.removeUser = removeUser;
        this.getUserDetails = getUserDetails;
        this.addUser = addUser;
    }


    constructor.$inject = [];
    angular.module("mainApp").service("usersService", constructor);

})(window.angular);