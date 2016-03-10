angular.
    module('mainApp', ["ui.router"]);

angular.
    module('mainApp').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/partial/home.html",
                controller: 'homeController as vm'
            })
            .state('user-list', {
                parent: 'home',
                url: "/user-list",
                templateUrl: "/partial/user-list.html",
                controller: 'userListController',
                controllerAs: 'vm'
            })
            .state('create-user', {
                parent: 'home',
                url: "/create-user",
                templateUrl: "/partial/create-user.html",
                controller: "createUserController",
                controllerAs: 'vm'
            })
            .state('user-details', {
                parent: 'home',
                url: "/user-details/:index",
                templateUrl: "/partial/user-details.html",
                controller: "userDetailsController",
                controllerAs: 'vm'

            })
            .state('update-user', {
                parent: 'home',
                url: "/update-user/:index",
                templateUrl: "/partial/update-user.html",
                controller: "updateUserController",
                controllerAs: 'vm'
            });


    });