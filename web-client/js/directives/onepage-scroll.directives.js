angular.module('directives.onepageScroll', [])
  .directive('onepagescroll', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $(element).onepage_scroll({
          sectionContainer: "section",
          easing: "ease",
          animationTime: 1000,
          pagination: true,
          updateURL: false,
          beforeMove: function(index) {},
          afterMove: function(index) {},
          loop: false,
          keyboard: true,
          responsiveFallback: false
        });
      }
    };
  });
