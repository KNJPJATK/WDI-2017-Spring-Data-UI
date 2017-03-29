'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AddforumCtrl
 * @description
 * # AddforumCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('AddforumCtrl', function ($scope, $location, ForumService) {
    $scope.forum = new ForumService();
    
    $scope.formSubmit = function() {
        $scope.forum.$save().then(function(data) {
            $location.path('#/forum/' + data.id);
        });
    };
    
  });
