angular.module('myApp').controller('aboutController', ['$scope', 'aboutFactory', '$routeParams', '$window', function ($scope, aboutFactory, $routeParams, $window) {
  $scope.abouts = [];
  $scope.albums = [];
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
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

  $scope.setHotelStatus = function () {
    let param = {
      id: $scope.id
    }
    console.log(param);
    aboutFactory.setHotelStatus(param).then(function successCallback(res) {
      console.log(res.data)
      $window.location.href = '#!/hotel';
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);