'use strict';

myAppControllers.controller('IndexController', [ '$scope', 'users', function($scope, users){
    $scope.users = users
    $scope.title = "blah"
}]);
