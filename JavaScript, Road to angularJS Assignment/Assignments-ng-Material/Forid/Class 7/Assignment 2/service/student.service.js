
(function (angular, appSuite) {
    "use strict";

    function constructor($mdDialog) {

       function showDetails(classes, student){
        debugger;
        $mdDialog.show({
                templateUrl: "../view/showStudent.html",
                controller: "viewStudentController",
                controllerAs: "vm",
                clickOutsideToClose: true,
                locals: {
                    classes: classes,
                    student: student
                }

            });
       }

       function addNewStudent($event){
         $mdDialog.show({
                templateUrl: "../view/addNewStudent.view.html",
                targetEvent: $event,
                controller: "addNewStudentController",
                controllerAs: "vm",
                clickOutsideToClose: true
            });
       }
       return {
        showDetails : showDetails,
        addNewStudent: addNewStudent
       }
    }

    constructor.$inject = ["$mdDialog"];
    angular.module("student").service("studentService", constructor);
})(window.angular, window.appSuite);
