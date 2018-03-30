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
    .when('/restaurantAlbumProfile/:restaurantId/:status', {
      templateUrl: 'modules/restaurantAlbumProfile/views/restaurantAlbumProfile.html'
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
    .when('/restaurantImageProfile/:albumId/:restaurantId/:status/:name', {
      templateUrl: 'modules/restaurantImageProfile/views/restaurantImageProfile.html'
    })
    .when('/restaurantImageProfile/:albumId/:restaurantId/:status/:name/:imageId', {
      templateUrl: 'modules/restaurantImageProfile/views/restaurantImageProfile.html'
    })
    .when('/restaurantProfile/:status/:id', {
      templateUrl: 'modules/restaurantProfile/views/restaurantProfile.html'
    })
    .when('/restaurantImage/:albumId/:restaurantId/:status/:name', {
      templateUrl: 'modules/restaurantImage/views/restaurantImage.html'
    })
    .when('/register', {
      templateUrl: 'modules/register/views/register.html'
    });
});