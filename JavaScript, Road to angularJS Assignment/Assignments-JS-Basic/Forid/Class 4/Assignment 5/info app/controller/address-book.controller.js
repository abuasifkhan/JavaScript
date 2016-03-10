
(function (angular) {
    "use strict";

    function constructor($scope) {
        var vm = this;
        vm.hideInfo = true;
        // vm.selected = {};
        vm.person = {
            id: null,
            firstName: '',
            lastName: '',
            mobile: '',
            email: ''
        }
        vm.allPerson = [
        {
            id: 1,
            firstName: 'Forid',
            lastName: 'Islam',
            mobile: '2132454',
            email: 'asd@dsf.com'

        }];        
        vm.id = 2;
        vm.addPerson = function(){
            if(vm.person.id === null){
                vm.person.id = vm.id++;
                vm.allPerson.push(vm.person);
            }else{

            }
             vm.hideInfo = false;
             vm.reset();
        }
        
        vm.showAll = function(){
            vm.hideInfo = false;
        }

        vm.edit = function(id){
                for(var i=0;i<vm.allPerson.length;i++){
                    if(vm.allPerson[i].id == vm.person.id){
                        vm.allPerson[i] = vm.person;
                        break;
                    }
                }
        }

        // vm.updateInfo = function(id){
        //     for(var i=0;i<vm.allPerson.length; i++){
        //         if(vm.allPerson[i].id === id){
        //             vm.person = angular.copy(vm.allPerson[i]);
        //             break;
        //         }
        //     }
        //     vm.reset();
        //     vm.displayInfo = true;
        // }
        vm.remove = function(id){
            for(var i=0;i<vm.allPerson.length; i++){
                if(vm.allPerson[i].id === id){
                    vm.allPerson.splice(i,1);
                    if(vm.person.id == id){
                        vm.reset();
                    }
                    break;
                }
            }

        }
       vm.reset = function(){
        vm.person = {
            id: null,
            firstName: '',
            lastName: '',
            mobile: '',
            email: ''
        }
         
        }
        // $scope.getTemplate = function (person) {
        //      if (person.id === $scope.selected.id){
        //       return 'edit';
        //      }
        //      else return 'display';
        //     };
        }
        constructor.$inject = ['$scope'];
    angular.module("address-book").controller('addressBookController', constructor);
})(window.angular);
