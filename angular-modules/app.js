angular.module('myApp', ['ngRoute', 'ngFileUpload']);
angular.module('myApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'modules/restaurant/views/restaurant.html'
    })
    .when('/hotel', {
      templateUrl: 'modules/hotel/views/hotel.html'
    })
    .when('/about/:status/:id', {
      templateUrl: 'modules/about/views/about.html'
    })
    .when('/hotelProfile', {
      templateUrl: 'modules/hotelProfile/views/hotelProfile.html'
    })
    .when('/hotelProfile/:status/:id', {
      templateUrl: 'modules/hotelProfile/views/hotelProfile.html'
    })
    .when('/hotelAlbumProfile/:hotelId/:status', {
      templateUrl: 'modules/hotelAlbumProfile/views/hotelAlbumProfile.html'
    })
    .when('/hotelAlbumProfile/:hotelId/:status/:albumId', {
      templateUrl: 'modules/hotelAlbumProfile/views/hotelAlbumProfile.html'
    })
    .when('/hotelImage/:albumId/:hotelId/:status/:name', {
      templateUrl: 'modules/hotelImage/views/hotelImage.html'
    })
    .when('/hotelImageProfile/:albumId/:hotelId/:status/:albumName', {
      templateUrl: 'modules/hotelImageProfile/views/hotelImageProfile.html'
    })
    .when('/hotelImageProfile/:albumId/:hotelId/:status/:albumName/:imageId', {
      templateUrl: 'modules/hotelImageProfile/views/hotelImageProfile.html'
    })
    .when('/restaurantImage/:id/:name', {
      templateUrl: 'modules/restaurantImage/views/restaurantImage.html'
    })
    .when('/register', {
      templateUrl: 'modules/register/views/register.html'
    });
});