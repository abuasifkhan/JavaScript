var app=angular.module("SimpleApp",[]);

app.controller("simplecontroller",function($scope){

     $scope.collection=[];
     
    
    $scope.addEntry=function(){

    $scope.collection.push($scope.user);
  

 }
});
