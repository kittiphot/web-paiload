angular.module('myApp').controller('hotelController', ['$scope', 'hotelFactory', function ($scope, hotelFactory) {
  $scope.hotels = [];
  $scope.getHotels = function() {
    hotelFactory.getHotels().then(function successCallback(res) {
      console.log(res)
      $scope.hotels = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);