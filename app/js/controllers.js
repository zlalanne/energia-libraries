(function() {
	var libraryApp = angular.module('libraryApp', []);

	libraryApp.controller('CategoryController', function($scope, $http) {
		$http.get("/app/data/categories.json").
		  success(function(data) {
			  $scope.categories = data.categories;
		  });
	});

	libraryApp.controller('BoardController', function($scope, $http) {
		$http.get("/app/data/boards.json").
		  success(function(data) {
		  	$scope.boards = data.boards;
		  });
	});

	libraryApp.controller('LibraryController', function($scope, $http) {
		$http.get("/app/data/libraries.json").
		  success(function(data) {
		  	$scope.libraries = data.libraries;
		  });
	});
})();
