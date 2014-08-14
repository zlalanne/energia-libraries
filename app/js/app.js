(function() {
  var libraryApp = angular.module('libraryApp', ['ngRoute', 'angular-lodash']);

  libraryApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'app/html/library-list.html'
        }).
        when('/library/:libraryId', {
          templateUrl: 'app/html/library-detail.html'
        }).
        otherwise({
          templateUrl: 'app/html/library-list.html'
        });
    }]);
})();
