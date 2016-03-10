

//(function(){
    
var app = angular.module('appHomeWork',['ngMaterial']);

  

 

    
 app.controller("SubmitController",function($scope, $mdDialog, $mdMedia){
       

  $scope.students = [


      {name:"Kawsar",roll:"1",class:"Section A"},
       {name:"Moin",roll:"2",class:"Section B"},
       {name:"Prince",roll:"3",class:"Section C"}




  ] ;
  $scope.user = {} ;  
  
     
     
  var alert;
  $scope.showDialog = function($event) {
    
      
      alert = $mdDialog.alert({
      title: 'Attention',
      content: 'Are you sure!!!',
      ok: 'Delete'
      
               
          
          
          
    });
     
    
    $mdDialog
      .show( alert )
     /* .finally(function() {
        alert = undefined;
      });*/
  }
  
  
     $scope.showDetails = function(ev,user) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
             
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'details.html',
      parent: angular.element(document.body),
        scope: $scope.$new(),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
        
          
      
    }, function() {
      
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  
  
  
  
    $scope.showAdvanced = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'submit.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  
  function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
      
      
  };
      
      $scope.add = function(user)
  {
          console.log(user);
          
          $scope.students.push(user);
          
          $scope.user = {};
       //$mdDialog.cancel();
     // console.log("jshdfjsd");
      
  }
}
  
  
     
    
})  ;    
 
 
 
//})();


