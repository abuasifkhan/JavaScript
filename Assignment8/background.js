var data = function(name,roll,age,Cls,section,dateOfBirth){
    return{
        Name:name,
        Roll:roll,
        Age:age,
        Class:Cls,
        Section:section,
        DateOfBirth:dateOfBirth,
        Day:dateOfBirth.getDate(),
        Month:dateOfBirth.getMonth(),
        Year:dateOfBirth.getUTCFullYear()
    }
}

angular.module('toolbarDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope, $mdDialog) {
        $scope.isVisible=false;
        $scope.searchText="";
        $scope.NAME;
        $scope.roll;
        $scope.age;
        $scope.Cls;
        $scope.section;
        $scope.dateOfBirth=new Date();
        $scope.infos=new Array();

        $scope.pushData = function () {
            console.log($scope.dateOfBirth);
            $scope.infos.push(data($scope.NAME,$scope.roll,$scope.age,$scope.Cls,$scope.section,$scope.dateOfBirth));
        };

        $scope.searchClicked = function(){
            if($scope.isVisible==true) $scope.isVisible=false;
            else $scope.isVisible=true;
        };


        $scope.showDialog=function($index){

            var str=$scope.infos[$index];

            console.log(str);

            $mdDialog.show({
                controller: DialogController,
                templateUrl:'dialogbox.html',
                parent: angular.element(document.body),
                resolve: {
                    indx: function(){
                        return $index;
                    },
                    value:function(){
                        return str;
                    },
                    allData:function(){
                        return $scope.infos;
                    }
                }
            });
        };

        $scope.onSwipeLeft1 = function(ev,$index){
            var confirm = $mdDialog.confirm()
                  .title('Would you like to delete this student data?')
                  .textContent('This essential data will be parmanently deleted!')
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Delete!')
                  .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
              $scope.infos.splice($index,1);
            }, function() {
              $scope.status = 'You decided to keep your debt.';
            });
        };
        
        $scope.addButtonClicked = function(){
            var allData = $scope.infos;
            $mdDialog.show({
                controller: AddNewController,
                templateUrl: 'submitForm.html',
                parent: angular.element(document.body),
                resolve:{
                    allData:function(){
                        return allData;
                    }
                }
            });
        };

    });

function DialogController($scope, $mdDialog, indx, value, allData) {
    $scope.Name = value.Name;
    $scope.Roll = value.Roll;
    $scope.Age = value.Age;
    $scope.Class = value.Class;
    $scope.Section = value.Section;
    $scope.Day = value.Day;
    $scope.Month = value.Month;
    $scope.Year = value.Year;

    console.log(indx);
    $scope.dismissIt = function () {
        $mdDialog.cancel();
    }
    $scope.onSwipeLeft = function (ev) {
        allData.splice(indx,1);
        $mdDialog.cancel();
    }

    //$scope.searchTextChange = function (text) {
    //    $log.info('Text changed to ' + text);
    //}
    //$scope.selectedItemChange = function (item) {
    //    $log.info('Item changed to ' + JSON.stringify(item));
    //}
}

function AddNewController($scope, $mdDialog, allData){
    $scope.NAME;
    $scope.roll;
    $scope.age;
    $scope.Cls;
    $scope.section;
    $scope.dateOfBirth=new Date();
    $scope.pushData = function () {
        allData.push(data($scope.NAME,$scope.roll,$scope.age,$scope.Cls,$scope.section,$scope.dateOfBirth));
        $mdDialog.cancel();
    };
}