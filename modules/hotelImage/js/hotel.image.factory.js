angular.module('myApp').factory('hotelImageFactory', ['$http', function ($http) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var hotelImageFactory = {};

  hotelImageFactory.getHotelImages = function (id) {
    return $http.get(api + '/hotel_albums/' + id);
  }

  hotelImageFactory.setHotelImagesStatus = function (param) {
    return $http.post(api + '/hotelImage/delete', param);
  }

  hotelImageFactory.setHotelAlbumStatus = function (param) {
    return $http.post(api + '/hotelAlbum/delete', param);
  }

  return hotelImageFactory;
}]);
