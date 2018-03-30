angular.module('myApp').factory('RestaurantImageFactory', ['$http', function ($http) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var RestaurantImageFactory = {};

  RestaurantImageFactory.getRestaurantImages = function (id) {
    return $http.get(api + '/restaurant_profile_albums/' + id);
  }

  RestaurantImageFactory.setHotelImagesStatus = function (param) {
    return $http.post(api + '/hotelImage/delete', param);
  }

  RestaurantImageFactory.setHotelAlbumStatus = function (param) {
    return $http.post(api + '/hotelAlbum/delete', param);
  }

  return RestaurantImageFactory;
}]);
