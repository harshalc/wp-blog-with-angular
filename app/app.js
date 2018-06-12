'use strict';

var app=angular.module('myApp', [
  'ui.router',
  'myApp.blog',
  'myApp.postDetail',
]);

app.config([ '$locationProvider','$urlRouterProvider','$stateProvider', function( $locationProvider,$urlRouterProvider, $stateProvider) {
 $locationProvider.hashPrefix('!');
 $stateProvider.state('blog', {
     url: '/blog',
     templateUrl: 'posts/blog.html',
     controller: 'BlogCtrl',
     controllerAs: 'vm'
   });
 $stateProvider.state('post', {
    url: '/post/:id?',
    templateUrl: 'posts/post-detail.html',
    controller: 'PostDetailCtrl',
    controllerAs: 'vm'
   });
  $urlRouterProvider.otherwise('/blog');
}]);

angular.module('WpServices',[]).service('WpService',['$http',function($http) {
var service={
    getPosts: function(query) {
      return   $http.get("https://blushandbow.com/wp-json/wp/v2/posts?per_page=" + query).then(resp => resp.data);
    },
    getPostDetail: function(id) {
      return   $http.get("https://blushandbow.com/wp-json/wp/v2/posts/" + id).then(resp => resp.data);
    },
    getMediaData: function(mediaID){
        return   $http.get("https://blushandbow.com/wp-json/wp/v2/media/" + mediaID).then(resp => resp.data);
    }
}
return service;
}]);
