(function (angular) {
    "use strict";

    function constructor($location, usersService, $state, $mdDialog, $mdToast, $document) {
        var vm = this;
        vm.showSearchField = false;
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };
        vm.toastPosition = angular.extend({}, last);
        function getUserList() {

            vm.users = usersService.getAllUser();
        }

        function init() {

            getUserList();
        }

        function getDetails(index) {
            $state.go('user-details', { index: index });
        };



        function deleteUser(index) {
            usersService.removeUser(index);
            showSimpleToast();
        }

        function editUser(index) {

            $state.go('update-user', { index: index });


        }
        function showAlert(ev, index) {

            var student = vm.users[index];
            var details = "NAME: " + student.name + "        " +
                "AGE: " + student.age;
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title("Student Details")
                .textContent(details)
                .ariaLabel('Alert Dialog Demo')
                .ok("close")
                .targetEvent(ev)
            );
        };

        function showConfirm(ev, index) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this student?')
                .textContent("")
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok("Yes")
                  .cancel("No");
            $mdDialog.show(confirm).then(function () {
                vm.status = 'Student is deleted from the list';
                deleteUser(index);
            }, function () {
                vm.status = 'Nothing happend';
            });
        };


        function showSimpleToast() {
            $mdToast.show(
              $mdToast.simple()
                .textContent('Student Deleted')
                .position(getToastPosition())
                .hideDelay(3000)
            );
        };

        function getToastPosition() {
            sanitizePosition();
            return Object.keys(vm.toastPosition)
              .filter(function (pos) { return vm.toastPosition[pos]; })
              .join(' ');
        };

        function sanitizePosition() {
            var current = vm.toastPosition;
            if (current.bottom && last.top) current.top = false;
            if (current.top && last.bottom) current.bottom = false;
            if (current.right && last.left) current.left = false;
            if (current.left && last.right) current.right = false;
            last = angular.extend({}, current);
        }
        function onSwipeLeft(event, index) {
            showConfirm(event, index);

        }


        vm.onSwipeLeft = onSwipeLeft;
        vm.getDetails = getDetails;
        vm.deleteUser = deleteUser;
        vm.editUser = editUser;
        vm.showAlert = showAlert;

        init();
    }

    constructor.$inject = ["$location", "usersService", "$state", "$mdDialog", "$mdToast", "$document"];
    angular.module("mainApp").controller("userListController", constructor);

})(window.angular);