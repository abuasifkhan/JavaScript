(function (angular) {
    "use strict";
    function constructor() {

        var users = [];
        var userDetails = null;
        var currentUserIndex = null;

        function getAllUser() {

            return users;
        }

        function removeUser(index) {
            if (index > -1) {
                users.splice(index, 1);
            }
        }

        function getUserDetails(index) {

            return userDetails;

        }
        this.getCurrentUserIndex = function(index) {

            return currentUserIndex;

        }

        function addUser(user) {
            users.push(user);
            var index = users.indexOf(user);
            return index;

        }

        this.setUserDetails = function(index){
            userDetails = users[index];
            currentUserIndex = index;
        }

        this.getAllUser = getAllUser;
        this.removeUser = removeUser;
        this.getUserDetails = getUserDetails;
        this.addUser = addUser;
    }


    constructor.$inject = [];
    angular.module("mainApp").service("usersService", constructor);

})(window.angular);