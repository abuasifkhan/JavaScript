(function (angular) {
    "use strict";

    function constructor($location, $mdDialog, $mdMedia, usersService) {
        var vm = this;
        vm.status = '';
        function showUserList() {
            $location.path("/home/user-list");
        }

        function showUserForm(event) {
            showAdvanced(event);

        }
        function showAdvanced(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
            $mdDialog.show({
                controller: DialogController,
                controllerAs: 'vm',
                templateUrl: '/partial/create-user.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
            .then(function (answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function () {
                vm.status = 'You cancelled the dialog.';
            });
            vm.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });
        };
        function DialogController() {
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

            vm.addUser = function (userAdd) {

                var index = usersService.addUser(userAdd);
                vm.hide();
            }


            vm.hide = function () {
                $mdDialog.hide();
            };
            vm.cancel = function () {
                $mdDialog.cancel();
            };
            vm.answer = function (answer) {
                $mdDialog.hide(answer);
            };
            init();
        }


        vm.showUserForm = showUserForm;
        vm.showUserList = showUserList;




    }

    constructor.$inject = ["$location", "$mdDialog", "$mdMedia", "usersService"];
    angular.module("mainApp").controller("homeController", constructor);

})(window.angular);