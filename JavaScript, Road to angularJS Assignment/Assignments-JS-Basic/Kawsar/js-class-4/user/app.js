

//(function(){
    
  
    var app = angular.module('appHomeWork',[]);

  
    
app.controller("SubmitController",function(){
    
   this.user = {}; 
   this.title = "Road TO Angularjs Home Work!!";    
   this.userlist = [];    
   this.clearUser = {}; 
    
   this.add = function(hello){
        
      
       this.userlist.push(hello);
       //hello = this.formValues
       
       console.log(hello.name);
       
       this.user = this.clearUser;
       //console.log("Test "+this.userlist[1].name);
    };
    
    
    
    
})  ;  
    
    
 app.controller("SubmitController1",function($scope){
    
   
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
    $scope.gototab = function(index){
        $scope.tab=index;
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
