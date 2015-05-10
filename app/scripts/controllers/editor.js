'use strict';

/**
 * @ngdoc function
 * @name urizaFrontendApp.controller:EditorCtrl
 * @description
 * # EditorCtrl
 * Controller of the urizaFrontendApp
 */
angular.module('urizaFrontendApp')
  .controller('EditorCtrl', ['$scope', 'ComponentProcessor',
    function ($scope, ComponentProcessor) {
        ComponentProcessor.getComponent( function(data) {
            $scope.component = data;
        });
  }]);