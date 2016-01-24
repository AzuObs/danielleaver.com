(function() {
	"use strict";

	var module = angular.module("app", [
		"ui.router", "homeModule"
	]);


	module.config([
		"$stateProvider", "$urlRouterProvider",
		function($stateProvider, $urlRouterProvider) {
			$stateProvider.state("danielleaver", {
				abstract: true,
				url: ""
			});

			$urlRouterProvider.otherwise("/home");
		}
	]);


	module.run(["$rootScope", function($rootScope) {
		$rootScope.$on("$stateChangeError", console.log.bind(console));
	}]);

})();
