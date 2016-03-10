
(function (angular, appSuite) {
    "use strict";

    function constructor($mdDialog) {

       function showDetails(AllStudent, CurrentStudent){
        debugger;
        $mdDialog.show({
                templateUrl: "../view/showStudent.html",
                controller: "viewStudentController",
                controllerAs: "vm",
                clickOutsideToClose: true,
                locals: {
                    AllStudent: AllStudent,
                    CurrentStudent: CurrentStudent

                }

            });
       }

       return {
        showDetails : showDetails
       }
    }

    constructor.$inject = ["$mdDialog"];
    angular.module("student").service("studentService", constructor);
})(window.angular, window.appSuite);
