(function() {
  "use strict";

  var module = angular.module("app", [
    "ui.router",
    "homeModule"
  ]);


  module.config([
    "$stateProvider", "$urlRouterProvider", "$compileProvider",
    function($stateProvider, $urlRouterProvider, $compileProvider) {
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
      $compileProvider.debugInfoEnabled(false);
    }
  ]);


  module.run(["$rootScope", function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  }]);

})();
