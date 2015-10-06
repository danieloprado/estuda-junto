
(function(angular) {
    "use strict";

    angular.module("app", ["ngRoute"])
        .config(["$routeProvider", "$locationProvider", "$httpProvider", "$provide", config])
        .run(["$rootScope", run])
        .controller("defaultCtrl", [function() {}])
        .directive("menuActive", function() {
            return {
                link: function($scope, elem, attr) {
                    $scope.$watch(function() {
                        return location.hash;
                    }, function(hash) {
                        if (elem.find("a").attr("href") == hash) {
                            elem.addClass("active");
                            return;
                        }

                        elem.removeClass("active");
                    });
                }
            };
        });


    function config($routeProvider, $locationProvider, $httpProvider, $provide) {

        $routeProvider
            .when("/dashboard", {
                templateUrl: "view/index.html",
                controller: "defaultCtrl"
            })
            .when("/schools", {
                templateUrl: "view/schools.html",
                controller: "defaultCtrl"
            })
            .when("/school", {
                templateUrl: "view/school.html",
                controller: "defaultCtrl"
            })
            .when("/classroom", {
                templateUrl: "view/classroom.html",
                controller: "defaultCtrl"
            })
            .when("/messages", {
                templateUrl: "view/messages.html",
                controller: "defaultCtrl"
            })
            .when("/messages/create", {
                templateUrl: "view/messages-create.html",
                controller: "defaultCtrl"
            })
            .when("/messages/sent", {
                templateUrl: "view/messages-sent.html",
                controller: "defaultCtrl"
            })
            .when("/", {
                templateUrl: "view/do.html",
                controller: "defaultCtrl"
            })
            .when("/answer", {
                templateUrl: "view/answer.html",
                controller: "defaultCtrl"
            })
            .when("/complete", {
                templateUrl: "view/complete.html",
                controller: "defaultCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }

    function run($rootScope) {
        $rootScope.applicationName = "EstudaJunto";
    }

})(angular);