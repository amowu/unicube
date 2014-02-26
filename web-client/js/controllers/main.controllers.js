var mainController = angular.module('mainControllers', []);

mainController.controller('HomeController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };
  }]);
