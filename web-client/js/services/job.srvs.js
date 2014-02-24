var jobServices = angular.module('jobServices', ['ngResource']);

jobServices.factory('Job', ['$resource',
  function($resource) {
    return $resource('https://spreadsheets.google.com/feeds/list/0AhPhtlCrkuIFdHVqc3pFbFdBdjJjSm5vUUhTcHRaUkE/od6/public/values?alt=json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);