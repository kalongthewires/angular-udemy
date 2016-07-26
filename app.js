/* globals $scope, angular */

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './pages/main.html',
			controller: 'mainController'
		})
		.when('/second', {
			templateUrl: './pages/second.html',
			controller: 'secondController'
		})
		.when('/second/:deck', {
			templateUrl: './pages/second.html',
			controller: 'secondController'
		});
});

myApp.controller('mainController', ['$scope', function ($scope) {
	'use strict';

	$scope.card = {
		value: '',
		meaning: ''
	};

	$scope.addFlashcard = function (card) {
		console.log(card);
		$scope.card.value = '';
		$scope.card.meaning = '';
	};
}]);

myApp.controller('secondController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	'use strict';

	$scope.deck = {
		name: 'Test Deck',
		description: 'This is a deck!'
	};
}]);

myApp.directive('deck', function () {
	return {
		restrict: 'E',
		templateUrl: './directives/deck.html',
		replace: true,
		scope: {
			'deck': '='
		}
	};
});
