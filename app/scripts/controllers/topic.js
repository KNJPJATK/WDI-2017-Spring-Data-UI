'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('TopicCtrl', function ($scope, $routeParams, TopicService) {
    
    $scope.forumId = $routeParams.forumId;
    
    $scope.topics = TopicService.get({
        forumId: $scope.forumId
    });
    
  });
