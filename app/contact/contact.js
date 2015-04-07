'use strict';

angular.module('spaApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function($scope) {
        $scope.pageClass = 'contact';
});