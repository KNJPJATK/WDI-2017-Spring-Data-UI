'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/addForum', {
        templateUrl: 'views/addforum.html',
        controller: 'AddforumCtrl',
        controllerAs: 'addForum'
      })
      .when('/forum/:forumId', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl',
        controllerAs: 'Topic'
      })
      .when('/forum/:forumId/addTopic', {
        templateUrl: 'views/addtopic.html',
        controller: 'AddtopicCtrl',
        controllerAs: 'addTopic'
      })
      .when('/forum/:forumId/topic/:topicId', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .when('/forum/:forumId/topic/:topicId/addPost', {
        templateUrl: 'views/addpost.html',
        controller: 'AddpostCtrl',
        controllerAs: 'AddPost'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
