'use strict';
angular.module('myApp.blog', ['WpServices'])
.controller('BlogCtrl',['$http','WpService', function($http, WpService) {
    var vm = this;
    vm.images={};
    vm.posts = [];

    vm.getMediaUrl = function(index, id) {
        WpService.getMediaData(id).then(function (succ) {
            vm.images[index] = succ.source_url;
        });
    };
    vm.getPosts = function () {
       var perPage = vm.posts.length + 10;
        WpService.getPosts(perPage).then(function(data) {
            angular.extend(vm.posts, data);
            angular.forEach(vm.posts, function(value, index) {
                vm.getMediaUrl(index, value.featured_media);
            });
        });
    }
    vm.getPosts();
}]);
