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
            var user = { username: 'MisuBeImp', email: 'misu@misu' }
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