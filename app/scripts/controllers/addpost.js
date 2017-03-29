'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AddpostCtrl
 * @description
 * # AddpostCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('AddpostCtrl', function ($scope, $routeParams, $location, PostService) {
    $scope.post = new PostService();
    $scope.post.topic = {
        id: $routeParams.topicId
    };
    
    $scope.formSubmit = function() {
        $scope.post.$save({
            forumId: $routeParams.forumId,
            topicId: $routeParams.topicId
        }).then(function() {
            $location.path('/forum/' + $routeParams.forumId + '/topic/' + $routeParams.topicId);
        });
    };
  });
