var app = angular.module("simpleApp",['ngMaterial', 'ngMessages']);
app.controller("simpleController", function ($scope, $mdDialog){
 
$scope.col=[];
 $scope.add= function()
{
   $scope.col.push($scope.data);
   $scope.data="";
}




 $scope.goToPerson = function(person, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Student Information')
        .textContent('Name : ' + person.name +'\n Age        : ' + person.age+ '    Class      : ' + person.class + '    Roll       :' + person.roll+ '  Section    : ' + person.section + ' Birth date : ' + person.date)
       // .textContent('Age        : ' + person.age)
     //   .textContent('Class      : ' + person.clas)
      //  .textContent('Roll       :' + person.roll)
      //  .textContent('Section    : ' + person.section)
      //  .textContent('Birth date : ' + person.date)
        .ariaLabel('Person inspect demo')
        .ok('OK')
        .targetEvent(event)
    );
  };

 $scope.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .textContent('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };



 $scope.onSwipeLeft = function(event) {
      alert('You swiped left!!');
    };










})

