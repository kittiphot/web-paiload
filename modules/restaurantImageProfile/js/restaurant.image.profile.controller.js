angular.module('myApp').controller('restaurantImageProfileController', ['$scope', 'restaurantImageProfileFactory', '$routeParams', '$window', function ($scope, restaurantImageProfileFactory, $routeParams, $window) {
  $scope.restaurantImageProfiles = {};
  $scope.restaurantId = (typeof $routeParams.restaurantId != 'undefined' ? $routeParams.restaurantId : 0);
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.albumId = (typeof $routeParams.albumId != 'undefined' ? $routeParams.albumId : 0);
  $scope.name = (typeof $routeParams.name != 'undefined' ? $routeParams.name : 0);
  $scope.imageId = (typeof $routeParams.imageId != 'undefined' ? $routeParams.imageId : 0);

  $scope.getRestaurantImageProfile = function () {
    if ($scope.imageId != 0) {
      restaurantImageProfileFactory.getRestaurantImageProfile($scope.imageId).then(function successCallback(res) {
        console.log(res.data)
        $scope.restaurantImageProfiles.image = res.data.image_url;
        $scope.restaurantImageProfiles.old_image = res.data.image_src;
        $scope.restaurantImageProfiles.detail = res.data.detail;
        // $scope.hotelImageProfiles = res.data;
      }, function errorCallback(err) {
        console.log(err)
      })
    }
  }

  $scope.submit = function () {
    let params = {
      id: $scope.imageId,
      id_album: $scope.albumId,
      image: (typeof $scope.restaurantImageProfiles.image != 'undefined' ? $scope.restaurantImageProfiles.image : $scope.restaurantImageProfiles.old_image),
      old_image: ($scope.imageId == 0 ? 'default_small.png' : $scope.restaurantImageProfiles.old_image),
      detail: (typeof $scope.restaurantImageProfiles.detail != 'undefined' ? $scope.restaurantImageProfiles.detail : '')
    }
    console.log(params);
    restaurantImageProfileFactory.setRestaurantImage(params).then(function successCallback(res) {
      console.log(res.data)
    if ($scope.imageId != 0) {
      $window.location.href = '#!/restaurantImage/' + $scope.albumId + '/' + $scope.restaurantId + '/' + $scope.status + '/' + $scope.name;
    } else {
      $window.location.href = '#!/restaurantImage/' + $scope.albumId + '/' + $scope.restaurantId + '/' + $scope.status + '/' + $scope.name;
    }
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);