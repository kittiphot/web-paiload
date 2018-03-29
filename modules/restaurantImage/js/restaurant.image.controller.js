angular.module('myApp').controller('RestaurantImageController', ['$scope', 'RestaurantImageFactory', '$routeParams', '$window', function ($scope, hotelImageFactory, $routeParams, $window) {
  $scope.hotelImages = {};
  $scope.id = (typeof $routeParams.id != 'undefined' ? $routeParams.id : 0);
  $scope.name = (typeof $routeParams.name != 'undefined' ? $routeParams.name : 0);

  $scope.getRestaurantImages = function () {
    hotelImageFactory.getRestaurantImages($scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.RestaurantImages = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.deleteImage = function (imageId) {
    console.log(imageId)
  }

}]);