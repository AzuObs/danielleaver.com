(function() {
  "use strict";

  var module = angular.module("homeModule", ["ui.router", "toggleTextDirective"]);


  module.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("danielleaver.home", {
      views: {
        "body-view@": {
          templateUrl: "home-page/home.html",
          controller: "HomeCtrl",
          controllerAs: "homeCtrl"
        }
      },
      url: "/home"
    });
  }]);


  module.controller("HomeCtrl", [function() {
    this.toggleShowPhone = function() {
      $scope.showPhone = !$scope.showPhone;
    };

    this.apps = [{
      name: "Trello Clone",
      live: "http://kanban.danielleaver.com/#/identity",
      source: "https://github.com/AzuObs"
    }, {
      name: "AngularJs Lite",
      live: "",
      source: "https://github.com/AzuObs/angularjs-lite"
    }];

    this.showPhone = false;
    this.phone = "unavailable";
    this.email = "me@danielleaver.com";
  }]);
})();
