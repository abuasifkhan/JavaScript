(function (angular, appSuite) {
    "use strict";

    function constructor($mdDialog,studentService) {
        var vm = this;
        vm.student = {
                firstName: '',
                lastName: '',
                age: '',
                gender: '',
                stClass: '',
                section: '',
                roll: '',
                birthDate: ''
        };
        vm.Allstudent = []; 

        vm.saveStudent = function(){
            debugger;
            vm.Allstudent.push(vm.student);
            vm.reset();
            
            studentService.showDetails(vm.Allstudent, vm.Allstudent.length);
            
        }
        vm.reset = function(){
             vm.student = {
                firstName: '',
                lastName: '',
                age: '',
                gender: '',
                stClass: '',
                section: '',
                roll: '',
                birthDate: ''
            };
        }
    }

    constructor.$inject = ["$mdDialog","studentService"];
    angular.module("student").controller("studentController", constructor);
})(window.angular, window.appSuite);
