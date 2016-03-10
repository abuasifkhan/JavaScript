(function () {
    'use strict';
    angular
        .module('schoolApp', ['ngMaterial'])
        .controller('AppCtrl', function ($scope) {
            this.userState = '';
            $scope.user = {
                firstName: '',
                lastName: '',
                age: '',
                class: '',
                section:'',
                dateofBirth: null
            };
            $scope.title = 'Student Management';
            this.classList = ('Class 1;Class 2;Class 3').split(';').map(function (state) { return { abbrev: state }; });
            $scope.hideFrom = false;
            $scope.save = function() {
                $scope.hideFrom = true;
                $scope.title = 'Student Management-' + $scope.user.firstName +' ' + $scope.user.lastName;
            }
            $scope.data = {
                ID: '2',
                Text: 'avatar-1'
            };
            $scope.radioData = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: '3'},
  { label: '4', value: '4' }
            ];
        });
})();