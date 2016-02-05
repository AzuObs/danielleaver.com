(function() {
	"use strict";

	var module = angular.module("toggleTextDirective", []);

	module.directive("toggleText", function() {
		var definitionObject = {
			restrict: "A",
			scope: {
				text: "@toggleText"
			},
			template: "<span ng-hide='showTransclude' ng-dblclick='toggleShowTransclude($event)'>{{text}} </span>" +
				"<ng-transclude ng-show='showTransclude' ng-click='toggleShowTransclude($event)'></ng-transclude>",
			transclude: true,
			controller: "toggleTextCtrl",
			link: function(scope) {
				scope.$on("$destroy", function() {
					// cleanup
				});
			}
		};

		return definitionObject;
	});


	module.controller("toggleTextCtrl", ["$scope", function($scope) {
		$scope.toggleShowTransclude = function(e) {
			$scope.showTransclude = !$scope.showTransclude;
		};

		$scope.showTransclude = true;
	}]);
})();
