'use strict';

/**
 * @ngdoc service
 * @name myAppApp.PostService
 * @description
 * # PostService
 * Service in the myAppApp.
 */
angular.module('myAppApp')
  .service('PostService', function ($resource) {
    
    return $resource('http://localhost:8080/forum/:forumId/topic/:topicId');
    
  });
