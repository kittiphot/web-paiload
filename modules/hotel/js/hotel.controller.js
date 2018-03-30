angular.module('myApp').controller('hotelController', ['$scope', 'hotelFactory', function ($scope, hotelFactory) {
  $scope.hotels = [];

  $scope.getHotels = function () {
    hotelFactory.getHotels().then(function successCallback(res) {
      console.log(res)
      $scope.hotels = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.getHotelBySearch = function () {
    let param = {
      search : (typeof $scope.hotels.search != 'undefined' ? $scope.hotels.search : '0'),
    }
    console.log(param);
    hotelFactory.getHotelBySearch(param).then(function successCallback(res) {
      console.log(res)
      $scope.hotels = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);