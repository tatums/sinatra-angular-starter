'use strict';

adminBudgetsControllers.controller('IndexController', [ '$scope', 'budgets',function($scope, budgets){
    $scope.budgets = budgets
    $scope.title = "blah"
}]);
