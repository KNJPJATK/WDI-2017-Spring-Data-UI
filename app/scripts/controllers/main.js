'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function ($scope, ForumService) {
    
    $scope.forums = ForumService.get();
    
    $scope.deleteForum = function(forumId) {
        ForumService.delete(forumId);
    };
    
  });
