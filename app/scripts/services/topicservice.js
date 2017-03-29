'use strict';

/**
 * @ngdoc service
 * @name myAppApp.TopicService
 * @description
 * # TopicService
 * Service in the myAppApp.
 */
angular.module('myAppApp')
  .service('TopicService', function ($resource) {
    
    return $resource('http://localhost:8080/forum/:forumId/topic');
    
  });
