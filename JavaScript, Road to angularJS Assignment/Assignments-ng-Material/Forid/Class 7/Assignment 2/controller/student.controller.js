(function (angular, appSuite) {
    "use strict";

    function constructor($mdDialog,$mdToast,studentService,$timeout) {
        var vm = this,
         toast = $mdToast.simple().textContent('Student data is Deleted Successfully').highlightAction(false).position("bottom right");;
        vm.hideFrom = false;
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
        vm.stClasses = ['Class Six','Class Seven','Class Eight','Class Nine','Class Ten'];
        vm.Allstudent = [];
        vm.StudentOfClassSix = [];
        vm.StudentOfClassSeven = [];


        vm.allclass={};

        // vm.allclass.push({
        //     name:"Class Six",
        //     students:[]
        // })

        vm.saveStudent = function(){
            debugger;
            vm.hideFrom = true;
            //vm.Allstudent.push(vm.student);

            if(!vm.allclass[vm.student.stClass.trim()]){
                vm.allclass[vm.student.stClass.trim()] = { students:[] };
            }


            var className = vm.student.stClass.trim();
            vm.allclass[className]
            .students.push(vm.student);

            vm.reset();
            
        }
        vm.showStudent = function(classes, student){
            studentService.showDetails(classes, student);
        }
        vm.onSwipeLeft=function(classes, student){
             var confirm = $mdDialog.confirm()
             .title("Are you sure to delete the student data?")
             .ariaLabel('Delete Student data')
             .ok('Delete')
             .cancel('Cancel');
            
            $mdDialog.show(confirm).then(function(){
                 vm.allclass[classes].students.splice(vm.allclass[classes].students.indexOf(student),1);
                 $mdToast.show(toast);

            });

        } 
        vm.addAnother = function(){
            vm.hideFrom = false;
        }
        vm.getMatches = function(query) {
            return search(query);
        }

        function search(query){
            var matchList = [];
            for (var i = 0; i < vm.stClasses.length; i++) {
                if(vm.stClasses[i].indexOf(query)>=0){
                    matchList.push(vm.stClasses[i]);
                }
                    
            }

            return matchList;
        }

        vm.addStudent = function ($event) {
            studentService.addNewStudent($event);
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

    constructor.$inject = ["$mdDialog","$mdToast","studentService","$timeout"];
    angular.module("student").controller("studentController", constructor);
})(window.angular, window.appSuite);
