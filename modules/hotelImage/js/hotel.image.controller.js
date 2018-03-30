angular.module('myApp').controller('hotelImageController', ['$scope', 'hotelImageFactory', '$routeParams', '$window', function ($scope, hotelImageFactory, $routeParams, $window) {
  $scope.hotelImages = {};
  $scope.hotelId = (typeof $routeParams.hotelId != 'undefined' ? $routeParams.hotelId : 0);
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.albumId = (typeof $routeParams.albumId != 'undefined' ? $routeParams.albumId : 0);
  $scope.name = (typeof $routeParams.name != 'undefined' ? $routeParams.name : 0);

  $scope.getHotelImages = function () {
    hotelImageFactory.getHotelImages($scope.albumId).then(function successCallback(res) {
      console.log(res.data)
      $scope.hotelImages = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.setHotelImagesStatus = function (imageId) {
    let param = {
      id: imageId
    }
    hotelImageFactory.setHotelImagesStatus(param).then(function successCallback(res) {
      console.log(res.data)
      $scope.getHotelImages();
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.setHotelAlbumStatus = function () {
    let param = {
      id: $scope.albumId
    }
    hotelImageFactory.setHotelAlbumStatus(param).then(function successCallback(res) {
      console.log(res.data)
      $window.location.href = '#!/about/' + $scope.status + '/' + $scope.hotelId;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);