(function() {
  "use strict";

  var module = angular.module("toggleTextDirective", []);

  module.directive("toggleText", function() {
    var definitionObject = {
      restrict: "A",
      scope: {
        text: "@toggleText"
      },
      template: "" +
        "<span ng-hide='showTransclude' ng-dblclick='toggleShowTransclude($event)'>" +
        "<span ng-if='!italic'>{{text}}</span>" + "<em ng-if='italic'>{{text}}</em>" + "</span>" +
        "<ng-transclude ng-show='showTransclude' ng-click='toggleShowTransclude($event)'></ng-transclude>",
      transclude: true,
      controller: "ToggleTextCtrl",
      link: function(scope, elements, attrs) {
        if (attrs.italic === "") {
          scope.italic = true;
        }
      }
    };

    return definitionObject;
  });


  module.controller("ToggleTextCtrl", ["$scope", function($scope) {
    $scope.toggleShowTransclude = function(e) {
      $scope.showTransclude = !$scope.showTransclude;
    };

    $scope.showTransclude = true;
  }]);
})();
