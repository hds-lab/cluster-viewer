'use strict';

/* App Module */

var clusterApp = angular.module('clusterApp', [
  'ngRoute',
  'clusterControllers'
]);

clusterApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/clusters', {
        templateUrl: 'partials/cluster-list.html',
        controller: 'ClusterListCtrl'
      }).
      when('/clusters/:clusterId', {
        templateUrl: 'partials/cluster-detail.html',
        controller: 'ClusterDetailCtrl'
      }).
      when('/clusters/:clusterId/:ncluster', {
        templateUrl: 'partials/cluster-messages.html',
        controller: 'ClusterMessagesCtrl'
      }).
      otherwise({
        redirectTo: '/clusters'
      });
  }]);
