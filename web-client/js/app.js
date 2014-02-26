var app = angular.module('app', [
  'ngRoute',
  'pascalprecht.translate',
  'mainControllers',
  'jobControllers'
]);

app.config(['$routeProvider', '$translateProvider',
  function($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/jobs', {
        templateUrl: 'partials/job-list.html',
        controller: 'JobListController'
      })
      .otherwise({
        redirectTo: '/'
      });

    // i18n
    // @see https://github.com/angular-translate/angular-translate
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/localizations/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('zh_TW');
  }]);
