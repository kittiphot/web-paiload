angular.module('myApp').controller('hotelImageProfileController', ['$scope', 'hotelImageProfileFactory', '$routeParams', '$window', function ($scope, hotelImageProfileFactory, $routeParams, $window) {
  $scope.hotelImageProfiles = {};
  $scope.id = (typeof $routeParams.id != 'undefined' ? $routeParams.id : 0);

  $scope.getHotelImageProfile = function () {
    hotelImageProfileFactory.getHotelImageProfile($scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.hotelImageProfiles.old_image = res.data.image;
      $scope.hotelImageProfiles.detail = res.data.detail;
      // $scope.hotelImageProfiles = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.submit = function () {
    let params = {
      id: $scope.id,
      image: (typeof $scope.hotelImageProfiles.image != 'undefined' ? $scope.hotelImageProfiles.image : $scope.hotelImageProfiles.old_image),
      old_image: ($scope.id == 0 ? 'default_small.png' : $scope.hotelImageProfiles.old_image),
      detail: (typeof $scope.hotelImageProfiles.detail != 'undefined' ? $scope.hotelImageProfiles.detail : '')
    }
    console.log(params);
    // hotelImageProfileFactory.setHotelImage(params).then(function successCallback(res) {
    //   console.log(res.data)
      // if ($scope.status != 0 && $scope.id != 0) {
      //   $window.location.href = '#!/about/' + $scope.status + '/' + $scope.id;
      // } else {
      //   $window.location.href = '#!/hotel/';
      // }
    // }, function errorCallback(err) {
    //   console.log(err)
    // })
  }

}]);