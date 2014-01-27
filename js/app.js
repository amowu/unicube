var app = angular.module('app', [
  'ngRoute',
  'directives.skrollr',
  'mainController'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
