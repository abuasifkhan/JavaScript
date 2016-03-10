
(function (angular) {
    "use strict";

    function constructor() {
        var vm = this;
        vm.user = {
            id: null,
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        }
        vm.allUser = [
        {
            id: 1,
            firstName: 'Forid',
            lastName: 'Islam',
            username: 'Forid',
            password: '123'

        }];        
        vm.id = 2;
        vm.login = function(){
                if(isValidUser(vm.username, vm.password)){
                    alert("Logged is successfully");
                }
                else
                    alert("Wrong username or password");
        }
        vm.register = function(){
            vm.user.id = vm.id++;
            vm.allUser.push(vm.user);

            alert("You are registered now");
            clearAll();
        }
        function isValidUser(user, pass){
                for(var i=0;i<vm.allUser.length;i++){
                    if(vm.allUser[i].username === user && vm.allUser[i].password === pass )
                        return true;
                }
                return false;
        }
        function clearAll(){
            vm.user = {
                id: null,
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            }
        }
    }
    angular.module("user-login").controller('userLoginController', constructor);
})(window.angular);
