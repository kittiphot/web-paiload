angular.module('myApp').factory('hotelAlbumProfileFactory', ['$http', function ($http) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var hotelAlbumProfileFactory = {};

  hotelAlbumProfileFactory.getHotelAlbumProfile = function (param) {
    // return $http.post(api + '/hotelAlbum/' + param);
    return $http.get(api + '/hotelAlbum/133');
  }

  hotelAlbumProfileFactory.setHotelAlbum = function (params) {
    let status = (params.id == 0 ? 'create' : 'edit');
    return $http.post(api + '/hotelAlbum/' + status, params);
  }

  return hotelAlbumProfileFactory;
}]);
