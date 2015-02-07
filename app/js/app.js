'use strict';
var adminBudgetsApp = angular.module('adminBudgetsApp', [ 'ngRoute', 'adminBudgetsControllers', 'adminBudgetsServices' ]);
var adminBudgetsControllers = angular.module('adminBudgetsControllers', []);
var adminBudgetsServices = angular.module('adminBudgetsServices', ['ngResource']);

adminBudgetsApp.config( function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'IndexController',
            resolve: {
                budgets: function(Budget){
                    return Budget.all
                }
            }
        })
    .otherwise({
        redirectTo: '/'
    });
});
