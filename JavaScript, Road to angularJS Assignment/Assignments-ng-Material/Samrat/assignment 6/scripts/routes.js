
angular.module('mainApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider,$urlMatcherFactoryProvider) {

    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.path();
        console.log(path);
        if (path != '/' && path.slice(-1) === '/') {
            $location.replace().path(path.slice(0, -1));
            console.log(path);
        }
    });

    $stateProvider
        .state('list', {
            url: "/list",
            templateUrl:"views/list.html",
            controller: "listController  as vm"
        })
        .state('create-new', {
            url: "/new",
            templateUrl: "views/create-new.html",
            controller: "createNewController as vm"
        })
        .state('view-details', {
            url: "/details",
            templateUrl: "views/view-details.html",
            controller: 'viewDetailsController  as vm',
        })
        .state('error', {
            url: "/error",
            templateProvider: function ($q) {
                var defer = $q.defer();
                defer.resolve('<div><h2>error template</h2></div>');
                return defer.promise;
            }
        });
        $urlRouterProvider.otherwise("/error");

});

angular.module('mainApp').run(function ($rootScope) {

});

console.log("Routes loaded...");