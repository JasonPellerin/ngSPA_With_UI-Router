'use strict';

angular.module('spaApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {
        $scope.pageClass = 'about';
});