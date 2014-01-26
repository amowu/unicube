var app = angular.module('app', [
  'ngRoute',
  'directives.skrollr',
  'mainController'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/test-skrollr.html',
        controller: 'IndexController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
