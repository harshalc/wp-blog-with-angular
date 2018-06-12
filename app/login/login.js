'use strict';
angular.module('myApp.login', ['WpServices'])
.controller('LoginCtrl',['$scope','$http','WpService', function($scope,$http, WpService) {
    var vm = this;
    WpService.getPost($scope.query).then(function(data) {
        console.log(data);
        $scope.posts = data;
    });
    $scope.login = function () {
        console.log("Login In ");
        WpService.getPost($scope.query).then(function(data) {
            console.log(data);
            $scope.userData = data.items;
        });
    }

}]);
