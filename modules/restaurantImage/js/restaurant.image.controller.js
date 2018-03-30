angular.module('myApp').controller('RestaurantImageController', ['$scope', 'RestaurantImageFactory', '$routeParams', '$window', function ($scope, RestaurantImageFactory, $routeParams, $window) {
  // $scope.hotelImages = {};
  // $scope.id = (typeof $routeParams.id != 'undefined' ? $routeParams.id : 0);
  // $scope.name = (typeof $routeParams.name != 'undefined' ? $routeParams.name : 0);
  // $scope.albumId = (typeof $routeParams.albumId != 'undefined' ? $routeParams.albumId : 0);

  $scope.restaurantImages = {};
  $scope.restaurantId = (typeof $routeParams.restaurantId != 'undefined' ? $routeParams.restaurantId : 0);
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.albumId = (typeof $routeParams.albumId != 'undefined' ? $routeParams.albumId : 0);
  $scope.name = (typeof $routeParams.name != 'undefined' ? $routeParams.name : 0);

  

  $scope.getRestaurantImages = function () {
    RestaurantImageFactory.getRestaurantImages($scope.albumId).then(function successCallback(res) {
      console.log(res.data)
      $scope.RestaurantImages = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.setRestaurantImagesStatus = function (imageId) {
    let param = {
      id: imageId
    }
    RestaurantImageFactory.setRestaurantImagesStatus(param).then(function successCallback(res) {
      console.log(res.data)
      $scope.getRestaurantImages();
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.setRestaurantAlbumStatus = function () {
    let param = {
      id: $scope.albumId
    }
    RestaurantImageFactory.setRestaurantAlbumStatus(param).then(function successCallback(res) {
      console.log(res.data)
      $window.location.href = '#!/about/' + $scope.status + '/' + $scope.restaurantId;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);