'use strict';


angular.module('myApp.postDetail', ['WpServices'])
.controller('PostDetailCtrl',['$http','WpService', '$stateParams', '$sce', function($http, WpService, $stateParams, $sce) {
    var vm = this;
    vm.images={};
    vm.posts = [];
    WpService.getPostDetail($stateParams.id).then(function (data) {
        vm.post = data;
        vm.post.content.rendered = $sce.trustAsHtml(vm.post.content.rendered);
        vm.getMediaUrl(data.featured_media);
    });
    vm.getMediaUrl = function(id) {
        WpService.getMediaData(id).then(function (succ) {
            vm.featuredImage = succ.source_url;
        });
    };

}]);
