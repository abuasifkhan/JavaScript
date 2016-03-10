var data = function(name,roll,age,Cls,section,dateOfBirth){
    return{
        Name:name,
        Roll:roll,
        Age:age,
        Class:Cls,
        Section:section,
        DateOfBirth:dateOfBirth
    }
}

angular.module('toolbarDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
        $scope.NAME;
        $scope.roll;
        $scope.age;
        $scope.Cls;
        $scope.section;
        $scope.dateOfBirth=new Date();
        $scope.infos=new Array();
        $scope.pushData = function () {
            //document.write($scope.NAME);
            $scope.infos.push(data($scope.NAME,$scope.roll,$scope.Cls,$scope.section,$scope.dateOfBirth));
            //document.write($scope.infos.length);
        }
        $scope.showAlert=function(info){
            alert=$mdDialog.alert()
                .title('Name: '+info.Name)
                .content('Roll: '+info.Roll+'\nAge: '+info.Age+'\nClass: '+info.Class+'\nSection: '+info.Section)
                .ok('Close');
            $mdDialog.show(alert)
                .finally(function(){
                    alert=undefined;
                });
        }
    });