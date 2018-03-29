angular.module('myApp', ['ngRoute', 'ngFileUpload']);
angular.module('myApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'modules/restaurant/views/restaurant.html'
    })
    .when('/hotel', {
      templateUrl: 'modules/hotel/views/hotel.html'
    })
    .when('/hotelProfile', {
      templateUrl: 'modules/hotelProfile/views/hotelProfile.html'
    })
    .when('/hotelProfile/:status/:id', {
      templateUrl: 'modules/hotelProfile/views/hotelProfile.html'
    })
    .when('/hotelImage/:id', {
      templateUrl: 'modules/hotelImage/views/hotelImage.html'
    })
    .when('/register', {
      templateUrl: 'modules/register/views/register.html'
    })
    .when('/about/:status/:id', {
      templateUrl: 'modules/about/views/about.html'
    });
});