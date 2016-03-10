

//(function(){
    
  
    var app = angular.module('appHomeWork',['ngMaterial']);

  

    
 app.controller("SubmitController",function($scope){
    
   
   $scope.user = {}; 
   $scope.title = "Road TO Angularjs Home Work!!";    
   $scope.userlist = [];   
   $scope.clearUser = {}; 
    
   $scope.add = function(user){
        
       console.log(user);

       $scope.userlist.push(user);
       console.log($scope.userlist);
       $scope.user = {};
    };
    
   $scope.hellotext = function()
 {
     
     alert("Hello World");
     
 };
     
     
    
    
     
      $scope.del =   function(item){ 
      var index=$scope.userlist.indexOf(item);
      $scope.userlist.splice(index,1);     
        }
     
     
    
})  ;    
    
//})();
