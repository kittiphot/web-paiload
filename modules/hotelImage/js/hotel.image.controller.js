angular.module('myApp').controller('hotelImageController', ['$scope', 'hotelImageFactory', '$routeParams', '$window', function ($scope, hotelImageFactory, $routeParams, $window) {
  $scope.hotelImages = {};
  $scope.id = (typeof $routeParams.id != 'undefined' ? $routeParams.id : 0);

  $scope.getHotelImages = function () {
    hotelImageFactory.getHotelImages($scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.hotelImages = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);