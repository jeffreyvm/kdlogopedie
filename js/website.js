var kdl = angular.module('kdLogopedie', ['ngRoute', 'ngMap']);
kdl.config(function($routeProvider, $locationProvider){

        $routeProvider.
            when('/home', {title: 'Home', templateUrl: '/partials/home.html'}).
            when('/wie', {templateUrl: '/partials/wie.html'}).
            when('/tarieven', {templateUrl: 'partials/tarieven.html'}).
            when('/contact', {templateUrl: 'partials/contact.html'}).
            when('/werkwijze', {templateUrl: 'partials/werkwijze.html'}).
            when('/aanbod', {templateUrl: 'partials/aanbod.html'}).
            otherwise({redirectTo: '/home'});

    // use the HTML5 History API (pretty urls)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
});

//kdl.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
//    Change page title, based on Route information
    //$rootScope.title = $route.current.title;
//});


kdl.controller('MainController', ['$scope', '$location', function ($scope, $location) {

    $scope.setRoute = function (route) {
        $location.path(route);
    }


    $scope.isSet = function(checkpage) {
        return $location.path() === checkpage;
    };

}]);