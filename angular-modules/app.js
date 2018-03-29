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
    .when('/restaurantProfile/:status/:id', {
      templateUrl: 'modules/restaurantProfile/views/restaurantProfile.html'
    })
    .when('/hotelImage/:id/:name', {
      templateUrl: 'modules/hotelImage/views/hotelImage.html'
    })
    .when('/restaurantImage/:id/:name', {
      templateUrl: 'modules/restaurantImage/views/restaurantImage.html'
    })
    .when('/hotelImageProfile', {
      templateUrl: 'modules/hotelImageProfile/views/hotelImageProfile.html'
    })
    .when('/hotelImageProfile/:id', {
      templateUrl: 'modules/hotelImageProfile/views/hotelImageProfile.html'
    })
    .when('/register', {
      templateUrl: 'modules/register/views/register.html'
    })
    .when('/about/:status/:id', {
      templateUrl: 'modules/about/views/about.html'
    });
});