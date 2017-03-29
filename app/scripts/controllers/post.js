'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('PostCtrl', function ($scope, $routeParams, PostService) {
    $scope.forumId = $routeParams.forumId;
    $scope.topicId = $routeParams.topicId;
    
    $scope.posts = PostService.get({
        forumId: $scope.forumId,
        topicId: $scope.topicId
    });
  });
