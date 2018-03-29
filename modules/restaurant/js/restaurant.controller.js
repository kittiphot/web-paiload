angular.module('myApp').controller('restaurantController', ['$scope', 'restaurantFactory', function ($scope, restaurantFactory) {
  $scope.restaurants = [];
  $scope.getRestaurants = function() {
    restaurantFactory.getRestaurants().then(function successCallback(res) {
      console.log(res)
      $scope.restaurants = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);