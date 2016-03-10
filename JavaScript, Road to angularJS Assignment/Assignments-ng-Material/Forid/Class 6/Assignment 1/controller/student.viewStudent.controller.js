(function (angular, appSuite) {
    "use strict";

    function constructor($mdDialog,studentService,AllStudent,CurrentStudent) {
        var vm = this;
        vm.AllStudent = [];

        debugger;
        vm.AllStudent  = AllStudent;
        vm.CurrentStudent = CurrentStudent-1;
    }

    constructor.$inject = ["$mdDialog","studentService","AllStudent","CurrentStudent"];
    angular.module("student").controller("viewStudentController", constructor);
})(window.angular, window.appSuite);
