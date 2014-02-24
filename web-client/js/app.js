var app = angular.module('app', [
  'ngRoute',
  'mainController',
  'jobControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/jobs', {
        templateUrl: 'partials/job-list.html',
        controller: 'JobListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
