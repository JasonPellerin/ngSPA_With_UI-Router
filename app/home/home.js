'use strict';

angular.module('spaApp.home', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'View1Ctrl'
  });
})

.controller('View1Ctrl', function($scope) {
        $scope.pageClass = 'home';
});