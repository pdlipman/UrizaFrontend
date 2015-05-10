'use strict';

/**
 * @ngdoc function
 * @name urizaAngularApp.services:PostProcessor
 * @description
 * # PostProcessor
 */
angular.module('urizaFrontendApp')
      .factory('ComponentProcessor', function($http) {
          return {
              getComponent: function(callback) {
                  var postUrl = 'http://localhost:8080/editor';
                  $http.get(postUrl).success(callback);
              }
          };
      })
;