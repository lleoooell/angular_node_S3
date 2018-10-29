'use strict';

angular.module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/eleves', {
          template: '<eleves-liste></eleves-liste>'
        }).
        when('/eleves/:eleveId', {
          template: '<eleves-detail></eleves-detail>'
        }).
        otherwise('/eleves');
    }
  ]);
