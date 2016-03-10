"use strict";
angular.module('app', []);

angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.shows = [
        {
            name: 'Moin khan',
            email: 'moin@selise.ch',
            designation: 'UX Designer',
            year: 2011
        },
        {
            name: 'Kaowser',
            email: 'kaowser@selise.ch',
            designation: 'Jr. Software Eng',
            year: 2011
        },
         {
            name: 'Jubyer',
            email: 'juber@selise.ch',
            designation: 'Software Eng',
            year: 2010
        },
          {
            name: 'Tohid',
            email: 'tohid@selise.ch',
            designation: 'Software Eng',
            year: 2013
        },
    ];
    vm.new = {};
    vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
    };
  vm.remove = function(item) 
      { 
         // var index = vm.shows[item];
          vm.shows.splice(item, 1);     
     }
});