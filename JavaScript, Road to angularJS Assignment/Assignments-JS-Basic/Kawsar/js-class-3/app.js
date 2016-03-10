

(function(){
    
  
    var app = angular.module('app',[]);

app.controller("AppController",function($scope){
    
    $scope.title = "Angularjs Home Work";
    
    
    
});
    
app.controller("SubmitController",function($scope){
    
   $scope.obj = [];
    
   $scope.addSubmit = function(formValues){
        
       // formValues.obj.push(this.obj);
        $scope.obj.push ( formValues.name );
       // $scope.obj.email = formValues.email;
       // alert($scope.obj.name + " "+ $scope.obj.email);
        
    };
    
    
    
    
})  ;  
    
    
    
    
})();
