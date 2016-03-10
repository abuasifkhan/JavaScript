(function (angular, appSuite) {
    "use strict";

    function constructor($mdDialog,studentService) {
        var vm = this;
        vm.studentData = {};

        debugger;
    }

    constructor.$inject = ["$mdDialog","studentService"];
    angular.module("student").controller("addNewStudentController", constructor);
})(window.angular, window.appSuite);
