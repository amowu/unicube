var jobControllers = angular.module('jobControllers', ['spreadsheetServices']);

jobControllers.controller('JobListCtrl', ['$scope', 'Spreadsheet',
  function($scope, Spreadsheet) {
    Spreadsheet.query(function(data) {
      $scope.jobs = data;
    });
  }]);
