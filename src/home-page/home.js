(function() {
	"use strict";

	var module = angular.module("homeModule", ["ui.router", "toggleTextDirective"]);


	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state("danielleaver.home", {
			views: {
				"body-view@": {
					templateUrl: "home-page/home.html",
					controller: "homeCtrl",
				}
			},
			url: "/home"
		});
	}]);


	module.controller("homeCtrl", ["$scope", function($scope) {
		$scope.toggleShowPhone = function() {
			$scope.showPhone = !$scope.showPhone;
		};

		$scope.showPhone = false;
		$scope.phone = "+44784 5417685";
		$scope.email = "daniel@danielleaver.com";
	}]);
})();
