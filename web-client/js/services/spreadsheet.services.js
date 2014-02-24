var spreadsheetServices = angular.module('spreadsheetServices', []);

spreadsheetServices.factory('Spreadsheet', ['$rootScope',
  function($rootScope) {
    return {
      query: function(callback) {
        Tabletop.init({
          key: '0AhPhtlCrkuIFdHVqc3pFbFdBdjJjSm5vUUhTcHRaUkE',
          callback: function(data, tabletop) {

          	console.log(data);

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
