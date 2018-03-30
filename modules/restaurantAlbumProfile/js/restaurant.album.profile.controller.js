angular.module('myApp').controller('hotelAlbumProfileController', ['$scope', 'hotelAlbumProfileFactory', '$routeParams', '$window', function ($scope, hotelAlbumProfileFactory, $routeParams, $window) {
  $scope.hotelAlbumProfiles = {};
  $scope.hotelId = (typeof $routeParams.hotelId != 'undefined' ? $routeParams.hotelId : 0);
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.albumId = (typeof $routeParams.albumId != 'undefined' ? $routeParams.albumId : 0);
  // $scope.albumName = (typeof $routeParams.albumName != 'undefined' ? $routeParams.albumName : 0);
  // $scope.imageId = (typeof $routeParams.imageId != 'undefined' ? $routeParams.imageId : 0);

  $scope.getHotelAlbumProfile = function () {
    if ($scope.albumId != 0) {
      hotelAlbumProfileFactory.getHotelAlbumProfile($scope.albumId).then(function successCallback(res) {
        console.log(res.data)
        $scope.hotelAlbumProfiles.name = res.data.name;
        // $scope.hotelAlbumProfiles = res.data;
      }, function errorCallback(err) {
        console.log(err)
      })
    }
  }

  $scope.submit = function () {
    // let params = {
    //   id: $scope.imageId,
    //   id_album: $scope.albumId,
    //   image: (typeof $scope.hotelAlbumProfiles.image != 'undefined' ? $scope.hotelAlbumProfiles.image : $scope.hotelAlbumProfiles.old_image),
    //   old_image: ($scope.imageId == 0 ? 'default_small.png' : $scope.hotelAlbumProfiles.old_image),
    //   detail: (typeof $scope.hotelAlbumProfiles.detail != 'undefined' ? $scope.hotelAlbumProfiles.detail : '')
    // }
    // console.log(params);
    // hotelAlbumProfileFactory.setHotelImage(params).then(function successCallback(res) {
    //   console.log(res.data)
      $window.location.href = '#!/about/' + $scope.status + '/' + $scope.hotelId;
    // }, function errorCallback(err) {
    //   console.log(err)
    // })
  }

}]);