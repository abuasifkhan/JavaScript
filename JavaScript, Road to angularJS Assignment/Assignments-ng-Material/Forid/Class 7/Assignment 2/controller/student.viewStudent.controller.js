(function (angular, appSuite) {
    "use strict";

    function constructor($mdDialog,studentService,classes,student) {
        var vm = this;
        vm.studentData = {};

        debugger;
        vm.studentData  = student;
        vm.studentData.stClass = classes;
    }

    constructor.$inject = ["$mdDialog","studentService","classes", "student"];
    angular.module("student").controller("viewStudentController", constructor);
})(window.angular, window.appSuite);
