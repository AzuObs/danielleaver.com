(function() {
	"use strict";

	var module = angular.module("app", [
		"ui.router", 
		"homeModule"
	]);


	module.config([
		"$stateProvider", "$urlRouterProvider",
		function($stateProvider, $urlRouterProvider) {
			$stateProvider.state("danielleaver", {
				abstract: true,
				views: {
					"footer-view@": {
						templateUrl: "common/views/footer/footer-view.html"
					}
				},
				url: ""
			});

			$urlRouterProvider.otherwise("/home");
		}
	]);


	module.run(["$rootScope", function($rootScope) {
		$rootScope.$on("$stateChangeError", console.log.bind(console));
	}]);

})();
