var jobControllers = angular.module('jobControllers', ['jobServices']);

jobControllers.controller('JobListController', ['$scope', 'Job',
  function($scope, Job) {
    Job.query(function(data) {
      $scope.jobs = data;
    });
  }]);
