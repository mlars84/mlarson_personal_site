const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'MainController as mc'
    })
    .when('/portfolio', {
      templateUrl: 'views/portfolio.html',
      controller: 'PortfolioController as pc'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController as ac'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController as cc'
    });
}]);
