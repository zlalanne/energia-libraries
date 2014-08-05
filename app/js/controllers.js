(function() {
	var libraryApp = angular.module('libraryApp');

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

	libraryApp.controller('FilterController', function($scope) {
		
		$scope.categoryFilters = [];
		$scope.boardFilters = [];

		this.toggleCategory = function(data) {
			$scope.categoryFilters = _.xor($scope.categoryFilters, [data]);
		};

		this.toggleBoard = function(data) {
			$scope.boardFilters = _.xor($scope.boardFilters, [data]);
		};

		this.isCategoryActive = function(data) {
			return _.indexOf($scope.categoryFilters, data) !== -1;
		};

		this.isBoardActive = function(data) {
			return _.indexOf($scope.boardFilters, data) !== -1;
		};

	});
})();
