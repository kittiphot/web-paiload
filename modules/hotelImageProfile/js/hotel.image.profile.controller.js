angular.module('myApp').controller('hotelProfileController', ['$scope', 'hotelProfileFactory', '$routeParams', '$window', function ($scope, hotelProfileFactory, $routeParams, $window) {
  $scope.hotelProfiles = {};
  $scope.status = (typeof $routeParams.status != 'undefined' ? $routeParams.status : 0);
  $scope.id = (typeof $routeParams.id != 'undefined' ? $routeParams.id : 0);

  $scope.getHotelProfile = function () {
    hotelProfileFactory.getHotelProfile($scope.id).then(function successCallback(res) {
      console.log(res.data)
      $scope.hotelProfiles.name = res.data.name;
      $scope.hotelProfiles.old_image = res.data.image;
      $scope.hotelProfiles.hotel_promotion = res.data.hotel_promotion;
      $scope.hotelProfiles.zone_id = res.data.zone_id;
      $scope.hotelProfiles.detail = res.data.detail;
      $scope.hotelProfiles.extension = res.data.extension;
      $scope.hotelProfiles.address = res.data.address;
      $scope.hotelProfiles.tel = res.data.tel;
      $scope.hotelProfiles.hotel_site = res.data.hotel_site;
      $scope.hotelProfiles.price = res.data.price;
      $scope.hotelProfiles.price_month = res.data.price_month;
      $scope.hotelProfiles.visitor = res.data.visitor;
      // $scope.hotelProfiles = res.data;
    }, function errorCallback(err) {
      console.log(err)
    })
  }

  $scope.submit = function () {
    let params = {
      id: $scope.id,
      name: (typeof $scope.hotelProfiles.name != 'undefined' ? $scope.hotelProfiles.name : ''),
      image: (typeof $scope.hotelProfiles.image != 'undefined' ? $scope.hotelProfiles.image : $scope.hotelProfiles.old_image),
      old_image: ($scope.id == 0 ? 'default_small.png' : $scope.hotelProfiles.old_image),
      hotel_promotion: (typeof $scope.hotelProfiles.hotel_promotion != 'undefined' ? $scope.hotelProfiles.hotel_promotion : ''),
      zone_id: (typeof $scope.hotelProfiles.zone_id != 'undefined' ? $scope.hotelProfiles.zone_id : ''),
      detail: (typeof $scope.hotelProfiles.detail != 'undefined' ? $scope.hotelProfiles.detail : ''),
      extension: (typeof $scope.hotelProfiles.extension != 'undefined' ? $scope.hotelProfiles.extension : ''),
      address: $scope.hotelProfiles.address,
      tel: (typeof $scope.hotelProfiles.tel != 'undefined' ? $scope.hotelProfiles.tel : ''),
      hotel_site: (typeof $scope.hotelProfiles.hotel_site != 'undefined' ? $scope.hotelProfiles.hotel_site : ''),
      price: (typeof $scope.hotelProfiles.price != 'undefined' ? $scope.hotelProfiles.price : ''),
      price_month: (typeof $scope.hotelProfiles.price_month != 'undefined' ? $scope.hotelProfiles.price_month : ''),
      visitor: (typeof $scope.hotelProfiles.visitor != 'undefined' ? $scope.hotelProfiles.visitor : 0)
    }
    console.log(params);
    hotelProfileFactory.setHotel(params).then(function successCallback(res) {
      console.log(res.data)
      if ($scope.status != 0 && $scope.id != 0) {
        $window.location.href = '#!/about/' + $scope.status + '/' + $scope.id;
      } else {
        $window.location.href = '#!/hotel/';
      }
    }, function errorCallback(err) {
      console.log(err)
    })
  }

}]);