// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html'
        })

        // nested list with custom controller
        .state('home.nest', {
            url: '/nest',
            templateUrl: 'home/home-nest.html',
            controller: function ($scope) {
                $scope.birds = ['Falcon', 'Vulture', 'Eagle', 'Condor'];
            }
        })

        // nested list with just some random string data
        .state('home.fire', {
            url: '/fire',
            templateUrl: 'home/home-fire.html'
        })


        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': {templateUrl: 'about/about.html'},

                // the child views will be defined here (absolutely named)
                'columnOne@about': {template: 'Look I am a column!'},

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'about/table-data.html',
                    controller: 'verController'
                }
            }

        })

        // CONTACT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.html',
            controller: 'formController'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/contact/profile)
        .state('contact.profile', {
            url: '/profile',
            templateUrl: 'contact/profile.html'
        })

        // url will be /contact/interests
        .state('contact.interests', {
            url: '/interests',
            templateUrl: 'contact/interests.html'
        })

        // url will be /contact/payment
        .state('contact.payment', {
            url: '/payment',
            templateUrl: 'contact/payment.html'
        });

});
// let's define the ver controller that we call up in the about state
routerApp.controller('verController', function($scope) {

    $scope.message = 'What\'s Included';

    $scope.tools = [
        {
            name: 'angular-animate.min.js',
            ver: '1.2.16'
        },
        {
            name: 'angular-ui-router.min.js',
            ver: '0.2.8'
        },
        {
            name: 'angular.js',
            ver: '1.2.13'
        }
    ];

})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('Hack the Planet!!!');
    };

});