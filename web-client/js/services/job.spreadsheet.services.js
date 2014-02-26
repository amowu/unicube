var jobServices = angular.module('jobServices', []);

jobServices.factory('Job', ['$rootScope',
  function($rootScope) {
    return {
      query: function(callback) {
        Tabletop.init({
          key: '0AhPhtlCrkuIFdHVqc3pFbFdBdjJjSm5vUUhTcHRaUkE',
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          },
          simpleSheet: true,
          parseNumbers: true
        });
      }
    };
  }]);
