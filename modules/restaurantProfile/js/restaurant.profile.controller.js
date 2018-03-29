angular.module('myApp').controller('RestaurantsProfileController', ['$scope', 'RestaurantsProfileFactory', '$routeParams', '$window', function ($scope, hotelProfileFactory, $routeParams, $window) {
  $scope.RestaurantProfiles = {};
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.id = (typeof $routeParams.id != 'undefined' ? $routeParams.id : 0);

  $scope.getRestaurantsProfile = function () {
    hotelProfileFactory.getRestaurantsProfile($scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.RestaurantProfiles.name = res.data.name;
      $scope.RestaurantProfiles.mobile = res.data.mobile;
      $scope.RestaurantProfiles.phone = res.data.phone;
      $scope.RestaurantProfiles.old_image = res.data.image;
      $scope.RestaurantProfiles.address = res.data.address;
      $scope.RestaurantProfiles.latitude = res.data.latitude;
      $scope.RestaurantProfiles.longitude = res.data.longitude;
      $scope.RestaurantProfiles.open_date = res.data.open_date;
      $scope.RestaurantProfiles.open_time = res.data.open_time;
      $scope.RestaurantProfiles.close_time = res.data.close_time;
      $scope.RestaurantProfiles.detail = res.data.detail;
      // $scope.hotelProfiles = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.submit = function () {
    let params = {
      id: $scope.id,
      name: (typeof $scope.RestaurantProfiles.name != 'undefined' ? $scope.RestaurantProfiles.name : ''),
      image: (typeof $scope.RestaurantProfiles.image != 'undefined' ? $scope.RestaurantProfiles.image : $scope.hotelProfiles.old_image),
      old_image: ($scope.id == 0 ? 'default_small.png' : $scope.RestaurantProfiles.old_image),
      mobile: (typeof $scope.RestaurantProfiles.mobile != 'undefined' ? $scope.RestaurantProfiles.mobile : ''),
      phone: (typeof $scope.RestaurantProfiles.phone != 'undefined' ? $scope.RestaurantProfiles.phone : ''),
      address: (typeof $scope.RestaurantProfiles.address != 'undefined' ? $scope.RestaurantProfiles.address : ''),
      latitude: (typeof $scope.RestaurantProfiles.latitude != 'undefined' ? $scope.RestaurantProfiles.latitude : ''),
      longitude: (typeof $scope.RestaurantProfiles.longitude != 'undefined' ? $scope.RestaurantProfiles.longitude : ''),
      open_date: (typeof $scope.RestaurantProfiles.open_date != 'undefined' ? $scope.RestaurantProfiles.open_date : ''),
      open_time: (typeof $scope.RestaurantProfiles.open_time != 'undefined' ? $scope.RestaurantProfiles.open_time : ''),
      close_time: (typeof $scope.RestaurantProfiles.close_time != 'undefined' ? $scope.RestaurantProfiles.close_time : ''),
      detail: (typeof $scope.RestaurantProfiles.detail != 'undefined' ? $scope.RestaurantProfiles.detail : ''),
    }
    console.log(params);
    hotelProfileFactory.setHotel(params).then(function successCallback(res) {
      console.log(res.data)
      if ($scope.status != 0 && $scope.id != 0) {
        $window.location.href = '#!/about/' + $scope.status + '/' + $scope.id;
      } else {
        $window.location.href = '#!/restaurant/';
      }
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);