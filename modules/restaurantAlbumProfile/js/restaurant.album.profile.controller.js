angular.module('myApp').controller('restaurantAlbumProfileController', ['$scope', 'restaurantAlbumProfileFactory', '$routeParams', '$window', function ($scope, restaurantAlbumProfileFactory, $routeParams, $window) {
  $scope.restaurantAlbumProfiles = {};
  $scope.restaurantId = (typeof $routeParams.restaurantId != 'undefined' ? $routeParams.restaurantId : 0);
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.albumId = (typeof $routeParams.albumId != 'undefined' ? $routeParams.albumId : 0);

  $scope.getRestaurantAlbumProfile = function () {
    if ($scope.albumId != 0) {
      restaurantAlbumProfileFactory.getRestaurantAlbumProfile($scope.albumId).then(function successCallback(res) {
        console.log(res.data)
        $scope.restaurantAlbumProfiles.name = res.data.name;
        // $scope.hotelAlbumProfiles = res.data;
      }, function errorCallback(err) {
        console.log(err)
      })
    }
  }

  $scope.submit = function () {
    let params = {
      id: $scope.albumId,
      restaurantId: $scope.restaurantId,
      name: $scope.restaurantAlbumProfiles.name
    }
    console.log(params);
    restaurantAlbumProfileFactory.setrestaurantAlbum(params).then(function successCallback(res) {
      console.log(res.data)
      $window.location.href = '#!/about/' + $scope.status + '/' + $scope.restaurantId;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);