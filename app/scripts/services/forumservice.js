'use strict';

/**
 * @ngdoc service
 * @name myAppApp.ForumService
 * @description
 * # ForumService
 * Service in the myAppApp.
 */
angular.module('myAppApp')
  .service('ForumService', function ($resource) {
    
    return $resource('http://localhost:8080/forum/');
    
  });
