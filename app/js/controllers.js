'use strict';

/* Controllers */

var clusterControllers = angular.module('clusterControllers', []);

clusterControllers.controller('ClusterListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('clusters/clusters.json').success(function(data) {
      $scope.clusters = data;
    });

    $scope.orderProp = 'n_clusters';
  }]);

clusterControllers.controller('ClusterDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('clusters/' + $routeParams.clusterId + '.json').success(function(data) {
      $scope.cluster = data;
    });
  }]);

clusterControllers.controller('ClusterMessagesCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('clusters/' + $routeParams.clusterId + '.json').success(function(data) {
      $scope.ncluster = data.clusters[$routeParams.ncluster]
    });
  }]);