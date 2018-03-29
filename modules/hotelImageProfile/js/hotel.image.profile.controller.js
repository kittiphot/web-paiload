angular.module('myApp').controller('hotelImageProfileController', ['$scope', 'hotelImageProfileFactory', '$routeParams', '$window', function ($scope, hotelImageProfileFactory, $routeParams, $window) {
  $scope.hotelImageProfiles = {};
  $scope.albumId = (typeof $routeParams.albumId != 'undefined' ? $routeParams.albumId : 0);
  $scope.albumName = (typeof $routeParams.albumName != 'undefined' ? $routeParams.albumName : 0);
  $scope.imageId = (typeof $routeParams.imageId != 'undefined' ? $routeParams.imageId : 0);

  $scope.getHotelImageProfile = function () {
    if ($scope.imageId != 0) {
      hotelImageProfileFactory.getHotelImageProfile($scope.imageId).then(function successCallback(res) {
        console.log(res.data)
        $scope.hotelImageProfiles.image = res.data.image_url;
        $scope.hotelImageProfiles.old_image = res.data.image_src;
        $scope.hotelImageProfiles.detail = res.data.detail;
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
      image: (typeof $scope.hotelImageProfiles.image != 'undefined' ? $scope.hotelImageProfiles.image : $scope.hotelImageProfiles.old_image),
      old_image: ($scope.imageId == 0 ? 'default_small.png' : $scope.hotelImageProfiles.old_image),
      detail: (typeof $scope.hotelImageProfiles.detail != 'undefined' ? $scope.hotelImageProfiles.detail : '')
    }
    console.log(params);
    hotelImageProfileFactory.setHotelImage(params).then(function successCallback(res) {
      console.log(res.data)
    if ($scope.imageId != 0) {
      $window.location.href = '#!/hotelImage/' + $scope.albumId + '/' + $scope.albumName;
    } else {
      // $window.location.href = '#!/hotel/';
    }
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);