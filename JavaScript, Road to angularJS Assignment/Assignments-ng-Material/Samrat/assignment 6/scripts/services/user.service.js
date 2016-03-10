(function (angular) {
    "use strict";
    function constructor() {

        var users = [];
        var newUser = {
            email: "",
            username: ""
        };
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
            newUser.email = user.email;
            newUser.username = user.fullname;
            users.push(newUser);
            var index = users.indexOf(newUser);
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