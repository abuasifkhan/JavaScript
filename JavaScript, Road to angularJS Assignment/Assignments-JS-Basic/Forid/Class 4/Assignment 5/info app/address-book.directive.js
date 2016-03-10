
(function (angular) {
    "use strict";

    function constructor(){
   return {
   	restrict: "A",
       templateUrl: 'personInfo.html'
   }
};
    angular.module("address-book").directive('editInfoDirective', constructor);
})(window.angular);