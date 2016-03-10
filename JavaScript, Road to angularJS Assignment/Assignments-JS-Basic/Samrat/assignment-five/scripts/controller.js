(function (angular) {
    "use strict";
    function constructor(usersService) {
        var vm = this;

        function init() {

            vm.users = usersService.getAllUser();
            vm.userList = false;
            vm.userAdding = true;
            vm.userDetails = false;

           
        }
        vm.user = {
            username: "demo",
            email: "demo@demo"

        };
        vm.selectedPerson = {
            index: "",
            username: "",
            email: ""

        };
        function updateSelectedUser(userUp,index) {

            vm.selectedPerson.index = index;
            vm.selectedPerson.username = userUp.username;
            vm.selectedPerson.email = userUp.email;
        }

        function addUser(userAdd) {
            var index=usersService.addUser(userAdd);
            updateSelectedUser(userAdd, index);
            showUserDetails();
            clearFileds();
        }

        function clearFileds() {
            vm.user= {
                
                username: "demo",
                email: "demo@demo"
            }
        }

        function getDetails(index) {

            var selectedUser = usersService.getUserDetails(index);
            updateSelectedUser(selectedUser,index);
            showUserDetails();
        }

        function deleteUser(index) {
            usersService.removeUser(index);
            showUserList();
        }

        function showUserList() {
            vm.userList = true;
            vm.userAdding = false;
            vm.userDetails = false;

        }

        function showUserForm() {

            vm.userList = false;
            vm.userAdding = true;
            vm.userDetails = false;
        }

        function showUserDetails() {

            vm.userList = false;
            vm.userAdding = false;
            vm.userDetails = true;

        }




        init();

        vm.addUser = addUser;
        vm.getDetails = getDetails;
        vm.deleteUser = deleteUser;
        vm.showUserList = showUserList;
        vm.showUserForm = showUserForm;
        vm.showUserDetails = showUserDetails;
    }


    constructor.$inject = ['usersService'];
    angular.module("mainApp").controller("usersController", constructor);

})(window.angular);


