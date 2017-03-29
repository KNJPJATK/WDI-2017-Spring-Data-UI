'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AddtopicCtrl
 * @description
 * # AddtopicCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('AddtopicCtrl', function ($scope, $routeParams, $location, TopicService) {
    $scope.topic = new TopicService();
    $scope.topic.forum = {
        id: $routeParams.forumId
    };
    
    $scope.formSubmit = function() {
        $scope.topic.$save({
            forumId: $routeParams.forumId
        }).then(function() {
            $location.path('/forum/' + $routeParams.forumId);
        });
    };
  });
