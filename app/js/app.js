'use strict';
var myApp             = angular.module('myApp', [ 'ngRoute', 'myAppControllers', 'myAppServices' ]);
var myAppControllers  = angular.module('myAppControllers', []);
var myAppServices     = angular.module('myAppServices', ['ngResource']);

myApp.config( function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'IndexController',
            resolve: {
                users: function(User){
                    return User.all
                }
            }
        })
    .otherwise({
        redirectTo: '/'
    });
});
