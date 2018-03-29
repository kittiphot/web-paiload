angular.module('myApp').controller('aboutController', ['$scope', 'aboutFactory', '$routeParams', function ($scope, aboutFactory, $routeParams) {
  $scope.abouts = [];
  $scope.albums = [];
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.profilePath = ($scope.status == 1 ? 'restaurantProfile' : 'hotelProfile');
  $scope.name = ($scope.status == 1 ? 'restaurant' : 'hotel');
  $scope.id = (typeof $routeParams.id != 'undefined' ? $routeParams.id : 0);
  // restaurantProfile

  $scope.getAbout = function () {
    aboutFactory.getAbout($scope.status, $scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.abouts = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.getHotelAlbums = function () {
    aboutFactory.getHotelAlbums($scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.albums = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.getRestaurantAlbums = function () {
    aboutFactory.getRestaurantAlbums($scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.restaurant = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  // $scope.getHotelImages = function (id) {
  //   aboutFactory.getHotelImages(id).then(function successCallback(res) {
  //     console.log(res.data)
  //     $scope.images = res.data;
  //   }, function errorCallback(err) {
  //     console.log(err)
  //   })
  // }

}]);