/**
 * Created by abuas on 16-Feb-16.
 */
"use strict"
var Data = function (name, mobile) {
    return{
        Name:name,
        Mobile:mobile
    }
}

var app = angular.module("dataEntry",[]);
app.controller("simpleController",function($scope){
    $scope.collection = new Array();
    $scope.pushData = function(){
        $scope.collection.push(Data($scope.newName, $scope.newMobile));
    }

    $scope.findData= function () {
        var index = -1;
        var mob = $scope.newMobile;
        var name = $scope.newName;
        for(var i=0;i<$scope.collection.length;i++){
            if(name == $scope.collection[i].Name &&
                mob == $scope.collection[i].Mobile){
                index=i;
                break;
            }
        }
        if(index>-1)
            $scope.collection.splice(index,1);
    }
});